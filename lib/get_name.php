<?php
    session_start();
    echo json_encode(array('name'=>$_SESSION['name'], 'page'=>$_POST['page']));
?>