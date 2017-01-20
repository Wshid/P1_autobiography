<?php
    function load_block_process(){ // json형태를 리턴한다. // block.php에서 사용함
        /* 각 유저별 db를 조회하여 json 파일 형태로 리턴한다.
         * user, user_idx, title, subtitle, body, tag를 키로 하는 파일이다.
         */

        require("config/config.php");
        require("lib/file_check.php");
        //$conn=login_check(); // $conn 변수도 가져온다. db=autobiography
        $conn=db_init($config["host"],$config["duser"],$config["dpw"],$config["dname"]);
        //echo($conn);
        $name=$_SESSION['name']; // name이라는 변수에 해당 세션의 nickname 정보를 담는다.
                // block 테이블에서 동시 PRIMARY 키가 될 부분
        
        // 일단 block 테이블에서 해당 user에 대한 정보를 가져와야한다.
        // 해당 user의 행이 있는지 우선 확인
        // 추후 user_idx를 통해 검사하기로
        $sql="SELECT * FROM words WHERE user='".$name."'";
        //echo($sql);
        $result=mysqli_query($conn, $sql);
        
        $words=[];
        
        while($row=mysqli_fetch_assoc($result)){// 일치한 행이 하나 이상이라면, while문을통해 무언가를 해야할 것
            //$row=mysqli_fetch_assoc($result);
            $user=$row['user'];
            $user_idx=$row['user_idx']; /* 일단은 한 행만 일치하였을때, 이정보를 넘겨야하는게 우선 */
            $title=$row['title'];
            $subtitle=$row['subtitle'];
            $body=$row['body'];
            $block_raw=$row['block_idx']; //  실제로 index가 들어가있지 않음

            $block=explode(",",$block_raw); // 데이터를 쉼표로 구분
            
            //echo("<script>console.log(".$tag[0].");</script>");
            array_push($words, array('user'=>$user, 'user_idx' => $user_idx, 'title'=>$title, 'subtitle'=>$subtitle, 'body'=>$body, 'blocks'=>$block));
            //print($ret[0]);
        }
        //echo("<br>".json_encode($ret));
        
        $ret=json_encode($words); // encode 화 한다.
        
        //$file_path='json/blocks/block_'.$user.'.json';
        
        
        mk_file_json('word', $name, $ret); // $name과 $user가 동일한 값이 들어갈 듯 싶지만..
            // 여기서 숫자가 리턴됨. 이유가 뭐지?

    }

?>

