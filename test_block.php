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
    <script src="js/input_check.js"></script>
    <script>
      $(function(){
        //alert("Inner JQuery");
        var $blockContainer=$('.blockContainer'),
            line_end=1,
            line_start=2,
            name='<?php echo($_SESSION["name"]); ?>'; // js 내부에서 php 구문 실행이 가능하다.
        
        get_block_json(name);
        
        function get_block_json(name){ 
          var plusTitle="Add your block! :)",
            plusSub="Some Information Required",
            id_add_block="add_block",            
            plusHTML='<div class="columns_l4">'+
            '<div class="row">'+
              '<div class="col-md-4" data-toggle="modal" data-target="#'+id_add_block+'">'+ /* 버튼 없이도 됨! 이득! :) */
                '<div class="row_inner" id="plus_block">'+ /* add_block으로 명명하면 어디선가 충돌이 나는 듯 하다 */
                  '<h3>'+plusTitle+'</h3>'+
                  '<h5>'+plusSub+'</h5>'+
                '</div>'+
              '</div>'+ //제대로 인식이 안됨, modal fade in 이 되어야 하는데 계속 row_inner in이 됨
              '<div class="modal fade" id="'+id_add_block+'" tabindex="-1" role="dialog" aria-labelledby="'+id_add_block+'_Label">'+
                  '<div class="modal-dialog" role="document">'+
                    '<div class="modal-content">'+
                      '<div class="modal-header">'+
                          '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                          '<h3 class="modal-title" id='+id_add_block+'_Label">'+plusTitle+'</h3>'+
                      '</div>'+
                      '<form id="form_add_block" method="post">'+
                        '<div class="modal-body">'+
                          '<h5>'+plusSub+'</h5>'+
                          '<div class="form-inner-container">'+
                          '<div class="form-group">'+
                              '<label for="label_title" class="col-xs-2 control-label">Text</label>'+
                              '<div class="col-xs-10">'+ //기존에 사용했던 방식과 다르게 여기선 grid를 이용하여 표현한다
                                '<input type="text" name="firstName" class="form-control" placeholder="First Name" required>'+
                              '</div>'+
                          '</div>'+
                          '<div class="form-group">'+
                              '<label for="label_subtitle" class="col-xs-2 control-label">Search</label>'+
                              '<div class="col-xs-10">'+
                                  '<input class="form-control" type="text" placeholder="SubTitle" required>'+//<!-- value는 실제 입력 값, placeholder는 예시 값(회색) -->'+
                              '</div>'+
                          '</div>'+
                          '<div class="form-group">'+
                              '<label for="label_body" class="col-xs-2 control-label">Body</label>'+
                              '<div class="col-xs-10">'+
                                  '<textarea class="form-control" rows=5 id="body" placeholder="body" required></textarea>'+
                              '</div>'+
                          '</div>'+
                          '<div class="form-group">'+
                              '<label for="label_tag" class="col-xs-2 control-label">Tag</label>'+
                              '<div class="col-xs-10">'+
                                  '<input class="form-control" type="text" placeholder="tag" required>'+//<!-- value는 실제 입력 값, placeholder는 예시 값(회색) -->'+
                              '</div>'+
                          '</div>'+                          
                        '</div>'+
                        '</div>'+
                        '<div class="modal-footer">'+
                          //'<p>'+item.tag+'</p>'+
                          '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                          '<button type="button" class="btn btn-primary" onclick="javascript:check_submit();">Save changes</button>'+
                        '</div>'+
                      '</form>'+
                      '</div>'+
                    '</div>'+
                  '</div>';
            
            $.getJSON('json/blocks/block_'+name+'.json', function(data){
                var length=data.length, 
                  elements=plusHTML; // 배열이 아닌 string을 사용한다.
               
                console.log('json/blocks/block_'+name+'.json');
                $.each(data, function(i, item){
                    var modalHTML='<div class="modal fade" id="'+i+'_Modal" tabindex="-1" role="dialog" aria-labelledby="'+i+'_ModalLabel">'+
                                    '<div class="modal-dialog" role="document">'+
                                      '<div class="modal-content">'+
                                        '<div class="modal-header">'+
                                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                                            '<h3 class="modal-title" id='+i+'_ModalLabel">'+item.title+'</h3>'+
                                        '</div>'+
                                      '<div class="modal-body">'+
                                        '<h5>'+item.subtitle+'</h5>'+
                                        '<p>'+item.body+'</p>'+
                                      '</div>'+
                                      '<div class="modal-footer">'+
                                        '<p>'+item.tag+'</p>'+
                                      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                                      '<button type="button" class="btn btn-primary">Save changes</button>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';
                    var itemHTML="";
                    if(i%3==line_start){
                        itemHTML+='<div class="columns_l4">'+
                                    '<div class="row">';
                    }
                    //console.log($(itemHTML).get(0)); /* JQuery 객체화 하면, 임의대로 태그를 완성시킴 */
                    /*itemHTML+='<div class="col-md-4"><button type="button" data-toggle="modal" data-target="#'+i+'_Modal"></button>'+
                                '<h3>'+item.title+'</h3>'+
                                '<h5>'+item.subtitle+'</h5>'+
                            '</div>'+modalHTML;*/
                    itemHTML+='<div class="col-md-4" data-toggle="modal" data-target="#'+i+'_Modal">'+ /* 버튼 없이도 됨! 이득! :) */
                                '<div class="row_inner">'+
                                  '<h3>'+item.title+'</h3>'+
                                  '<h5>'+item.subtitle+'</h5>'+
                                '</div>'+
                            '</div>'+modalHTML;        
                   
                    if(i%3==line_end){ // idx가 +,0,1로 배분, 1이면 종료
                       itemHTML+="</div></div>";
                    }
                    
                    console.log(i%3);
                    // *** 추후 제거 할 부분, 테스트 및 누수를 확인함 ***//
                    if((i==(length-1)) && (i%3!=line_end)){ // 세개가 다 안찼는데 종료시키려 한다면
                        var col_m='<div class="col-md-4"><div class="row_inner"><h2>BLANK</h2></div></div>',
                            col_end="</div></div>";
                        switch(i%3){
                            case line_start:
                                itemHTML+=col_m+col_m+col_end;
                                break;
                            case line_end:
                                itemHTML+=col_m+col_end;
                                break;
                            default:
                                console.log("ERROR");
                                break;
                        }
                    }
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
    </script>
    <!--<script src="js/get_block_json.js"></script>-->
    <!-- 외부 파일에서 실행시키는 거기 때문에 진짜 load_by_js만 실행해서 생기는 오류일수도 -->
  </body>
</html>


<!--
'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="'+i+'_Modal">'+
                                    '<div class="modal-dialog" role="document">'+
                                      '<div class="modal-content">'+
                                        '<div class="modal-header">'+
                                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                                            '<h3 class="modal-title" id="myModalLabel">'+item.title+'</h3>'+
                                        '</div>'+
                                      '<div class="modal-body">'+
                                        '<h5>'+item.subtitle+'</h5>'+
                                        '<p>'+item.body+'</p>'+
                                      '</div>'+
                                      '<div class="modal-footer">'+
                                        '<p>'+item.tag+'</p>'+
                                      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                                      '<button type="button" class="btn btn-primary">Save changes</button>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';-->