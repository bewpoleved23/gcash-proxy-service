Cake.create('api',null,{
    type:'model',
    handlers:{
        verify(token){
            console.log(token);
            return Promise.resolve({status:1});
        }
    },
    subscribe:{},
});