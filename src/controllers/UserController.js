
let url = window.API_URL;

exports.login = function(username, password){
    return axios(`${API_URL}/api/user/login`,{
        params:{username, password}
    }).then(res=>{
        if(res.data.status){
            return res.data.data;
        } else {
            throw new Error(res.data.message);
        }
    });
};


exports.getOne = function(query){
    return axios(`${API_URL}/api/user/one`,{
        params:query
    }).then(res=>{
        if(res.data.status){
            return res.data.data;
        } else {
            throw new Error(res.data.message);
        }
    });
};

exports.checkUsername = function(query){
    return axios(`${API_URL}/api/user/check-username`,{
        params:query
    }).then(res=>{
        if(res.data.status){
            return res.data.data;
        } else {
            throw new Error(res.data.message);
        }
    });
};

