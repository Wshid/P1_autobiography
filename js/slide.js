$(function(){
    
    function goToSlide(index){
        $slideGroup.animate({left:-100*index+'%'},duration, easing);
        currentIndex=index;
        updateNav();
    }
    
    function updateNav(){
        var $navPrev=$nav.find('.prev'),
            $navNext=$nav.find('.next');
        
        if(currentIndex===0){
            $navPrev.addClass('disabled');
        }else{
            $navPrev.removeClass('disabled');
        }
        
        if(currentIndex===slideCount-1){
            $navNext.addClass('disabled');
        }else{
            $navNext.removeClass('disabled');
        }
        
        $indicator.find('a').removeClass('active')
            .eq(currentIndex).addClass('active');
    }
    
    function startTimer(){
        
        timer=setInterval(function(){
            
            var nextIndex=(currentIndex+1)%slideCount;
            goToSlide(nextIndex);
            
        }, interval);
    }
    
    function stopTimer(){
        clearInterval(timer);
    }
})