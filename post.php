<?php


$op = $_GET['op'];

if($op == 'upload'){
    if(isset($_POST)){
        echo json_encode(array('error_msg'=>'','status'=>'success','data'=>array('mid'=>1,'similar'=>0.55)));
    }else{
        echo json_encode(array('error_msg'=>'上传失败','status'=>'error','data'=>''));
    }
}elseif ($op == 'profile'){
    if(isset($_POST)){
        echo json_encode(array('error_msg'=>'成功','status'=>'success','data'=>''));
    }else{
        echo json_encode(array('error_msg'=>'失败','status'=>'error','data'=>''));
    }
}

?>