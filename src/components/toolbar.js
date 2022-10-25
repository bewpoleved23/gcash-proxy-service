Cake.create('toolbar','#toolbar',{
    root:'.toolbar-container',
    handlers:{
        async destroy(){
            await this.reset();
        },
        async isConnected(){

            let toolbars = [
                {name:'sync',display:'Sync'},
            ];


            this.$scope.set('toolbars',toolbars);
        },

        click(e){
            let target = e.target;
            let action = target.dataset.name;
            this.fire(action);
        }
    },
    subscribe:{}
});