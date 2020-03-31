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
            $(location).attr('href','/08 SearchResults.html');
        }
    });
}
if ($(window).width() < 1366) {
    $(".menuContainer button").click(function(e) {
            $(location).attr('href','/08 SearchResults.html');
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


    // restição de items de acordo com o preço
    $(".price").change(function () {

        var min = parseInt($('[name="price"]').val());
        var max = (min + 10);

        if (min == 50) {
            var max = 10000;
        };

        $('article').hide().filter(function () {
            return $(this).data('price') >= min || $(this).data('price') <= max;
        }).show();

    }




    );

    //validação de formulários

    $("#name").on('keyup', function () {
        if ($("#name").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    }
    );
    $("#email").on('keyup', function () {
        if ($("#email").is(':not(:contains("@"))')) {
            $(".warning2").show();
        }
        else {
            $(".warning2").hide();
        }
    }
    );
    $("#message").on('keyup', function () {
        if ($("#message").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    }
    );

    $("#lname").on('keyup', function () {
        if ($("#lname").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    });

    $("#Address1").on('keyup', function () {
        if ($("#Adress1").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    });
    $("#Address2").on('keyup', function () {

        if ($("#Adress2").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }

    });
    $("#city").on('keyup', function () {

        if ($("#city").val() == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    });
    $("#pcode").on('keyup', function () {

        if ($("#pcode").val() == "" == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
        }
    });

    $("#phoneNumber").on('keyup', function () {
        if ($("#phoneNumber").val() == "" == "") {
            $(".warning").show();
        }
        else {
            $(".warning").hide();
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