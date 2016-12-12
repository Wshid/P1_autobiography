$(function(){
    
    
    var box=$('.row .col-lg-4'),
        duration=1500,
        easing='easeInBack';
    
    /* shadow box */    
    box.on('mouseover', function(){
      
      $(this).addClass('box_active');
    })
    .on('mouseleave', function(){
        $(this).removeClass('box_active');
    });
    
    /* fixed header */
    $('.navbar-wrapper').each(function(){
        var $window=$(window),
            $header=$(this),
            $headerClone=$header.contents().clone(),
            $headerCloneContainer=$('<div class="fixed-header"></div>'),
            
            threshold=$header.offset().top+$header.outerHeight();
        
        $headerCloneContainer.append($headerClone);
        $headerCloneContainer.appendTo('body');
        
        $window.on('scroll', $.throttle(1000/15, function(){
            if($window.scrollTop()>threshold){
                $headerCloneContainer.addClass('visible');
            }else{
                $headerCloneContainer.removeClass('visible');
            }
        }));
        
        $window.trigger('scroll');
    });
    
    /* back-to-top */
    $('.back-to-top').each(function(){
        $.smoothScroll({
            easing:'easeOutExpo',
            speed:500
        });
    });
});