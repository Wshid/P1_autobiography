function check_line(input, standard, option){ // 1: start, 2: end
    var ret=""
    if(input==standard){
        switch(option){
            case(1):
                ret+='<div class="columns_l4">'+
                '<div class="row">';                
                break;
            case(2):
                ret+="</div></div>";
                break;
        }
    }
    return ret;
}

function input_blank(idx, total_length, line_standard, line_start, line_end){
    var ret="";
    if((idx==total_length) && (line_standard!=line_end)){ // 세개가 다 안찼는데 종료시키려 한다면
        var col_m='<div class="col-md-4"><div class="row_inner"><h2>BLANK</h2></div></div>',
            col_end="</div></div>";
        switch(line_standard){
            case line_start: //2
                ret+=col_m+col_m+col_end;
                break;
            case line_end: //1
                ret+=col_end;
                break;
            default: //0
                ret+=col_m+col_end;
                break;
        }
    } 
    return ret;
}


/* return HTML String, form in modal,
 * option
 ** "save_close" // save change, close 버튼
 ** "modify_delete" // modify, delete, save change, close // 버튼
 */
function mk_modal_form_string(id, title, body_title, place_value, button_type, table_idx)
{   

    var placeholder=false;
    var idx_string=""; // form과 modal에서 사용함
    //var table_idx_string=""; // table_idx로 modal 우측 상단에 값을 나타낼 것인지 판별
    var operation=""; // ADD, MODIFY, DELETE 구분
            // ADD는 상관이 없으나, MODIFY/DELETE는 table_idx가 필요함

    if(button_type=="save_close"){ //2버튼형, 여기서는 ADD/MODIFY => ADD
        if(table_idx!=-1){ // modify 구분, -1이 아니라면!
            placeholder=false;
            idx_string="modify_"+id;
            operation="modify"
        }else{ // -1이라면 ADD 구문이라는 거
            placeholder=true;
            idx_string="add";//+id;
            operation="add"
            //console.log("IN"); // 
        }
    }else{
        //placeholder=false;
        //is_add=false;
        /* 추후 개발할 부분, 아직은 쓸모 없는 듯 */
        alert("NOT DEVELOP");
        return;
        //idx_string="modal_modify_"+id
    }
    //console.log("MK_MODAL TABLE IDX : "+table_idx);
    //place_value.push("a");
    for(var i=0; i<4;i++){
        if(placeholder){
            /* true라면 placeholder="값"이 들어가는 구조 */
            place_value[i]='placeholder="'+place_value[i]+'"';
            if(i==2)
                place_value[2]='<textarea class="form-control" name="body" rows=5 id="body" '+place_value[2]+' required></textarea>'
        }else{
            /* false라면 value="값"이 들어가는 구조 */
            if(i==2){
                place_value[2]='<textarea class="form-control" name="body" rows=5 id="body" required>'+place_value[2]+'</textarea>'
            }else{
                place_value[i]='value="'+place_value[i]+'"';
            }
        }
    }
    
    
    //if(table_idx!=-1){ // modify라면, 인덱스 표시하기 위해 값 변경
        //table_idx_string=table_idx;
    //}
    
    //console.log("TABLE_IDX_STRING : "+table_idx_string);
    var form_name="form_"+idx_string;
    var modal_name="modal_"+idx_string;
    //console.log(modal_name);
    
    var ret=
          '<div class="modal fade" id="'+modal_name+'" tabindex="-1" role="dialog" aria-labelledby="'+modal_name+'_Label">'+
              '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                  '<div class="modal-header">'+
                      '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                      '<h3 class="modal-title" id="'+modal_name+'_Label">'+title+'</h3>'+
                  '</div>'+
                  //'<form class="form_modify" id="form_'+idx_string+'" method="post" action="operate_block_process.php" Onsubmit="return check_submit(this);">'+ //submit시, 인자로 특정 변수 넘기는게 원활하지 않은ㄷ스 
                  '<form class="form_operation" id="'+form_name+'">'+ //submit시, 인자로 특정 변수 넘기는게 원활하지 않은ㄷ스 
                    /* modify가 설정이 되면, table_idx라는 값을 받아올 수 있어야함 */
                     '<span id="table_idx" class="in_info">'+table_idx+'</span>'+
                     '<span id="modal_name" class="in_info">'+modal_name+'</span>'+// moal name도 전달
                     '<span id="operation" class="in_info">'+operation+'</span>'+ // operation 인자 전달
                     '<span class="in_info title_answer">'+place_value[0]+'</span>'+
                    '<div class="modal-body">'+
                      //'<h5>'+body_title+'</h5>'+
                      '<span id="modal_form_body_title" style="display:inline-block">'+body_title+'</span>'+
                      '<div class="form-inner-container">'+
                          '<div class="form-group">'+
                              '<label for="label_title" class="col-xs-2 control-label">Title</label>'+
                              '<div class="col-xs-10">'+ //기존에 사용했던 방식과 다르게 여기선 grid를 이용하여 표현한다
                                '<input type="text" name="title" class="form-control" '+place_value[0]+' required>'+
                              '</div>'+
                          '</div>'+
                          '<div class="form-group">'+
                              '<label for="label_subtitle" class="col-xs-2 control-label">SubTitle</label>'+
                              '<div class="col-xs-10">'+
                                  '<input type="text" name="subtitle" class="form-control" '+place_value[1]+' required>'+//<!-- value는 실제 입력 값, placeholder는 예시 값(회색) -->'+
                              '</div>'+
                          '</div>'+
                          '<div class="form-group">'+
                              '<label for="label_body" class="col-xs-2 control-label">Body</label>'+
                              '<div class="col-xs-10">'+ //구문 변동이 필요함 textarea에서는 다르게 값을 가져와야 할 듯
                                  place_value[2]+
                              '</div>'+
                          '</div>'+
                          '<div class="form-group">'+
                              '<label for="label_tag" class="col-xs-2 control-label">Tag</label>'+
                              '<div class="col-xs-10">'+ // required 확인!
                                  '<input type="text" name="tag" class="form-control" '+place_value[3]+' required>'+//<!-- value는 실제 입력 값, placeholder는 예시 값(회색) -->'+
                              '</div>'+
                          '</div>'+                          
                        '</div>'+
                    '</div>'+
                    '<div class="modal-footer">';
                      //'<p>'+"$ARA"+'</p>';
                      switch(button_type){
                            case "save_close":                                                              
                                ret+='<button type="button" class="btn btn-primary button_submit_operation" onclick="return form_submit('+form_name+');">Save changes</button>'+ // 여기서 설정해야함
                                        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
                                        
                                break;
                            case "modify_delete":
                                ret+='<button type="button" class="btn btn-warning button_modify">Modify</button>'+ 
                                        '<button type="button" class="btn btn-danger button_delete">Delete</button>'+
                                        //'<button type="submit" class="btn btn-primary">Save changes</button>'+
                                        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
                                break;
                            default:
                                alert("ERROR!");
                                break;
                              
                      }
    ret+=
                    '</div>'+
                  '</form>'+
                  '</div>'+
                '</div>'+
              '</div>';
    
    return ret;
              
}

//modal2 : Input Form 형태가 아님 // 무조건 view
function mk_modal_string(id, title, subtitle, body, tag, button_type, table_idx, modified_type) // table_idx는 form 호출시 넘겨줄 값
{
    var edit_view_string="";
    
    if(button_type=="save_close"){ // 실상, 2버튼형, VIEW로 가정
        //idx_string="modal_view_"+id;
        alert("NOT DEVELOP");
    }else{ //4버튼형 // 
        edit_view_string="modal_view_"+id;
    }
    //idx_string="modal_view_"+id;
    //console.log(edit_view_string);
    var ret='<div class="modal fade" id="'+edit_view_string+'" tabindex="-1" role="dialog" aria-labelledby="'+edit_view_string+'_ModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                  '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                        '<h3 class="modal-title" id="'+edit_view_string+'_ModalLabel">'+title+'</h3>'+
                        '<span id="table_view_idx" class="in_info">'+table_idx+'</span>'+
                        '<span id="modal_view_name" class="in_info">'+edit_view_string+'</span>'+
                    '</div>'+
                  '<div class="modal-body view_modal-body">'+
                    '<h5>'+subtitle+'</h5>'+
                    '<hr>'+
                    '<p>'+body+'</p>'+
                  '</div>'+
                  '<div class="modal-footer">'+
                    '<p>'+tag+'</p>';
        
                    switch(button_type){
                        case "save_close":
                            ret+='<button type="submit" class="btn btn-primary">Save changes</button>'+
                                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
                            break;
                        case "modify_delete":
                           // console.log(modify_func("'+id+'_Modal" , "modify_'+id+'"));
                            ret+='<button type="button" class="btn btn-warning" onclick="modify_on_modal('+id+')">Modify</button>'+
                                '<button type="button" class="btn btn-danger" id=button_delete onclick="delete_on_modal('+edit_view_string+')">Delete</button>'+
                                '<button type="submit" class="btn btn-primary">Save changes</button>'+
                                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
                            break;                            //Modify 버튼을 클릭하게 되면.. 해당 id에 맞는 모달을 호출할 수 있어야함
                        default:
                            //console.log("NOT");
                            alert("ERROR!");
                            break;
                          
                    }
    ret+=
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>';
    if(button_type==="modify_delete" && modified_type==="modal"){
        ret+=mk_modal_form_string(id, "Modify your block", "Please Input below things",[title, subtitle, body, tag],'save_close', table_idx);
        // String 위치를 바꾸니까 됨!! Modal끼리 종속하는 무언가가 있는듯
    }
    return ret;
    
}



function modify_on_modal(id){ // 두개 이상 넘기려 하니까 계속 에러남, 여기서 처리하기로
    var close_modal='#modal_view_'+id, // 닫을 Modal
        open_modal='#modal_modify_'+id; // 새로 띄울 Modal
    //console.log("MODAL_REAL_NAME : "+open_modal);
    $(function(){
       $(close_modal).modal('toggle');
        //$(open_modal).modal('toggle'); //그냥 이렇게 바로 해도 됨
        setTimeout(function(){
            $(open_modal).modal('show'); // 1000ms 뒤에 open_modal을 open 한다
        },500);            
    }); 

}

function mk_modal_success(title, body){
    var ret=
    '<div class="modal fade" id="modal_success" tabindex="-1" role="dialog" aria-labelledby="modal_success_label" aria-hidden="true">'+
      '<div class="modal-dialog">'+
        '<div class="modal-content">'+
          '<div class="modal-header">'+
            //'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="modal_success_label">'+title+'</h4>'+
          '</div>'+
          '<div class="modal-body">'+
            '<h5>'+body+'</h5>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-default" id="button_close_refresh">Close</button>'+
            //<button type="button" class="btn btn-primary">Save changes</button>
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    
    return ret;
}

function delete_on_modal(edit_view_string){ // delete의 경우 HTML 객체를 받아옴 
    // table_idx가 필요함
    // 이게 폼형태가 아님, 그냥 객체에서 불러오면 될 듯
    //var table_idx=$('.table_view_idx').text();
    $(function(){
        
        var id=edit_view_string.getAttribute('id');
        var table_idx, data_format;

        if(id==='word_container'){ // Word에서 나온 Container일때
    
            table_idx=$(edit_view_string).find('#table_view_idx').text();
            //console.log("TABLE : "+table_idx);
            data_format={'table_idx':table_idx, 'operation':'delete'};    
            $.ajax({
                url:"operate_word_process.php",
                type:'post',
                data:data_format,
                success:function(ret){
                    //console.log(ret);
                    modal_success(null); //닫을 modal name도 알려줘야 함
                },
                error:function(request, status, error){
                   console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                }
            });
        }else{ // 일반 modal일 때
            var $modal=$(edit_view_string);
            var table_idx=$modal.find('#table_view_idx').text();
            data_format={'table_idx':table_idx, 'operation':'delete'};    
            var close_modal_name=$modal.find('#modal_view_name').text();
            $.ajax({
                url:"operate_block_process.php",
                type:'post',
                data:data_format,
                success:function(ret){
                    console.log(ret);
                    modal_success(close_modal_name); //닫을 modal name도 알려줘야 함
                },
                error:function(request, status, error){
                   console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                }
            }); 
        }
    });
    
}

function check_delete(object){ // delete의 경우 HTML 객체를 받아옴 
    // table_idx가 필요함
    // 이게 폼형태가 아님, 그냥 객체에서 불러오면 될 듯
    //var table_idx=$('.table_view_idx').text();
    
    //console.log($(object));
    var $prepend=$('body').find('.modal_check_delete_prepend');
    
    $(function(){
        
        //var id=object.getAttribute('id');
        var answer=$(object).find('.title_answer').text();
        var table_idx=$(object).find('#table_view_idx').text();
        //console.log(answer);
        var modal_html=mk_modal_check_delete(answer, table_idx); //
        //console.log(modal_html);
        
        $prepend.html(modal_html); // body의 특정 위치에 삽입할 수 있도록 함

        //console.log($('body').find(modal_html));
        setTimeout(function(){ // 꼭 Timeout이라는 Term이 있어야 잘 열림
            $prepend.find('.modal').modal('show'); 
            //$(modal_html).modal('show'); // 이것만으로도 자동적으로 body 이후에 추가됨
        }, 500);
        /*
        setTImeout을 통해 show를 하게 되면 자동적으로 body에 객체가 추가됨
        따라서 prepend와 같이 특정 위치에 추가하고 싶다면, 해당 지역에 html 구문 추가 후,
        modal을 사용하여 호출하면 됨*/
        
    });    
}


function mk_modal_check_delete(answer, table_idx){
    //console.log("IN CHECK DELETE : "+answer);
    var modal_name='modal_check_delete',
        form_name='form_word_check_delete',
        place_holder=answer;
    
    var operation='delete';
    
    //console.log("CALLED");
    // modal에 form이 껴있는 형태
    var ret=
    '<div class="modal fade" id="'+modal_name+'" tabindex="-1" role="dialog" aria-labelledby="'+modal_name+'_label" aria-hidden="true">'+
        '<div class="modal-dialog">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+
                //'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                    '<h4 class="modal-title" id="'+modal_name+'_label">Really?</h4>'+
                '</div>'+
                '<form class="form_operation" id="'+form_name+'" answer="'+answer+'">'+
                    '<span class="in_info" name="answer_string">'+answer+'</span>'+
                    '<span class="in_info" id="operation">'+operation+'</span>'+
                    '<span class="in_info" id="table_idx">'+table_idx+'</span>'+
                    '<div class="modal-body">'+
                        '<h5>This work will not rollback.\n If yes, Input <code>'+answer+'</code> on bottom box.</h5>'+
                        '<div class="form-group">'+
                            '<input type="text" name="input_check_delete_string" class="form-control" placeholder="'+place_holder+'" required>'+
                        '</div>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-primary" onclick="return check_delete_submit('+modal_name+');">Submit</button>'+
                        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                    '</div>'+
                '</form>'+
            '</div>'+
        '</div>'+
    '</div>';
    
    return ret;
}

function modal_success(close_modal_name){ // 두개 이상 넘기려 하니까 계속 에러남, 여기서 처리하기로
    
    //console.log("close modal_name : "+close_modal_name);
    if(close_modal_name===null || close_modal_name===""){ // 같은 null이어도 string으로 받는경우가 있음
        var open_modal='#modal_success';
        $(function(){
            //$(open_modal).modal('toggle'); //그냥 이렇게 바로 해도 됨
            setTimeout(function(){
                $(open_modal).modal('show'); // 1000ms 뒤에 open_modal을 open 한다
            },500);
            
            $('#button_close_refresh').on('click',function(){
                location.reload(true); // 여기서 리로드
                // 솔직히 여기서 실행시키는 부분은 DELETE나 ADDBLOCK시의 창임
            });
        }); 
    }else{
        var close_modal_id='#'+close_modal_name, // 닫을 Modal
            open_modal='#modal_success' // 새로 띄울 Modal
        //console.log("MODAL_REAL_NAME : "+open_modal);
        $(function(){
           $(close_modal_id).modal('toggle');
            //$(open_modal).modal('toggle'); //그냥 이렇게 바로 해도 됨
            setTimeout(function(){
                $(open_modal).modal('show'); // 1000ms 뒤에 open_modal을 open 한다
            },500);
            
            $('#button_close_refresh').on('click',function(){
                location.reload(); // 여기서 리로드
                // 솔직히 여기서 실행시키는 부분은 DELETE나 ADDBLOCK시의 창임
            });
        }); 
    }


}

// add_or_modify class를 추가하여 작업 시작
function mk_word_view_string(id, place_value, table_idx) // table_idx는 form 호출시 넘겨줄 값
{
    //console.log("place_value : "+place_value);
    var ret=
            '<div class="word_container" id="word_container">'+
                '<div class="word_title">'+
                    '<div class="word_title_string">Please Input Some Informations</div>'+
                    '<span id="table_view_idx" class="in_info">'+table_idx+'</span>'+
                '</div>'+
                '<hr>'+
                '<div class="word_body">'+
                    '<div class="row">'+
                        '<div class="col-md-2">'+
                            '<div class="word_menu">Title</div>'+
                        '</div>'+
                        '<div class="col-md-7">'+
                            '<div class="word_value title_answer">'+place_value[0]+'</div>'+
                        '</div>'+
                    '</div>'+                
                    '<div class="row">'+
                        '<div class="col-md-2">'+
                            '<div class="word_menu">Subtitle</div>'+
                        '</div>'+
                        '<div class="col-md-7">'+
                            '<div class="word_value">'+place_value[1]+'</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<div class="col-md-2">'+
                            '<div class="word_menu">Body</div>'+
                        '</div>'+
                        '<div class="col-md-7">'+
                            '<p class="word_value">'+place_value[2]+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<div class="col-md-2">'+
                            '<div class="word_menu">Blocks</div>'+
                        '</div>'+
                        '<div class="col-md-7">'+
                            '<p class="word_value">'+place_value[3]+'</p>'+
                        '</div>'+
                    '</div>'+                    
                '</div>'+
                '<hr>'+
                '<div class="word_footer">'+
                    '<button type="button" class="btn btn-warning word_modify">Modify</button>'+
                    '<button type="button" class="btn btn-danger" id=button_delete onclick="check_delete(word_container)">Delete</button>'+
                    '<button type="button" class="btn btn-default word_close">Close</button>'+
                '</div>'+
            '</div>';

    //console.log(ret);
    return ret;
    
}

function mk_word_form_string(id, place_value, table_idx) // place_value는 1*4 배열
{   

    var placeholder=false;

    //var table_idx_string=""; // table_idx로 modal 우측 상단에 값을 나타낼 것인지 판별
    var operation=""; // ADD, MODIFY, DELETE 구분
            // ADD는 상관이 없으나, MODIFY/DELETE는 table_idx가 필요함

    if(table_idx!=-1){ // modify 구분, -1이 아니라면!
        placeholder=false;
        operation="modify";
    }else{ // -1이라면 ADD 구문이라는 거
        placeholder=true;
        operation="add";
        //console.log("IN"); // 
    }
    
    for(var i=0; i<4;i++){
        if(placeholder){
            /* true라면 placeholder="값"이 들어가는 구조 */
            place_value[i]='placeholder="'+place_value[i]+'"';
            if(i==2)
                place_value[2]='<textarea class="form-control word_value" name="body" rows=15 id="body" '+place_value[2]+' required></textarea>'
        }else{
            /* false라면 value="값"이 들어가는 구조 */
            if(i==2){
                place_value[2]='<textarea class="form-control word_value" name="body" rows=15 id="body" required>'+place_value[2]+'</textarea>'
            }else{
                place_value[i]='value="'+place_value[i]+'"';
            }
        }
    }

    var form_name="form_word";
    //console.log(modal_name);
    
    var ret=
        '<div class="word_container">'+
            '<form class="form_operation" id="'+form_name+'">'+ //submit시, 인자로 특정 변수 넘기는게 원활하지 않은ㄷ스 
            /* modify가 설정이 되면, table_idx라는 값을 받아올 수 있어야함 */
                '<div class="word_title">'+
                    '<div class="word_title_string">Please Input Some Informations</div>'+
                    '<span id="table_idx" class="in_info">'+table_idx+'</span>'+
                    '<span id="operation" class="in_info">'+operation+'</span>'+ // operation 인자 전달
                  //'<h5>'+body_title+'</h5>'+
                '</div>'+
                '<hr>'+
                '<div class="word_body">'+
                    '<div class="form-group">'+
                        '<label for="label_title" class="col-md-1 word_menu">Title</label>'+
                        '<div class="col-md-8">'+ //기존에 사용했던 방식과 다르게 여기선 grid를 이용하여 표현한다
                        '<input type="text" name="title" class="form-control word_value" '+place_value[0]+' required>'+
                        '</div>'+
                    '</div>'+
                    '<div class="form-group">'+
                        '<label for="label_subtitle" class="col-md-1 word_menu">SubTitle</label>'+
                        '<div class="col-md-8">'+
                            '<input type="text" name="subtitle" class="form-control word_value" '+place_value[1]+' required>'+//<!-- value는 실제 입력 값, placeholder는 예시 값(회색) -->'+
                        '</div>'+
                    '</div>'+
                    '<div class="form-group">'+
                        '<label for="label_body" class="col-md-1 word_menu">Body</label>'+
                        '<div class="col-md-8">'+ //구문 변동이 필요함 textarea에서는 다르게 값을 가져와야 할 듯
                            place_value[2]+
                        '</div>'+
                    '</div>'+
                    '<div class="form-group">'+
                        '<label for="label_blocks" class="col-md-1 word_menu">Blocks</label>'+
                        '<div class="col-md-8">'+ // required 확인!
                            '<input type="text" name="blocks" class="form-control word_value word_blocks" '+place_value[3]+' readonly>'+//<!-- value는 실제 입력 값, placeholder는 예시 값(회색) -->'+
                        '</div>'+
                        '<div class="col-md-2">'+
                            '<button type="button" class="btn btn-danger word_blocks_reset">Reset</button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<hr>'+
                '<div class="word_footer">'+
                    '<button type="button" class="btn btn-primary button_submit_operation" onclick="return form_submit('+form_name+');">Save changes</button>'+ // 여기서 설정해야함
                    '<button type="button" class="btn btn-default word_close">Close</button>'+
                '</div>'+
            '</form>'+
        '</div>';
        
        // 실상 block의 경우 나타나면 안됨

    
    return ret;
              
}


function aside_function(form){
    
    
    var name="";
    var $form=$(form);
    var input=$form.find('input[name="title"]').val();
    var $listContainer=$('.aside_list_container');
    var $viewContainer=$('.aside_view_container');
    var $editContainer=$('.editContainer');
    
    var duration=1000,
        change_term=500,
        easing='easeInOutExpo';
    
    //console.log("input[0] : "+input[0]);
    
    //console.log("view : "+$viewContainer);
    //$viewContainer.hide();
    
    if(input[0]==="#"){
        var type="tag";
    }else{
        var type="title";
    }
    
    //console.log("type : "+type);
    
    $(function(){
        $.ajax({ // 수정 필요
            url:'lib/get_name.php',
            type:'post',
            data:{'page':'word'},
            success:function(ret){
                console.log("word.js ajax success");
                //ret는 단순 문자열, json 데이터로 처리해 주어야함
                ret=JSON.parse(ret);
                name=ret.name; // 이름 초기화
                
                $.getJSON('json/blocks/block_'+name+'.json', function(data){
                   var elements=[];
                   
                   $.each(data, function(i, item){
                       var innerHTML="";
                       
                       if(type=="tag"){
                           //console.log("tag in");
                           var tag_raw=item.tag;
                            for(var tag_idx in tag_raw){
                                if(tag_raw[tag_idx]==input){
                                    //console.log("item.tag : "+item.tag);
                                    innerHTML=
                                        '<div class="aside_list">'+
                                            '<span class="in_info view_subtitle">'+item.subtitle+'</span>'+
                                            '<span class="in_info view_body">'+item.body+'</span>'+
                                            '<div class="aside_list_block_title view_title">'+item.title+'</div>'+
                                            '<div class="aside_list_footer">'+
                                                '<div class="view_tag">'+item.tag+'</div>'
                                            '</div>'+
                                        '</div>';
                                    elements.push($(innerHTML).get(0));
                                    break;
                                }
                            }                           
                       }else{
                           if(item.title==input){
                               innerHTML=
                                    '<div class="aside_list">'+
                                        '<span class="in_info view_subtitle">'+item.subtitle+'</span>'+
                                        '<span class="in_info view_body">'+item.body+'</span>'+
                                        '<div class="aside_list_block_title view_title">'+item.title+'</div>'
                                        '<div class="aside_list_footer>'+
                                            '<span class="view_tag">'+item.tag+'</span>'
                                        '</div>'+
                                    '</div>';
                                elements.push($(innerHTML).get(0));
                            }
                        }
                        
                        //console.log(innerHTML);

                        
                       
                    });
                    
                    if(elements.length===0){ // 일치하는 내용이 아무것도 없을때
                        $listContainer.html('<div class="not_exist_block">not exist block</div>');
                        var height=$('.aside_list_container').outerHeight(true)
                                    -$('.head_container').outerHeight(true)
                                    -$('.search_container').outerHeight(true)
                                    -$('.not_exist_block').outerHeight(true);
                        //console.log(height);
                        $('.not_exist_block').css({'margin-top':height/2+'px'});
                        //console.log($('.not_exist_block'));
                    }else{
                        $listContainer.html(elements);    
                    }
                    
                    $viewContainer.hide();
                    $listContainer.fadeIn(duration, easing);
                    
                    $listContainer.find('.aside_list').on('click', function(){
                        //console.log("clicked Aside list");
                        var $this=$(this);
                        var view_title=$this.find('.view_title').text(),
                            view_subtitle=$this.find('.view_subtitle').text(),
                            view_body=$this.find('.view_body').text(),
                            view_tag=$this.find('.view_tag').text();
                            
                        var inner_html=
                            '<div class="view_con_header">'+view_title+'</div>'+
                            '<hr>'+
                            '<div class="view_con_body">'+
                                '<div class="view_con_subtitle">'+view_subtitle+'</div>'+
                                '<p class="view_con_in_body">'+view_body+'</p>'+
                            '</div>'+
                            '<div class="view_con_footer">'+
                                '<div class="view_con_tag">'+view_tag+'</div>'+
                                '<button type="button" class="btn btn-default btn-sm button_aside_add">Add in Word</button>'+
                            '</div>';
                        
                        $viewContainer.html(inner_html);
                        $listContainer.fadeOut(change_term, function(){
                            $viewContainer.fadeIn(duration, easing);    
                        });
                        
                        $viewContainer.find('.button_aside_add').on('click', function(){
                            //console.log("clicked");
                            var $blocks=$editContainer.find('.word_blocks');
                            var title=$viewContainer.find('.view_con_header').text(),
                                tag=$viewContainer.find('.view_con_tag').text();
                                
                            var prev=$blocks.val();
                            var ret=prev+" "+title;
                            ret.trim();
                            
                            $blocks.val(ret);
                        });
                    });
                    


                   
                });
                
            },
            error:function(request, status, error){
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
            }
        });
        
        $editContainer.on('click', '.word_blocks_reset', function(){ // RESET 버튼 구현 완료
           //console.log("clicked reset button");
           $editContainer.find('.word_blocks').val("");
        });        
        

    });    

    
    /*
    $.ajax({ // 수정 필요
        url:'lib/get_name.php',
        type:'post',
        data:{'page':null},
        success:function(ret){
            console.log("get_name process success");
            //ret는 단순 문자열, json 데이터로 처리해 주어야함
            ret=JSON.parse(ret); // 이름 초기화
            name=ret.name;

            
        },
        error:function(request, status, error){
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });       
    $.getJSON('json/blocks/block_'+name+'.json', function(data){
        
    });*/
    
}