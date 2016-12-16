
<!DOCTYPE html>
<?php
  require("lib/db.php");
  require("config/user_config.php");
  //$conn=mysqli_connect('localhost', 'root', 'admin');
  $conn=db_init($user_config["host"],$user_config["duser"],$user_config["dpw"],$user_config["dname"]);
  $result=mysqli_query($conn,'SELECT * FROM topic');

?>

<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/favicon.ico">

    <title>Signin Auto World</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/login.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/vender/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div class="bg_wrapper">
      <div class="container">
        <form class="form-signin" method="post" action="login_process.php"> <!--편집 시작 -->
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" name="email" class="form-control" placeholder="Email address" required autofocus>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <button class="btn btn-lg btn-primary btn-block" type="button">Sign up</button>
        </form>
 
      </div> <!-- /container -->
    </div>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/vender/ie10-viewport-bug-workaround.js"></script>
    
    <script src="js/vender/jquery-3.1.1.min.js"></script>
    <script src="js/login.js"></script>
    
  </body>
</html>
