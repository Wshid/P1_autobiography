// 안쓰는 파일, 사용하지 말 것

$(function(){ 
//alert("Inner JQuery");
    var $blockContainer=$('.blockContainer'),
        name='<?php echo($_SESSION["name"]); ?>';

    get_block_json(name);
    
    function get_block_json(name){ // 함수가 한번도 불려진 적이 없대..
        
        console.log('called json');
        $.getJSON('json/blocks/block_'+name+'.json', function(data){
           var elements=""; // 배열이 아닌 string을 사용한다.
           console.log('json/blocks/block_'+name+'.json');
           $.each(data, function(i, item){
                var itemHTML="";
                if(i%3==0){
                    itemHTML+='<div class="columns_l4">'+
                                '<div class="row">';
                }
                //console.log($(itemHTML).get(0)); /* JQuery 객체화 하면, 임의대로 태그를 완성시킴 */
                itemHTML+='<div class="col-md-4">'+
                            '<h3>'+item.title+'</h3>'+
                            '<h5>'+item.subtitle+'</h5>'+
                        '</div>';
               
                if(i%3==2){ // idx가 0,1,2로 배분, 2라면 종료 
                   itemHTML+="</div></div>";
                }
                
                if((i==(data.length-1)) && (i%3!=2)){ // 세개가 다 안찼는데 종료시키려 한다면
                    var col_m='<div class="col-md-4"></div>',
                        col_end="</div></div>";
                    switch(i%3){
                        case 0:
                            itemHTML+=col_m+col_m+col_end;
                            break;
                        case 1:
                            itemHTML+=col_m+col_end;
                            break;
                        default:
                            console.log("ERROR");
                            break;
                    }
                }
                console.log(itemHTML);
               elements+=itemHTML; // JQuery 객체화를 피하기 : 단순 문자열로 처리한다.
               //console.log(elements); 
               /*for(i=0; i<$(itemHTML).length;i++){
                   elements.push($(itemHTML).get(i)); // 여기 부분에서 원활하게 값을 못가져옴, JQuery 객체화 하면, 임의대로 태그를 완성시킴 
               }*/ // 문제 해결, JQUERY 화를 하지 않음
               
               
               
            });
            //console.log(elements);
            $blockContainer.append(elements);
            
            box_activing();
            
        });
        
    }
    
    function box_activing(){  //block.js와 중복됨 //
        $('.columns_l4 .col-md-4').each(function(){
            console.log("BOX_ACTIVE");
            $(this).on('mouseover', function(){
                $(this).addClass('box_active');
            })
            .on('mouseleave', function(){
                $(this).removeClass('box_active');
            });
        });
    }
});
