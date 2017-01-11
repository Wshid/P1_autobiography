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
    <link href="css/vender/bootstrap.min.css" rel="stylesheet">
    <!--<link href="css/vender/jquery-ui.css" rel="stylesheet">-->
    <!-- Custom styles for this template -->
    <link href="css/block.css" rel="stylesheet">
    <link href="css/header_navbar.css" rel="stylesheet">
    <link href="css/columns_l4.css" rel="stylesheet">
    <link href="css/chart.css" rel="stylesheet">
    <link href="css/menu_tron.css" rel="stylesheet">
    

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

    <span class="header_navbar_prepend"></span> <!-- header와 fixed-header 관련 -->

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1>Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
      </div>
    </div>
    
    <span id="chart_title">Please Select #Tag</span>
    <div class="container"> <!-- Container가 존재 해야 내부 객체가 정렬이 됨 -->

    <!--<hr style='margin-top: 0px'>-->
    <form class="filter-form" id="form_filter">
    <div class="radio_button_customize">
      <span class="form-item">
        <input type="radio" name="filter" id="filter-all" value="all" checked>
        <label for="filter-all">All</label>
      </span>
    </form>
    </div>
    <hr>
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
    <!--<script src="js/vender/jquery-ui.js"></script>-->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/vender/ie10-viewport-bug-workaround.js"></script>
    <script src="js/block.js"></script>
    <script src="js/header_navbar.js"></script>
    <script src="js/mk_modal.js"></script>
    <script src="js/input_check.js"></script>
    <script src="js/chart.js"></script>

  </body>
</html>
