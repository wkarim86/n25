$(function(){
    
    $('.project-slider').slick().init(function(slick){
       
       var currentSlide = $('.project-slider').slick('slickCurrentSlide');
       console.log("Slick Initialized");
    });

    // On before slide change
    $('.project-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log("nextSlider",nextSlide, "currentSlide",currentSlide);
    });
 
    imagetoBackground();
    

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