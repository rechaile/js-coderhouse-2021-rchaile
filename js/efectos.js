const hola1 = ()=> {
    console.log ("Hola mundo")
}

const fadeLogo = ()=> {
    $("#logoMedicheck").fadeIn(600, "swing");
}

const slideParrafo = ()=> {
    $("#parrafoIntro").fadeIn(300, "swing").animate({left: '2vh'}, "slow")
}

const slideFoto = ()=> {
    $("#foto-farma").fadeIn(300, "swing").animate({right: '2vh'}, "slow")
}

const slideForms = ()=> {
    $("#form-incompatibilidad").slideDown("slow");
    $("#form-interaccion").slideDown("slow")
}

export {
    hola1,
    fadeLogo,
    slideParrafo,
    slideFoto,
    slideForms
}