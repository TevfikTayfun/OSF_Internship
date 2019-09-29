var checkForBagCount = function () {
    if (localStorage.getItem("bag") === null) {
        localStorage.setItem("bag", 0);
    } else {
        $(".bag-normal sup").html(localStorage.getItem("bag"));

    }
}




var checkForWhishCount = function () {
    if (localStorage.getItem("wish") === null) {
        localStorage.setItem("wish", 0);
    } else {
        $(".heart-normal sup").html(localStorage.getItem("wish"));
    }
}

var loadMore = function (key) {
    $.ajax({
        url: "./js/newCards.json", success: function (response) {
            if (response[key] !== "fail" && response[key] !== undefined) {
                loadMoreSuccess(response, key);
            } else {
                alert("Cannot load more.");
            }

        }, failure: function () {
            alert("Cannot load more.");
        }
    });
}

var loadMoreSuccess = function (response, key) {
    var fourCardHtml = "";
    response[key].forEach(function (elem, index) {
        var cardHtml = '<div class="col-xl-3 col-sm-12">' +
            '<div class="card card-stats buy-card-hover">' +
            '<img src="' + elem.img + '" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<p class="card-text">' + elem.cardText + '</p>' +
            '<div class="price-tag">$ ' + elem.price + '</div>' +
            '</div>' +

            '<div class="buy-card-hover-gradient">' +
            '<div class="row">' +
            '<div class="col-5 offset-1">' +
            '<div class="buy-from-card">' +
            '<img src="./img/Plus_(24x24).png" alt="">' +
            '</div>' +
            '</div>' +
            '<div class="col-5">' +
            '<div class="like-from-card">' +
            '<img src="./img/Heart_(24x24).png" alt="">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        fourCardHtml = fourCardHtml + cardHtml;
        if (index === (response[key].length - 1)) {
            $(".to-add-cards").append(fourCardHtml);
            $(".osf-cards").addClass("pb-4");
        }
    });
}


// total sum price

var totalSumPrice = function () {
    $(".product-bold-price").html().split("$");
    parseFloat($(".product-bold-price").html().split("$")[1]);
    var priceHolder = $(".product-bold-price").html().split("$")[1].split(",")
    priceHolder = parseInt(priceHolder[0] + priceHolder[1]);

    $(".product-bold-price2").html().split("$");
    parseFloat($(".product-bold-price2").html().split("$")[1]);
    var priceHolder2 = $(".product-bold-price2").html().split("$")[1].split(",")
    priceHolder2 = parseInt(priceHolder2[0] + priceHolder2[1]);

    $(".totalSum").html(priceHolder + priceHolder2 + "$");
}


$(document).ready(function () {


    //scroll

    $(".scroll-to-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
    });


    //shipping-prices

    var path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    if (path === "sc.html") {
        totalSumPrice();
    }

    $(".local-shipment").on("click", function () {
        $(".product-bold-price").html().split("$");
        parseFloat($(".product-bold-price").html().split("$")[1]);
        var priceHolder = $(".product-bold-price").html().split("$")[1].split(",")
        priceHolder = parseInt(priceHolder[0] + priceHolder[1]);

        $(".product-bold-price2").html().split("$");
        parseFloat($(".product-bold-price2").html().split("$")[1]);
        var priceHolder2 = $(".product-bold-price2").html().split("$")[1].split(",")
        priceHolder2 = parseInt(priceHolder2[0] + priceHolder2[1]);

        var totalSum = priceHolder + priceHolder2 + 5;
        $(".totalshipsum").html(totalSum + "$");
    })

    $(".international").on("click", function () {
        $(".product-bold-price").html().split("$");
        parseFloat($(".product-bold-price").html().split("$")[1]);
        var priceHolder = $(".product-bold-price").html().split("$")[1].split(",")
        priceHolder = parseInt(priceHolder[0] + priceHolder[1]);

        $(".product-bold-price2").html().split("$");
        parseFloat($(".product-bold-price2").html().split("$")[1]);
        var priceHolder2 = $(".product-bold-price2").html().split("$")[1].split(",")
        priceHolder2 = parseInt(priceHolder2[0] + priceHolder2[1]);

        var totalSum = priceHolder + priceHolder2 + 60;
        $(".totalshipsum").html(totalSum + "$");
    })

    $(".free-pick").on("click", function () {
        $(".product-bold-price").html().split("$");
        parseFloat($(".product-bold-price").html().split("$")[1]);
        var priceHolder = $(".product-bold-price").html().split("$")[1].split(",")
        priceHolder = parseInt(priceHolder[0] + priceHolder[1]);

        $(".product-bold-price2").html().split("$");
        parseFloat($(".product-bold-price2").html().split("$")[1]);
        var priceHolder2 = $(".product-bold-price2").html().split("$")[1].split(",")
        priceHolder2 = parseInt(priceHolder2[0] + priceHolder2[1]);

        var totalSum = priceHolder + priceHolder2;
        $(".totalshipsum").html(totalSum + "$");
    })

    $(".flat-rate").on("click", function () {
        $(".product-bold-price").html().split("$");
        parseFloat($(".product-bold-price").html().split("$")[1]);
        var priceHolder = $(".product-bold-price").html().split("$")[1].split(",")
        priceHolder = parseInt(priceHolder[0] + priceHolder[1]);

        $(".product-bold-price2").html().split("$");
        parseFloat($(".product-bold-price2").html().split("$")[1]);
        var priceHolder2 = $(".product-bold-price2").html().split("$")[1].split(",")
        priceHolder2 = parseInt(priceHolder2[0] + priceHolder2[1]);

        var totalSum = priceHolder + priceHolder2 + 10;
        $(".totalshipsum").html(totalSum + "$");
    })


    //get-keys from json

    var loadCounter = 0;
    var loadKeys = {
        "1": "firstCall",
        "2": "secondCall",
        "3": "thirdCall"
    }

    checkForBagCount();
    checkForWhishCount();
    if (localStorage.getItem("cookie") == null) {
        localStorage.setItem("cookie", "none");
    }

    var dateTime = new Date();



    //login

    $(".loginAccept").on("click", function () {
        var str = document.getElementById("myInput").value;
        if (str.match(/[a-z]/g) && str.match(
            /[A-Z]/g) && str.match(
                /[0-9]/g) && str.match(
                    /[^a-zA-Z\d]/g) && str.length >= 6)
            console.log("Correct password type");

        else
            alert("Enter the correct password type");
    });

    //read more

    var readMore = document.getElementsByClassName("read-more");
    var moreText = document.getElementsByClassName("more");


    $(".read-more").on("click", function () {
        $(".read-more").css("display", "none");
        $(".more").css("display", "inline");
    })

    //main-image-changer


    $(".mini-pdp-image").on("mouseover", function () {
        $(".model-image-main")[0].attributes[0].nodeValue = $(this)[0].attributes[0].nodeValue;
    })


    //sum calculator

    $(".scPlus").on("click", function () {
        var value = parseInt($(".scHowMany").html());
        $(".scHowMany").html(value + 1);
        var newValue = 2195 * (value + 1);
        newValue = newValue.toFixed(2);
        $(".product-bold-price").html("$" + newValue);
        totalSumPrice();

    })



    $(".scMinus").on("click", function () {
        var value = parseInt($(".scHowMany").html());
        if (value > 0) {
            $(".scHowMany").html(value - 1);
            var newValue = 2195 * (value - 1);
            newValue = newValue.toFixed(2);
            $(".product-bold-price").html("$" + newValue);
            totalSumPrice();

        }
    })

    $(".scPlus2").on("click", function () {
        var value = parseInt($(".scHowMany2").html());
        $(".scHowMany2").html(value + 1);
        var newValue = 1249 * (value + 1);
        newValue = newValue.toFixed(2);
        $(".product-bold-price2").html("$" + newValue);
        totalSumPrice();

    })

    $(".scMinus2").on("click", function () {
        var value = parseInt($(".scHowMany2").html());
        if (value > 0) {
            $(".scHowMany2").html(value - 1);
            var newValue = 1249 * (value - 1);
            newValue = newValue.toFixed(2);
            $(".product-bold-price2").html("$" + newValue);
            totalSumPrice();

        }
    })


    //x button


    $(".product-x-button1").on("click", function () {
        $(".removeClass1").remove();
    })

    $(".product-x-button2").on("click", function () {
        $(".removeClass2").remove();
    })

    $(".pdpPlus").on("click", function () {
        var value = parseInt($(".pdpHowMany").html());
        $(".pdpHowMany").html(value + 1);
    })

    $(".pdpMinus").on("click", function () {
        var value = parseInt($(".pdpHowMany").html());
        if (value > 0) {
            $(".pdpHowMany").html(value - 1);
        }
    })


    //add-to-cart

    $(".add-to-cart").on("click", function () {
        var value = parseInt($(".pdpHowMany").html());
        localStorage.setItem("bag", parseInt(localStorage.getItem("bag")) + value);
        $(".bag-normal sup").html(localStorage.getItem("bag"));
        $(".pdpHowMany").html(0);
    })


        //nav dropdown-media

    var clickCountServices = 1;
    var clickCountSale = 1;
    var clickCountProduct = 1;

    $(".media-services").on("click", function () {
        if (clickCountServices % 2 === 0) {
            $(".mega-item-product").css("display", "none");
            $(".mega-item-sale").css("display", "none");
            $(".mega-item-media3").css("display", "none");
            $(".mega-item-media2").css("display", "none");
            $(".up-nav-p").css("display", "none");
            $(".down-nav-p").css("display", "block");
            $(".up-nav-s").css("display", "none");
            $(".down-nav-s").css("display", "block");
            $(".up-nav-sa").css("display", "none");
            $(".down-nav-sa").css("display", "block");
            if (clickCountProduct % 2 === 0) {
                clickCountProduct = clickCountProduct + 1;

            }
            if (clickCountSale % 2 === 0) {
                clickCountSale = clickCountSale + 1;
            }
            clickCountServices = clickCountServices + 1;

        }
        else {
            $(".mega-item-product").css("display", "flex");
            $(".mega-item-sale").css("display", "flex");
            $(".up-nav-s").css("display", "block");
            $(".down-nav-s").css("display", "none");
            clickCountServices = clickCountServices + 1;
        }
    })

    $(".mega-item-product").on("click", function () {
        if (clickCountProduct % 2 === 0) {
            $(".mega-item-media2").css("display", "none");
            $(".up-nav-p").css("display", "none");
            $(".down-nav-p").css("display", "block");
            clickCountProduct = clickCountProduct + 1;

        }
        else {
            $(".mega-item-media2").css("display", "block");
            $(".up-nav-p").css("display", "block");
            $(".down-nav-p").css("display", "none");
            clickCountProduct = clickCountProduct + 1;
        }
        
    })

    $(".mega-item-sale").on("click", function () {
        if (clickCountSale % 2 === 0) {
            $(".mega-item-media3").css("display", "none");
            $(".up-nav-sa").css("display", "none");
            $(".down-nav-sa").css("display", "block");
            clickCountSale = clickCountSale + 1;

        }
        else {
            $(".mega-item-media3").css("display", "block");
            $(".up-nav-sa").css("display", "block");
            $(".down-nav-sa").css("display", "none");
            clickCountSale = clickCountSale + 1;
        }
    })



    //dropdown items

    var clickCountContact = 1;
    var clickCount = 1;
    var clickCountAbout = 1;


    $(".mini-dropdown").on("click", function () {
        if (clickCountContact % 2 === 0) {
            $(".miniItems").css("display", "none");
            clickCountContact = clickCountContact + 1;

        }
        else {
            $(".miniItems").css("display", "block");
            clickCountContact = clickCountContact + 1;

        }
    })

    $(".mini-dropdown-categoriest").on("click", function () {
        if (clickCount % 2 === 0) {
            $(".miniItems-categoriest").css("display", "none");
            clickCount = clickCount + 1;

        }
        else {
            $(".miniItems-categoriest").css("display", "block");
            clickCount = clickCount + 1;

        }
    })

    $(".mini-dropdown-about").on("click", function () {
        if (clickCountAbout % 2 === 0) {
            $(".miniItems-about").css("display", "none");
            clickCountAbout = clickCountAbout + 1;

        }
        else {
            $(".miniItems-about").css("display", "block");
            clickCountAbout = clickCountAbout + 1;

        }
    })



    //load-more

    $(".load-more").on("click", function () {
        loadMore(loadKeys[loadCounter + 1]);
        loadCounter = loadCounter + 1;
    });


    // footer year

    $(".footer-year").html(dateTime.getFullYear());

    //cookie fade effect
    if (localStorage.getItem("cookie") === "none") {
        setTimeout(function () {
            var showL = (w - 1770) / 2;
            $("#showcookie").css("left", showL + "px");
            $("#showcookie").show();
            var w = $(document).width();
            var h = $(document).height();
            $(".fadefade").css("position", "absolute");
            $(".fadefade").css("height", h + "px");
            $(".fadefade").css("width", w + "px");
            $(".fadefade").fadeIn();

        }, 10000);
    }


    //cookie

    $(".cookie-close").on("click", function () {
        $(".cookie-container").css("display", "none");
        $(".fadefade").fadeOut();
    });

    $(".cookie-accept").on("click", function () {
        $(".cookie-container").css("display", "none");
        $(".fadefade").fadeOut();
        localStorage.setItem("cookie", "done");
    })


    //Show password

    $(".showPassword").on("click", function () {
        if ($("#myInput").attr("type") === "password") {
            $("#myInput").attr("type", "text");
        } else if ($("#myInput").attr("type") === "text") {
            $("#myInput").attr("type", "password");
        }
    })

    $('.nav-link').on('click', function () {
        $(this).addClass('active')
    });


    //Services-dropdown

    $(".servicesDropdown").on("mouseover", function () {
        if ($(document).width() >= 768) {
            $(".servicesDropdown").addClass("show");
            $(".servicesDropdownMenu").addClass("show");
            $(".service-hov").css("color", "#fff");
            $(".service-hov").css("background-color", "#262a32");
            $(".carousel-indicators").addClass("d-none");
        }
    })

    $(".servicesDropdown").on("mouseout", function () {
        if ($(document).width() >= 768) {
            $(".servicesDropdown").removeClass("show");
            $(".servicesDropdownMenu").removeClass("show");
            $(".service-hov").css("color", "#000");
            $(".service-hov").css("background-color", "#fff");
            $(".carousel-indicators").removeClass("d-none");
        }
    })


    //indicator cancel

    var counterNavToggle = 0;

    $(".navbar-toggler").on("click" , function(){
        if(counterNavToggle %2 === 0)
        {
            $(".carousel-indicators").addClass("d-none");
            counterNavToggle= counterNavToggle + 1;
        }
        else
        {
            $(".carousel-indicators").removeClass("d-none");
            counterNavToggle= counterNavToggle + 1;
        }
    })




    $(".to-add-cards").on("mouseover", ".buy-card-hover", function () {
        $(this).find(".buy-card-hover-gradient").css("display", "block");
    })

    $(".to-add-cards").on("mouseout", ".buy-card-hover", function () {
        $(this).find(".buy-card-hover-gradient").css("display", "none");
    })

    $(".carousel-inner").on("mouseover", ".buy-card-hover", function () {
        $(this).find(".buy-card-hover-gradient").css("display", "block");
    })

    $(".carousel-inner").on("mouseout", ".buy-card-hover", function () {
        $(this).find(".buy-card-hover-gradient").css("display", "none");
    })

    $(".to-add-cards").on("click", ".buy-from-card", function () {
        localStorage.setItem("bag", parseInt(localStorage.getItem("bag")) + 1);
        $(".bag-normal sup").html(localStorage.getItem("bag"));
    })

    $(".to-add-cards").on("click", ".like-from-card", function () {
        localStorage.setItem("wish", parseInt(localStorage.getItem("wish")) + 1);
        $(".heart-normal sup").html(localStorage.getItem("wish"));
    })

    $(".carousel-inner").on("click", ".buy-from-card", function () {
        localStorage.setItem("bag", parseInt(localStorage.getItem("bag")) + 1);
        $(".bag-normal sup").html(localStorage.getItem("bag"));
    })

    $(".carousel-inner").on("click", ".like-from-card", function () {
        localStorage.setItem("wish", parseInt(localStorage.getItem("wish")) + 1);
        $(".heart-normal sup").html(localStorage.getItem("wish"));
    })




    var imgContactCounter = 0;
    var imgCategoriesCounter = 0;
    var imgAboutCounter = 0;
    $(".mini-footer-click").on("click", function () {
        value = $(this)[0].innerText;
        if (value === "CONTACT") {
            if (imgContactCounter % 2 == 0) {

                $(this).find("img.icon-media").css("display", "none");
                $(this).find("img.icon-media-spec").css("display", "block");

            } else {

                $(this).find("img.icon-media").css("display", "block");
                $(this).find("img.icon-media-spec").css("display", "none");
            }
            imgContactCounter = imgContactCounter + 1;

        } else if (value === "CATEGORIEST") {

            if (imgCategoriesCounter % 2 == 0) {

                $(this).find("img.icon-media-cat").css("display", "none");
                $(this).find("img.icon-media-spec-cat").css("display", "block");

            } else {

                $(this).find("img.icon-media-cat").css("display", "block");
                $(this).find("img.icon-media-spec-cat").css("display", "none");
            }
            imgCategoriesCounter = imgCategoriesCounter + 1;
        } else if (value === "ABOUT") {

            if (imgAboutCounter % 2 == 0) {

                $(this).find("img.icon-media-ab").css("display", "none");
                $(this).find("img.icon-media-ab-spec").css("display", "block");

            } else {

                $(this).find("img.icon-media-ab").css("display", "block");
                $(this).find("img.icon-media-ab-spec").css("display", "none");
            }
            imgAboutCounter = imgAboutCounter + 1;
        }
    })

    //expand image

    $(".expand-image").on("click", function() {
        var imgSrc = $(".model-image-main")[0].attributes[0].nodeValue;
        imgSrc = imgSrc.split(".");
        imgSrc = imgSrc[1] + "." + imgSrc[2];
        var biggerImg = window.location.origin + "/OSF_Internship" + imgSrc;
        console.log(biggerImg)
        window.open(biggerImg, "_blank");
    })

    // Print Function
    $(".printPage").on("click", function() {
        $(".navbar").addClass("d-none");
        $(".general-footer").addClass("d-none");
        $(".printPage").addClass("d-none");
        $(".list-group").parent().parent().addClass("d-none");
        $(".popular-accurate").addClass("d-none");
        $(".osf-cards").addClass("d-none");
        $(".information-container").addClass("d-none");
        $(".breadcrumb").addClass("d-none");
        $(".pdp-title").addClass("d-none");
        window.print();
        $(".navbar").removeClass("d-none");
        $(".general-footer").removeClass("d-none");
        $(".printPage").removeClass("d-none");
        $(".list-group").parent().parent().removeClass("d-none");
        $(".popular-accurate").removeClass("d-none");
        $(".osf-cards").removeClass("d-none");
        $(".information-container").removeClass("d-none");
        $(".breadcrumb").removeClass("d-none");
        $(".pdp-title").removeClass("d-none");
    })

    //countdown

    if (path === "countdown.html") {
        var countDownDate = new Date("Oct 1, 2019 15:00:00").getTime();

        var x = setInterval(function () {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);


            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }, 1000);
    }




});