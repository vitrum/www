<?php
error_reporting(0);
require_once('db.php');
$db = new DB();

$op = $_GET['op'];
if($op == 'upload'){
    if(isset($_POST)){
        
        $sex = $_POST['sex'];
        $uid = $_POST['uid'];

        if(!$uid){
            $sql = "INSERT INTO user (`sex`,`createtime`) VALUES('$sex','".time()."');";
            $uid = $db->insert($sql);
            setcookie('luxgenuser',$uid,time()+86400*180);
        }

        $pic = $_POST['image'];
        /*$pic = $GLOBALS[HTTP_RAW_POST_DATA];
        if(empty($data)){ 
          $pic=file_get_contents("php://input");
        }*/
        
        if(!empty($pic)){
            
            $filename = date('Ymd',time()).substr(md5(time()),8,16).'-'.$uid;
            $image = base64_decode(str_replace('data:image/png;base64,', '',$pic));
            $fp = fopen($path.'/'.$filename, 'w');
            fwrite($fp, $image);
            fclose($fp);
        
        
            //图片
            $sql = "INSERT INTO image (`uid`,`path`,`createtime`) VALUES ('$uid','$filename','".time()."');";
            $res = $db->insert($sql);
        
        }
        
        if($res)
        echo json_encode(array('error_msg'=>'','status'=>'success','data'=>array('uid'=>$uid,'mid'=>1,'similar'=>0.55)));
        
    }else{
        echo json_encode(array('error_msg'=>'上传失败','status'=>'error','data'=>''));
    }
}elseif ($op == 'profile'){
    
    if(isset($_POST)){
        $uid = $_POST['uid'];
        $name = $_POST['name'];
        $mobile = $_POST['mobile'];
        $province = $_POST['province'];
        $city = $_POST['city'];
        
        $sql = "UPDATE user set name='$name',mobile='$mobile',province='$province',city='$city' WHERE id='$uid';";
        $res = $db->update($sql);
        
        if($res){
            echo json_encode(array('error_msg'=>'成功','status'=>'success','data'=>''));
        }
        
    }else{
        
        echo json_encode(array('error_msg'=>'失败','status'=>'error','data'=>''));
        
    }
}elseif ($op == 'share'){
    
}

?>