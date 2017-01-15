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
    //console.log("$edit : "+$editContainer);
    //console.log($blockContainer);
    
    var duration=1500,
        change_term=1000;
    
    
    $blockContainer.each(function(){
        //console.log("AAA"); // 이건 먹힘
        
        $blockContainer.addClass('word_active', duration, 'linear'); // 아마 버전상의 이유로 지원 안되는것 같음
        $blockContainer.removeClass('word_deactive');
        
        $blockContainer.on('click', '.word_block', function(){
            var id=$(this).index();
            //console.log("My index is"+$(this).index());
            var view_string, edit_string="";
            var ret=get_word_view_edit_json(name, id);
        });

    });
    
    $viewContainer.each(function(){
        $viewContainer.on('click', '.word_modify', function(){
            $viewContainer.removeClass('word_active');
            $viewContainer.addClass('word_deactive');
            $editContainer.addClass('word_active', duration, 'easeInOutElastic');
            $editContainer.removeClass('word_deactive');
        });
        $viewContainer.on('click', '.word_close', function(){
            $viewContainer.removeClass('word_active');
            $viewContainer.addClass('word_deactive');
            $blockContainer.addClass('word_active', duration, 'easeInOutElastic');
            $blockContainer.removeClass('word_deactive');            
        })
    });
    
    
    /*
    $('.LOL').on('click', function(){ // php에 초기에 있는 버튼은 잘 먹는데
        //console.log("Clicked!");
        $blockContainer.toggleClass('disabled');
        $editContainer.toggleClass('disabled');
        //$blockContainer.css({'display':'none'});
    });*/  
    
 
    
    
});