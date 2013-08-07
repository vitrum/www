<?php
error_reporting(0);
//header('Content-Type: image/jpeg');
$mid = intval($_GET['mid']);
$similar = intval($_GET['similar']);

//if(!$mid) exit('No picture.');
if(empty($mid)){
    
    $pic = 'img/share.jpg';
    
}else{
    if(empty($similar)){
         $pic = 'share/'.$mid.'b.jpg';
    }else{
         $pic = 'share/'.$mid.'a.jpg';
    }
}


$font = "FUTURAB.TTF";   
$text = '%'; 

$im = imagecreatefromjpeg($pic);
$white = imagecolorallocate($im, 255, 255, 255);
if($similar>0){
    imagettftext($im, 100, 0, 560, 320, $white, $font, $similar);
	imagettftext($im, 40, 0, 695, 305, $white, $font, $text);
}
$path = 'share/'.date('Ym').'/'.date('d');
if(!is_dir($path)){
    @mkdir($path,0777,true);
}
$filename = $path.'/'.md5(time()).'.jpg';
imagejpeg($im,$filename,100);
//imagejpeg($im);
imagedestroy($im);

echo 'http://client.17bi.net/luxgen/'.$filename;
?>