<?php
    session_start(); // $_SESSION['name']을 통해 값을 파악
    require("lib/db.php");
    require("config/config.php");
    $conn=db_init($config["host"],$config["duser"],$config["dpw"],$config["dname"]);
    
    $user=$_SESSION['name'];
    $title=$_POST['title'];
    $subtitle=$_POST['subtitle'];
    $body=$_POST['body'];
    //$tag_raw=$_POST['tag'];
    
    //$tag=str_replace(" ", ",", $tag_raw);

    try{
        $operation=$_POST['operation'];
        $idx=$_POST['table_idx']; // ajax로 받는 데이터, 데이터를 다시 보낼때는 echo를 사용한다
        if(!$idx){
            throw new exception("NOT RECIEVE idx");
        }
        if(!$operation){
            throw new exception("NOT RECEIVE operation");
        }
    }catch(exception $e){
        echo $e->getMessage();
        //echo $e->getCode();
    }
    
    //console.log($operation);
    //echo($operation);
    
    switch($operation){
        case("add"):
            $sql_search="SELECT user_idx FROM words WHERE user='".$user."'"; // 구문 에러 났었음
        //print($sql_search);
            $result=mysqli_query($conn, $sql_search);
            
            //$count=mysqli_num_rows($result); // 결과 행의 수를 확인하는 함수
            
            $add_index=0;
            while ($row = mysqli_fetch_row($result)){ // 이런식으로 여러번 조회 결국 해야 함
                $add_index=max($row[0],$max);
            }
            $add_index+=1;
            
            $sql_insert="INSERT INTO words(user, user_idx, title, subtitle, body)".
                            " VALUES ('".$user."', ".$add_index.", '".$title."', '".$subtitle."', '".$body."')";
            
            //print($sql_insert);
            
            mysqli_query($conn, $sql_insert);
            
            mysqli_close($conn);
            //echo ("<meta http-equiv='Refresh' content='1; URL=test_block.php'>");
            
            echo("ADD COMPLETE");
            break;
        case("modify"):
            $sql_search='SELECT user, user_idx FROM words WHERE user="'.$user.'" AND user_idx="'.$idx.'"';
            $result=mysqli_query($conn, $sql_search);
            
            if(($result->num_rows)==0){
                echo("ERROR : $result->num_rows is 0");
                return false; // 이 구문까지 필요할까 싶지만
            }
            
            $sql_update='UPDATE words SET title="'.$title.'", subtitle="'.$subtitle.'", body="'.$body.'" WHERE user="'.$user.'" AND user_idx="'.$idx.'"';
            //console.log($sql_update);
            
            mysqli_query($conn,$sql_update);
            
            mysqli_close($conn);
            //echo ("<meta http-equiv='Refresh' content='1; URL=test_block.php'>"); //오타난거 아님!
            
            echo("MODIFY COMPLETE");
            break;
        case("delete"):
            $sql_delete='DELETE FROM words WHERE user="'.$user.'" AND user_idx="'.$idx.'"';
            $result=mysqli_query($conn, $sql_delete);
            mysqli_close($conn);
            echo("DELETE COMPLETE");
            break;
        default:
            echo "ERROR";
            break;
    }
    //echo($_SESSION["modal_state"]);
    
    //echo("MODAL : ".$_SESSION['alter_idx']);

    
    //echo($user.",".$title.",".$subtitle.",".$body.",".$tag.",".$idx);
    
    //ADD 와 MODIFY를 나누어 진행
     // ADD일 경우 $idx=-1일때, MODIFY는 나머지 일때로 진행
    
    // === MODIFY ===
    // UPDATE [테이블] SET [열] = '변경할값' WHERE [조건] 을 사용한다.
    
    // === ADD ===
    // 각 유저마다 idx에 따라 title을 가지고 있을 것
    // 일단 user가 일치하는 block이 총 몇개인지 확인하여 가장 큰 값+1을 새로운 block의 idx로 사용
        // 갯수의 +1을 하게 되면 나중에 순서가 역전되는 상황이 발생함.
    /*
    if($idx==-1){ // ADD 일때
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
        echo ("<meta http-equiv='Refresh' content='1; URL=test_block.php'>");
        
    }else{ // mODIFY일때
        // 해당 블록을 찾아서 수정하는게 목적
        // user와 user id가 동시에 일치해야함
        $sql_search='SELECT user, user_idx FROM blocks WHERE user="'.$user.'" AND user_idx="'.$idx.'"';
        $result=mysqli_query($conn, $sql_search);
        
        if(($result->num_rows)==0){
            echo("ERROR : $result->num_rows is 0");
            return false; // 이 구문까지 필요할까 싶지만
        }
        
        $sql_update='UPDATE blocks SET title="'.$title.'", subtitle="'.$subtitle.'", body="'.$body.'", tag="'.$tag.'" WHERE user="'.$user.'" AND user_idx="'.$idx.'"';
        //console.log($sql_update);
        
        mysqli_query($conn,$sql_update);
        
        mysqli_close($conn);
        echo ("<meta http-equiv='Refresh' content='1; URL=test_block.php'>"); //오타난거 아님!
        
    }
    */
    
    // 이쯤에 모달객체 추가해서 Success! 창 띄워주면 좋을 듯 ! 
    
    //echo ("<meta http-equiv='Refresh' content='1; URL=test_block.php'>"); // -> 추후 Success 구문으로 보내기 
    // content: 초 설정, URL : 넘길 주소 확인
    
   
    //print($count);
    
    //$sql="INSERT INTO blocks(user, user_idx, title, subtitle, body, tag) VALUES"
        //추후에 태그 배열을 따로 나누는게 좋을 듯함..
            // block 테이블에서 가져오는게 나을까..?
?>