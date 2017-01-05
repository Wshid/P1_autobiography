function check_submit(form_this){ //일단 가져오긴 하는듯
// form add block을 가르키는 변수
    var f_a_block=form_this;
    var title=f_a_block.title.value,
        subtitle=f_a_block.subtitle.value, //왜 값을 못찾는다고 뜰까
        body=f_a_block.body.value,
        tag=f_a_block.tag.value;

    var regex_title=/^[a-zA-Z0-9가-힣\s_]+$/, // ^로 정규식 시작, $로 정규식의 끝을 나타냄
        regex_subtitle=/^.{1,50}$/,
        regex_body=/^.{1,150}$/,
        regex_tag=/^\#[a-zA-Z가-힣 _]{1,10}$/;
    //+라는 문자가 꼭 있어야함, 글자가 몇개까지 갈지 모르니까
    
    
    // 제목 정규식 검사
    //alert("REGEX : "+title); // 테스트 코드
    if(!regex_title.test(title)){
        alert("Don't Include Special Character in TITLE");
        return false;
    }
    
    // 길이가 넘을때를 따로 체크하기 위해 if문을 분리함
    if(title.length>30){
        alert("Title length can't over 30 characters");
        return false;
    }
    
    // subtitle 정규식 검사
    if(!regex_subtitle.test(subtitle)){
        alert("Subtitle length can't over 50 characters");
        return false;
    }
    
    // body 정규식 검사
    if(!regex_body.test(body)){
        alert("Body lengtt can't over 150 characters");
        return false;
    }
    
    // tag 정규식 검사. #으로 시작하여야하며, 1~10자여야 한다.
    if(!regex_tag.test(tag)){
        alert('Tags Format is #[1~10character]');
        return false;
    }
    
    
    
    return true;
    
    // HTML 구문에서 form onsubmit의 반환값에 따라 action이 실행될지 여부를 결정함
    
}

$(function(){
    $('.form_modify').each(function(){
        var $form=$(this); // 수정폼 자기 자신
        
        if(check_submit($form)){
            /*...*/
        }
        
        $(this).on('click',function(){
            var id=$(this).attr('id');
            var num=3
            
            alert("clicked!");
            console.log("clicked!");
            //id.charAt(id.length-1);
            //id를 어떻게 php변수화 할까
            
            var $ret=$form.serialize(); // 여기서부터 다시 수정하기!
            $ret.
            //data:{$form.serialize()}, 
            $.ajax({
                type:"POST",
                url:"operate_block_process.php",
                data:{idx : num},
                //dataType:"text", //생략시, JQuery가 알아서 판단
                success:function(ret){
                    console.log(ret);
                },
                error:function(){
                    alert("Restart");
                }
            });
        
        });
    });   
})