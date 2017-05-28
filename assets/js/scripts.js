/* =======================================================================================
* Author        : Robbee Labs
*
* Template Name : Nur Theme | Personal Resume/CV/Portfolio Html Template
*
* File          : Nur JS file
*
* Version       : 1.0
=========================================================================================*/



/* =======================================================================================

00. Preloader

01. Mobile Button

02. Backstretch Background Slider

03. Intro & Sidebar Interactive Height
	
04. Isotope Section Portfolio

05. Magnific Popup Section Portfolio

06. Owl Carousel Testimonial

07. Owl Carousel Client

08. Scroll Click Intro

09. Scroll Spy Menu

10. Color Schemes

11. Animate Number Fun Fact

12. Ajax Contact Form js

=========================================================================================*/

(function($){
    
    'use strict';
    
    /*=========================================================================
        00. Preloader
    =========================================================================*/
    $(window).on('load', function(){
        $(".preloader-wrap").fadeOut(500); 
    });
    
    /*=========================================================================
        01. Mobile Button
    =========================================================================*/
    $(document).on('click','.mobile-btn, .content-page.on',function(){
        $('.mobile-btn').toggleClass('active');
        $('.sidebar-page').toggleClass('on');
        $('.content-page').toggleClass('on');
        return false;
    });
    
    
    $(window).on('load resize', function() {
        
        /*=========================================================================
            02. Backstretch Background Slider
        =========================================================================*/
        $("#SECTION-INTRO").backstretch([
            /* Url Image */
            "assets/back.jpg",
            
            /* Url Image */
            "assets/back.jpg"   
        ], {duration: 5000, fade: 400});
        
        /*=========================================================================
            03. Intro & Sidebar Interactive Height
        =========================================================================*/
        $("#SECTION-INTRO").css({'height':($(window).height())+'px'});
        $(".sidebar-page").css({'height':($(window).height())+'px'});
        
        /*=========================================================================
            04. Isotope Section Portfolio
        =========================================================================*/
        var worksfilters = $('.filters .filter'),
            worksitem = $('#isotope-grid');
        
		if (worksfilters != 'undefined'){
            
			worksitem.isotope({
                
				itemSelector : '.grid-item',
                layoutMode: 'sloppyMasonry'
                
			});
            
			worksfilters.on('click', function(){
                
				worksfilters.removeClass('active');
				$(this).addClass('active');
                
				var selector = $(this).attr('data-filter');
				worksitem.isotope({ filter: selector });
                
				return false;
                
			});
		}
        
        
        /*=========================================================================
            05. Magnific Popup Section Portfolio
        =========================================================================*/
        $('.modal-image').magnificPopup({
            type:'inline',
            fixedContentPos: false,
            removalDelay: 100,
            closeBtnInside: true,
            preloader: false,
            mainClass: 'mfp-fade'
        });
        
        
    });
    
    /*=========================================================================
        06. Owl Carousel Testimonial
    =========================================================================*/
    $(".owl-slides").owlCarousel({
        singleItem:true,
        autoPlay:true
    });
    
    /*=========================================================================
        07. Owl Carousel Client
    =========================================================================*/
    $(".client-line").owlCarousel({
        items : 4,
        autoPlay:true
    });
    
    /*=========================================================================
        08. Scroll Click Intro
    =========================================================================*/
    $('a[href*=#].btn-scroll:not([href=#])').on('click', function(){
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    /*=========================================================================
        09. Scroll Spy Menu
    =========================================================================*/
    var lastId,
        topMenu = $(".menu ul"),
        topMenuHeight = topMenu.outerHeight(),
       
        menuItems = topMenu.find("a"),
        
        scrollItems = menuItems.map(function(){
            
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
            
        });

    menuItems.on('click', function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top;
        
        $('html, body').stop().animate({ 
            
            scrollTop: offsetTop
            
        }, 900);
        
        $('.mobile-btn').removeClass('active');
        $('.sidebar-page').removeClass('on');
        $('.content-page').removeClass('on');
        
        e.preventDefault();
        
    });

    $(window).on('scroll', function(){

        var fromTop = $(this).scrollTop() + topMenuHeight;
 
        var cur = scrollItems.map(function(){
            
            if ($(this).offset().top < fromTop)
            return this;
            
        });

        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
    
        if (lastId !== id) {
            lastId = id;

            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
    
    /*=========================================================================
        10. Color Schemes
    =========================================================================*/
    $(".box-options .options").on('click', function(e) {
		$(".box-colors").toggleClass('show');
		return false;
	});
	
	$(".color-options li a.color").on('click', function(e) {
		e.preventDefault();
		$("link#colors").attr("href",$(this).attr('href'));
		return false;
	});
    
    $(".color-options li a.theme").on('click', function(e) {
		e.preventDefault();
        $("link#themes").attr("href",$(this).attr('href'));
		return false;
	});
    
    /*=========================================================================
        11. Animate Number Fun Fact
    =========================================================================*/
    $('.number').counterUp({ delay: 4, time: 1000 });
    
    /*=========================================================================
        12. Ajax Contact Form
    =========================================================================*/
    $('#submit').on('click', function(e){
        e.preventDefault();

        $('#name').removeClass("error_input");
        $('#message').removeClass("error_input");
        $('#email').removeClass("error_input");
	
        var error = false,
            name = $('#name').val(); 
        if(name == "" || name == " ") { 
            
            error = true; 
            $('#name').addClass("error_input");
            
        }
	
		var message = $('#message').val(); 
		if(message == "" || message == " ") {
            
			error = true;
			$('#message').addClass("error_input");
			
        }
	
	   var email_validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
        
	   var email = $('#email').val(); 
        if (email == "" || email == " ") { 
            
            $('#email').addClass("error_input");
            error = true;
            
        }else if (!email_validate.test(email)) { 
            
            $('#email').addClass("error_input");
            error = true;
            
        }

        if(error == true) {
            return false;
        }

	   var data_string = 'name='+ name + '&email='+ email + '&message='+ message; 

        $.ajax({
            type: "POST",
            url: $('#ajax-contact').attr('action'),
            data: data_string,

            success: function(message) {
				if(message == 'success'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
            }

        });

	   return false; 
    });
    
})(jQuery);