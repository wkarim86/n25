$(function(){
    
    $('.project-slider').slick({        
        prevArrow: $('.project-slider-controls .prev'),
        nextArrow: $('.project-slider-controls .next')
    }).init(function(slick){        
        setSliderThumb();       
    });

    // On before slide change
    $('.project-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){        
        //console.log(nextSlide);
        setSliderThumb(nextSlide);
    });
    imagetoBackground();

    $('.icon-slider').slick({
        slidesToShow : 4,
        slidesToScroll : 1,
        infinite: true,        
        prevArrow: $('.icon-carousel .prev'),
        nextArrow: $('.icon-carousel .next')
    });

 
    servicesSlider();
    headerBanner();
    filterProjects();
    sideZoomPanel();
});


/* Image to Background */
function imagetoBackground(){
    $('.img2bg').each(function(){
        $(this).hide();
        let src = $(this).attr("src");
        let target = $(this).data("target");
        if($(this).parent()[0].tagName == "DIV"){
            $(this).parent().addClass('bgcover').css({'background-image' : 'url("' + src+ '")'});
        }else{
            $(this).parent().parent().addClass('bgcover').css({'background-image' : 'url("' + src+ '")'});
        }
        
        
    });
}

/* Slider thumbnail */ 
function setSliderThumb(index){
    
    var currentSlide = index || 0;
    var nextSlide = currentSlide + 1;
    var prevSlide = currentSlide - 1; 
    var prevThumb = "";
    var nextThumb = "";

    $('.project-slider .slick-slide').each(function(i, e){
        if($(e).data("slick-index") == nextSlide){            
            nextThumb = $(e).find('img').attr("src");
        }
        if($(e).data("slick-index") == prevSlide){            
            prevThumb = $(e).find('img').attr("src");
        }
    });

    $('.project-slider-controls .next').css({ 'background' : 'url("' + nextThumb + '")', 'background-size' : 'cover'});
    $('.project-slider-controls .prev').css({ 'background' : 'url("' + prevThumb + '")', 'background-size' : 'cover'});
    $('.project-slider-controls .thumbs').addClass('bgfadeOut');
    setTimeout(function(){
        $('.project-slider-controls .thumbs').removeClass('bgfadeOut');
    }, 1200);


    
}

/* Setup Services Slider */
function servicesSlider(){
    var serviceSlider = $('.services-slider').slick({  
        infinite: false,      
        prevArrow: $('.services-slider-control .prev'),
        nextArrow: $('.services-slider-control .next')
    });

    $('.services-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.service-icons').find('li').removeClass('active');
            $('.service-icons').find('li').eq(nextSlide).addClass('active');
      });

      $('.service-icons li a').on('click', function(){
          console.log(parseInt($(this).parent().index()));
        $('.services-slider').slick('slickGoTo',parseInt($(this).parent().index()));   
      })
}


/* background animation */
function animateBg(){
    // Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		$('svg image').css({'top' : document.body.getBoundingClientRect().top});
	else
    $('svg image').css({'top' : scrollPos});
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});
}


 /* Toggle Menu */
 $(".hamburger").click(function(){
     var toggle = $(this).data("counter") || 0;
    $(this).toggleClass("is-active");
    if(toggle == 0){
        $('.nav').addClass('open');        
        $(this).data("counter",1);
    }else{
        $('.nav').removeClass('open');
        $(this).data("counter",0);        
    }
    
    
  });


  /* Sticky Menu Event */
  $(window).scroll(function(){
      var target = $('#header').height();
      if($(this).scrollTop() > target){
          $('.sticky').addClass('show');          
      }else{
        $('.sticky').removeClass('show');
      }
  })


  /* Header Main Banner Animation */
  function headerBanner(){
    const url = 'assets/image/header-banners/';
    let banner_length = 7;
    let count = 1;
    let container = $('.header-banner');

    setInterval(function(){
        container.css('background-image', 'url(' + url + count + '.jpg' + ')' );
              
        count++;
        if(count == banner_length){        
            count = 1;
        }
        
    },5000);        
   
  }


  /* Project List filter */
  function filterProjects(){
      $('.projects .filters a').on('click', function(){
          let item = $(this).data("category");         

          $('.projects .filters a').removeClass('active');
          $(this).addClass('ative');
          
          if(item == "all"){             
            $('.projects .project-loop > div').slideDown();
          }else{
              
              $('.'+item).show();
            $('.projects .project-loop > div').not('.'+item).hide();

          }
          
      })
  }


  /* Project Detail SidePanel */
  function sideZoomPanel(){
    $('.zoom-panel').on('click', function(){
        $('.project-gallery-side-thumb').addClass('d-none');
        $('.project-gallery-panel').removeClass('col-md-4').addClass('col-md-12');
        $('.project-galleries').removeClass('d-none');
        $('.project-slider').slick('setPosition');
        $('.zoom-close').removeClass('d-none');
    });

    $('.zoom-close').on('click', function(){
        $('.project-gallery-side-thumb').removeClass('d-none');
        $('.project-gallery-panel').removeClass('col-md-12').addClass('col-md-4');
        $('.project-galleries').addClass('d-none')
        $('.project-slider').slick('setPosition');
        $('.zoom-close').addClass('d-none');
    });

  }