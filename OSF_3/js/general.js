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
    $.ajax({url: "./js/newCards.json", success: function(response) {
        loadMoreSuccess(response);
    }, failure: function() {

    }});
}

var loadMoreSuccess = function (response) {
    console.log(response[key]);
}

$(document).ready(function() {
    var loadCounter = 0;
    var loadKeys = {
        "1": "firstCall",
        "2": "secondCall",
        "3": "thirdCall"
    }
    loadMore(loadKeys[toString(loadCounter + 1)]);
    checkForBagCount();
    checkForWhishCount();

    var dateTime = new Date();
    $(".footer-year").html(dateTime.getFullYear());

    setTimeout(function() {
        alert("tefooooooooooooooooooooooooo");
    }, 10000);

    $('.nav-link').on('click', function() {
        $(this).addClass('active')
    });

    $(".servicesDropdown").on("mouseover", function() {
        $(".servicesDropdown").addClass("show");
        $(".servicesDropdownMenu").addClass("show");
        $(".service-hov").css("color", "#fff");
        $(".service-hov").css("background-color", "#262a32");
    })

    $(".servicesDropdown").on("mouseout", function() {
        $(".servicesDropdown").removeClass("show");
        $(".servicesDropdownMenu").removeClass("show");
        $(".service-hov").css("color", "#000");
        $(".service-hov").css("background-color", "#fff");
    })

    $(".to-add-cards").on("mouseover", ".buy-card-hover", function() {
        $(this).find(".buy-card-hover-gradient").css("display", "block");
    })

    $(".to-add-cards").on("mouseout", ".buy-card-hover", function() {
        $(this).find(".buy-card-hover-gradient").css("display", "none");
    })

    $(".to-add-cards").on("click", ".buy-from-card", function() {
        localStorage.setItem("bag", parseInt(localStorage.getItem("bag")) + 1);
        $(".bag-normal sup").html(localStorage.getItem("bag"));
    })

    $(".to-add-cards").on("click", ".like-from-card", function(){
        localStorage.setItem("wish", parseInt(localStorage.getItem("wish")) + 1);
        $(".heart-normal sup").html(localStorage.getItem("wish"));
    })
});