<!DOCTYPE html>
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
    <link href="css/vender/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/login.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/vender/ie-emulation-modes-warning.js"></script>
    <script language="text/javascript">
    </script>

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
          <button class="btn btn-lg btn-primary btn-block" type="button" data-toggle="modal" data-target="#myModal">Sign up</button>
        </form>   
          <!-- Modal - Sign up -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Sign up, and Design your Future!</h4>
              </div>
              <!-- 여기서부터 form 태그를 이용해서 값 입력 해야할 듯 -->
              <form class="form-signup" id="signup" method="post" action="signup_process.php">
                <div class="modal-body">
                  <h4 id="signup_subtext">Please Input some informations.</h4>
                  <div class=signupFirst>
                    <span class="label_signup">First Name</span>
                    <input type="text" name="firstName" class="form-control signupInfo" placeholder="First Name" required>
                  </div>
                  <div class=signupLast>
                    <span class="label_signup">Last Name</span>
                    <input type="text" name="lastName" class="form-control signupInfo" placeholder="Last Name" required>
                  </div>
                  <!--<form class="form-email" method="post" action="email_check.php"> <!-- 이메일 체크하려고 했는데, form이 안먹히나? -->
                    <div class=signupEmail>
                      <span class="label_signup">Email</span>
                      <input type="email" name="email" class="form-control signupInfo" placeholder="Email address" required autofocus>
                      <!--<button class="btn btn-lg btn-primary" id="checkButton" type="button">Check Email</button>-->
                      <!--<span><a class="btn btn-lg btn-warning" id="checkButton" href="signup_process.php" role="button">Check Email</a></span>-->

                      <!--<input type="button" id="email_check" class="btn btn-lg btn-warning" onclick="email_onclick()" value="Check Email"/>-->
                    </div>
                  <!--</form>-->
                  <div class=signupPw>
                    <span class="label_signup">Password</span>
                    <input type="password" id="inputPassword" name="password" class="form-control signupInfo" placeholder="Password" required>
                  </div>
                    <div class=signupPwCheck>
                    <span class="label_signup">Reinput Password</span>
                    <input type="password" id="inputPasswordCheck" name="re_password" class="form-control signupInfo" placeholder="Reinput Password" required>
                  </div>
                  <div class=signupNick>
                    <span class="label_signup">Nickname</span>
                    <input type="text" name="nickname" class="form-control signupInfo" placeholder="Nickname" required>
                    <!--<button class="btn btn-lg btn-primary" id="checkButton" type="button">Check Email</button>-->
                    <!--<span><a class="btn btn-lg btn-warning" id="checkButton" href="#" role="button">Check Name</a></span>-->
                  </div>
                  <div class=signupJob>
                    <span class="label_signup">Job</span>
                    <input type="text" name="job" class="form-control signupInfo" placeholder="Job" required>
                  </div>
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
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

 
      </div> <!-- /container -->
    </div>
    
    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/vender/ie10-viewport-bug-workaround.js"></script>
    
    <script src="js/vender/jquery-3.1.1.min.js"></script>
    <script src="js/vender/bootstrap.min.js"></script>
    <script src="js/login.js"></script>
    
  </body>
</html>
