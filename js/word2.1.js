/* block_chart의 내용 수정 */

function get_word_block_json(name, page){ 
    //console.log("called get_block_json");
    //alert("CALL");

    var $blockContainer=$('.blockContainer'),
        $editContainer=$('.editContainer'),
        $viewContainer=$('.viewContainer'),
        line_end=1,
        line_start=2;
    var name, allWord, filteredWord;
    var filter_label=[],
        filter_label_count=[],
        all_tag="",
        filter_label_html="";
    var $filter=$('#form_filter'); 
    
    
    console.log("GET_BLOCK_PAGE : "+page);
    //if(page==='block'){
        var plusTitle="ADD YOUR AUTOBIOGRAPHY! :)",
            plusSub="Some Information Required",
            id_add_string="add";
        var plusHTML=    
                    '<div class="columns_l4">'+
                        '<div class="row">'+
                          '<div class="col-md-4">'+ // modal 관련 내용 제거
                            '<div id="plus_block" class="row_inner add_or_modify">'+ /* add_block으로 명명하면 어디선가 충돌이 나는 듯 하다 */
                              '<h3>'+plusTitle+'</h3>'+
                              '<h5>'+plusSub+'</h5>'+
                            '</div>'+
                          '</div>'; // div가 두개 모자름, 추후 추가함

    
    var elements=plusHTML; // elements : block_container에 지정할 변수
    var edit_string="";
    
      
    //console.log("IN name : "+name);
    $.getJSON('json/words/word_'+name+'.json', initWord); // 여기서 이제 함수를 구현 3가지가 있음
            //console.log(elements);
        function initWord(data){
            var length=data.length;
    
            //console.log($filter);
            allWord=data;
            filteredWord=allWord;
            
            if(page==='block'){
                addWord(true);
            }else{
                addWord();
                $filter.on('change', 'input[type="radio"]', filterWord);
            }
            
          
        }
        
        function addWord(is_filtering){
            //console.log("CALLED addword");
            var data=filteredWord; // 구문 수정 필요
    
            $.each(data, function(i, item){
                var itemHTML="";
                //var modifyHTML="";
                var button_type="modify_delete"
                var idx_string=""
                var col3_base=i%3; // 3열 체크시 사용한다.
                
                
                /*
                var block_raw=item.block; //
                
                //console.log(tag_raw);
                var tag="";
                
                for(var tag_idx in tag_raw){
                    tag+=tag_raw[tag_idx]+" "; // tag는 block에 나타낼때 사용
                    exist=all_tag.indexOf(tag_raw[tag_idx]);
                    if(exist==-1){
                      filter_label.push(tag_raw[tag_idx]);
                      all_tag+=" "+tag;
                    }else{
                      continue;
                    }
                }
              */ // tag가 필요 없음
              
              //tag=tag.trim(); // tag는 각각 공백으로 구분되어 있으니까.. 이것만 잘 활용하면 될 듯
              
              //console.log(filter_label);
              
              //var modalHTML=mk_modal_string(i, item.title, item.subtitle, item.body, '', button_type, item.user_idx, 'modal');
              var word_idx=item.user_idx; //form에 임의 저장할 값
              
              
              itemHTML+=check_line(col3_base, line_start, 1); // 1 : check_line_start
              
              idx_string="modal_view_"+i;
              itemHTML+='<div class="col-md-4">'+//data-toggle="modal" data-target="#'+idx_string+'">'+ /* 버튼 없이도 됨! 이득! :) */
                          '<div class="row_inner word_block">'+
                            '<h3>'+item.title+'</h3>'+
                            '<h5>'+item.subtitle+'</h5>'+
                          '</div>'+
                      '</div>';//+modalHTML;        
             
              itemHTML+=check_line(col3_base, line_end, 2);
              //itemHTML+=input_blank(i, length-1, col3_base, line_start, line_end); // 제거
              
    
              elements+=itemHTML; // JQuery 객체화를 피하기 : 단순 문자열로 처리한다.
    
            });
            
            if(page==='chart'){
                if(!is_filtering){
                  for(var tag_idx in filter_label){ // 여기에서 실행시키면 아무런 값이 들어가지 않음
                    //console.log("IIN");
                    //console.log("VA : "+filter_label[tag_idx]);
                    filter_label_html+=
                    '<div class="radio_button_customize">'+
                      '<span class="form-item">'+
                        '<input type="radio" name="filter" id="filter-'+filter_label[tag_idx]+'" value="'+filter_label[tag_idx]+'">'+
                        '<label for="filter-'+filter_label[tag_idx]+'">'+filter_label[tag_idx]+'</label>'+
                      '</span>'+
                    '</div>';
                  }
                  //console.log(filter_label_html);
                  $filter.append(filter_label_html); // 실상 .html해도 되지만, 부하를 주지 않기 위함            
                }
                
            }

            $blockContainer.html($(elements)); // append에서 html로 변경,
            //console.log($(elements));

            
            //if(page==='block'){
                $blockContainer.append(mk_modal_success("title"));     
            //} // SUCCESS 모달 생성, mk_modal에 지정
            box_activing();
          
        }
        
        function filterWord(){ // 구문 추가하는 부분, 추가적인 수정이 필요할 듯
            var key=$(this).val();
            //console.log("CALLED filterBlock");
            filteredWord=[];
          
            if(key==='all'){
              filteredWord=allWord;
            }else{
                filteredWord=$.grep(allWord, function(item){ // JSON data가 들어온다고 가정
                    var tags=item.tag; // item = 각 블록, item.tag 그 배열
                    var ret=false; //리턴할 값
                    for(var tag_idx in tags){ // 해당 블록에 있는 각 태그에 대하여
                        if(tags[tag_idx]===key){ // 각 태그가 key와 일치한다면
                            ret=true; // 반환값에 true를 놓고 반복문을 종료한다.
                            break; // 아닐경우 false가 들어가 리턴된다.
                        }
                    }
                return ret; 
                });
            }
            //console.log(filteredWord);
            init_filter();
            addWord(true); // true라면 tag에 의한 filter 목록을 생성하지 않음
        }
        /*
        console.log($('.filter-form').get(0));
        $('.filter-form label').checkboxradio({
            icons:false
        }); // 진행중
        */
        
        function init_filter(){
            //filter_label=[],
            //filter_label_count=[],
            //all_tag="",
            //filter_label_html="";
            elements=""; // 이것만 초기화 하면 됨
        }
        

        
}      // get_block_json 마지막 괄호

function get_word_view_edit_json(name, i){
    var title, subtitle, body, blocks, table_idx;
    var view_string, edit_string;
    //console.log("i : "+i);
    
    var $blockContainer=$('.blockContainer'), // ajax 이후나 지금이나 잡는건 같음
        $editContainer=$('.editContainer'),
        $viewContainer=$('.viewContainer');
    
    var duration=1000,
        change_term=500;
    
    $.getJSON('json/words/word_'+name+'.json', function(data){ //이거 자체도 AJAX 함수
        //console.log("data0\n"+data[0].title);
        title=data[i].title;
        subtitle=data[i].subtitle;
        body=data[i].body;
        blocks=data[i].blocks;
        table_idx=data[i].user_idx;
        console.log([title, subtitle, body, blocks]);
        view_string=mk_word_view_string(i,[title, subtitle, body, blocks], table_idx);
        edit_string=mk_word_form_string(i, [title, subtitle, body, blocks], table_idx);

        $editContainer.html(edit_string);
        $viewContainer.html(view_string);
        
        console.log($viewContainer);
        
        setTimeout(function(){
            console.log("ON");
            
            $blockContainer.removeClass('word_active');
            $blockContainer.addClass('word_deactive');
            $viewContainer.addClass('word_active', duration, 'easeInOutElastic');
            $viewContainer.removeClass('word_deactive');
        }, change_term);                

    
        
    });
}

    
function box_activing(){  //block.js와 중복됨 //
    $('.columns_l4 .col-md-4').each(function(){
        //console.log("BOX_ACTIVE");
        $(this).on('mouseover', function(){
            $(this).addClass('box_active');
        })
        .on('mouseleave', function(){
            $(this).removeClass('box_active');
        });
    });
}

$('input[type=radio]').on('mouseover', function(){ /* 이부분이 먹지 않음 */
    console.log("ON");
    $(this).css('background-color','#d8deff'); 
});