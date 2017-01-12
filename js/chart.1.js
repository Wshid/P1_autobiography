$(function(){

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
        type:'post',
        data:{'page':'chart'},
        success:function(ret){
            console.log("chart.js ajax success");
            //ret는 단순 문자열, json 데이터로 처리해 주어야함
            ret=JSON.parse(ret);
            console.log(ret.name); // 잘 받아오
            //console.log(ret.page);
            get_block_json(ret.name, ret.page); // 이렇게하면 데이터 받아 온 후에 실행됨
        },
        error:function(request, status, error){
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });

    
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

    
 });