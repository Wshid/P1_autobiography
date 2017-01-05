function check_submit(form_this){ //일단 가져오긴 하는듯
// form add block을 가르키는 변수
    var f_a_block=form_this;
    var title=f_a_block.title.value,
        subtitle=f_a_block.subtitle.value, //왜 값을 못찾는다고 뜰까
        body=f_a_block.body.value,
        tag=f_a_block.tag.value;
    //console.log("TITLE : "+title);
    
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


function form_submit(form_this){
    //console.log("YEAD");
    
    if(!check_submit(form_this)){
        return false;
    }
    var f_a_block=form_this;
    var title=f_a_block.title.value,
        subtitle=f_a_block.subtitle.value, //왜 값을 못찾는다고 뜰까
        body=f_a_block.body.value,
        tag=f_a_block.tag.value;
    
    $(function(){
        var table_idx=$(form_this).find('#table_idx').text();
        var $form=$(form_this);
        var ret_data={'table_idx':table_idx};
        
        $form.find('[name]').each(function(){ // form안에 name 선언된게 input과 textarea임
            var $this=$(this),
                name=$this.attr('name'),
                value=$this.val();
                  
             ret_data[name]=value;            
        });
        
        console.log("IN JQUERY");
        console.log(ret_data); // 전달 데이터 수집 완료
       
       $.ajax({ 
           url:"operate_block_process.php",
           type:"post",
           data:ret_data,
           success:function(ret){
               console.log("SUCCESSED : "+ret);
           },
           error:function(request, status, error){
               console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
           }
       });
       
    });
    
}

        $('.form_operation').each(function(){ // 여기부분 자체가 안먹힘
          var $form=$(this);
          var url="operate_block_process.php";
          var method='post';
          console.log("RUN");
          $form.on('click','.button_submit_operation', function(){// 각 form_operation 폼 들에서 submit을 찾음
            var $this=$(this);
            if(!check_submit()){ //여기 함수 안먹는듯 함
              alert("ERROR");
              return false;
            }
            console.log("RUNIT");
            var data={};
            
            $this.find('[name]').each(function(){
              var $this=$(this),
                  name=$this.attr('name'),
                  value=$this.val();
                  
              data[name]=value;
            });
            
            $.ajax({
              url:url,
              type:method,
              data:data,
              success:function(ret){
                console.log(ret);
              }
              
            });
            
            return false;
            
          });
          
        });