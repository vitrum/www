﻿<?php 

if (strpos($_SERVER['HTTP_REFERER'], 'jump.php')!== false)
{
	header('location:http://mobile.dfyl-luxgen.com/android.php');
	exit;
}
else if (strpos($_SERVER['HTTP_USER_AGENT'], '_weibo_'))
{
	header('location:http://mobile.dfyl-luxgen.com/pad.php');
	exit;
}

?>
<!DOCTYPE HTML>
<html><head>
	<meta name="viewport" content=" user-scalable=no" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<title>::LUXGEN::</title>
	<link rel="stylesheet" href="css/style.css" media="all" type="text/css" />
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /> 
	<script type=""text/javascript"">
	  //check pc and jump to pc//
		function is_touch_device() {
		  return !!('ontouchstart' in window) // works on most browsers 
		      || !!('onmsgesturechange' in window); // works on ie10
		};


function is_Pad(){  
    var ua = navigator.userAgent.toLowerCase();  
    if(ua.indexOf("pad")>0) {  
        return true;  
    } else {  
        return false;  
    }  
}  

		if(Number(window.innerWidth)>640 && !is_touch_device()){
			self.location='http://giveme5.dfyl-luxgen.com/pc.html';
			
		}else if(is_Pad() || (Number(window.innerWidth)>640 && is_touch_device())){
			self.location='http://mobile.dfyl-luxgen.com/pad.html';
		};
	  //check pc and jump to pc//
	  
	  
// Comptipable with IE
	  
function getOs()
{
    var OsObject = "";
   if(navigator.userAgent.indexOf("IE")>0) {
        return "IE";
   }
   /*
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
        return "Firefox";
   }
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) {
        return "Safari";
   }
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){
        return "Camino";
   }
   if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){
        return "Gecko";
   }
   */
}

var BrowserType = getOs();

		if(BrowserType=='IE'){
			self.location='http://giveme5.dfyl-luxgen.com/ipc.html';
		}


if (window.location.href.indexOf("iveme5")>0)
{
	self.location='http://mobile.dfyl-luxgen.com';
}


	  //ad//
	  var _smq = _smq || [];
	  _smq.push(['_setAccount', '36075ECE', new Date()]);
	  _smq.push(['_setDirectoryIndex', '']);
	  _smq.push(['pageview']);

	  (function() {
	  var sm = document.createElement('script'); sm.type = 'text/javascript'; sm.async = true;
	  sm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdnmaster.com/sitemaster/sm.js';
	  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sm, s);
	  })();

	</script>
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-42336451-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
	</head>
<body>
	<div class="page">
		<header>
			<div class="link_home">
				<a class="punch link_home" href="#/index">返回首页</a>
				<a class="book" href="http://html.cigtest.com.cn/commeal/test/drive.html" target="_blank">预约试驾</a>
			</div>
			<h1 class="logo">LUXGEN 纳智捷</h1>
		</header>
		<div class="frame homepage">
			<div class="content">
				<div class="title">title</div>
				<ul class="menu">
					<li class="selectgender"><a class="punch selectgender" href="#/gender">selectgender</a></li>
					<li class="awardlist"><a class="punch awardlist" href="#/userlist">userlist</a></li>
					<li class="aboutgame"><a class="punch aboutgame" href="#/aboutgame">aboutgame</a></li>
				</ul>
			</div>
		</div>
		<div class="frame selectgender">
			<div class="content">
				<div class="gender">您的性别</div>
				<ul>
					<li><a class="punch male"  href="#/gender/male">male</a></li>
					<li><a class="punch female"  href="#/gender/female">female</a></li>
				</ul>
			</div>
		</div>
		<div class="frame takebox">
			<div class="content">
				<section class="subframe take">
					<form action="upload.php?action=upfile" method="post" name="UForm" enctype="multipart/form-data">
						<div class="imagebox">
							<!-- <img id="yourimage" /> -->
						    <canvas id ="backcanvas" width="300" height="400"></canvas>
						    <canvas id ="newCanvas" width="300" height="400"></canvas>
						    <!--<canvas id ="tempcanvas2" width="300" height="400"></canvas>-->
  							<canvas id ="postThePicCanvas" class="piccanvas" width="190" height="190"></canvas>
							<!-- <canvas id ="postThePicCanvas" class="piccanvas"></canvas> -->
							<div class="gridbox" id="gridbox"></div>
							<div class="default"></div>
						</div>
						<img id="savedate"/>
						<!--<button type="submit">上传</button>-->
						
					</form>
				</section>
			</div>
		</div>
		<div class="frame yourmount">
			<div class="content">
				<section class="subframe rendering">
					<div class="status">
						<p class="txt">掌纹山势渲染中...</p>
						<p class="loading">LOADING <b>0%</b></p>
					</div>
					<div class="mountstxt"><div class="text"></div></div>
					<div id="container"></div>
					<div class="caranimbox"><div class="carunit"></div><div class="carlight"></div></div>
					
					<!--
					<div id="buttons" style="position: absolute; width: 100%; height: auto; z-index: 300;">
				      <input type="button" id="start" value="Start">
				      <input type="button" id="stop" value="Reset">
				    </div>
					-->
				</section>
				<section class="subframe real">
					<div class="realmount">
						<h4 class="title"></h3>
						<div class="text"></div>
						<img src="" class="mountpic" />
						<h3 class="name"></h3>
					</div>
				</section>
				<nav class="mountswich">
					<a class="pre">pre</a>
					<a class="nex">nex</a>
				</nav>
			</div>
		</div>
		<div class="frame awardbox">
			<div class="content">
				<section class="subframe inputfrom">
					<h2 class="title">参与抽奖</h2>
					<div class="subinfobox">
						<p>马上填写资料，</p>
						<p>就有机会赢得智慧天地启程之旅！</p>
						<p class="info">*请务必留下您的真实信息，</p>
						<p class="info">以便您中奖时，我们能及时联络。</p>
					</div>
					<div class="subform">
						<form id="userprofile" name="creator">
							<ul>
								<li><label class="forname">姓名</label><input type="text" name="uname" id="uname"  maxlength="5" /></li>
								<li><label class="forphone">手机</label><input type="number" name="phone" id="phone"  maxlength="11" /><input type="hidden" name="gender" id="gender" /><input type="hidden" name="picid" id="picid" /></li>
								<li>
									<label class="forcity">城市</label>
									<select  name="province" id="province">
									</select>
									<select name="city" id="city">
									</select>
								</li>
							</ul>
						</form>
						<div class="navbox2 awardlink"><a class="navlink awardsubmint" href="#/subminsuccess">确认提交</a></div>
					</div>
				</section>
				<section class="subframe subminsuccess">
					<h2 class="title">提交成功！</h2>
					<div class="successinfobox">
						<p>获奖通知将在活动结束后的</p>
						<p>2周内发出，您也可以再网站上</p>
						<p>持续关注“获奖名单”</p>
					</div>
					<div class="navbox2 subminsuccess"><a class="navlink subminsuccess" href="#/aboutgame">活动说明</a></div>
				</section>
				<section class="subframe share">
					<h2 class="title">分享至</h2>
					<ul class="sharelist">
						<li><a class="sina"  id="flash_sina" href="http://service.weibo.com/share/share.php?title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23%20%e5%8e%9f%e6%9d%a5%e6%88%91%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%83%8f%e5%b1%b1%e8%84%89%e4%b8%80%e6%a0%b7%ef%bc%8c%e8%95%b4%e5%90%ab%e7%a5%9e%e7%a7%98%e6%99%ba%e6%85%a7%ef%bc%81%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e8%97%8f%e7%9d%80%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e5%a4%a9%e5%9c%b0%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e8%a7%a3%e5%af%86%e4%bd%a0%e7%8b%ac%e6%9c%89%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82%ef%bc%81&url=http://giveme5.dfyl-luxgen.com&source=bookmark&appkey=&ralateUid=&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d" target="_blank">新浪微博</a></li>
						<li><a class="qq" id="flash_qq" href="http://share.v.t.qq.com/index.php?c=share&a=index&url=http://giveme5.dfyl-luxgen.com&title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23%20%e5%8e%9f%e6%9d%a5%e6%88%91%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%83%8f%e5%b1%b1%e8%84%89%e4%b8%80%e6%a0%b7%ef%bc%8c%e8%95%b4%e5%90%ab%e7%a5%9e%e7%a7%98%e6%99%ba%e6%85%a7%ef%bc%81%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e8%97%8f%e7%9d%80%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e5%a4%a9%e5%9c%b0%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e8%a7%a3%e5%af%86%e4%bd%a0%e7%8b%ac%e6%9c%89%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82%ef%bc%81&appkey=801cf76d3cfc44ada52ec13114e84a96&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d"  target="_blank">腾讯微博</a></li>
						<li><a class="renren"  id="flash_ren" href="http://widget.renren.com/dialog/share?resourceUrl=http://mobile.dfyl-luxgen.com&srcUrl=http://giveme5.dfyl-luxgen.com&title=%23%E6%99%BA%E6%85%A7%E6%8E%8C%E6%8F%A1%20Give%20Me%205%23&description=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23%20%e5%8e%9f%e6%9d%a5%e6%88%91%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%83%8f%e5%b1%b1%e8%84%89%e4%b8%80%e6%a0%b7%ef%bc%8c%e8%95%b4%e5%90%ab%e7%a5%9e%e7%a7%98%e6%99%ba%e6%85%a7%ef%bc%81%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e8%97%8f%e7%9d%80%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e5%a4%a9%e5%9c%b0%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e8%a7%a3%e5%af%86%e4%bd%a0%e7%8b%ac%e6%9c%89%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82%ef%bc%81&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d"  target="_blank">人人网</a></li>
					</ul>
				</section>
			</div>
		</div>
		<div class="frame aboutgame">
			<div class="content">
				活动说明
			</div>
		</div>
		<div class="frame userlist">
			<div class="content">
				<p style="text-align:center; padding:30% 0 0 0">目前还未有获奖名单，敬请期待！<p>
			</div>
		</div>
	
		<nav class="navbox">
			<div class="navbar takepic"><!--<a class="takepic_btn" id="takeThePic">拍摄</a>-->
				<a class="navlink back">返回</a>
				<a class="navlink takethepic">拍摄</a>
				<button class="btn_back" type="button">返回</button>
				<input type="file" accept="image/*" capture="camera" id="takePictureField" name="photo" />
			</div>
			<div class="navbar retakepic">
				<a  class="navlink retake" >使用</a><a class="navlink takethepic">重新拍摄</a>
				<button class="btn_post" type="button">返回</button>
				<input type="file" accept="image/*" capture="camera" id="takePictureField2" name="photo" />
			</div>
			<div class="navbar yourmount">
				<a class="navlink youreal">您的专属掌纹山脉图</a>
				<button class="btn_youreal" type="button">您的专属掌纹山脉图</button>
			</div>
			<div class="navbar showreal">
				<a class="navlink youreal linkshare" href="#/share">即刻分享</a>
				<a class="navlink youreal linkaward" href="#/award">参与抽奖</a>
				<a class="navlink youreal replay" href="#/gender">再来一次</a>
			</div>
			<div class="navbar awardlink"><a class="navlink awardsubmint" href="#/subminsuccess">确认提交</a></div>
			<div class="navbar subminsuccess"><a class="navlink subminsuccess" href="#/aboutgame">活动说明</a></div>
			<div class="navbar aboutgame"><a class="navlink aboutgame">活动说明</a></div>
			<div class="navbar sheargame"><a class="navlink sheargame" href="#/award">填写中奖信息</a></div>
			
		</nav>
	</div>
	<div class="mask">
		<div class="loading">Loading...</div>
	</div>
	<div class="horizontal">
		<div class="content">
			建议竖屏使用获得更好体验!
			<img class="bufferimg" src="image/ajax-loader.gif" width="0" height="0" />
			<img class="bufferimg" src="image/image/icon-form.png" width="0" height="0" />
			<img class="bufferimg" src="image/x2/icon-form.png" width="0" height="0" />
			<img class="bufferimg" src="image/image/icon-subminsuccess.png" width="0" height="0" />
			<img class="bufferimg" src="image/x2/icon-subminsuccess.png" width="0" height="0" />
		</div>
	</div>

	<script type="text/javascript" src="js/lib/zepto.min.js"></script>
	<script type="text/javascript" src="js/lib/underscore-min.js"></script>
	<script type="text/javascript" src="js/lib/backbone-min.js"></script>
	<script type="text/javascript" src="js/lib/hammer.min.js"></script>
	<script type="text/javascript" src="js/lib/kinetic.js"></script>
	<script type="text/javascript" src="js/lib/binaryajax.js"></script>
	<script type="text/javascript" src="js/lib/exif.js"></script>
	<script type="text/javascript" charset="utf-8" src="data/mount.js"></script>
	<script type="text/javascript" charset="utf-8" src="js/common.js"></script>

	<noscript>
		建议启用JavaScript以获得更好体验!
	</noscript>
	<!--
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42336451-1', 'dfyl-luxgen.com');
  ga('send', 'pageview');

</script>
GA tracking code begin
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-42336451-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = 'http://www.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
GA tracking code end-->



</body>
</html>