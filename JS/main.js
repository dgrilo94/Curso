jQuery(document).ready(function () {

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.prev',
        nextArrow: '.next',



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });



    //botão de login 

    $(".loginbtn").click(
        function () {
            $('.container').hide()
            $('.container2').hide()
            $('.basket').hide();
            $('.container').toggle();
            $('.container2').toggle();
            $('.login').toggle();
            $('div.basketbtn').removeClass('pressed');
            $('div.loginbtn').toggleClass('pressed');

            if ($('.login').is(':hidden')) {
                $('.container').hide();
            }

            if ($('.login').is(':visible')) {
                $('.search input').hide();
            }
            else {
                $('.search input').removeAttr("style");
            }
        },
    );

    //botão do cart

    $(".basketbtn").click(
        function () {
            $('.container').hide()
            $('.container2').hide()
            $('.login').hide();
            $('.container').toggle();
            $('.container2').toggle();
            $('.basket').toggle();
            $('div.loginbtn').removeClass('pressed');
            $('div.basketbtn').toggleClass('pressed');
            if ($('.basket').is(':hidden')) {
                $('.container').hide();
            }

            if ($('.basket').is(':visible')) {
                $('.search input').hide();
            }
            else {
                $('.search input').removeAttr("style");
            }
        },
    );

    // botão de fechar login e basket em mobile e tablet


    $(".closeLogin").click(
        function () {
            $('.container').hide()
            $('.login').hide();
            $('.basket').hide();
            $('div.loginbtn').removeClass('pressed');
            $('div.basketbtn').removeClass('pressed');
            if ($('.basket').is(':hidden') || $('.login').is(':hidden')) {
                $('.container').hide();
            }
            if ($('.basket').is(':visible') || $('.login').is(':visible')) {
                $('.search input').hide();
            }
            else {
                $('.search input').removeAttr("style");
            }
        },
    );



    // click fora do div para fechar o div



    if ($(window).width() >= 1366) {
        $(".container").click(
            function () {
                $('.container').hide()
                $('.container2').hide()
                $('.login').hide();
                $('.basket').hide();
                $('div.loginbtn').removeClass('pressed');
                $('div.basketbtn').removeClass('pressed');
                if ($('.basket').is(':visible') || $('.login').is(':visible')) {
                    $('.search input').hide();
                }
                else {
                    $('.search input').removeAttr("style");
                }
            }).children().children().click(function (e) {
                return false;
            });
    }

    // X para fechar o menu hamburger ou search
    $(".close").click(
        function () {
            $('.containerMenu').hide();
            $('.hamMenu').hide();
            $('.searchMenu').hide();

        },

    );

    //Abrir hamburger menu
    $(".Menu").click(
        function () {
            $('.containerMenu').show();
            $('.hamMenu').show();

        },

    );

    // Abrir search menu

    $(".search").click(
        function () {
            if ($(window).width() <= 1366) {
                $('.containerMenu').show();
                $('.searchMenu').show();
                $('.login').hide();
                $(".basket").hide();
                $('.container').hide();
                $('div.loginbtn').removeClass('pressed');
                $('div.basketbtn').removeClass('pressed');
            }
        },

    );

    //pesquisar ao clicar no enter no search input
if ($(window).width() >= 1366) {
    $(".search input").on('keypress',function(e) {
        if(e.which == 13) {
            $(location).attr('href','08 SearchResults.html');
        }
    });
}
if ($(window).width() < 1366) {
    $(".menuContainer button").click(function(e) {
            $(location).attr('href','08 SearchResults.html');
    });
}
    //impedir o scrolling quandos os menus estao abertos
    $('.containerMenu').on('scroll touchmove mousewheel', function (e) {

        e.preventDefault();

    }, false);

    $('.container').on('scroll touchmove mousewheel', function (e) {

        e.preventDefault();

    }, false);



//botao de checkout

$(".total button").click('keypress',function(e) {
        $(location).attr('href','05 Shopping cart.html');
});




//hero a mudar na main page




    $('.hero .wrapper div:gt(0)').hide();


    setInterval(function () {
        $('.hero .wrapper > div:first')
            .fadeOut()
            .next()
            .fadeIn()
            .end()
            .appendTo('.hero .wrapper');
    }, 4000);



    //validação de formulários

    $("#name").on('focusout', function () {
        if ($("#name").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    }
    );

    $("#email").on('focusout', function () {
        function isEmail(emailV){
            if(emailV != null && emailV != undefined){
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailV);    
            }
            else{
                return false;
            }
        }

        if (isEmail($("#email").val())) {
            $(".warning2").hide();
        }
        else {
            $(".warning2").show();
        }
    });

    $("#message").on('focusout', function () {
        if ($("#message").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    }
    );

    $("#lname").on('focusout', function () {
        if ($("#lname").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    });

    $("#Address1").on('focusout', function () {
        if ($("#Adress1").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    });
    $("#Address2").on('focusout', function () {

        if ($("#Adress2").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }

    });
    $("#city").on('focusout', function () {

        if ($("#city").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    });
    $("#pcode").on('focusout', function () {
        if (($("#pcode").val().length == 8) && ($("#pcode").val().indexOf("-") !== -1)) {
            $(".warning4").hide();
        }
        else {
            $(".warning4").show();
        }
    });

    $("#phoneNumber").on('focusout', function () {
        if ($("#phoneNumber").val().length != 9) {
            $(".warning3").show();
        }
        else {
            $(".warning3").hide();
        }
    });


    // cart

    //remover produto

    $(".remove").on("click", function () {
        $(this).parents(".productCart").remove();
    });


    //fazer o pedido

    $(".orderNow").click(function () {

        $(".cartForm").show();
        $(".payment").show();
        $('html, body').animate({
            scrollTop: $(".cartForm").offset().top
        }, 1000);

    });


});