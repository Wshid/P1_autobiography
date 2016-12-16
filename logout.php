<?php
    session_start(); //세션 함수를 사용하기 위해서 무조건 사용해야 하는듯
    
    session_destroy(); // 세션을 종료시킨다.
    echo('<script>alert("로그아웃 되었습니다.");history.back();</script>');
    exit();
?>