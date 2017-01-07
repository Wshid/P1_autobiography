<?php // db_init : 4개의 정보를 통하여 mysql 값을 따온다.
    function db_init($host, $duser, $dpw, $dname){
        $conn=mysqli_connect($host, $duser, $dpw);
        mysqli_select_db($conn, $dname); //dname : database name
            return $conn;
    }
    
    function login_check(){ // 해당 로그인 세션이 열렸는지 확인함.
        session_start();
        //require("config/config.php");
        //$conn=db_init($config["host"],$config["duser"],$config["dpw"],$config["dname"]);
        
        if($_SESSION['is_login']==false){
        echo('<script>alert("Please Login First!"); location.replace("./login.php");</script>');
        }
        return $conn;
    }
?>