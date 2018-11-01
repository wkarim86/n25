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
    
});


/* Image to Background */
function imagetoBackground(){
    $('.img2bg').each(function(){
        $(this).hide();
        let src = $(this).attr("src");
        let target = $(this).data("target");
        $(this).parent().addClass('bgcover').css({'background' : 'url("' + src+ '")'});
        
    });
}

/* Slider thumbnail */ 
function setSliderThumb(index){
     console.log(index);
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