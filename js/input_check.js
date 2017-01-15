function check_submit(form_this){ //일단 가져오긴 하는듯
// form add block을 가르키는 변수
    var f_a_block=form_this; // 공통 변수 설정
    var title=f_a_block.title.value,
        subtitle=f_a_block.subtitle.value, 
        body=f_a_block.body.value;
    
    var regex_title, regex_subtitle, regex_body;
    
    var title_len, subtitle_len, body_len;
    
    console.log(form_this);
    
    
    if(form_this=='form_word'){ // word에서 오는 자료들
        console.log("form_word_on");
        var block_raw=f_a_block.blocks.value;
        regex_title=/^[a-zA-Z0-9가-힣\s_]+$/; // ^로 정규식 시작, $로 정규식의 끝을 나타냄
        regex_subtitle=/^.{1,150}$/;
        regex_body=/^.{1,2000}$/;
        
        title_len=50;
        subtitle_len=150;
        body_len=2000;
        
        // block의 경우 입력검사를 따로 진행하지 않음. 입력을 하지 않기 때문

    }
    else{ // mk_modal에서 오는 것들
        console.log(form_this);
        var tag_raw=f_a_block.tag.value;
        //console.log("TITLE : "+title);
        
        title_len=30;
        subtitle_len=50;
        body_len=150;
        
        regex_title=/^[a-zA-Z0-9가-힣\s_]+$/; // ^로 정규식 시작, $로 정규식의 끝을 나타냄
        regex_subtitle=/^.{1,50}$/;
        regex_body=/^.{1,150}$/;
        var regex_tag=/^\#[a-zA-Z가-힣 _]{1,10}$/;
        //+라는 문자가 꼭 있어야함, 글자가 몇개까지 갈지 모르니까
        
        var tag=tag_raw.split(" ");
        //console.log(tag);

        // tag 정규식 검사. #으로 시작하여야하며, 1~10자여야 한다.
        for(var tag_idx in tag){
            console.log(tag[tag_idx]);
            console.log(!regex_tag.test(tag[tag_idx]));
            if(!regex_tag.test(tag[tag_idx])){
                alert('Tags Format is #[1~10character]');
                return false;
            }        
        }        
    }
    
    // 길이가 넘을때를 따로 체크하기 위해 if문을 분리
    if(title.length>title_len){
        alert("Title length can't over "+title_len+" characters");
        return false;
    }
    
    // title 정규식 검사
    if(!regex_title.test(title)){
        alert("Don't Include Special Character in TITLE");
        return false;
    }
    
    // subtitle 정규식 검사
    if(!regex_subtitle.test(subtitle)){
        alert("Subtitle length can't over "+subtitle_len+"characters");
        return false;
    }
    
    // body 정규식 검사
    if(!regex_body.test(body)){
        alert("Body lengtt can't over "+body_len+" characters");
        return false;
    }
    
    return true;
    
    // HTML 구문에서 form onsubmit의 반환값에 따라 action이 실행될지 여부를 결정함
    
}


function form_submit(form_this){ // ADD or MODIFY의 경우 form 객체를 가져옴
    //console.log("YEAD");
    console.log("form : "+form_this);
    /*
    if(!check_submit(form_this)){
        return false;
    }*/
    var f_a_block=form_this;
    var title=f_a_block.title.value,
        subtitle=f_a_block.subtitle.value, //왜 값을 못찾는다고 뜰까
        body=f_a_block.body.value,
        tag=f_a_block.tag.value;
    
    $(function(){
        var table_idx=$(form_this).find('#table_idx').text();
        var modal_name=$(form_this).find('#modal_name').text();
        var operation=$(form_this).find('#operation').text();
        var $form=$(form_this);
        var ret_data={'table_idx':table_idx, 'modal_name':modal_name, 'operation':operation};
            // modal_name 넘겨줘서 뭐하려고..?
        $form.find('[name]').each(function(){ // form안에 name 선언된게 input과 textarea임
            var $this=$(this),
                name=$this.attr('name'),
                value=$this.val();
                  
             ret_data[name]=value;            
        });
        
        //console.log("IN JQUERY");
        console.log(ret_data); // 전달 데이터 수집 완료
       
       $.ajax({ // MODIFY, ADD 시 요청
           url:"operate_block_process.php",
           type:"post",
           data:ret_data,
           success:function(ret){ //닫을 이름을 넘겨주던가..?
               console.log("SUCCESSED : "+ret);
               //ret; //여기서 이제 새로고침 작업만 진행하면 됨
               modal_success(modal_name); // mk_modal에서 로드
               //location.reload(); // success modal에서 진행하기로!
           },
           error:function(request, status, error){
               console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
           }
       });
       
    });
    
}


