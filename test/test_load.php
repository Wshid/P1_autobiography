<?php
    require("load_block_process.php");
    $ret=load_block_process();
    
    echo(json_decode($ret, true)[0]['title']); // 두번째 인자로 true를 해야 연관배열로 리턴한다.
    
?>