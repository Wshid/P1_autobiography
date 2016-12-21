<?php

    require("lib/db.php");
    require("config/config.php");
    $conn=db_init($config["host"],$config["duser"],$config["dpw"],$config["dname"]);
    
    $firstName=$_POST['firstName'];
    $lastName=$_POST['lastName'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $re_password=$_POST['re_password']; // script 상에서 그냥 처리해도 될 듯 한데
    $nickname=$_POST['nickname'];
    $job=$_POST['job'];
    
    /*
    $user_config=array("host"=>"localhost",
    "duser"=>"root",
    "dpw"=>"admin",
    "dname"=>"autobiography");
    */
    
    // 이미 이메일이 있는지 확인
    $sql_email="SELECT * FROM user WHERE email='".$email."'";
    $result=mysqli_query($conn, $sql_email);
    //echo('<script>alert("'.$sql_email.'");</script>');
    if($result->num_rows!=0){
        echo('<script>alert("Already This Email is used.");
                history.back();
            </script>');
            exit;
    }
    
    // 패스워드 재입력과 일치여부 확인
    if($password!=$re_password){
        echo('<script>alert("Password is not equal with Reinput Password.");
                history.back();
            </script>');
        exit;
    }
    
    // 닉네임 중복 여부 확인
    $sql_name="SELECT * FROM user WHERE name='".$nickname."'";
    $result=mysqli_query($conn, $sql_name);
    //echo('<script>alert("'.$sql_name.'");</script>');
    if($result->num_rows!=0){
        echo('<script>alert("Already This Nickname is used.");
                history.back();
            </script>');
            exit;
    }
    
    
    
    $sql_insert_user="INSERT INTO user(email, password, name) VALUES ('".$email."', '".$password."', '".$nickname."')";
    mysqli_query($conn, $sql_insert_user);
    //$user_id=mysqli_insert_id($conn); 가장 최근에 추가된 값을 확인함
    
    $sql_insert_profile="INSERT INTO profile(firstName, lastName, job, nickName) VALUES ('".$firstName."', '".$lastName."', '".$job."' , '".$nickname."')";
    mysqli_query($conn, $sql_insert_profile);
    
    echo('<script>alert("Congratulations! :) Please Sign in your account");
            history.back();
        </script>');    
    
    /* 여기 구문도 조금 이상 $result->num_rows를 반복을 해야할 듯 한데, if문 하나로만 비교 함*/

    

?>