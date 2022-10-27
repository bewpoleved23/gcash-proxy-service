Cake.create('nav','#nav',{
    root:'.nav-container',
    toggle:{
        activeNav:{
            ns:`nav`, cls:'active', basis:'data-name',
        },
    },
    handlers:{
        async destroy(){
            await this.reset();
        },
        isConnected(){
            this.toggler('activeNav',this.$router.name);
        },
        logout(){
            this.$router.logout();
        }
    },
    subscribe:{}
});