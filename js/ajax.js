
const llamarApi = ()=> {
$.get('https://covid-api.mmediagroup.fr/v1/cases', function(response) { 
        console.log(response['Argentina'])
        $(".covid-counter").text(response['Argentina'].All.confirmed)
    }) 
}

const mostrarCovid = ()=> {$(".btnActualizar").on('click', llamarApi(), ()=> {
    $(".covid-counter").fadeIn(400, "swing")
})}

mostrarCovid()
    
   
 


