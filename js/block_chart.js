function get_block_json(name, page){ 
    //console.log("called get_block_json");
    //alert("CALL");

    var $blockContainer=$('.blockContainer'), //변수 선언부를 get_block_json 내부로 넣어야할 수도
        line_end,
        line_start;
    var name, allBlock, filteredBlock;
    var filter_label=[],
        filter_label_count=[],
        all_tag="",
        filter_label_html="";
    var $filter=$('#form_filter'); 
    
    if(page==='block'){
        line_end=1;
        line_start=2;
    }else{
        line_end=2;
        line_start=0;
    }
    console.log("GET_BLOCK_PAGE : "+page);
    if(page==='block'){
        var plusTitle="ADD YOUR BLOCK! :)",
            plusSub="Some Information Required",
            id_add_string="add";
        var plusHTML='<div class="columns_l4">'+
                        '<div class="row">'+
                          '<div class="col-md-4" data-toggle="modal" data-target="#modal_'+id_add_string+'">'+ /* 버튼 없이도 됨! 이득! :) */
                            '<div class="row_inner" id="plus_block">'+ /* add_block으로 명명하면 어디선가 충돌이 나는 듯 하다 */
                              '<h3>'+plusTitle+'</h3>'+
                              //'<span id="modal_form_subtitle" style="display:inline-block">'+plusSub+'</span>'+
                              '<h5>'+plusSub+'</h5>'+
                            '</div>'+
                          '</div>'; // div가 두개 모자름, 추후 추가함
        var modal4_string=["Title", "SubTitle", "Body", "Tag"]; 
        plusHTML+=mk_modal_form_string(id_add_string, plusTitle, plusSub, modal4_string, "save_close", -1); // is_modify=-1
    } // block일 경우 plusHTML을 사용한다.
    
    if(page==='block'){
        var elements=plusHTML; // plusHTML   
    }else{
        var elements="";
    }
      
      console.log("IN name : "+name);
     $.getJSON('json/blocks/block_'+name+'.json', initBlock); // 여기서 이제 함수를 구현 3가지가 있음
            //console.log(elements);
        function initBlock(data){
            var length=data.length;
    
            //console.log($filter);
            allBlock=data;
            filteredBlock=allBlock;
            
            if(page==='block'){
                addBlock(true);
            }else{
                addBlock();
                $filter.on('change', 'input[type="radio"]', filterBlock);
            }
            
          
        }
        
        function addBlock(is_filtering){
            //console.log("CALLED addblock");
            var data=filteredBlock; // 구문 수정 필요
    
            $.each(data, function(i, item){
                var itemHTML="";
                //var modifyHTML="";
                var button_type="modify_delete"
                var idx_string=""
                var col3_base=i%3; // 3열 체크시 사용한다.
                var tag_raw=item.tag; // tag를 배열 형태로 가져옴
                
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
              
              tag=tag.trim(); // tag는 각각 공백으로 구분되어 있으니까.. 이것만 잘 활용하면 될 듯
              
              //console.log(filter_label);
              
              var modalHTML=mk_modal_string(i, item.title, item.subtitle, item.body, tag, button_type, item.user_idx, 'modal');
              var block_idx=item.user_idx; //form에 임의 저장할 값
              
              
              itemHTML+=check_line(col3_base, line_start, 1); // 1 : check_line_start
              
              idx_string="modal_view_"+i;
              itemHTML+='<div class="col-md-4" data-toggle="modal" data-target="#'+idx_string+'">'+ /* 버튼 없이도 됨! 이득! :) */
                          '<div class="row_inner">'+
                            '<h3>'+item.title+'</h3>'+
                            '<h5>'+item.subtitle+'</h5>'+
                          '</div>'+
                      '</div>'+modalHTML;        
             
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
/*
            for(var i=0;i<$elements.length;i++){
                jq.push($elements.get(i));
                //console.log(jq);
            }
*/
            $blockContainer.html($(elements)); // append에서 html로 변경,
            //console.log($(elements));

            
            //if(page==='block'){
                $blockContainer.append(mk_modal_success("Information", "Operation Block Successed"));     
            //} // SUCCESS 모달 생성, mk_modal에 지정
            box_activing();
          
        }
        
        function filterBlock(){ // 구문 추가하는 부분, 추가적인 수정이 필요할 듯
            var key=$(this).val();
            //console.log("CALLED filterBlock");
            filteredBlock=[];
          
            if(key==='all'){
              filteredBlock=allBlock;
            }else{
                filteredBlock=$.grep(allBlock, function(item){ // JSON data가 들어온다고 가정
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
            //console.log(filteredBlock);
            init_filter();
            addBlock(true); // true라면 tag에 의한 filter 목록을 생성하지 않음
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