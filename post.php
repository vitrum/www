<?php
error_reporting(0);
define('ROOT',dirname(__FILE__));

require_once('db.php');
$db = new DB();

$op = $_GET['op'];

if($op == 'upload'){
    if(count($_POST)>0){
        
        $sex = $_POST['sex'];
        $from = $_POST['type']; //eg: mobile,pc,pad.
        
        $pic = $_POST['image'];
        $image = str_replace(' ', '+', $pic);
        $image = base64_decode(str_replace('data:image/png;base64,', '',$image));
        
        if(!empty($image)){
            //$path = './uploads/'.date('Y').'/'.date('m').'/'.date('d');
            //$path = '/home/webPub/17fu.net/CLIENT_PROJECTS/luxgen/uploads/'.date('Ym').'/'.date('d');
            switch ($from){
                case 'mobile':
                    $path = '/ram/NFS/YouthCode/Luxgen_1307/mobile/'.date('Ym').'/'.date('d');
                    break;
                case 'pc':
                    $path = '/ram/NFS/YouthCode/Luxgen_1307/pc/'.date('Ym').'/'.date('d');
                    break;
                case 'pad':
                    $path = '/ram/NFS/YouthCode/Luxgen_1307/pad/'.date('Ym').'/'.date('d');
                    break;
                default:;
            }

            if(!is_dir($path)){
                @mkdir($path,0777,true);
            }
            
            $filename = date('Ymd',time()).substr(md5(time()),8,16).'.png';
            $filepath = $path.'/'.$filename;
            $fp = fopen($filepath, 'w');
            fwrite($fp, $image);
            fclose($fp);
        
        
            //图片
            $sql = "INSERT INTO image (`type`,`sex`,`path`,`createtime`) VALUES ('$from','$sex','$filename','".time()."');";
            $res = $db->insert($sql);
        
        }
        
        
        /*$mid = rand(1,7);
        $similar = rand(1,100)/100;*/
        if($sex == 'male'){
            $hand = 'L';
        }else{
            $hand = 'R';
        }
  
        if($res){
            setcookie('luxgenuser',$res,time()+86400*365);
            //echo json_encode(array('error_msg'=>'','status'=>'success','data'=>array('uid'=>$res,'mid'=>$mid,'similar'=>$similar)));
            $data = file_get_contents('http://stnc.sh.17bi.net/2/palmCheck/?hand='.$hand.'&palmPic='.$filepath);
            $fileds = json_decode($data,true);
            if($fileds['retcode']==1){
                $return['status'] = 'success';
            }else{
                $return['status'] = 'error';
            }
            $return['error_msg'] = $fileds['err_msg'];
            if ($fileds['data']!=NULL) {
                $sql = "SELECT * FROM mount WHERE mid='{$fileds[data][id]}' LIMIT 1";
                $mounts = $db->select_row($sql);
            	$return['data'] = array('uid'=>$res,'similar'=>$fileds['data']['similarity'],'mid'=>$fileds['data']['id'],'mount'=>$mounts['content']);
            }else{
                $return['data'] = 'NULL';
            }
            echo json_encode($return);
        }
       
        
    }else{
        echo json_encode(array('error_msg'=>'上传失败','status'=>'error','data'=>''));
    }
}elseif ($op == 'profile'){
    
    if(count($_POST)>0){
        
        $uid = $_POST['uid'];
        $name = $_POST['name'];
        $mobile = $_POST['mobile'];
        $province = $_POST['province'];
        $city = $_POST['city'];
        $sex = $_POST['sex'];
        
        $sql = "SELECT COUNT(*) as num FROM user WHERE mobile='$mobile';";
        $rows = $db->select($sql);
        
        if($rows[0]['num']>=5){
            
            echo json_encode(array('error_msg'=>'此号码重复参与!','status'=>'success','data'=>''));
            
        }else{
            
            $time = time();
            $sql = "SELECT COUNT(*) as num FROM user WHERE mobile='$mobile';";
            $rows = $db->select($sql);        
            if($rows[0]['num']>0){
                 $sql = "INSERT INTO user (`uid`,`name`,`sex`,`mobile`,`province`,`city`,`createtime`,`default`) VALUES ('$uid','$name','$sex','$mobile','$province','$city','$time',0);";
            }else{
                 $sql = "INSERT INTO user (`uid`,`name`,`sex`,`mobile`,`province`,`city`,`createtime`,`default`) VALUES ('$uid','$name','$sex','$mobile','$province','$city','$time',1);";
            }
           
            $db->insert($sql);
            echo json_encode(array('error_msg'=>'成功','status'=>'success','data'=>''));
        }
        
    }else{
        
        echo json_encode(array('error_msg'=>'失败','status'=>'error','data'=>''));
        
    }
}elseif ($op == 'share'){
    if(count($_POST)>0)
    {
        $title = '纳智捷Luxgen 智慧掌握 Give Me 5';
        $content = '#智慧掌握 Give Me 5#你的掌纹蕴藏怎样的智慧秘密？是韧如华山还是稳重如泰山？是乐观的生活家，还是山中的寻道者？马上跟我一起发现你的天性秘密，就有机会赢纳智捷5 Sedan青岛之旅，让最智慧的车带你前往最幸福的城市！';
        $pic = '';
        $url = 'http://giveme5.dfyl-luxgen.com';
        
        $uid = $_POST['uid'];
        $from = $_POST['type'];
        $platform = $_POST['platform'];
        
        $sql = "INSERT INTO share (`uid`,`type`,`platform`) VALUES ('$uid','$from','$platform');";
        $res = $db->insert($sql);
        
        switch ($platform)
        {
            case 'qq':
                $shareurl = 'http://share.v.t.qq.com/index.php?c=share&a=index&url='.$url.'&title='.$title.'&pic='.$pic.'&appkey=';
                break;
            case 'sina':
                $shareurl = 'http://service.weibo.com/share/share.php?title='.$title.$content.'&url='.$url.'&source=bookmark&appkey=&pic='.$pic.'&ralateUid=';
                break;
            case 'renren':
                $shareurl = 'http://widget.renren.com/dialog/share?resourceUrl='.$url.'&srcUrl='.$url.'&title='.$title.'&description='.$content.'&pic='.$pic;
                break;
        }
        
        if($res){
            echo json_encode(array('error_msg'=>'成功','status'=>'success','data'=>array('shareurl'=>$shareurl)));
        }
    }else{
        
         echo json_encode(array('error_msg'=>'失败','status'=>'error','data'=>''));
    }
}elseif ($op == 'update'){
    
    $sql = "UPDATE `total` SET `total`=total+1";
    $db->query($sql); 
    echo json_encode(array('error_msg'=>'成功','status'=>'success','data'=>''));
    
}elseif ($op == 'all'){
    $sql = "SELECT `total` FROM `total`";
    $rows = $db->select($sql); 
    echo json_encode(array('error_msg'=>'成功','status'=>'success','data'=>array('total'=>$rows[0]['total'])));
    
}
?>