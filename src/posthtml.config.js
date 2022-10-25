// require('dotenv').config();

// const conf = require('../../config');



module.exports = {
    plugins:{
        "posthtml-include":{
            "root":__dirname
        },
        // "posthtml-expressions":{
        //     locals:{
        //         BASE_URL:conf.BASE_URL,
        //         SOCKET_URL:conf.SOCKET_URL,
        //     },
        //     delimiters:["((","))"],
        // }
    }
}