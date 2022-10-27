// require('dotenv').config();

// const conf = require('../../config');



module.exports = {
    plugins:{
        "posthtml-include":{
            "root":__dirname
        },
        "posthtml-expressions":{
            locals:{
                API_URL:'http://localhost:9324',

            },
            delimiters:["((","))"],
        }
    }
}