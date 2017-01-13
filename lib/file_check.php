<?php
    function mk_file_json($type, $file_name, $contents)
    {
        //echo("type : ".$type);
        //echo("name : ".$file_name);
        $path='json/'.$type.'s/'.$type.'_'.$file_name.'.json';
        try{ /* 기존 파일은 지우고, 다시 불러온다. */
            if(file_exists($path)){
                $fd=unlink($path);
                if(!$fd){
                    /* 지우지 못했을때 exception을 바로 하면 되지 않을까 */
                    throw new Exception("Can't Delete Existed File");
                }
            }
            if($fp=fopen($path, 'x')){
                fputs($fp, $contents);
                //echo('<script>alert('+$fp+');</script>'); => 여기서 숫자나옴 해결!
                fclose($fp);
                return;
            }else{
                throw new Exception("Can't Open new File");
            }
            
        }catch(Exception $e){
            echo("<script>console.log('aaaa')</script>");
            //echo $e->getMessage();
        }
        return;
    }
?>