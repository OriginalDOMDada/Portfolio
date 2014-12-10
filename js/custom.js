$(document).ready(function() {
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height(),
            opacityVal = (s / 150);

        $('.blurred-image').css('opacity', opacityVal);
    });


    $( '#nav-toggle' ).click(function() {
  		$( ".nav-bar" ).toggleClass( "menu" );
	});

	//mannie
	$(".mannie").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/mookie.gif)");
	});
	$(".mannie").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

    //unicorn
	$(".unicorn").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/giphy.gif)");
	});
	$(".unicorn").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//create
	$(".create").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/lego.gif)");
	});
	$(".create").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//blaze
	$(".blaze").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/blaze.gif)");
	});
	$(".blaze").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});


	//cool
	$(".cool").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/giphy-5.gif)");
	});
	$(".cool").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//shit
	$(".shit").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/giphy-1.gif)");
	});
	$(".shit").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});


	//winning
	$(".winning").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/win.gif)");
	});
	$(".winning").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//survive
	$(".survive").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/lol.gif)");
	});
	$(".survive").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});	


	//washington dc
	$(".washington").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/nats.gif)");
	});
	$(".washington").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//food
	$(".food").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/cosby.gif)");
	});
	$(".food").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});


	//long-trots
	$(".trot").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/trot.gif)");
	});
	$(".trot").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//hunt 
	$(".hunt").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/duck-hunt.gif)");
	});
	$(".hunt").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	}); 


	//internet
	$(".internet").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/net.gif)");
	});
	$(".internet").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});  

	//awesome
	$(".awe").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/awesome.gif)");
	});
	$(".awe").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});  

	//draw
	$(".draw").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/draw.gif)");
	});
	$(".draw").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});  

	//jam
	$(".jam").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/giphy-3.gif)");
	});
	$(".jam").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	}); 

	//port
	$(".port").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/looking.gif)");
	});
	$(".port").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//wink
	$(".wink").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/wink.gif)");
	});
	$(".wink").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});

	//expert
	$(".expert").mouseenter(function() { 
    	$(".layout-foreground").css('background-image', "url(img/boom.gif)");
	});
	$(".expert").mouseleave(function() {
    	$(".layout-foreground").css('background-image', "none");
	});


	$(".white").mouseenter(function() {
		$(".layout-foreground").css('color','#ffffff');
	});
	$(".white").mouseleave(function() {
    	$(".layout-foreground").css('color', "#2d2d2d");

	});

	document.querySelector( "#nav-toggle" )
  	.addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

});