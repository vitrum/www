<!DOCTYPE HTML>
<html>
	<head>
	<meta name="viewport" content=" user-scalable=no" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<title>::LUXGEN::</title>
	<link rel="stylesheet" href="css/style.css" media="all" type="text/css" />
	<meta content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	</head>
<body>  
<head>   
<?php  
if($_GET['action'] == 'upfile')  
{  
$target_path = 'temp_'.$_FILES['photo']['name'];  
echo '上传的临时文件：' .$_FILES['photo']['tmp_name'] . '<br/>'; 
echo '上传的目标文件：' .$target_path . '<br/>'; 
echo $_SERVER["SCRIPT_FILENAME"] . '<br/>'; 
echo $_SERVER["OS"] . '<br/>'; 
//测试函数:　move_uploaded_file 
//也可以用函数：copy 
move_uploaded_file($_FILES['photo']['tmp_name'], $target_path);  
echo "Upload result:";  
if(file_exists($target_path)) {  
 if($_SERVER["OS"]!="Windows_NT"){ 
  @chmod($target_path,0604); 
 } 
 echo '<font color="green">Succeed!</font><br /><a href="http://' .$_SERVER["SERVER_NAME"] . "/" .$target_path .'"><img src=' .$target_path .' border="0" with=300 height=400><a class="punch" href="/project/luxgen2013/www/#/yourmount">yourmount</a>';  
} else {  
 echo '<font color="red">Failed!</font>';  
}  
exit;  
}  
?>  

</body>  
</html>