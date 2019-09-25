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
    console.log(response[key]);
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

$(document).ready(function () {
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

    /*$(".loginAccept").on("click", function () {
        var str = document.getElementById("myInput").value;
        if (str.match(/[a-z]/g) && str.match(
            /[A-Z]/g) && str.match(
                /[0-9]/g) && str.match(
                    /[^a-zA-Z\d]/g) && str.length >= 6)
                }

        else
            alert("Enter the correct password type");
    });*/

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


    var readMore = document.getElementsByClassName("read-more");
    var moreText = document.getElementsByClassName("more");
  

    $(".read-more").on("click", function(){
        $(".read-more").css("display", "none");  
        $(".more").css("display", "inline");         
    })

    $("selector a").mouseOver(function(e){
        e.preventDefault();
        $('.model-image-main img').attr("src", $(this).attr("href"));
    })



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
            console.log(clickCountContact);
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
            console.log(clickCount);
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
            console.log(clickCountAbout);
        }
    })



    $(".load-more").on("click", function () {
        loadMore(loadKeys[loadCounter + 1]);
        loadCounter = loadCounter + 1;
    });

    /*$('#print').click(function(){
        $('.main-body').printThis({
            debug:false,
            importCSS:true,
            importStyle:false,
            printContainer:true,
            loadCSS:"",
            pageTitle:"",
            removeInline:false,

        });
    })
    */

    $(".footer-year").html(dateTime.getFullYear());


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

    $(".cookie-close").on("click", function () {
        $(".cookie-container").css("display", "none");
        $(".fadefade").fadeOut();
    });

    $(".cookie-accept").on("click", function () {
        $(".cookie-container").css("display", "none");
        $(".fadefade").fadeOut();
        localStorage.setItem("cookie", "done");
    })


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

    $(".servicesDropdown").on("mouseover", function () {
        $(".servicesDropdown").addClass("show");
        $(".servicesDropdownMenu").addClass("show");
        $(".service-hov").css("color", "#fff");
        $(".service-hov").css("background-color", "#262a32");
    })

    $(".servicesDropdown").on("mouseout", function () {
        $(".servicesDropdown").removeClass("show");
        $(".servicesDropdownMenu").removeClass("show");
        $(".service-hov").css("color", "#000");
        $(".service-hov").css("background-color", "#fff");
    })

    $(".to-add-cards").on("mouseover", ".buy-card-hover", function () {
        $(this).find(".buy-card-hover-gradient").css("display", "block");
    })

    $(".to-add-cards").on("mouseout", ".buy-card-hover", function () {
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
});