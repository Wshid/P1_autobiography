$(function(){
    //$('.blockContainer').css({'display':'none'}); // 이렇게 처리하면 됨
   var name="";
    $.ajax({ // 수정 필요
        url:'lib/get_name.php',
        type:'post',
        data:{'page':'word'},
        success:function(ret){
            console.log("word.js ajax success");
            //ret는 단순 문자열, json 데이터로 처리해 주어야함
            ret=JSON.parse(ret);
            name=ret.name; // 이름 초기화
            get_word_block_json(ret.name, ret.page); // json 파일 만드는 함수도 있어야함
        },
        error:function(request, status, error){
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
    
    
    // blockContainer라는건 php에 이미 선언 되었기 때문, 따라서 클릭시 잘 잡아낼 수 있는 것
    var $blockContainer=$('.blockContainer'), // ajax 이후나 지금이나 잡는건 같음
        $editContainer=$('.editContainer'),
        $viewContainer=$('.viewContainer');
        
    var $asideContainer=$('.aside_container'),
        $asideButton=$asideContainer.find('.aside_button'),
        $asideSubmit=$asideContainer.find('.button_aside_submit');
    //console.log("$edit : "+$editContainer);
    //console.log($blockContainer);
    
    var duration=1000,
        change_term=500,
        easing='easeInOutExpo';
    
    
    $blockContainer.each(function(){
        //console.log("AAA"); // 이건 먹힘
        
        //$blockContainer.addClass('word_active', duration, 'linear'); // 아마 버전상의 이유로 지원 x?
        $viewContainer.hide();
        $editContainer.hide();
        $asideContainer.hide();
        $blockContainer.fadeIn(duration, easing);
        
        $blockContainer.on('click', '.word_block', function(){
            //console.log($(this));
            var id=$('.word_block').index($(this))
            //console.log("My index is"+id);
            var view_string, edit_string="";
            var ret=get_word_view_edit_json(name, id);
            
            $blockContainer.fadeOut(change_term, easing, function(){
                $viewContainer.fadeIn(duration, easing);
            });            
        });
        
        $blockContainer.on('click', '.word_add', function(){
            var edit_string=mk_word_form_string('add', ['Title', 'subTitle', 'Body', 'blocks'], -1);
            
            //console.log(edit_string);
            $editContainer.html(edit_string);
            $blockContainer.fadeOut(change_term, easing, function(){
                $editContainer.fadeIn(duration,easing);
                $asideContainer.fadeIn(duration,easing);
            });
        });

    });
    
    $viewContainer.each(function(){ // view에서 modify와 close 버튼 클릭 시,
        $viewContainer.on('click', '.word_modify', function(){
            $viewContainer.fadeOut(change_term, easing, function(){
                $editContainer.fadeIn(duration, easing);
                $asideContainer.fadeIn(duration, easing);
            });
            
            //$editContainer.removeClass('word_deactive');
        });
        
        $viewContainer.on('click', '.word_close', function(){
            $viewContainer.fadeOut(change_term, easing, function(){
                $blockContainer.fadeIn(duration, easing);  
            });      
        });
    });
    
    $editContainer.each(function(){
       $editContainer.on('click', '.word_close', function(){
            $asideContainer.fadeOut(change_term/2, easing, function(){
                $editContainer.fadeOut(change_term/2, easing, function(){
                    $blockContainer.fadeIn(duration, easing);  
                });      

            });   
       });
    });
    
    $asideButton.on('click', function(){
        $asideContainer.toggleClass('open');
        if($asideContainer.hasClass('open')){
            $asideContainer.stop(true).animate({
                right:'0px'
            }, duration, easing);
            $asideButton.find('img').attr('src', 'img/btn_close.png');
        }else{
            $asideContainer.stop(true).animate({
                right:'-350px'
            }, duration, easing);
            $asideButton.find('img').attr('src', 'img/btn_open.png');
        }
    });
    
    // aside 버튼 클릭되는건 따른 함수를 아예 구현해서 보내기로
    
    
    /*
    $('.LOL').on('click', function(){ // php에 초기에 있는 버튼은 잘 먹는데
        //console.log("Clicked!");
        $blockContainer.toggleClass('disabled');
        $editContainer.toggleClass('disabled');
        //$blockContainer.css({'display':'none'});
    });*/  
    
 
    
    
});