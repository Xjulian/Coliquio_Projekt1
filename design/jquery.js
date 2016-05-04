var hiddenBox = $("#hiddenmessage");
$("#buttonShow").on("click", function(event) {
    hiddenBox.show();
});

var hiddenBox = $("#hiddenmessage");
$("#buttonHide").on("click", function(event) {
    hiddenBox.hide();
});


$(document).ready(function() {
    $("#buttonSlide").click(function() {
        var test = Math.random() * 100;
        console.log(test);
        if (test > 50) {
            $("#hiddenmessage").animate({
                left: '+=250px'
            });
        } else {
          $("#hiddenmessage").css({top: 0, left: 0});
        }

    });
});

$(document).ready(function() {
    $("#buttonCirculacion").click(function() {
        var div = $("#hiddenmessage");
        div.animate({
            height: '300px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '300px',
            opacity: '0.8'
        }, "slow");
        div.animate({
            height: '100px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '100px',
            opacity: '0.8'
        }, "slow");
    });
});

$(document).ready(function() {
    $("#buttonToggle").click(function() {
        $("#hiddenmessage").animate({
            height: 'toggle'
        });
    });
});



//$.ajax({
//  url: "/api/getWeather",
//  data: {
//   zipcode: 97201
//  },
//  success: function( result ) {
//    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//  }
//});
