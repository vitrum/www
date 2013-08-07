/*mousewheel*/
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

var pages=["home","hand","pro","win","intro"];
var citys=[
  {province:"请选择",city:"请选择"},
  {province:"北京",city:["东城","西城","崇文","宣武","朝阳","丰台","石景山","海淀","门头沟","房山","通州","顺义","昌平","大兴","平谷","怀柔","密云","延庆"]},
  {province:"上海",city:["黄浦","卢湾","徐汇","长宁","静安","普陀","闸北","虹口","杨浦","闵行","宝山","嘉定","浦东","金山","松江","青浦","南汇","奉贤","崇明"]},
  {province:"天津",city:["和平","东丽","河东","西青","河西","津南","南开","北辰","河北","武清","红挢","塘沽","汉沽","大港","宁河","静海","宝坻","蓟县"]},
  {province:"重庆",city:["万州","涪陵","渝中","大渡口","江北","沙坪坝","九龙坡","南岸","北碚","万盛","双挢","渝北","巴南","黔江","长寿","綦江","潼南","铜梁","大足","荣昌","壁山","梁平","城口","丰都","垫江","武隆","忠县","开县","云阳","奉节","巫山","巫溪","石柱","秀山","酉阳","彭水","江津","合川","永川","南川"]},
  {province:"河北",city:["石家庄","邯郸","邢台","保定","张家口","承德","廊坊","唐山","秦皇岛","沧州","衡水"]},
  {province:"山西",city:["太原","大同","阳泉","长治","晋城","朔州","吕梁","忻州","晋中","临汾","运城"]},
  {province:"内蒙古",city:["呼和浩特","包头","乌海","赤峰","呼伦贝尔盟","阿拉善盟","哲里木盟","兴安盟","乌兰察布盟","锡林郭勒盟","巴彦淖尔盟","伊克昭盟"]},
  {province:"辽宁",city:["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]},
  {province:"吉林",city:["长春","吉林","四平","辽源","通化","白山","松原","白城","延边"]},
  {province:"黑龙江",city:["哈尔滨","齐齐哈尔","牡丹江","佳木斯","大庆","绥化","鹤岗","鸡西","黑河","双鸭山","伊春","七台河","大兴安岭"]},
  {province:"江苏",city:["南京","镇江","苏州","南通","扬州","盐城","徐州","连云港","常州","无锡","宿迁","泰州","淮安"]},
  {province:"浙江",city:["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"]},
  {province:"安徽",city:["合肥","芜湖","蚌埠","马鞍山","淮北","铜陵","安庆","黄山","滁州","宿州","池州","淮南","巢湖","阜阳","六安","宣城","亳州"]},
  {province:"福建",city:["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"]},
  {province:"江西",city:["南昌市","景德镇","九江","鹰潭","萍乡","新馀","赣州","吉安","宜春","抚州","上饶"]},
  {province:"山东",city:["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"]},
  {province:"河南",city:["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"]},
  {province:"湖北",city:["武汉","宜昌","荆州","襄樊","黄石","荆门","黄冈","十堰","恩施","潜江","天门","仙桃","随州","咸宁","孝感","鄂州"]},
  {province:"湖南",city:["长沙","常德","株洲","湘潭","衡阳","岳阳","邵阳","益阳","娄底","怀化","郴州","永州","湘西","张家界"]},
  {province:"广东",city:["广州","深圳","珠海","汕头","东莞","中山","佛山","韶关","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","潮州","揭阳","云浮"]},
  {province:"广西",city:["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","南宁地区","柳州地区","贺州","百色","河池"]},
  {province:"海南",city:["海口","三亚"]},
  {province:"四川",city:["成都","绵阳","德阳","自贡","攀枝花","广元","内江","乐山","南充","宜宾","广安","达川","雅安","眉山","甘孜","凉山","泸州"]},
  {province:"贵州",city:["贵阳","六盘水","遵义","安顺","铜仁","黔西南","毕节","黔东南","黔南"]},
  {province:"云南",city:["昆明","大理","曲靖","玉溪","昭通","楚雄","红河","文山","思茅","西双版纳","保山","德宏","丽江","怒江","迪庆","临沧"]},
  {province:"西藏",city:["拉萨","日喀则","山南","林芝","昌都","阿里","那曲"]},
  {province:"陕西",city:["西安","宝鸡","咸阳","铜川","渭南","延安","榆林","汉中","安康","商洛"]},
  {province:"甘肃",city:["兰州","嘉峪关","金昌","白银","天水","酒泉","张掖","武威","定西","陇南","平凉","庆阳","临夏","甘南"]},
  {province:"宁夏",city:["银川","石嘴山","吴忠","固原"]},
  {province:"青海",city:["西宁","海东","海南","海北","黄南","玉树","果洛","海西"]},
  {province:"新疆",city:["乌鲁木齐","石河子","克拉玛依","伊犁","巴音郭勒","昌吉","克孜勒苏柯尔克孜","博尔塔拉","吐鲁番","哈密","喀什","和田","阿克苏"]},
  {province:"香港",city:[]},
  {province:"澳门",city:[]},
  {province:"台湾",city:["台北","高雄","台中","台南","屏东","南投","云林","新竹","彰化","苗栗","嘉义","花莲","桃园","宜兰","基隆","台东","金门","马祖","澎湖"]},
  {province:"其它",city:["北美洲","南美洲","亚洲","非洲","欧洲","大洋洲"]}
];


function fixedTitle() {
  document.title="LUXGEN 纳智捷5 Sedan";
}

function showShare(uid,mid,similar,sex){
  $.ajax({
    type:"POST",
    url:"text.php?mid="+mid+"&similar="+similar,
    data: {},
    success:function(json){
      $("#hand_img img").attr("src",json);
      //console.log(json);
      var bodyDiv=$("body");
      bodyDiv.attr("uid",uid);
      bodyDiv.attr("sex",sex);
      //console.log('similar:'+similar);
      bodyDiv.attr("similar",similar);
      bodyDiv.attr("mid",mid);
      $("#hand_similar").html(similar);
      $(".p_hand .container").fadeOut(0);
      $(".hand_share").fadeIn(0);

      //similar=parseInt(similar);

      changeHref("#flash_sina",mid,similar);
      changeHref("#flash_qq",mid,similar);
      changeHref("#flash_ren",mid,similar);
      window.location.href="#hand_share";
    }
  });
  //$("#hand_img img").attr("src","text/"+mid+"a.jpg");

}
function changeHref(selector,mid,similar){
  var href=$(selector).attr("href"),
      index=href.indexOf("&pic="),
      pic="&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d";
      href=href.slice(0,index);
  similar=parseInt(similar);
  $.ajax({
    type:"POST",
    url:"img-pc.php?mid="+mid+"&similar="+similar,
    data: {},
    success:function(json){
      pic="&pic="+json;
      href+=pic;
      $(selector).attr("href",href);
    }
  });
  
}
function shareTo(platform){
  var uid=$("body").attr("uid");
  var postData = '&uid='+uid+'&type=pc&platform='+ platform;
  $.ajax({
    type:"POST",
    url:"post.php?op=share",
    data: postData,
    success:function(json){
      json=$.parseJSON(json);
      if(json.status=="success"){
        //window.location.href=json.data.shareurl;
        //window.open(json.data.shareurl,"blank");
        $("#flash_"+platform).attr("href",json.data.shareurl);
        $(".share_"+platform+" a").attr("href",json.data.shareurl);
      }
    }
  });
}
function winOrderSilder(type){
  var silders=$(".win_txt"),
      length=silders.length;
      currentId=$(".win_txt.current"),
      current=parseInt(currentId.attr("id").replace("txt_",""));
  if(type==1){
    current++;
    current=current%length;
  }else{
    current--;
    if(current<0){current=current+length;}
  }
  currentId.hide().removeClass("current");
  $("#"+silders[current].id).fadeIn(0).addClass("current");
}

function pageTransition(){
  var bodyDiv=$("body");
  var $uid=bodyDiv.attr("uid"),
      $sex=bodyDiv.attr("sex"),
      $similar=bodyDiv.attr("similar"),
      $mid=bodyDiv.attr("mid");
  renderHeight();
  var hash=window.location.hash.replace("#",""),
      sub=hash.indexOf("_"),
      url=hash;
      subPanel=hash;
  if(sub>0){
    var hashArray=hash.split("_");
    hash=hashArray[0];   
  }else{
    if(hash=="hand"){
      subPanel="hand_swf";
    }else if(hash=="win"){
      subPanel="win_awards";
    }
  }
  if(!hash||hash==""){hash="home";}
  //console.log(hash);
  if(hash=="home"){
    //console.log('scroll to ' + divOffset[0]);
    $('.body').animate({scrollTop: divOffset[0]}, 400, function() {});
  }
  if(hash=="hand"||hash=="win"){
    $(".subPanel").fadeOut(0);
    $("."+subPanel).fadeIn(0);
  }
  if(hash=="hand"){
      renderHand();
      $('.body').animate({scrollTop: divOffset[1]}, 400, function() {});
      //console.log('scroll to ' + divOffset[1]);
  }
  if(hash=="win"){
    $('.body').animate({scrollTop: divOffset[3]}, 400, function() {});
    addSwfWin();
    //console.log('scroll to ' + divOffset[3]);
  }
  if(hash=="pro"){
    $('.body').animate({scrollTop: divOffset[2]}, 400, function() {});
    addSwfPro();
    //console.log('scroll to ' + divOffset[2]);
  }
  if(hash=="intro"){
    $('.body').animate({scrollTop: divOffset[4]}, 400, function() {});
    addSwfIntro();
    //console.log('scroll to ' + divOffset[4]);
  }
  if(url!="win_list"&&url!="win_awards"){
    //$(".panel").fadeOut(0);
    $(".p_"+hash).fadeIn(1000);
  }else{
    $(".p_win").show();
  }
  if(url=="hand_share"){
   /*var bodyDiv=$("body"),
        $uid=bodyDiv.attr("uid"),
        $sex=bodyDiv.attr("sex");
        $similar=bodyDiv.attr("similar");
        $mid=bodyDiv.attr("mid");
    showShare($uid,$mid,$similar,$sex);*/
  }
  if(hash=="intro"||hash=="win"||hash=="pro"){
    $(".footer").addClass("wite");
  }else{
    $(".footer").removeClass("wite");
  }
  if(hash=="hand"){countJoin();}
  $(".nav_main a").removeClass("current");
  $("#nav_"+hash).addClass("current");
  $(".pagination_number a").removeClass("current");
  $("#page_"+hash).addClass("current");
  var i=getIndex(hash,pages,5,1),
      next=pages[i];
  $(".pagination_next").attr("href","#"+next);
  $('.home_share').fadeOut();
  fixedTitle();
}
function autoRefresh(){
  window.location.href="pc2.html";
  //pageTransition();
}
function getIndex(current,array,size,type){
  var index;
  $.each(array,function(i){
    if(current==array[i]){
        index=i;
    }
  });
  if(type==1){
    index++;
    index=index%size;
  }else{
    index--;
    if(index<0){index+=size}
  }
  return index;
}
function renderHeight(){
  // var $height=parseInt(document.documentElement.clientHeight),
  //     $width=parseInt(document.documentElement.clientWidth);
  var $height = $(window).height()
      $width = $(window).width();
  if($height<100){
    $height=640;
  }
  
  if($width<1024){
    $width=1024;
    //$(".home_links").addClass("home_over");
    $(".nav_main").css({"width":$width*0.60,"left":"200px"});
    $(".nav_sub").css({"width":$width*0.22, "right":"0px"});
  }
  if($width<1500){
    $(".home_links").addClass("home_over");
    $("#hand_btn1").attr("width","112");
    $("#hand_btn1").attr("height","112");
    $("#hand_btn1 object").attr("width","112");
    $("#hand_btn1 object").attr("height","112");
    $(".p_hand .hand_btn1").css({"width":"112px","height":"112px"});

    $("#hand_btn2").attr("width","208");
    $("#hand_btn2").attr("height","112");
    $("#hand_btn2 object").attr("width","208");
    $("#hand_btn2 object").attr("height","112");
    $(".p_hand .hand_btn2").css({"width":"208px","height":"112px"});

    $("#hand_btn3").attr("width","344");
    $("#hand_btn3").attr("height","112");
    $("#hand_btn3 object").attr("width","344");
    $("#hand_btn3 object").attr("height","112");
    $(".p_hand .hand_btn3").css({"width":"344px","height":"112px"});

    $("#hand_btn4").attr("width","208");
    $("#hand_btn4").attr("height","112");
    $("#hand_btn4 object").attr("width","208");
    $("#hand_btn4 object").attr("height","112");

    $("#hand_btn5").attr("width","208");
    $("#hand_btn5").attr("height","112");
    $("#hand_btn5 object").attr("width","208");
    $("#hand_btn5 object").attr("height","112");

    $("#hand_btn6").attr("width","208");
    $("#hand_btn6").attr("height","112");
    $("#hand_btn6 object").attr("width","208");
    $("#hand_btn6 object").attr("height","112");

    $("#FlashIDInrto").attr("width","649.6");
    $("#FlashIDInrto").attr("height","545.6");
    $("#FlashIDInrto object").attr("width","649.6");
    $("#FlashIDInrto object").attr("height","545.6");
    $(".intro_left").css({"height":"546px","margin-top":"-270px"});
  }else{
    $("#FlashIDCar").attr("width","861");
    $("#FlashIDCar").attr("height","528");
    $("#FlashIDCar object").attr("width","861");
    $("#FlashIDCar object").attr("height","528");
    $(".winbox_car").css({"width":"861px","height":"528px"});
  }
  $("body").css({"width":$width});
  $(".body").css({"height":$height, "width":$width});
  $(".panel").css({"height":$height, "width":$width});
  $(".home_share").css({"height":$height, "width":$width});
  fixedTitle();
}

function parallaxScroll(){
  var $height=parseInt(document.documentElement.clientHeight);

  var divScale = new Array(), divOffsetNew = new Array();
  divScale[2] = Number($height)/300;
  divScale[3] = Number($height)/200;
  divScale[4] = Number($height)/700;

  divOffsetNew[2] = $('.p_pro').offset().top;
  divOffsetNew[3] = $('.p_win').offset().top;
  divOffsetNew[4] = $('.p_intro').offset().top;

  var scrolled = $('.body').scrollTop();
  $('.pro_btns').css('margin-left','-'+$('.p_pro').offset().top+'px');
  $('.win_btns').css('left',Number($('.p_win').offset().top) + 300 +'px');
  if( Number($('.p_win').offset().top)< 400){
    $('.winbox').css('top',-Number($('.p_win').offset().top)*2 + 220 +'px');
  }
  
  $('.intro_fight').css('right', -Number($('.p_intro').offset().top) +'px');
  //$('.winbox_car').css('right', Number($('.p_win').offset().top) + 20 +'px');
  //$('#parallax-bg3').css('top',( divOffset[2]-(0-(divOffsetNew[2]/divScale[2])) )+'px');
  //console.log("scrolled:"+scrolled +",bg3.old-top:"+(Number(divOffset[2])+500) +',bg3.new-top:'+$('.p_pro').offset().top + ', my set:' + ( divOffset[2]-(0-(divOffsetNew[2]/divScale[2])) ));
  //console.log('intro_fight right:' + (-Number($('.p_intro').offset().top)));
}
function parallaxBoxInit(){
  $('.pro_btns').css('margin-left',-800+'px');
  $('.win_btns').css('left',-800+'px');
  $('.winbox').css('top',-200+'px');
  //$('.winbox_car').css('right',-800+'px');
  //$('.intro_left').css('right',-800+'px');
  $('.intro_fight').css('right',800+'px');
}
function pageReTransition(){
  var hash=window.location.hash.replace("#","");
  var scrolled = $('.body').scrollTop();
  //console.log('pageReTransition:' + hash +"," + $('.p_'+hash ).offset().top +",scrolled:" +scrolled);
  $('.body').animate({scrollTop: (Number($('.p_'+hash ).offset().top) +  Number(scrolled)) }, 400, function() {});
}
function parallaxInit(){

  setTimeout(function(){
    divOffset[0] = $('.p_home').offset().top;
    divOffset[1] = $('.p_hand').offset().top;
    divOffset[2] = $('.p_pro').offset().top;
    divOffset[3] = $('.p_win').offset().top;
    divOffset[4] = $('.p_intro').offset().top;
  },500);

}
var divOffset = [0,800,1600,2400,3200,4000];

function countJoin(){
  $.ajax({
    type:"POST",
    url:"post.php?op=update",
    data: {},
    success:function(json){
      return false;
    }
  });
}

  //$("#btn_draw").click(function(){
  function postProfile() {
    //console.log('postProfile');
    fixedTitle();
    var $body=$("body"),
        self=$(this),
        uid=$body.attr("uid"),
        sex=$body.attr("sex"),
        name=$("#formName").val(),
        mobile=$("#formMobile").val(),
        province=$("#formProvince").val(),
        city=$("#formCity").val();
    if(!uid||uid==""){
      alert("该用户不存在");
    }else if(!sex||sex==""){
      alert("用户性别不确定");
    }else if(!name||name==""||$blank.test(name)){
      alert("请填写姓名");
      $(".form_li input").removeClass("error");
      $("#formName").addClass("error").focus();
    }else if(!mobile||mobile==""||!$regTelPhone.test(mobile)){
      alert("请填写正确的手机号码");
      $(".form_li input").removeClass("error");
      $("#formMobile").addClass("error").focus();
    }else if(!province||province==""||province=="请选择"){
      alert("请选择省份");
      $(".form_li input").removeClass("error");
      $("#formProvince").addClass("error").focus();
    }else if(!city||city==""||city=="请选择"){
      alert("请选择城市");
      $(".form_li input").removeClass("error");
      $("#formCity").addClass("error").focus();
    }else{
      $(".form_li input").removeClass("error");  
      var tempUserName = name.replace(/[^\u4E00-\u9FA5]/g,'');
      if(tempUserName !== name ){
        alert("请输入正确的中文姓名");
        $(".form_li input").removeClass("error");
        $("#formName").addClass("error").focus();
      }else{    
        $.ajax({
          type:"POST",
          url:"post.php?op=profile",
          data: {uid:uid,name:name,mobile:mobile,province:province,sex:sex,city:city},
          success:function(json){
            json=$.parseJSON(json);
            if(json.status=="success"){
              $("#formName").val("");
              $("#formMobile").val("");
              $("#formProvince").val("");
              $("#formCity").html("<option>请选择</option>");
              window.location.href="#hand_send";
              _gaq.push(['_trackPageview','/pv/profile/subminsuccess']);
            }
          }
        });
      }
    }
  };

$(function(){
  
  renderHeight();
  parallaxInit();
  parallaxBoxInit();
  
  $(window).resize(function(){
    renderHeight();
    parallaxInit();
    pageReTransition();
  });

  
  
  $('.body').bind('scroll',function(e){
    parallaxScroll();
  });

  $regTelPhone = /^1[3|4|5|8][0-9]\d{4,8}$/; //手机号
  $blank = /^(|\s+)$/; //空格
  /*$("#formName").blur(function(){
   var self=$(this),
        $val=self.val();
    if(!$val||$val==""||$blank.test($val)){
      //self.val($val.slice(0,4));
      self.focus().addClass("error");
    }else{
      self.removeClass("error");
    }
  });*/
  /*$("#formMobile").blur(function(){
    var self=$(this),
        $val=self.val();
    if(!$val||$val==""||$blank.test($val)||!$regTelPhone.test($val)){
      self.focus().addClass("error");
    }else{
      self.removeClass("error");
    }
  });*/
  $.each(citys,function(i){
    $("#formProvince").append("<option pindex='"+i+"'>"+citys[i]["province"]+"</option>");
    $("#formCity").html("<option cindex='0'>请选择</option>");
  });
  $("#formProvince").change(function(){
      var self=$(this),
          parent=$("#formCity"),
          pvalue=self.val(),
          pindex=0;
      $.each(citys,function(i){
          if(pvalue==citys[i]["province"]){
              pindex=i;
          }
      });
      var cityArry=citys[pindex]["city"];
      parent.empty();
      $.each(cityArry,function(i){
        parent.append("<option cindex='"+i+"'>"+cityArry[i]+"</option>");
      });
  });


  window.onhashchange=function(){
    pageTransition();
  }
  window.onload=function(){
    pageTransition();
  }
  $.ajax({
    type:"POST",
    url:"post.php?op=all",
    data: {},
    success:function(json){
      json=$.parseJSON(json);
      if(json.status=="success"){
        var total=json.data.total;
        total=total.split("");
        $.each(total,function(i){
          $("#text_total").append("<b class='text_img"+total[i]+"'>"+total[i]+"</b>");
        });
        $(".panel_load").fadeOut();
        $(".home_links").fadeIn();
        renderHome();
        renderHand();
        addSwfIntro();
        addSwfWin();
        addSwfPro();
      }
    }
  });
  $("#nav_share").click(function(){
    $(".home_share").fadeIn(300);
    fixedTitle();
  });
  $('.hand_draw .hand_close').click(function(){
    $('.subPanel').hide();
    $('.hand_share').show(); 
    fixedTitle();
  });
  $('.hand_shareTo .hand_close').click(function(){
    $('.subPanel').hide();
    $('.hand_share').show();
    fixedTitle();
  });
  
  $(".content").mCustomScrollbar({
          set_height:"75%",
          mouseWheel:true
        });
});

function renderHome(){
  //$(".home_swf").empty();
  //var html='<object id="homeSwf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="flash/home.swf"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 --><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 --><!--[if !IE]>--><object type="application/x-shockwave-flash" data="flash/home.swf" width="100%" height="100%"><!--<![endif]--><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 --><div><h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4><p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" width="112" height="33" /></a></p></div><!--[if !IE]>--></object><!--<![endif]--></object>';
  //$(".home_swf").html(html);
  //$(".home_swf").show();
  setTimeout(function(){
    $(".loading_mask").fadeOut();
  },800);
  fixedTitle();
}

function renderHand(){
  //$("#hand_swf").empty();
  var html='<object id="handSwf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="flash/palmPrint.swf"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 --><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 --><!--[if !IE]>--><object type="application/x-shockwave-flash" data="flash/palmPrint.swf" width="100%" height="100%"><!--<![endif]--><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 --><div><h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4><p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" width="112" height="33" /></a></p></div><!--[if !IE]>--></object><!--<![endif]--></object>';
  $("#hand_swf").html(html);
  fixedTitle();
}


function addSwfIntro(){
  $(".intro_left").empty();
  var $height = $(window).height()
      $width = $(window).width();
  var newFlashWidth, newFlashHeight;
  if($width > 1200){
    newFlashWidth = 812;
    newFlashHeight = 682;
  }else{
    newFlashWidth = 660;
    newFlashHeight = 554;
    $('.intro_left').css('left','-276px');
  }
  var html='<object id="FlashIDInrto" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+newFlashWidth+'" height="'+newFlashHeight+'"><param name="movie" value="flash/p_intro.swf"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 --><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 --><!--[if !IE]>--><object type="application/x-shockwave-flash" data="flash/p_intro.swf" width="'+newFlashWidth+'" height="'+newFlashHeight+'"><!--<![endif]--><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 --><div><h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4><p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" width="112" height="33" /></a></p></div><!--[if !IE]>--></object><!--<![endif]--></object>';
  $(".intro_left").html(html);
  fixedTitle();
}
function addSwfWin(){
  $(".winbox_car").empty();
  var html='<object id="FlashIDCar" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="574" height="352"><param name="movie" value="flash/p_win.swf"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 --><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 --><!--[if !IE]>--><object type="application/x-shockwave-flash" data="flash/p_win.swf" width="574" height="352"><!--<![endif]--><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 --><div><h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4><p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" width="112" height="33" /></a></p></div><!--[if !IE]>--></object><!--<![endif]--></object>';
  $(".winbox_car").html(html);
  var $width = $(window).width();
  if($width<1024){
    $width=1024;
  }
  if($width>=1500){
    $("#FlashIDCar").attr("width","861");
    $("#FlashIDCar").attr("height","528");
    $("#FlashIDCar object").attr("width","861");
    $("#FlashIDCar object").attr("height","528");
    $(".winbox_car").css({"width":"861px","height":"528px"});
  }
  fixedTitle();
}
function addSwfPro(){
  $(".carinswf").empty();
  var html='<object id="FlashIDPro" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="flash/p_pro.swf"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 --><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 --><!--[if !IE]>--><object type="application/x-shockwave-flash" data="flash/p_pro.swf" width="100%" height="100%"><!--<![endif]--><param name="quality" value="high"><param name="wmode" value="transparent"><param name="swfversion" value="8.0.0.0"><param name="expressinstall" value="Scripts/expressInstall.swf"><!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 --><div><h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4><p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" width="112" height="33" /></a></p></div><!--[if !IE]>--></object><!--<![endif]--></object>';
  $(".carinswf").html(html);
  fixedTitle();
}