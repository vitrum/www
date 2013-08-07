  var pages=["home","hand","pro","win","intro"];
  var mountain=[
    {
      "id":"1",
      "name":"山1",
      "intro":"sahn1"
    },
    {
      "id":"2",
      "name":"山2",
      "intro":"sahn2"
    },
    {
      "id":"3",
      "name":"山3",
      "intro":"sahn3"
    },
    {
      "id":"4",
      "name":"山4",
      "intro":"sahn4"
    },
    {
      "id":"5",
      "name":"山5",
      "intro":"sahn5"
    },
    {
      "id":"6",
      "name":"山6",
      "intro":"sahn6"
    },
    {
      "id":"7",
      "name":"山7",
      "intro":"sahn7"
    },
    {
      "id":"8",
      "name":"山8",
      "intro":"sahn8"
    },
    {
      "id":"9",
      "name":"山9",
      "intro":"sahn9"
    },
    {
      "id":"10",
      "name":"山10",
      "intro":"sahn10"
    },
    {
      "id":"11",
      "name":"山11",
      "intro":"sahn11"
    },
    {
      "id":"12",
      "name":"山12",
      "intro":"sahn12"
    },
    {
      "id":"13",
      "name":"山13",
      "intro":"sahn13"
    },
    {
      "id":"14",
      "name":"山14",
      "intro":"sahn14"
    },
    {
      "id":"15",
      "name":"山15",
      "intro":"sahn15"
    },
    {
      "id":"16",
      "name":"山16",
      "intro":"sahn16"
    },
    {
      "id":"17",
      "name":"山17",
      "intro":"sahn17"
    },
    {
      "id":"18",
      "name":"山18",
      "intro":"sahn18"
    },
    {
      "id":"19",
      "name":"山19",
      "intro":"sahn19"
    },
    {
      "id":"20",
      "name":"山20",
      "intro":"sahn20"
    },
    {
      "id":"21",
      "name":"山21",
      "intro":"sahn21"
    },
    {
      "id":"22",
      "name":"山22",
      "intro":"sahn22"
    },
    {
      "id":"23",
      "name":"山23",
      "intro":"sahn23"
    },
    {
      "id":"24",
      "name":"山24",
      "intro":"sahn24"
    },
    {
      "id":"25",
      "name":"山25",
      "intro":"sahn25"
    },
    {
      "id":"26",
      "name":"山26",
      "intro":"sahn26"
    },
    {
      "id":"27",
      "name":"山27",
      "intro":"sahn27"
    },
    {
      "id":"28",
      "name":"山28",
      "intro":"sahn28"
    },
    {
      "id":"29",
      "name":"山29",
      "intro":"sahn29"
    },
    {
      "id":"30",
      "name":"山30",
      "intro":"sahn30"
    },
  ];

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

function showShare(uid,mid,similar,sex){
  $("#hand_img1 img").attr("src","mountain/l"+mid+".png");
  $("#hand_img2 img").attr("src","mountain/r"+mid+".png");
  var bodyDiv=$("body");
  bodyDiv.attr("uid",uid);
  bodyDiv.attr("sex",sex);
  $("#hand_name").html(mountain[mid-1]["name"]);
  $("#hand_intro").html(mountain[mid-1]["intro"]);
  $("#hand_similar").html(similar);
  $(".p_hand .container").fadeOut(0);
  $(".hand_share").fadeIn(0);
  window.location.href="#hand_share";
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
      subPanel="win_list";
    }
  }
  if(!hash||hash==""){hash="home";}
  if(hash=="hand"||hash=="win"){
    $(".subPanel").fadeOut(0);
    $("."+subPanel).fadeIn(0);
  }
  if(url!="win_list"&&url!="win_awards"){
    $(".panel").fadeOut(0);
    $(".p_"+hash).fadeIn(1000);
  }
  
  $(".nav_main a").removeClass("current");
  $("#nav_"+hash).addClass("current");
  $(".pagination_number a").removeClass("current");
  $("#page_"+hash).addClass("current");
  var i=getIndex(hash,pages,5,1),
      next=pages[i];
  $(".pagination_next").attr("href","#"+next);
}
function autoRefresh(){
  window.location.reload();
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
$(function(){
  $regTelPhone = /^1[3458]\d{9}$/; //手机号
  $blank = /^(|\s+)$/; //空格
  var $height=parseInt(document.documentElement.clientHeight);
  if($height<734){$height=800;}
  $(".body").css({"height":$height});
  $(".panel").css({"height":$height});
  $("#formName").blur(function(){
   var self=$(this),
        $val=self.val();
    if(!$val||$val==""||$blank.test($val)){
      self.focus().addClass("error");
    }else{
      self.removeClass("error");
    }
  });
  $("#formMobile").blur(function(){
    var self=$(this),
        $val=self.val();
    if(!$val||$val==""||$blank.test($val)||!$regTelPhone.test($val)){
      self.focus().addClass("error");
    }else{
      self.removeClass("error");
    }
  });
  $.each(citys,function(i){
    $("#formProvince").append("<option pindex='"+i+"'>"+citys[i]["province"]+"</option>");
    $("#formCity").html("<option cindex='0'>请选择</option>");
  });
  $("#formProvince option").click(function(){
    var self=$(this),
        parent=$("#formCity"),
        pindex=self.attr("pindex"),
        cityArry=citys[pindex]["city"];
    parent.empty();
    $.each(cityArry,function(i){
      parent.append("<option cindex='"+i+"'>"+cityArry[i]+"</option>");
    });
  });
  $("#btn_draw").click(function(){
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
      $("#formName").addClass("error").focus();
    }else if(!mobile||mobile==""||!$regTelPhone.test(mobile)){
      alert("请填写手机号码");
      $("#formMobile").addClass("error").focus();
    }else if(!province||province==""||province=="请选择"){
      alert("请选择省份");
      $("#formProvince").addClass("error").focus();
    }else if(!city||city==""||city=="请选择"){
      alert("请选择城市");
      $("#formCity").addClass("error").focus();
    }else{
      $(".form_li input").removeClass("error");
      window.location.href="#hand_send";
    }
  });
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
      }
    }
  });
  window.onhashchange=function(){
    pageTransition();
  }
  window.onload=function(){
    pageTransition();
  }
  //shareTo('sina');
  //shareTo('qq');
  //shareTo('renren');
});