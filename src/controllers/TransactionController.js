

exports.columns = function(){
    let cols = [
        {
            display:'Description',
            name:'description',
        },
        {
            display:'Date',
            name:'date',
        }
    ];
    return Promise.resolve(cols);
}

exports.paginate = function(e){
    console.log(e);
    let data = [
        {description:'adasdsad', date:'2022-10-26'},
        {description:'adasdsad', date:'2022-10-26'},
        {description:'adasdsad', date:'2022-10-26'},
        {description:'adasdsad', date:'2022-10-26'},
        {description:'adasdsad', date:'2022-10-26'},
    ];
    let size = 5;
    let count = data.length;
    let last_page = Math.ceil(count / size);

    return Promise.resolve({
        data,
        last_page,
        page:1
    })
}