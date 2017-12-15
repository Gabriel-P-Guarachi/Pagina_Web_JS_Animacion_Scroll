$(document).ready(function() {
    $('.banner').css({ "height": $(window).height() + "px" });

    var flag = false;
    var scroll;
    // Cunado se haga scroll lo detecta la web
    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if (scroll > 90) {
            if (!flag) {
                $('.logo').css({ "margin-top": "-5px", "width": "50px", "height": "50px" });
                $("header").css({ "background-color": "#fdd069", "color": "#212121" });
                // Para el mapa
                $('.content').css({ "margin-top": "-5px", "width": "50px", "height": "50px" });
                flag = true;
            }
        } else {
            if (flag) {
                $('.logo').css({ "margin-top": "150px", "width": "220px", "height": "auto" });
                $("header").css({ "background-color": "transparent", "color": "#212121" });
                // Para el mapa
                $('.content').css({ "margin-top": "150px", "width": "92px", "height": "92px" });
                flag = false;
            }
        }
    });


});
