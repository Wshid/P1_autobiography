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
                retL+=col_end;
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
    var table_idx_string=""; // table_idx로 modal 우측 상단에 값을 나타낼 것인지 판별

    if(button_type=="save_close"){ //2버튼형, 여기서는 ADD/MODIFY => ADD
        if(table_idx!=-1){ // modify 구분, -1이 아니라면!
            placeholder=false;
            idx_string="modify_"+id;
        }else{ // -1이라면 ADD 구문이라는 거
            placeholder=true;
            idx_string="add";//+id;
            console.log("IN"); // 여기에 왜 들어가지? 들어갈 이유가 없는데..?
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
    
    
    if(table_idx!=-1){ // modify라면, 인덱스 표시하기 위해 값 변경
        table_idx_string=table_idx;
    }
    
    //console.log("TABLE_IDX_STRING : "+table_idx_string);
    var form_name="form_"+idx_string;
    var modal_name="modal_"+idx_string;
    //console.log(modal_name);
    
    var ret=
          '<div class="modal fade" id="modal_'+idx_string+'" tabindex="-1" role="dialog" aria-labelledby="modal_'+idx_string+'_Label">'+
              '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                  '<div class="modal-header">'+
                      '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                      '<h3 class="modal-title" id="modal_'+idx_string+'_Label">'+title+'</h3>'+
                  '</div>'+
                  //'<form class="form_modify" id="form_'+idx_string+'" method="post" action="operate_block_process.php" Onsubmit="return check_submit(this);">'+ //submit시, 인자로 특정 변수 넘기는게 원활하지 않은ㄷ스 
                  '<form class="form_operation" id="form_'+idx_string+'">'+ //submit시, 인자로 특정 변수 넘기는게 원활하지 않은ㄷ스 
                    /* modify가 설정이 되면, table_idx라는 값을 받아올 수 있어야함 */
                     '<span id="table_idx">'+table_idx_string+'</span>'+
                    '<div class="modal-body">'+
                      '<h5>'+body_title+'</h5>'+
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
                                        '<button type="submit" class="btn btn-primary">Save changes</button>'+
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
function mk_modal_string(id, title, subtitle, body, tag, button_type, table_idx) // table_idx는 form 호출시 넘겨줄 값
{
    var idx_string="";
    
    if(button_type=="save_close"){ // 실상, 2버튼형, VIEW로 가정
        //idx_string="modal_view_"+id;
        alert("NOT DEVELOP");
    }else{ //4버튼형 // 
        idx_string="modal_view_"+id;
    }
    //idx_string="modal_view_"+id;
    
    var ret='<div class="modal fade" id="'+idx_string+'" tabindex="-1" role="dialog" aria-labelledby="'+idx_string+'_ModalLabel">'+
                '<div class="modal-dialog" role="document">'+
                  '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                        '<h3 class="modal-title" id='+idx_string+'_ModalLabel">'+title+'</h3>'+
                    '</div>'+
                  '<div class="modal-body">'+
                    '<h5>'+subtitle+'</h5>'+
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
                            ret+='<button type="button" class="btn btn-warning" onclick=modify_func('+id+')>Modify</button>'+
                                    '<button type="button" class="btn btn-danger" id=button_delete>Delete</button>'+
                                    '<button type="submit" class="btn btn-primary">Save changes</button>'+
                                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
                            break;
                            //Modify 버튼을 클릭하게 되면.. 해당 id에 맞는 모달을 호출할 수 있어야함
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
    if(button_type=="modify_delete"){
        ret+=mk_modal_form_string(id, "Modify your block", "Please Input below things",[title, subtitle, body, tag],'save_close', table_idx);
        // String 위치를 바꾸니까 됨!! Modal끼리 종속하는 무언가가 있는듯
    }
    return ret;
    
}

function modify_func(id){ // 두개 이상 넘기려 하니까 계속 에러남, 여기서 처리하기로
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