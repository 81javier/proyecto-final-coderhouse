



   const stockRepuestos = [
        

    
      {"Distribucion-rhy" : {
            
            "modelo":"Peugeot 307",
            "motor":"rhy",
            "codigo":"00001",
            "tipo":"kit de distribucion",
            "descripcion":"Kit de distribucion origuinal con bomba de agua",
            "precio":"$7800"
       }},
        
         {"Distribucion-ew10":{  
            "modelo":"Peugeot 307",
            "motor":"ew10",
            "codigo":"00002",
            "tipo":"kit de distribucion",
            "descripcion":"Kit de distribucion origuinal con bomba de agua",
            "precio":"$11800",
            "imagen": src="media/imggaleria/distribucion_408.jpg"
        }}

    

    

      
    ];

    





  


let data1 = document.getElementById('code-00001_Descripcion1');
let data2 = document.getElementById('code-00001_Descripcion2');
let data3 = document.getElementById('code-00001_precio');
let data4 = document.getElementById('code-00001_img');



data1.innerHTML=stockRepuestos[1]["Distribucion-ew10"].descripcion;
data2.innerHTML=stockRepuestos[1]["Distribucion-ew10"].modelo;
data3.innerHTML=stockRepuestos[1]["Distribucion-ew10"].precio;
data4.innerHTML=stockRepuestos[1]["Distribucion-ew10"].imagen;
































