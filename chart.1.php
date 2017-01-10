<?php
  session_start();
  require("lib/db.php");
  require("lib/load_block_process.php");
  login_check();
  load_block_process(); //여기서 숫자 나옴
  
/*
  if(!isset($_SESSION['is_login'])){ //어떻게 해야할까 어떻게..음...
    echo "로그인 해주세요";
  }else{
    echo "Hi!, ".$_SESSION['name']." :)";
  }*/
    //echo "<a href='login.php'>로그인 해주세요</a>";
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
    <link href="css/header_navbar.css" rel="stylesheet">
    <link href="css/columns_l4.css" rel="stylesheet">
    <link href="css/chart.css" rel="stylesheet">

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
              <a class="navbar-brand" href="carousel.php">AutoBiography</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse"><!-- id="navbar" -->
              <ul class="nav navbar-nav">
                <li class="active"><a href="block.php">Block</a></li>
                <li><a href="chart.php">Chart</a></li>
                <li><a href="word.php">Word</a></li>
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
                <span class="login_out">
                  <?php
                      if(!isset($_SESSION['is_login'])){
                        //echo "<a href='login.php'>로그인 해주세요</a>";
                  ?>
                </span>
                <span><a class="btn btn-lg btn-primary login_out" href="login.php" role="button">Login</a></span>
                <span class="login_out">  
                  <?php
                    }
                    else{
                      echo "Hi!, ".$_SESSION['name']." :)";
                  ?>
                </span>  
                <span><a id="logout_but" class="btn btn-lg btn-primary login_out" href="logout.php" role="button">Logout</a></span>
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
    <h3>Please Select #Tag</h3>
    <hr>
    <form class="filter-form" id="form_filter">
      <!--
      <span class="form-item">
        <input type="radio" name="filter" id="filter-all" value="all" checked>
        <label for="filter-all">All</label>
      </span>-->
      
    </form>
    <div class="container"> <!-- Container가 존재 해야 내부 객체가 정렬이 됨 -->
      <div class="blockContainer">
        <!-- jquery로 값이 추가 될 부분 -->
        <!-- 우선 +에 해당하는 블럭을 추가시켜 놓아야함 -->
        <!-- 이 내용들도 JQuery 해야 할 듯한데..
            JQuery객체로 가져오게 되면 완전 태그형으로 변환 되니까 -->
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
    <script src="js/vender/jquery-3.1.1.min.js"></script>
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
        
        
        var allBlock, filteredBlock, SliceBlock;
        
        var filter_label=[],
            filter_label_count=[],
            all_tag="",
            filter_label_html="";
        
        get_block_json(name);
        
        
        /*
        console.log("filter label : "+filter_label);

        for(var tag_idx in filter_label){ // 여기에서 실행시키면 아무런 값이 들어가지 않음
          console.log("IIN");
          console.log("VA : "+filter_label[tag_idx]);
          filter_label_html+=
            '<span class="form-item">'+
              '<input type="radio" name="filter" id="filter-'+filter_label[tag_idx]+'" value="'+filter_label[tag_idx]+'">'+
              '<label for="filter-'+filter_label[tag_idx]+'">'+filter_label[tag_idx]+'</label>'+
            '</span>';
        }
        console.log(filter_label_html);
        $filter.append(filter_label_html);
        */
        // all 부분을 따로 체크하도록 해야함
        
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
          var modal4_string=["Title", "SubTitle", "Body", "Tag"]; 
          //console.log(modal4_string);
          plusHTML+=mk_modal_form_string(id_add_string, plusTitle, plusSub, modal4_string, "save_close", -1); // is_modify=-1
          
          var elements=plusHTML;  // 배열이 아닌 string을 사용한다.
          
          $.getJSON('json/blocks/block_'+name+'.json', initBlock); // 여기서 이제 함수를 구현 3가지가 있음
                //console.log(elements);

            function initBlock(data){
              var length=data.length;
             
              allBlock=data;
              filteredBlock=allBlock;
              
              addBlock();
             
              //console.log('json/blocks/block_'+name+'.json');
              //loadMoreButton의 경우 일단 생략
              
              //$filter.on('change', 'input[type="radio"]', filterBlock);
              
            }
            
            function addBlock(filter){
              
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

              var $filter=$('#form_filter'); // 여기서 실행시키면 들어가긴 함
              
              console.log("filter label : "+filter_label);
      
              for(var tag_idx in filter_label){ // 여기에서 실행시키면 아무런 값이 들어가지 않음
                console.log("IIN");
                console.log("VA : "+filter_label[tag_idx]);
                filter_label_html+=
                  '<span class="form-item">'+
                    '<input type="radio" name="filter" id="filter-'+filter_label[tag_idx]+'" value="'+filter_label[tag_idx]+'">'+
                    '<label for="filter-'+filter_label[tag_idx]+'">'+filter_label[tag_idx]+'</label>'+
                  '</span>';
              }
              console.log(filter_label_html);
              $filter.append(filter_label_html);


              
              $blockContainer.append(elements);
              $blockContainer.append(mk_modal_success("title")); // SUCCESS 모달 생성, mk_modal에 지정
              box_activing();
              
            }
            
            function filterBlock(){ // 구문 추가하는 부분, 추가적인 수정이 필요할 듯
              var key=$(this).val();
              
              filteredBlock=[];
              
              if(key==='all'){
                filteredBlock=allBlock;
              }else{
                filteredBlock=$.grep(allBlock, function(item){
                /*  for(var i in item){
                    
                  }*/
                  return item.tag===key; // 여기도 구문 변경해야함
                })
              }
            }
            
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

        
      });
    </script>
    <script src="js/chart.js"></script>
  </body>
</html>
