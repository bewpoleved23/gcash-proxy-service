// import ProjectControllers from '../contollers/ProjectControllers';
// import UserController from '../contollers/UserController';
Cake.create('tabs','#tabs',{
    root:'.tabs-container',
    toggle:{
        activeTab:{
            ns:'tab',cls:'active',sel:'data-name'
        }
    },
    handlers:{
        async destroy(){
            await this.reset();
        },
        async isConnected(e){ 
            // console.log('tab',this.data.tab);
            await this.fire.getProjects();
        },
        async getProjects(){
            let tabs = [];
            await this.fire('spin','tabs');
            if(['project'].includes(this.$router.name)){
                tabs = await ProjectControllers.branches(this.$router.auth());
            } else if(['user'].includes(this.$router.name)){
                tabs = await UserController.branches(this.$router.auth());
            };

            console.log(tabs);

            if(tabs.length){
                if(this.data.tab){
                    let find = tabs.find(item=>item.name==this.data.tab);
                    if(find){
                        
                    } else {
                        this.data.tab = tabs[0].name;
                    };
                } else {
                    this.data.tab = tabs[0].name;
                };

                // console.log(tabs,this.data.tab);

                await this.$scope.set('tabs',tabs);
                await this.toggler('activeTab',this.data.tab);
                await this.fire('resetStatusFilter',this.data.tab);
                await this.fire('spinout','tabs');
            }
        },
        async click(e){
            let target = e.target;
            let a = target.closest('a');
            let name = a.dataset.name;
            if(name){
                this.toggler('activeTab',name);
                this.data.tab = name;
                this.fire('resetStatusFilter',this.data.tab)
                await  this.fire('sync');
            };
        }
    },
    subscribe:{
        table:{
            getCurrentTab(){
                return this.data.tab;
            }
        },
        page_controller:{
            async refreshTabs(){
                await this.fire.getProjects();
            }
        },
        form:{
            currentBranch(e){
                return this.data.tab;
            }
        }
    }
});