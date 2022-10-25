
Cake.create('radio', '#radio', {
    root:'.radio-container',
    router(){
        this.data.menu = this.$router.name;
    },
    handlers:{
        destroy(){
            return this.reset();
        },
        async isConnected(e){


            let radios = [
                {ctx:'danger',name:'delete',display:'Delete'},
                {ctx:'info',name:'add',display:'Add'}
            ];

            await this.$scope.set('radios', radios);
        },
        renderRadio(obj){
            let {root} = obj;

            if (root.children.namedItem('radio-container')){

                this.fire.destroy();
            } else {
                this.fire.destroy().then(()=>{

                    this.render({
                        root,
                    });
                });
            }
        },
        edit(e){
            this.fire('editRecord', e);
        },
        'delete':function(e){
            this.fire('deleteRecord',e);
        },
        upload:function(e){
            console.log(e);
            this.fire('uploadRecord',e);
        },
        view(e){
            this.fire('viewRecord',e);
            console.log('view');
        },

        async toggle(e){
            try {
                

            } catch(err){
                this.fire('error',err.message);
            };

        },

        async updateStatus(e){
            try {
                

            } catch(err){
                this.fire('error',err.message);
            };
        }

    },
    subscribe:{
        table:{
            tableRowClick(obj){
                this.fire.renderRadio(obj);
            },
            radioClicked(e){

                this.fire[e.action](e);
            },
            destroy(e){
                return this.fire.destroy();
            }
        },
    },
});