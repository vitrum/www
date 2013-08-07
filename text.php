<?php
error_reporting(0);
//header('Content-Type: image/jpeg');
$mid = intval($_GET['mid']);
$similar = intval($_GET['similar']);

//if(!$mid) exit('No picture.');
if(empty($mid)){
    
    exit('mid不能为空!');
    
}else{

   $pic = 'text/'.$mid.'a.jpg';
}


$font = "FUTURAB.TTF";
//$title = "相似度";
$text = '%'; 

$im = imagecreatefromjpeg($pic);
$white = imagecolorallocate($im, 255, 255, 255);
if($similar>0){
    //imagettftext($im, 14, 0, 600, 50, $white, $font, $title);
    imagettftext($im, 50, 0, 600, 160, $white, $font, $similar);
	imagettftext($im, 20, 0, 670, 150, $white, $font, $text);
}
$path = 'text/'.date('Ym').'/'.date('d');
if(!is_dir($path)){
    @mkdir($path,0777,true);
}
$filename = $path.'/'.md5(time()).'.jpg';
imagejpeg($im,$filename,90);
//imagejpeg($im);
imagedestroy($im);

echo 'http://client.17bi.net/luxgen/'.$filename;
?>