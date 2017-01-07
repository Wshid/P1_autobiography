<?php
  session_start();
  require("lib/db.php");
  require("load_block_process.php");
  login_check();
  load_block_process();
  
?>

<!DOCTYPE html>
<html lang="kor">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/favicon.ico">

    <title>Jumbotron Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/block.css" rel="stylesheet">
    <link href="css/columns_l4.css" rel="stylesheet">
    <script src="js/vender/jquery-3.1.1.min.js"></script>

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!--<script src="js/ie-emulation-modes-warning.js"></script>-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="navbar-wrapper">
      <div class="container">
        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">AutoBiography</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse"><!-- id="navbar" -->
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <ul class="signinCheck">
                <?php
                    if(!isset($_SESSION['is_login'])){
                      //echo "<a href='login.php'>로그인 해주세요</a>";
                ?>
                <span><a class="btn btn-lg btn-theme login_out" href="login.php" role="button">Login</a></span>
                <span clss="signinName">    
                  <?php
                    }
                    else{
                      echo "Hi!, ".$_SESSION['name']." :)";
                  ?>
                </span>  
                <span><a class="btn btn-lg btn-primary login_out" href="logout.php" role="button">Logout</a></span>
                  <?php
                    }
                ?>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1>Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
    </div>
    <div class="container"> <!-- Container가 존재 해야 내부 객체가 정렬이 됨 -->
      <div class="blockContainer">
        <!-- jquery로 값이 추가 될 부분 -->
        <!-- 우선 +에 해당하는 블럭을 추가시켜 놓아야함 -->
        <!-- 이 내용들도 JQuery 해야 할 듯한데..
            JQuery객체로 가져오게 되면 완전 태그형으로 변환 되니까 -->
        </div>
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          Launch demo modal
      </button>
    </div>
    <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
              <h3>Text in a modal</h3>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
              <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
            </div>
            <div class="modal-footer">
              <a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>
      
                <!-- Generated markup by the plugin -->
                <div class="tooltip top" role="tooltip">
                  <div class="tooltip-arrow"></div>
                  <div class="tooltip-inner">
                    Some tooltip text!
                  </div>
                </div>
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <hr>

      <footer>
        <p>&copy; Company 2014</p>
      </footer>
    </div> <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/vender/bootstrap.min.js"></script>
    <script src="js/vender/jquery.ba-throttle-debounce.min.js"></script>
    <script src="js/vender/jquery-ui.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/vender/ie10-viewport-bug-workaround.js"></script>
    <script src="js/block.js"></script>
    <script src="js/mk_modal.js"></script>
    <script src="js/input_check.js"></script>
    <script>
      $(function(){
        //alert("Inner JQuery");
        var $blockContainer=$('.blockContainer'),
            line_end=1,
            line_start=2,
            name='<?php echo($_SESSION["name"]); ?>'; // js 내부에서 php 구문 실행이 가능하다.
        
        get_block_json(name);
        
        
        // JQUERY로 해서 객체로 받아내면 더 완벽했을텐데.. 아쉽다
        function get_block_json(name){ 
          var plusTitle="ADD YOUR BLOCK! :)",
            plusSub="Some Information Required",
            id_add_string="add";
          var plusHTML='<div class="columns_l4">'+
                        '<div class="row">'+
                          '<div class="col-md-4" data-toggle="modal" data-target="#modal_'+id_add_string+'">'+ /* 버튼 없이도 됨! 이득! :) */
                            '<div class="row_inner" id="plus_block">'+ /* add_block으로 명명하면 어디선가 충돌이 나는 듯 하다 */
                              '<h3>'+plusTitle+'</h3>'+
                              '<h5>'+plusSub+'</h5>'+
                            '</div>'+
                          '</div>'; // div가 두개 모자름, 추후 추가함
          var modal4_string=["Title", "SubTitle", "Body", "Tag"]; //여기서 에러난게 아냐
          //console.log(modal4_string);
          plusHTML+=mk_modal_form_string(id_add_string, plusTitle, plusSub, modal4_string, "save_close", -1); // is_modify=-1
          //var modifyHTML=mk_modal4_string(id_add_block, plusTitle, plusSub, )
            
            $.getJSON('json/blocks/block_'+name+'.json', function(data){
                var length=data.length, 
                  elements=plusHTML; // 배열이 아닌 string을 사용한다.
               
                //console.log('json/blocks/block_'+name+'.json');
                $.each(data, function(i, item){
                    var itemHTML="";
                    //var modifyHTML="";
                    var button_type="modify_delete"
                    var idx_string=""
                    var col3_base=i%3; // 3열 체크시 사용한다.
                    var modalHTML=mk_modal_string(i, item.title, item.subtitle, item.body, item.tag, button_type, item.user_idx);
                    var block_idx=item.user_idx; //form에 임의 저장할 값
                    
                    itemHTML+=check_line(col3_base, line_start, 1); // 1 : check_line_start
                    
                    idx_string="modal_view_"+i;
                    /*
                    if(button_type=="save_close"){
                      idx_string="modal_modify_"+i;
                      idx_string="modal_view_"+i;
                    }else{
                      alert("ERROR ON BUTTON TYPE");
                    }*/
                    // grid 생성하는 부분
                    itemHTML+='<div class="col-md-4" data-toggle="modal" data-target="#'+idx_string+'">'+ /* 버튼 없이도 됨! 이득! :) */
                                '<div class="row_inner">'+
                                  '<h3>'+item.title+'</h3>'+
                                  '<h5>'+item.subtitle+'</h5>'+
                                '</div>'+
                            '</div>'+modalHTML;        
                   
                    itemHTML+=check_line(col3_base, line_end, 2);
                    
                    //console.log(col3_base);
                    // *** 추후 제거 할 부분, 테스트 및 누수를 확인함 ***//
                    
                    itemHTML+=input_blank(i, length-1, col3_base, line_start, line_end);
                    
                    // 여기에 modify관련 modal을 만들어주어야 함
                    //modifyHTML+=mk_modal_form_string(i, plusTitle, plusSub, modal4_string, "save_close", item.user_idx);
                      // 안쓰는데?
                    //itemHTML+="</div></div>";
                    elements+=itemHTML; // JQuery 객체화를 피하기 : 단순 문자열로 처리한다.
                   //console.log(elements); 
                   /*for(i=0; i<$(itemHTML).length;i++){
                       elements.push($(itemHTML).get(i)); // 여기 부분에서 원활하게 값을 못가져옴, JQuery 객체화 하면, 임의대로 태그를 완성시킴 
                   }*/ // 문제 해결, JQUERY 화를 하지 않음
                   
                   
                });
                //console.log(elements);
                $blockContainer.append(elements);
                $blockContainer.append(mk_modal_success("title")); // SUCCESS 모달 생성, mk_modal에 지정
                box_activing();
                
            });
            
        }
        
        /*
        $('.form_operation').each(function(){
          var $form=$(this);
          
          $form.on('click', '#button_submit_operation',function(){
            var table_idx=$(this).find('#table_idx').text(); // form에 저장된 table_idx 가져오기
            var form_data=$form.serialize();
            alert("clicked!");
            console.log("clicked!");
            //id.charAt(id.length-1);
            //id를 어떻게 php변수화 할까
            $.ajax({
              type:"POST",
              url:"operate_block_process.php",
              data:{'table_idx':num,
                    form_data},
              dataType:"text",
              success:function(ret){
                console.log(ret);
              },
              error:function(){
                alert("Restart");
              }
            });
            
          });
        });     
        */
        
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
    </script>
  </body>
</html>
