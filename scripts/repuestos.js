


class Repuestos{



    stockRepuestos = [
        

    
        {
            
            "modelo":307,
            "motor":"rhy",
            "codigo":00001,
            "tipo":"kit de distribucion",
            "descripcion":"Kit de distribucion origuinal con bomba de agua",
            "precio":7800 
       },
        
         {  
            "modelo":307,
            "motor":"ew10",
            "codigo":00002,
            "tipo":"kit de distribucion",
            "descripcion":"Kit de distribucion origuinal con bomba de agua",
            "precio":11800
        }

    

    

      
    ];



    constructor(){
        this.stockRepuestos=stockRepuestos;

    }





    listarStock(){
    return this.stockRepuestos;





}



}




let datos = document.getElementById('code-00001_Descripccion1');
datos.innerHTML="hola!!!!!!!!!!!!!";



























}