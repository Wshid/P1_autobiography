// JQUERY FILE
$(function(){
    //alert("Inner JQuery");
    var $blockContainer=$('.blockContainer'),
        line_end=1,
        line_start=2;
    var name, allBlock, filteredBlock;
    var filter_label=[],
        filter_label_count=[],
        all_tag="",
        filter_label_html="";
    var $filter=$('#form_filter'); 
    
        //$blockContainer.append(mk_modal_success("title")); // 필요 없는 부분
    
    $.ajax({
        url:'lib/get_name.php',
        type:'post',
        data:{'page':'block'},
        success:function(ret){
            console.log("block.js ajax success"); // 이렇게하면 데이터 받아 온 후에 실행됨
            ret=JSON.parse(ret);
            //console.log("RET : "+ret); // 잘 받아오
            //console.log(ret.page);
            get_block_json(ret.name, ret.page);
        },
        error:function(request, status, error){
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
    
    $('input[type=radio]').on('mouseover', function(){ /* 이부분이 먹지 않음 */
        console.log("ON");
        $(this).css('background-color','#d8deff'); 
    });
});