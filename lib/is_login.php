<?php
    session_start();
    
    if(!isset($_SESSION["is_login"])){
        echo('<span><a class="btn btn-lg btn-primary login_out" href="login.php" role="button">Login</a></span>');
    }else{
        $name=$_SESSION['name'];
        echo('<span class="login_out">Hi! '.$name.' :)'.
             '</span>'.  
            '<span id="logout_but"><a class="btn btn-lg btn-primary login_out" href="logout.php" role="button">Logout</a></span>');
    }
    
?>