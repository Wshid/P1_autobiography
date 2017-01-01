var load_function=null;

function get_by_js(name){
    load_function(name);
}

$(function(){
    
    var $buttonContainer=$('.buttonContainer'),
        $row=$('.columns_l4 > .row'),
        $blockContainer=$('.blockContainer');
    //$('.gridContainer').hide(); // 잠시 숨겨놓기로
    
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
            
            resizing();
        }));
    });

    function resizing(){ // resizing을 해야지 가운데 정렬이 됨
        var navbarSize=$('.navbar-wrapper').width();
        $('.fixed-header').width(navbarSize);        
    }
    
    //버튼을 클릭하면 해당 유저에 해당하는 거를 가져와야함.. 그렇기 위해선 php도 이용해야하고..
    //정확히는 이미 불러와져 있어야 하며, ..
    // 다른 php에 갔다 오는 형식으로 해야할까 우선
    $buttonContainer.find('button').each(function(){
        var $this=$(this);
        
        $this.on('mouseover', function(){
            $this.addClass('mouseOver');
        })
        .on('mouseleave', function(){
            $this.removeClass('mouseOver');
        });
    });
    
    
    /* 현재 유저별로 파일을 저장하지만, 
     * jquery 연동을 위해서는 파일명을 동일하게 해야 될 것 같다는 게 문제.. 
     * 한 파일로 저장해야 할까?
     */

    /* box active 부분 : mouseover를 하면 연보라색으로 active 된다 */
    /*
    function box_activing(){
        $('.columns_l4 .col-md-4').each(function(){
            console.log("BOX_ACTIVE");
            $(this).on('mouseover', function(){
                $(this).addClass('box_active');
            })
            .on('mouseleave', function(){
                $(this).removeClass('box_active');
            });
        });
    }*/
    
    
    /* block 내부의 값 지정 및 modal 객체 생성하기 */
    
    /*
    function hoverDirection(event){
        var $overlay=$(this).find('.caption'),
            side=getMouseDirection(event),
            animateTo,
            positionIn={top:'0%', left:'0%'},
            positionOut=(function(){
                switch(side){
                    case 0:
                        return{top: '-100%', left:'0%'};
                        break;
                    case 1:
                        return{top:'0%', left:'100%'};
                        break;
                    case 2:
                        return{top:'100%', left:'0%'};
                        break;
                    default:
                        return{top:'0%', left:'-100%'};
                        break;
                }
            })();
        
        if(event.type==='mouseenter'){
            animateTo=positionIn;
            $overlay.css(positionOut);
        }else{
            animateTo=positionOut;
        }
        
        $overlay.stop(true).animate(animateTo, 250, 'easeOutExpo');
    }
    
    function getMouseDirection (event) {
        var $el = $(event.currentTarget),
            offset = $el.offset(),
            w = $el.outerWidth(),
            h = $el.outerHeight(),
            x = (event.pageX - offset.left - w / 2) * ((w > h)? h / w: 1),
            y = (event.pageY - offset.top - h / 2) * ((h > w)? w / h: 1),
            direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90  + 3) % 4;
        return direction;
    }*/
    
});