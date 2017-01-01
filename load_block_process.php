<?php
    function load_block_process(){ // json형태를 리턴한다.
        /* 각 유저별 db를 조회하여 json 파일 형태로 리턴한다.
         * user, user_idx, title, subtitle, body, tag를 키로 하는 파일이다.
         */

        //session_start(); 굳이 세션이 필요 없음
        //require("lib/db.php"); // 이미 db_init을 할때 정보를 가져왔음
        require("config/config.php");
        //$conn=login_check(); // $conn 변수도 가져온다. db=autobiography
        $conn=db_init($config["host"],$config["duser"],$config["dpw"],$config["dname"]);
        //echo($conn);
        $name=$_SESSION['name']; // name이라는 변수에 해당 세션의 nickname 정보를 담는다.
                // block 테이블에서 동시 PRIMARY 키가 될 부분
        
        // 일단 block 테이블에서 해당 user에 대한 정보를 가져와야한다.
        // 해당 user의 행이 있는지 우선 확인
        // 추후 user_idx를 통해 검사하기로
        $sql="SELECT * FROM blocks WHERE user='".$name."'";
        //echo($sql);
        $result=mysqli_query($conn, $sql);
        
        $blocks=[];
        
        while($row=mysqli_fetch_assoc($result)){// 일치한 행이 하나 이상이라면, while문을통해 무언가를 해야할 것
            //$row=mysqli_fetch_assoc($result);
            $user=$row['user'];
            $user_idx=$row['user_idx']; /* 일단은 한 행만 일치하였을때, 이정보를 넘겨야하는게 우선 */
            $title=$row['title'];
            $subtitle=$row['subtitle'];
            $body=$row['body'];
            $tag=$row['tag'];
            //echo("<br>");
            //print($body);
            //echo("<br>");
            array_push($blocks, array('user'=>$user, 'user_idx' => $user_idx, 'title'=>$title, 'subtitle'=>$subtitle, 'body'=>$body, 'tag'=>$tag));
            //print($ret[0]);
        }
        //echo("<br>".json_encode($ret));
        
        $ret=json_encode($blocks); // encode 화 한다.
        
        $file_path='json/blocks/block_'.$user.'.json';
        
        try{ /* 기존 파일은 지우고, 다시 불러온다. */
            if(file_exists($file_path)){
                $fd=unlink($file_path);
                if(!$fd){
                    /* 지우지 못했을때 exception을 바로 하면 되지 않을까 */
                    throw new Exception("Can't Delete Existed File");
                }
            }
            if($fp=fopen($file_path, 'x')){
                fputs($fp, $ret);
                fclose($fp);
                return;
            }else{
                throw new Exception("Can't Open new File");
            }
            
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

?>

