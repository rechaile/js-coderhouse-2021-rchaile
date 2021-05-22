
//Animaciones

//Fade de Logo intro
const fadeLogo = ()=> {
    $("#logoMedicheck").fadeIn(600, "swing");
}

//Slide Intro
const slideParrafo = ()=> {
    if ($(window).width() > 768) {
    $("#parrafoIntro").fadeIn(600, "swing").animate({left: '2vh'}, "slow")
    } else { 
        $("#parrafoIntro").fadeIn(600, "swing")
    }
}

const slideFoto = ()=> {
    if ($(window).width() > 768) {
    $("#foto-farma").fadeIn(600, "swing").animate({right: '2vh'}, "slow") 
    } else {
        $("#foto-farma").fadeIn(600, "swing")
    }
}

//Fade de Formularios
var formPosition = $(".forms").offset().top;
var windowHeight = $(window).height();

const slideForms = ()=> {
    if ($(window).scrollTop() >= (formPosition - windowHeight)) {
            $(".forms").delay(1000).animate({opacity: 1});
        }
    }

//Abrir y cerrar menu
const abrirMenu = ()=> {
    $("#menu-button").on('click', ()=> {
        $("#menu-bar").toggleClass("menu-hide").slideToggle(400).css('display', 'flex')
    })
}
    
export {
    fadeLogo,
    slideParrafo,
    slideFoto,
    slideForms,
    abrirMenu
}