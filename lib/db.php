<?php // db_init : 4개의 정보를 통하여 mysql 값을 따온다.
    function db_init($host, $duser, $dpw, $dname){
        $conn=mysqli_connect($host, $duser, $dpw);
        mysqli_select_db($conn, $dname); //dname : database name
            return $conn;
    }
?>