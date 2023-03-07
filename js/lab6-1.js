/* jQuery and JavaScript code here for lab6-1.html */

$(document).ready(function () {
    $(document).prop('title', 'Lab 6 – DOM Manipulation with jQuery.');

    var txtArea = $("#msgArea");
    txtArea.text('My class is ' + txtArea.attr('class'));

    $(".btn").css("background-color", "red");
    $("body").css("background-color", "ivory");

    $(".center-icons").addClass("selected");



    $(".panel").on("click", function () {
        var span = $('#message');
        span.text("You clicked this panel")
    });

    $(".panel").on("mousemove", function (e) {
        var span = $('#message');
        span.text("X: " + e.pageX +" "+ "Y: " + e.pageY)
    });

    $(".panel").on("mouseleave", function (e) {
        var span = $('#message');
        span.text("The mouse has left")
    });

    var link1 = $('<img src="/images/art/thumbs/13030.jpg">');
    $("#panel-2").prepend(link1);

    $("#stories img").on("mouseover",function (e) {
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");
        var preview = $('<div id="preview"></div>');
        var image = $('<img	src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        $(this).addClass("gray");
        preview.append(image, caption);
        $(this).after(preview);
        preview.fadeIn(1000);
    });

    $("#stories img").on("mouseleave", function (e) {
        $("#preview").fadeOut(1000, function () { $("#preview").remove() });
        $(this).removeClass("gray");
        });
 
});
