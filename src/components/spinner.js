Cake.create('spinner','#spinner',{
    root:'#app',
    handlers:{
        async destroy(){
            await this.reset();
        },
    },
    subscribe:{
        spin:{
            components:['login','api','table','view_user','view_project','tabs','login','page_controller','radio','sidebar','form','chart','summary'],
            handler(e){
                console.trace();
                return this.render({data:{type:e || "transparent"}});
            }
        },
        spinout:{
            components:['login','api','view_user','view_project','tabs','login','page_controller','radio','sidebar','form','chart','summary'],
            handler(e){
                return this.fire.destroy();
            }
        },
    },
});