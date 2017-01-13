$(function(){
    //$('.blockContainer').css({'display':'none'}); // 이렇게 처리하면 됨
   
    $.ajax({ // 수정 필요
        url:'lib/get_name.php',
        type:'post',
        data:{'page':'word'},
        success:function(ret){
            console.log("word.js ajax success");
            //ret는 단순 문자열, json 데이터로 처리해 주어야함
            ret=JSON.parse(ret);
            get_word_json(ret.name, ret.page); // json 파일 만드는 함수도 있어야함
        },
        error:function(request, status, error){
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
    
    
    // blockContainer라는건 php에 이미 선언 되었기 때문, 따라서 클릭시 잘 잡아낼 수 있는 것
    var $blockContainer=$('.blockContainer'), // ajax 이후나 지금이나 잡는건 같음
        $editContainer=$('.editContainer');
    
    //console.log("$edit : "+$editContainer);
    //console.log($blockContainer);
    
    $blockContainer.each(function(){
        //console.log("AAA"); // 이건 먹힘
        $blockContainer.on('click', '.add_or_modify',function(){ // 이 안에 넣어야 됨
           console.log("Plus_word_button clicked"); //? 아무것도 안했는데 정확히 인식함
           $blockContainer.toggleClass('disabled');
           $editContainer.toggleClass('disabled');
        });
        //console.log($blockContainer.find('#plus_word')); // 이건 또 잡네 아오
        //http://itjunijuni.tistory.com/22
    });
    
    
    
    $('.LOL').on('click', function(){ // php에 초기에 있는 버튼은 잘 먹는데
        //console.log("Clicked!");
        $blockContainer.toggleClass('disabled');
        $editContainer.toggleClass('disabled');
        //$blockContainer.css({'display':'none'});
    });  
    
 
    
    
});