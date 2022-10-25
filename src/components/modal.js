Cake.create('modal','#modal',{
    root:'#app',
    handlers:{
        async destroy(){
            await this.reset();
        },
        isConnected(e){
            let {emit:{has_footer}} = e;
            let $this = this;
            this.data.modal = new bootstrap.Modal(this.container.modal, {});
            this.data.modal.show();
            this.container.modal.addEventListener('hidden.bs.modal', event => {
                $this.fire.destroy();
            });
              
            
            has_footer != undefined && (this.$scope.set('has_footer',has_footer));

        }
    },
    subscribe:{
        toolbar:{
            add(){
                let form = 'add-form';
                this.render({
                    data:{
                        form,
                        display:'Add Record'
                    }
                }).then(()=>{
                    this.fire('openForm',{form});
                })
            }
        },
        radio:{
            editRecord(e){
                let form = 'edit-form';
                this.render({
                    data:{
                        form,
                        display:'Edit Record'
                    }
                }).then(()=>{
                    this.fire('openForm',{form,data:e});
                })
            },
            viewRecord(e){
                this.render({
                    data:{
                        form:"",
                        display:"View",
                    },
                    emit:{has_footer:false}
                }).then(()=>{
                    if(this.$router.name == 'project'){
                        e && e.id && this.fire('openProjectView',e.id);
                        
                    } else if (this.$router.name == 'user'){
                        
                        e && e.id && this.fire('openUserView',e.id);
                    }
                })
            }
            
        },
        sidebar:{
            edit_profile(conf){
                console.log(conf);
                let form = 'profile-form';
                this.render({
                    data:{
                        form,
                        display:'Profile'
                    }
                }).then(()=>{
                    this.fire('openForm',{form,data:conf, formControls:[
                        {name:'first_name',placeholder:'first name',tag:'input',display:'First Name',type:'text'},
                        {name:'last_name',placeholder:'last name',tag:'input',display:'Last Name',type:'text'},
                        {name:'username',placeholder:'username',tag:'input',display:'Username',type:'text'},
                        {name:'password',placeholder:'password',tag:'input',display:'Password',type:'text'},
                    ]});
                })
            }
        },
        uploadRecord:{
            components:['radio','view_project'],
            handler(e){
                console.log(e);
                let form = 'upload-form';
                this.render({
                    data:{
                        form,
                        display:'Upload Images'
                    }
                }).then(()=>{
                    this.fire('openForm',{form,id:e.id});
                })
            }
        },

        destroy:{
            components:['view_project'],
            handler(e){
                return this.data.modal.hide();
                // return this.fire.destroy(null, false);
            }
        }

    }
});