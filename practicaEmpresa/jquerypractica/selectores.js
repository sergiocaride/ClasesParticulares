/*------USAR DE 1 EN 1---------

$(document).ready(function () {
    $("#show").click(function(){
        $("p").slideToggle(5000);
    });
    $("#hide").click(function(){
        $("p").slideUp(5000);
    });
    $("input").focus(function(){
        $(this).css("background-color", "#FF00BF");
    })
    $("input").blur(function(){
        $(this).css("background-color", "#AEB404");
    })
});
-----USAR VARIOS EVENTOS--------
$(document).ready(function () {
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color","#FF00BF");
        },
        mouseleave: function(){
            $(this).css("background-color","#08088A");
        },
        click: function(){
            $(this).css("background-color","#AB00BF");
        },
    })
});

//ANIMAR
$(document).ready(function () {
    $("#show").click(function(){
        $("p").animate({
            right:'250px',
            opacity: '0.5',
            height:'toggle',
            width:'150px'
        });
    });
    $("#hide").click(function(){
        $("p").slideUp(5000);
    });
    $("input").focus(function(){
        $(this).css("background-color", "#FF00BF");
    })
    $("input").blur(function(){
        $(this).css("background-color", "#AEB404");
    })
});

//ANIMAR VARIOS
$(document).ready(function () {
    $("#show").click(function(){
        var parrafo = $("p");
        parrafo.animate({right:'250px',opacity: '0.5',height:'250px',width:'150px'});
        parrafo.animate({right:'500px',opacity: '0.1',height:'350px',width:'30px'})
    });
    $("#hide").click(function(){
        $("p").slideUp(5000);
    });
    $("input").focus(function(){
        $(this).css("background-color", "#FF00BF");
    })
    $("input").blur(function(){
        $(this).css("background-color", "#AEB404");
    })
});*/

//ANIMAR Vy parar
$(document).ready(function () {
    $("#iniciar").click(function(){
        var parrafo = $("p");
        parrafo.animate({right:'250px',opacity: '0.5',height:'250px',width:'150px'},5000);
        parrafo.animate({right:'500px',opacity: '0.1',height:'350px',width:'30px'},5000)
    });
    $("#parar").click(function(){
        $("p").stop();
    });
    $("input").focus(function(){
        $(this).css("background-color", "#FF00BF");
    })
    $("input").blur(function(){
        $(this).css("background-color", "#AEB404");
    })
});