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
                alert("Dahada eşya galmadı bacım");
            }

        }, failure: function () {
            alert("Dahada eşya galmadı bacım");
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

    var dateTime = new Date();

    $(".loginAccept").on("click", function () {
        var str = document.getElementById("myInput").value; 
    if (str.match(/[a-z]/g) && str.match( 
            /[A-Z]/g) && str.match( 
            /[0-9]/g) && str.match( 
            /[^a-zA-Z\d]/g) && str.length >= 6) 
        alert("Correct password type");
        
    else 
        alert("Enter the correct password type");
    });

    $(".load-more").on("click", function () {
        loadMore(loadKeys[loadCounter + 1]);
        loadCounter = loadCounter + 1;
    });

    $(".footer-year").html(dateTime.getFullYear());

    setTimeout(function () {
        alert("tefooooooooooooooooooooooooo");
    }, 10000);

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