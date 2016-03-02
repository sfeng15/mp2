// Write any custom javascript functions here
//resizing
//
//
$(document).foundation();

$('.top-bar').on('sticky.zf.stuckto:top', function(){
    $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
    $(this).removeClass('shrink');
})
console.log(Foundation.version);


$(window).on('resize', function(event){
    var windowWidth = $(window).width();
    if(windowWidth <640){
        $(".another").css("height", 0);
    }
});


//link to the corresponding position
//
//
$('#tabA,#tabB,#tabC,#tabD').on('click', function(e){
    e.preventDefault();
    if( $(this).get(0).id=='tabA')
        target = $('#a')
    if( $(this).get(0).id=='tabB')
        target =$('#b')
    if( $(this).get(0).id=='tabC')
        target= $('#c')
    if( $(this).get(0).id=='tabD')
        target= $('#d')

    $('html, body').animate({
        scrollTop: target.offset().top
    }, 400);

});
// carousel
//
//
$(document).ready(function() {
    //move he last list item before the first item. The purpose of this is if the user clicks to slide left he will be able to see the last item.
    $('#carousel_ul li:first').before($('#carousel_ul li:last'));


    //when user clicks the image for sliding right
    $('#right_scroll img').click(function(){

        //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
        var item_width = $('#carousel_ul li').outerWidth() + 10;

        //calculae the new left indent of the unordered list
        var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;

        //make the sliding effect using jquery's anumate function '
        $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){

            //get the first list item and put it after the last list item (that's how the infinite effects is made) '
            $('#carousel_ul li:last').after($('#carousel_ul li:first'));

            //and get the left indent to the default -210px
            $('#carousel_ul').css({'left' : '-310px'});
        });
    });

    //when user clicks the image for sliding left
    $('#left_scroll img').click(function(){

        var item_width = $('#carousel_ul li').outerWidth() + 10;

        /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
        var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;

        $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){

            /* when sliding to left we are moving the last item before the first list item */
            $('#carousel_ul li:first').before($('#carousel_ul li:last'));

            /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
            $('#carousel_ul').css({'left' : '-310px'});
        });


    });
});




//location indicator
//
//
window.addEventListener("scroll", postionIndicator);
function postionIndicator() {

    if (document.body.scrollTop > 50 && document.body.scrollTop < 950) {
        document.getElementById("tabA").style.backgroundColor = "#0EFF6E";
        document.getElementById("tabB").style.backgroundColor ="green";
        document.getElementById("tabC").style.backgroundColor ="green";
        document.getElementById("tabD").style.backgroundColor ="green";
    }
    else if (document.body.scrollTop >=950 && document.body.scrollTop < 1850) {
        document.getElementById("tabA").style.backgroundColor = "green";
        document.getElementById("tabB").style.backgroundColor ="#0EFF6E";
        document.getElementById("tabC").style.backgroundColor ="green";
        document.getElementById("tabD").style.backgroundColor ="green";
    }
    else if(document.body.scrollTop >=1850&& document.body.scrollTop < 2450){
        document.getElementById("tabA").style.backgroundColor = "green";
        document.getElementById("tabB").style.backgroundColor ="green";
        document.getElementById("tabC").style.backgroundColor ="#0EFF6E";
        document.getElementById("tabD").style.backgroundColor ="green";
    }

    else{
        document.getElementById("tabA").style.backgroundColor = "green";
        document.getElementById("tabB").style.backgroundColor ="green";
        document.getElementById("tabC").style.backgroundColor ="green";
        document.getElementById("tabD").style.backgroundColor ="green";
    }

}

//facebook logo
//
//
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




//carousel
//
//
$(document).ready(function() {
    //rotation speed and timer
    var speed = 5000;
    var run = setInterval('rotate()', speed);

    //grab the width and calculate left value
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);

    //move the last item before first item, just in case user click prev button
    $('#slides li:first').before($('#slides li:last'));

    //set the default item to the correct position
    $('#slides ul').css({'left' : left_value});
    //if user clicked on prev button
    $('#prev').click(function() {
        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;
        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 200,function(){
            //move the last item and put it as first item
            $('#slides li:first').before($('#slides li:last'));
            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});

        });
        //cancel the link behavior
        return false;

    });
    //if user clicked on next button
    $('#next').click(function() {

        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;

        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 200, function () {

            //move the first item and put it as last item
            $('#slides li:last').after($('#slides li:first'));

            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});

        });

        //cancel the link behavior
        return false;

    });

    //if mouse hover, pause the auto rotation, otherwise rotate it
    $('#slides').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', speed);
        }
    );

});
//a simple function to click next link
//a timer will call this function, and the rotation will begin :)
function rotate() {
    $('#next').click();
}

