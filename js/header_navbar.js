$(function(){
    
    var menu_link=[['block', 'block.php'], ['chart', 'chart.php'], ['word', 'word.php']];
    var headerText=
    '<div class="navbar-wrapper">'+
      '<div class="container">'+
        '<nav class="navbar navbar-inverse navbar-static-top">'+
          '<div class="container">'+
            '<div class="navbar-header">'+
              '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'+
                '<span class="sr-only">Toggle navigation</span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
              '</button>'+
              '<a class="navbar-brand" href="#">AutoBiography</a>'+
            '</div>'+
            '<div id="navbar" class="navbar-collapse collapse"><!-- id="navbar" -->'+
              '<ul class="nav navbar-nav">'+
                '<li><a href="'+menu_link[0][1]+'">'+menu_link[0][0]+'</a></li>'+
                '<li><a href="'+menu_link[1][1]+'">'+menu_link[1][0]+'</a></li>'+
                '<li><a href="'+menu_link[2][1]+'">'+menu_link[2][0]+'</a></li>'+
                '<li class="dropdown">'+
                  '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>'+
                  '<ul class="dropdown-menu" role="menu">'+
                    '<li><a href="#">Action</a></li>'+
                    '<li><a href="#">Another action</a></li>'+
                    '<li><a href="#">Something else here</a></li>'+
                    '<li class="divider"></li>'+
                    '<li class="dropdown-header">Nav header</li>'+
                    '<li><a href="#">Separated link</a></li>'+
                    '<li><a href="#">One more separated link</a></li>'+
                 '</ul>'+
                '</li>'+
              '</ul>'+
              '<ul class="signinCheck">'+
                '<span class="login_out">'+
                  '<?php'+
                      'if(!isset($_SESSION["is_login"])){'+
                        //echo "<a href='login.php'>로그인 해주세요</a>";
                  '?>'+
                '</span>'+
                '<span><a class="btn btn-lg btn-theme login_out" href="login.php" role="button">Login</a></span>'+
                '<span class="login_out">'+
                  '<?php'+
                    '}'+
                    'else{'+
                      'echo "Hi!, ".$_SESSION[\'name\']." :)";'+
                  '?>'+
                '</span>'+  
                '<span><a class="btn btn-lg btn-primary login_out" href="logout.php" role="button">Logout</a></span>'+
                  '<?php'+
                    '}'+
                '?>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</nav>'+

     '</div>'+
    '</div>';
    
    var $header_prepend=$('.header_navbar_prepend');
    $header_prepend.prepend($(headerText));
    
});