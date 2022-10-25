Cake.create('alert',null,{
    handlers:{},
    subscribe:{
        error:{
            components:['api','view_project','login','radio','sidebar','form'],
            handler(e){
                return swal.fire({
                    title:'Error',
                    icon:'error',
                    text:e || 'something went wrong'
                });
            }
        },
        success:{
            components:['api','view_project','login','radio','sidebar','form'],
            handler(e){
                return swal.fire({
                    title:'Success',
                    icon:'success',
                    text:e || 'success'
                });
            }
        },
        question:{
            components:['api','view_project','login','radio','sidebar','form'],
            handler(e){
                return swal.fire({
                    title:'Question',
                    icon:'question',
                    text:e || 'Are you sure?',
                    showCancelButton:true,
                });
            }
        },
        warning:{
            components:['api','login','radio','sidebar','form'],
            handler(e){
                return swal.fire({
                    title:'Warning',
                    icon:'warning',
                    text:e || 'warning alert'
                });
            }
        }
    }
});