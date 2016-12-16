$(function(){
    
    
    var box=$('.row .col-lg-4'),
        duration=1500,
        $window=$(window);
        //currentWidth=$(window).width(),
       // $fixedWrapper=$('.fixed-header .navbar');
    var marketingText=[['Blocks', 'All contents are managed by the block included some informations!'],
                        ['Word(AutoBio)', 'The perfect essay is made by many trials'],
                        ['Memo', 'The Memo makes man'],
                        ['Profile', 'Managing your personal informations'],
                        ['Charts', 'Compressed one take Infographic'],
                        ['Blank Title', 'Blank Body']];
    
    /* window size */
    
    $window.resize(resizing);
    
    function resizing(){
        var navbarSize=$('.navbar-wrapper').width();
        $('.fixed-header').width(navbarSize);        
    }

    /* carousel-caption */ 

   /*
    $('.carousel-caption').each(function(i, item){
        var titles=$(this).find('h1');
        var bodies=$(this).find('.carouselBody');
        titles.text(carouselText[i][0]);
        bodies.text(carouselText[i][1]);
    });     */
    
    /* blocks-caption */
    $('.marketing .col-lg-4').each(function(i, item){
        var titles=$(this).find('h2'),
            bodies=$(this).find('.marketingBody');
        titles.text(marketingText[i][0]);
        bodies.text(marketingText[i][1]);
    });
    
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
            $navbarclass=$header.find('#navbar'),
            $headerClone=$header.contents().clone(),
            $headerCloneContainer=$('<div class="fixed-header"></div>'),
            threshold=$header.offset().top+$header.outerHeight();
        $headerCloneContainer.append($headerClone);
        $headerCloneContainer.appendTo('body');
        
        //console.log($(this).width());
        
        $window.on('scroll', $.throttle(1000/15, function(){
            if($window.scrollTop()>threshold){
                $headerCloneContainer.addClass('visible');
                $navbarclass.attr('id', 'not_navbar'); // navbar id를 변경함으로써 navbar-collapse 변경
            }else{
                $headerCloneContainer.removeClass('visible');
                $navbarclass.attr('id', 'navbar');
            }
            
            resizing(); /* 자동 resizing 등록 */
        }));
    });

     /* fixed header wrapper */
    //$fixedContainer.css('left', ((currentWidth-$fixedContainer.width())/2)+'px');
    //console.log($fixedContainer.width()); /// width가 계산이 되지 않음
    
    /* back-to-top */
    $('.back-to-top').on('click', function(){
        $.smoothScroll({
            easing:'easeOutExpo',
            speed:1000
        });
    });
});