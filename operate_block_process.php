<?php
    session_start(); // $_SESSION['name']을 통해 값을 파악
    require("lib/db.php");
    require("config/config.php");
    $conn=db_init($config["host"],$config["duser"],$config["dpw"],$config["dname"]);
    
    $user=$_SESSION['name'];
    $title=$_POST['title'];
    $subtitle=$_POST['subtitle'];
    $body=$_POST['body'];
    $tag=$_POST['tag']; // 태그 값은 전처리가 필요할 듯, 스페이스바에 의해 구문을 분리해야함
        // .split 함수를 이용하면 배열 형태로 가져온다고 함!
    
    //echo($_SESSION["modal_state"]);
    
    //echo("MODAL : ".$_SESSION['alter_idx']);
    try{
        $idx=$_POST['table_idx'];
        if(!$idx){
            throw new exception("NOT RECIEVE idx");
        }
    }catch(exception $e){
        echo $e->getMessage();
        //echo $e->getCode();
    }
    
    echo($user.",".$title.",".$subtitle.",".$body.",".$tag.",".$idx);
    
    //ADD 와 MODIFY를 나누어 진행
    /*
    // user와 user_idx가 이미 있다는걸 해야할까?
    
    
    // === MODIFY ===
    // UPDATE [테이블] SET [열] = '변경할값' WHERE [조건] 을 사용한다.
    
    // === ADD ===
    // 각 유저마다 idx에 따라 title을 가지고 있을 것
    // 일단 user가 일치하는 block이 총 몇개인지 확인하여 가장 큰 값+1을 새로운 block의 idx로 사용
        // 갯수의 +1을 하게 되면 나중에 순서가 역전되는 상황이 발생함.
    
    $sql_search="SELECT user_idx FROM blocks WHERE user='".$user."'"; // 구문 에러 났었음
    //print($sql_search);
    $result=mysqli_query($conn, $sql_search);
    
    //$count=mysqli_num_rows($result); // 결과 행의 수를 확인하는 함수
    
    $add_index=0;
    while ($row = mysqli_fetch_row($result)){ // 이런식으로 여러번 조회 결국 해야 함
        $add_index=max($row[0],$max);
    }
    $add_index+=1;
    
    $sql_insert="INSERT INTO blocks(user, user_idx, title, subtitle, body, tag)".
                    " VALUES ('".$user."', ".$add_index.", '".$title."', '".$subtitle."', '".$body."', '".$tag."')";
    
    //print($sql_insert);
    
    mysqli_query($conn, $sql_insert);
    
    mysqli_close($conn);
    
    // 이쯤에 모달객체 추가해서 Success! 창 띄워주면 좋을 듯 ! 
    
    echo ("<meta http-equiv='Refresh' content='1; URL=test_block.php'>");
    // content: 초 설정, URL : 넘길 주소 확인
    */
   
    //print($count);
    
    //$sql="INSERT INTO blocks(user, user_idx, title, subtitle, body, tag) VALUES"
        //추후에 태그 배열을 따로 나누는게 좋을 듯함..
            // block 테이블에서 가져오는게 나을까..?
?>