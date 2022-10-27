import TransactionController from '../controllers/TransactionController';



Cake.create('table','#table',{
    root:'.table-container',
    data(){
        this.settings = {
            persistence:{
                // sort:true,
                // filter:true,
                // columns:true,
            },
            // headerVisible:false,
            columnDefaults:{
                tooltip:true,  
            },       //show tool tips on cells
            headerFilterLiveFilterDelay:100, //wait 600ms from last keystroke before triggering filter
            index:'_id', //set the index of the data;
            // addRowPos:'top',
            reactiveData:true,
            // clipboard:true,
            // clipboardPasteAction:"replace",
            printAsHtml:true,
            // printStyled: true,
            printRowRange:"selected",
            persistenceID:"breddas",

            pagination:true, //enable pagination
            paginationMode:"remote",
            paginationSize:10,
            paginationSizeSelector:[5, 10, 25, 50],

            filterMode:"remote",
                    //load row data from array
            layout:"fitDataFill",      //fit columns to width of table
            responsiveLayout:"collapse",

            addRowPos:"top",          //when adding a new row, add it to the top of the table
            movableColumns:true,      //allow column order to be changed
            resizableRows:true,       //allow row order to be changed
            // initialSort:[             //set the initial sort order of the data
            //     {column:"_id", dir:"des"},
            // ],
        };
    },
    utils(){
        this.dateTimeFormat = function(cell, formatterParams, onRendered){
            try{
                if(cell.getValue().length < 15){
                    return cell.getValue();
                } else {
                    return moment(cell.getValue()).format('YYYY-MM-DD');;
                };
            } catch(err){
                return cell.getValue();
            }
        }
    },
    handlers:{
        async destroy(){
            await this.reset();
        },
        async isConnected(){
            try {
                let name = this.$router.name;
                let query = this.$router.state;
    
                let colDef = await TransactionController.columns();
                this.fire.renderTable({colDef});
    
            } catch(err){
                this.fire('error',err.message);
            };
        },
        async renderTable({colDef}){
            let columns = colDef.map(item=>{
                let conf = {title:item.display, field:item.name};
                if(item.name.includes('_at') || item.name.includes('date')){
                    conf.formatter = this.utils.dateTimeFormat;
                };
                return conf;
            });


            let $this = this;

            let config = Object.assign(this.data.settings,{
                columns,

                rowFormatter:function(row){
                    row.getElement().setAttribute('data-id', row.getData().id);
                    row.getElement().setAttribute('data-_id', row.getData()._id);
                    row.getElement().setAttribute('data-_rev', row.getData()._rev);
                    row.getElement().setAttribute('data-isEditable', row.getData()._isEditable || true);
                },
                ajaxURL:"http://www.getmydata.com/now",
                ajaxResponse:(url, params, response)=>{

                    // console.log(response);

                    if(response.status){
                        return response.data;
                    } else {
                        return {
                            last_page:1,
                            page:params.page,
                            data:[],
                        }; 
                    }

            

                    
                },
                ajaxRequestFunc:(url, config, params)=>{

                    

                    if([  'transaction',].includes($this.$router.name)){
                        return TransactionController.paginate(params).catch(err=>{
                            return {status:0};
                        });
                    }else if([  'user',].includes($this.$router.name)){
                        
                        return $this.fire('getCurrentTab').then((tab)=>{
                            return UserController.paginate(tab);
                        });
                    } else {
                        return $this.fire('getData',{params});
                    };
                },
            });

            this.data.table = new Tabulator("#dtable", config);
            let event = "rowTap";
            if(this.utils.isDesktop()){
                console.log('desktop')
                event = "rowClick";
            };
            this.data.table && this.data.table.on(event, function(e, _row){
                let data = _row.getData();
                let row = _row.getElement();
                if(e.target.closest('[name=radio-container]')){
                    let btn = e.target.closest('button');

                    this.fire('radioClicked', {
                        id:row.dataset.id,
                        _id:row.dataset._id,
                        _rev:row.dataset._rev,
                        action:btn.dataset.name,
                    });
                } else {
                    this.fire('tableRowClick',{
                        data,root:row,
                    });
                };
            }.bind(this));

            
            
            // this.data.table.setData();
        }
    },
    subscribe:{
        sync:{
            components:['tabs','filter'],
            handler(e){
                this.data.table.setData();
            }
        },


    }
});