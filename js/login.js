$(function(){
    //$bgWrapper=$('.aa'),
    /* 창 크기에 맞게 배경 요소의 크기 조정 */
    var $window=$(window),
        $container=$('bg_wrapper > .container');
    
    $(window).resize(function(){
        var windowHeight=$window.outerHeight(true),
            windowWidth=$window.outerWidth(true),
            setSize=windowWidth+"px "+windowHeight+"px";
        //$bgWrapper.height($(window).height());
        //$bgWrapper.width($(window).width());
        $('body').css("background-size", setSize);
        $container.css("margin-top",(windowHeight*0.3)+"px"); //이거 구현되는지 확인해야함
    });
    
    $window.trigger('resize');
    
});