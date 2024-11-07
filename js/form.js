document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let barbero = document.querySelector('#barbero').value;
    let servicio = document.querySelector('#servicio').value;
    let servicio1 = document.querySelector('#servicio1').value;
    let servicio2 = document.querySelector('#servicio2').value;

    let url = "https://api.whatsapp.com/send?phone=15712641705&text=*_POPEYES_*%0A*Inventario*%0A%0A*Sugerencias*%0A" + cliente + "%0A*Fecha de Inventario*%0A" + fecha + "%0A*Hora*%0A" + hora + "%0A*Manager*%0A" + barbero + "%0A*BATTER BUTTERMILK*%0A" + servicio + "%0A*BATTER CHICK MIX*%0A" + servicio1 + "%0A*BREADED CHICKEN*%0A" + servicio2 ;
    window.open(url);

});
