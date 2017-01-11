$(function(){
    $('.filter-form input[type="radio"]').button({
        icons:{
            primary:'icon-radio'
        }
    });
        //alert("Inner JQuery");
    var $blockContainer=$('.blockContainer'),
        line_end=2,
        line_start=0;
    var name, allBlock, filteredBlock;
    var filter_label=[],
        filter_label_count=[],
        all_tag="",
        filter_label_html="";
    var $filter=$('#form_filter'); 
    
        //$blockContainer.append(mk_modal_success("title")); // 필요 없는 부분
    
    $.ajax({
        url:'lib/get_name.php',
        type:'get',
        data:{'name':''},
        success:function(ret){
            console.log("chart.js ajax success");
            get_block_json(ret); // 이렇게하면 데이터 받아 온 후에 실행됨
        },
        error:function(request, status, error){
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });

    function get_block_json(name){ 
        //console.log("called get_block_json");
        //alert("CALL");

      var modal4_string=["Title", "SubTitle", "Body", "Tag"]; 

      var elements=""; // plusHTML 삭제
      
      //console.log("IN name : "+name);
      $.getJSON('json/blocks/block_'+name+'.json', initBlock); // 여기서 이제 함수를 구현 3가지가 있음
            //console.log(elements);
        function initBlock(data){
            var length=data.length;

            console.log($filter);
            allBlock=data;
            filteredBlock=allBlock;
              
            addBlock();
            $filter.on('change', 'input[type="radio"]', filterBlock);
          
        }
        
        function addBlock(is_filtering){
            console.log("CALLED addblock");
            data=filteredBlock; // 구문 수정 필요
    
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
              
              var modalHTML=mk_modal_string(i, item.title, item.subtitle, item.body, tag, button_type, item.user_idx);
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
              itemHTML+=input_blank(i, length-1, col3_base, line_start, line_end);
              
    
              elements+=itemHTML; // JQuery 객체화를 피하기 : 단순 문자열로 처리한다.
    
          });
    
            if(!is_filtering){
              for(var tag_idx in filter_label){ // 여기에서 실행시키면 아무런 값이 들어가지 않음
                //console.log("IIN");
                //console.log("VA : "+filter_label[tag_idx]);
                filter_label_html+=
                  '<span class="form-item">'+
                    '<input type="radio" name="filter" id="filter-'+filter_label[tag_idx]+'" value="'+filter_label[tag_idx]+'">'+
                    '<label for="filter-'+filter_label[tag_idx]+'">'+filter_label[tag_idx]+'</label>'+
                  '</span>';
              }
              //console.log(filter_label_html);
              $filter.append(filter_label_html); // 실상 .html해도 되지만, 부하를 주지 않기 위함            
            }

    
            $blockContainer.html(elements); // append에서 html로 변경
             // SUCCESS 모달 생성, mk_modal에 지정
             box_activing();
          
        }
        
        function filterBlock(){ // 구문 추가하는 부분, 추가적인 수정이 필요할 듯
            var key=$(this).val();
            console.log("CALLED filterBlock");
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
            console.log(filteredBlock);
            init_filter();
            addBlock(true); // true라면 tag에 의한 filter 목록을 생성하지 않음
        }
        
        function init_filter(){
            //filter_label=[],
            //filter_label_count=[],
            //all_tag="",
            //filter_label_html="";
            elements=""; // 이것만 초기화 하면 됨
        }
    } // get_block_json 마지막 괄호

    
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

    
 });