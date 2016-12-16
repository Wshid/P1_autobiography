<?php
    session_start();
    //echo $_POST["inputEmail"]."<br>";
    //echo $_POST["inputPassword"];
    
    require("lib/db.php");
    require("config/user_config.php");
    /* 왜 이렇게 하면 안될까? */
    //$user_conn=db_init($config["host"],$config["duser"],$config["dpw"],$config["dname"]);
    $user_conn=mysqli_connect("localhost", "root", "admin");
    mysqli_select_db($user_conn,"autobiography");
    //echo($_POST['email']);
    //echo($_POST['password']);
    //$email=mysqli_real_escape_string($conn, $_POST['email']);
    //$password=mysqli_real_escape_string($conn, $_POST['password']);
    
    $email=$_POST['email'];
    $password=$_POST['password'];
    /*
    $user_config=array("host"=>"localhost",
    "duser"=>"root",
    "dpw"=>"admin",
    "dname"=>"autobiography");
    */

    if($email!=null && $password!=null){
        $sql="SELECT * FROM user WHERE email='".$email."'"; // id 검사
        $user_sql=$sql." AND password='".$password."'"; // pw 검사, SQL Injection 방지
        $result=mysqli_query($user_conn, $user_sql);
        //echo('<script>alert("'.$email.'");</script>');
        if($result->num_rows==0){ /* 검사 결과 일치하는 id가 없을 때 */
            echo('<script>alert("Please input correct id or password");
                history.back();
            </script>');
            
            exit;
        }else{
            $row=mysqli_fetch_assoc($result); /* 검사 결과 일치하는 계정이 있을때(id, pw 포함) */
            $_SESSION['is_login']=true;
            $_SESSION['email']=$mail;
            $_SESSION['name']=$row['name'];
            header('Location: ./carousel.php');
        }
    }else{ /* 입력된 데이터가 없을 때 */
            echo('<script>alert("Please input data);
                history.back();
            </script>'); // history.back()을 이용하여 뒤로 돌아간다.     
    }
    

?>