const router = new Cake.Router({
    // '/project':{
    //     name:'project',
    //     display:'Project',
    //     components:['page_controller','nav','sidebar','toolbar','tabs','filter','table'],
    //     // auth:true,
    //     auth:[
    //         'admin',
    //         'superadmin',
    //         'csr',
    //         'layout',
    //         'printer',
    //         'heater',
    //         'sewer',
    //         'deliver',
    //     ],
    // },

    '/user':{
        name:'user',
        display:'User',
        components:['toolbar','tabs','table'],
        // auth:true,
        auth:true,
    },
    '/transaction':{
        name:'transaction',
        display:'Transaction',
        components:['nav','toolbar','table'],
        auth:true,
    },
    '/merchant':{
        name:'merchant',
        display:'Merchant',
        components:['nav','toolbar','table'],
        auth:true,
    },
    '/':{
        name:'login',
        display:'Login',
        components:['login'],

        auth:false,
    },

    '404':function(){
        return '/login';
    },
},{
    auth:{
        '401':'login',
        verify:['api','verify'],
        valid:{
            superadmin:'user',
            admin:'transaction',

        }
    },
    components:{

        // tabs:{
        //     rerender:['/',]
        // },
        // header:{
        //     rerender:['/',]
        // }
    }
});