/*
 * Mega pixel image rendering library for iOS6 Safari
 *
 * Fixes iOS6 Safari's image file rendering issue for large size image (over mega-pixel),
 * which causes unexpected subsampling when drawing it in canvas.
 * By using this library, you can safely render the image with proper stretching.
 * https://github.com/stomita/ios-imagefile-megapixel
 * Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>
 * Released under the MIT license
 */
(function(){function detectSubsampling(img){var iw=img.naturalWidth,ih=img.naturalHeight;if(iw*ih>1024*1024){var canvas=document.createElement('canvas');canvas.width=canvas.height=1;var ctx=canvas.getContext('2d');ctx.drawImage(img,-iw+1,0);return ctx.getImageData(0,0,1,1).data[3]===0}else{return false}}function detectVerticalSquash(img,iw,ih){var canvas=document.createElement('canvas');canvas.width=1;canvas.height=ih;var ctx=canvas.getContext('2d');ctx.drawImage(img,0,0);var data=ctx.getImageData(0,0,1,ih).data;var sy=0;var ey=ih;var py=ih;while(py>sy){var alpha=data[(py-1)*4+3];if(alpha===0){ey=py}else{sy=py}py=(ey+sy)>>1}var ratio=(py/ih);return(ratio===0)?1:ratio}function renderImageToDataURL(img,options,doSquash){var canvas=document.createElement('canvas');renderImageToCanvas(img,canvas,options,doSquash);return canvas.toDataURL("image/jpeg",options.quality||0.8)}function renderImageToCanvas(img,canvas,options,doSquash){var iw=img.naturalWidth,ih=img.naturalHeight;var width=options.width,height=options.height;var ctx=canvas.getContext('2d');ctx.save();transformCoordinate(canvas,width,height,options.orientation);var subsampled=detectSubsampling(img);if(subsampled){iw/=2;ih/=2}var d=1024;var tmpCanvas=document.createElement('canvas');tmpCanvas.width=tmpCanvas.height=d;var tmpCtx=tmpCanvas.getContext('2d');var vertSquashRatio=doSquash?detectVerticalSquash(img,iw,ih):1;var dw=Math.ceil(d*width/iw);var dh=Math.ceil(d*height/ih/vertSquashRatio);var sy=0;var dy=0;while(sy<ih){var sx=0;var dx=0;while(sx<iw){tmpCtx.clearRect(0,0,d,d);tmpCtx.drawImage(img,-sx,-sy);ctx.drawImage(tmpCanvas,0,0,d,d,dx,dy,dw,dh);sx+=d;dx+=dw}sy+=d;dy+=dh}ctx.restore();tmpCanvas=tmpCtx=null}function transformCoordinate(canvas,width,height,orientation){switch(orientation){case 5:case 6:case 7:case 8:canvas.width=height;canvas.height=width;break;default:canvas.width=width;canvas.height=height}var ctx=canvas.getContext('2d');switch(orientation){case 2:ctx.translate(width,0);ctx.scale(-1,1);break;case 3:ctx.translate(width,height);ctx.rotate(Math.PI);break;case 4:ctx.translate(0,height);ctx.scale(1,-1);break;case 5:ctx.rotate(0.5*Math.PI);ctx.scale(1,-1);break;case 6:ctx.rotate(0.5*Math.PI);ctx.translate(0,-height);break;case 7:ctx.rotate(0.5*Math.PI);ctx.translate(width,-height);ctx.scale(-1,1);break;case 8:ctx.rotate(-0.5*Math.PI);ctx.translate(-width,0);break;default:break}}function MegaPixImage(srcImage){if(srcImage instanceof Blob){var img=new Image();var URL=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!URL){throw Error("No createObjectURL function found to create blob url")}img.src=URL.createObjectURL(srcImage);this.blob=srcImage;srcImage=img}if(!srcImage.naturalWidth&&!srcImage.naturalHeight){var _this=this;srcImage.onload=function(){var listeners=_this.imageLoadListeners;if(listeners){_this.imageLoadListeners=null;for(var i=0,len=listeners.length;i<len;i++){listeners[i]()}}};this.imageLoadListeners=[]}this.srcImage=srcImage}MegaPixImage.prototype.render=function(target,options){if(this.imageLoadListeners){var _this=this;this.imageLoadListeners.push(function(){_this.render(target,options)});return}options=options||{};var imgWidth=this.srcImage.naturalWidth,imgHeight=this.srcImage.naturalHeight,width=options.width,height=options.height,maxWidth=options.maxWidth,maxHeight=options.maxHeight,doSquash=!this.blob||this.blob.type==='image/jpeg';if(width&&!height){height=(imgHeight*width/imgWidth)<<0}else if(height&&!width){width=(imgWidth*height/imgHeight)<<0}else{width=imgWidth;height=imgHeight}if(maxWidth&&width>maxWidth){width=maxWidth;height=(imgHeight*width/imgWidth)<<0}if(maxHeight&&height>maxHeight){height=maxHeight;width=(imgWidth*height/imgHeight)<<0}var opt={width:width,height:height};for(var k in options)opt[k]=options[k];var tagName=target.tagName.toLowerCase();if(tagName==='img'){target.src=renderImageToDataURL(this.srcImage,opt,doSquash)}else if(tagName==='canvas'){renderImageToCanvas(this.srcImage,target,opt,doSquash)}if(typeof this.onrender==='function'){this.onrender(target)}};if(typeof define==='function'&&define.amd){define([],function(){return MegaPixImage})}else{this.MegaPixImage=MegaPixImage}})();



function selectInit() {

  var where = new Array(35);
  function comefrom(loca,locacity) { this.loca = loca; this.locacity = locacity; }

  where[0]= new comefrom("请选","请选");
  where[1] = new comefrom("北京","|东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆");  
  where[2] = new comefrom("上海","|黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明");
  where[3] = new comefrom("天津","|和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
  where[4] = new comefrom("重庆","|万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁|大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
  where[5] = new comefrom("河北","|石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
  where[6] = new comefrom("山西","|太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
  where[7] = new comefrom("内蒙古","|呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
  where[8] = new comefrom("辽宁","|沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
  where[9] = new comefrom("吉林","|长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
  where[10] = new comefrom("黑龙江","|哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
  where[11] = new comefrom("江苏","|南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
  where[12] = new comefrom("浙江","|杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
  where[13] = new comefrom("安徽","|合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
  where[14] = new comefrom("福建","|福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
  where[15] = new comefrom("江西","|南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
  where[16] = new comefrom("山东","|济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
  where[17] = new comefrom("河南","|郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
  where[18] = new comefrom("湖北","|武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
  where[19] = new comefrom("湖南","|长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
  where[20] = new comefrom("广东","|广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
  where[21] = new comefrom("广西","|南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
  where[22] = new comefrom("海南","|海口|三亚");
  where[23] = new comefrom("四川","|成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
  where[24] = new comefrom("贵州","|贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
  where[25] = new comefrom("云南","|昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
  where[26] = new comefrom("西藏","|拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
  where[27] = new comefrom("陕西","|西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
  where[28] = new comefrom("甘肃","|兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
  where[29] = new comefrom("宁夏","|银川|石嘴山|吴忠|固原");
  where[30] = new comefrom("青海","|西宁|海东|海南|海北|黄南|玉树|果洛|海西");
  where[31] = new comefrom("新疆","|乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
  where[32] = new comefrom("香港","");
  where[33] = new comefrom("澳门","");
  where[34] = new comefrom("台湾","|台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
  where[35] = new comefrom("其它","|北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");

  var $Province = $('#province');
  var $City = $('#city');
  var tempOption ="";

  for (var i = 0; i <where.length; i++) {
    tempOption = tempOption + "<option value='"+ where[i].loca +"'>" + where[i].loca +"</option>";
  };
  $Province.html(tempOption);

  $Province.change(function(){
       $("#province option").each(function(i,o){
           if($(this).attr("selected")){
               var loca3 = (where[i].locacity).split("|");
               tempOption ="";
               for(l=0;l<loca3.length;l++) { 
          tempOption = tempOption + "<option value='"+ loca3[l] +"'>" + loca3[l] +"</option>";
               }
               $City.html(tempOption);
               //$City.focus();
           }
           
       });
  });
}

function getObjPos(obj)   
{   
    var x = y = 0;   
    if (obj.getBoundingClientRect)   
    {   
        var box = obj.getBoundingClientRect();   
        var D = document.documentElement;   
        x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft;   
        y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop;        
    }   
    else  
    {   
        for(; obj != document.body; x += obj.offsetLeft, y += obj.offsetTop, obj = obj.offsetParent );   
    }   
    return {'x':x, 'y':y};   
}   
  
function getCurPos(e)   
{   
    e = e || window.event;   
    var D = document.documentElement;   
    if (e.pageX) return {x: e.pageX, y: e.pageY};   
    return {   
        x: e.clientX + D.scrollLeft - D.clientLeft,   
        y: e.clientY + D.scrollTop - D.clientTop       
    };   
}  
function sqRt(form) {
  var number = form.num.value;
  var ans = Math.sqrt(number);
  form.answer.value = ans;
}
function sqIt(form) {
  var number = form.num.value;
  var ans = eval(number * number);
  form.answer.value = ans;
}
function showFrame(framename) {
  if(!framename){ framename = 'homepage'}
  $('.frame').hide();
  if(framename !=='homepage' ){ $('.link_home').show();} else {$('.link_home').show();};
  $('.' + framename ).show();
  setTimeout(function(){window.scrollTo(0, 0);}, 0);
}

function showSubFrame(framename,subframename) {
  if(!framename && !subframename) {return false;};
  showFrame(framename);
  $('.' + framename + ' .subframe').hide();
  $('.' + framename + ' .' + subframename).show();
}

function showNavBar(barname) {
  $('.navbar').hide();
  $('.navbox').show();
  if(!barname){ 
    $('.navbox').hide();
    $('.navbar').hide();
  }
  $('.' + barname ).show();
  //check nav bar prostion;
}

function gotPic(e) {
  if(event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
    //$("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
    showNavBar('retakepic');
    console.log("Handle file called.");
    var fileInput = document.getElementById('takePictureField');
    var file = fileInput.files[0];
    var dragging = false;

    // MegaPixImage constructor accepts File/Blob object.
    var mpImg = new MegaPixImage(file);
    var resCanvas2 = document.getElementById('postThePicCanvas');
      //need check pic's exif to select the right orientation value;
    var newImage = true;
    // EXIF.getData(e.target.files[0], function() {
    //     function getStrTime(time)
    //     {
    //         var t =  time.split(' ');
    //         var ts = t[1].split(':');
    //         var th = t[0].split(':');
    //         return new Date(th[0], th[1], th[2], ts[0], ts[1], ts[2]);
    //     }
    //     var d2 = new Date(); 
    //     var tempDate = EXIF.getTag(this, "DateTime");
    //     var d1 = getStrTime(tempDate);
    //     var date3=d1.getTime()-d2.getTime();
         
    //     var days=Math.floor(date3/(24*3600*1000)) //计算出相差天数  
    //     var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数  
    //     var hours=Math.floor(leave1/(3600*1000))  //计算出小时数 
    //     //计算相差分钟数  
    //     var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数  
    //     var minutes=Math.floor(leave2/(60*1000))  
    //     var rage = days+hours+minutes;
    //     if(  rage >= 1){
    //       newImage = false;
    //     }
    //     console.log("newImage:" + newImage + ",rage:" + rage);
    //     //alert("newImage:" + newImage + ",rage:" + rage );
    // });

    if(newImage){
      mpImg.render(resCanvas2, { maxWidth: 400, maxHeight: 568, orientation: 6});
      console.log("orientation:6");
    }else{
      mpImg.render(resCanvas2, { maxWidth: 400, maxHeight: 568, orientation: 0 });
      console.log("orientation:0");
    }

    var hammertime = Hammer(document.getElementById("gridbox"), {
        transform_always_block: true,
        transform_min_scale: 1,
        drag_block_horizontal: true,
        drag_block_vertical: true,
        drag_min_distance: 0
    });
    var rect = document.getElementById('postThePicCanvas');

    var posX=0, posY=0,last_posX,last_posY,
        scale=1, last_scale,
        rotation= 1, last_rotation;
    hammertime.on("touch drag transform", function(ev) {
      // var touches = ev.gesture.touches;
      // ev.gesture.preventDefault();
      // for(var t=0,len=touches.length; t<len; t++) {
      //   var target = $(touches[t].target);
      //   $('#postThePicCanvas').css({
      //     left: touches[t].pageX-160,
      //     top: touches[t].pageY-250
      //   });
      // }
        switch(ev.type) {
            case 'touch':
                last_scale = scale;
                last_rotation = rotation;
                break;

            case 'drag':
                posX = ev.gesture.deltaX ;
                posY = ev.gesture.deltaY ;
                break;

            case 'transform':
                rotation = last_rotation + ev.gesture.rotation;
                scale = Math.max(0.7, Math.min(last_scale * ev.gesture.scale, 1.5));
                break;
        }

        // transform!
        var transform =
                "translate3d("+posX+"px,"+posY+"px, 0) " +
                //"scale3d("+scale+","+scale+", 0) " +
                "scale("+scale+","+scale+") " +
                "rotate("+rotation+"deg) ";
        console.log("translate3d("+posX+"px,"+posY+"px, 0) " +"scale3d("+scale+","+scale+", 0) " + "rotate("+rotation+"deg) ");
        rect.style.transform = transform;
        rect.style.oTransform = transform;
        rect.style.msTransform = transform;
        rect.style.mozTransform = transform;
        rect.style.webkitTransform = transform;
    });
  }
}

function postThePic(event) {

  //alert("postThePic OK!");
  var testCanvas = document.getElementById("postThePicCanvas");  
  var canvasData = testCanvas.toDataURL("image/png")
  ,   userSex   = $('#gender').val();
  //uid and sex need be update;
  var postData = '&sex='+userSex+'&type=mobile&image='+ canvasData;

  $.ajax({type:'POST',url:'post.php?op=upload',data:postData,
    success:function(json){
      console.log(json);
      var jsdata = eval('('+json+')');  
      console.log('mid='+ jsdata.data.mid +",similar="+ jsdata.data.similar);
      router.navigate('yourmount/'+ jsdata.data.mid , {  
        trigger: true  
      });
      showSubFrame('yourmount','rendering');
      showNavBar();
      //drowMout(Number(jsdata.data.mid));
      $('#picid').val(jsdata.data.uid);
      //console.log('mid='+ jsdata.data.mid );
    },
    error: function(xhr, type){
      console.log('Ajax error!')
    }
  })
  //drowMout(2);
  //console.log('postThePic OK!');
}// end of function postThePic(event)
function postProfile() {
    var userName  = $('#uname').val()
    ,   userPhone = $('#phone').val()
    ,   userProvince  = $('#province').val()
    ,   userCity  = $('#city').val()
    ,   userSex   = $('#gender').val()
    ,   userId    = $('#picid').val();
    if (!userName || !userPhone || !userCity || !userProvince){
      alert("请完整填写信息！")
      return false;
    }
    var postData = '&name='+ userName +'&mobile=' + userPhone +'&province=' + userProvince +'&city=' + userCity +'&sex=' + userSex +'&uid=' + userId;
    console.log(postData);
    $.ajax({type:'POST',url:'post.php?op=profile',data:postData,
      success:function(json){
        var jsdata = eval('('+json+')');  
        console.log('status='+ jsdata.status);
        if (jsdata.status === "success"){
          showSubFrame('awardbox','subminsuccess');
          showNavBar('subminsuccess');
          router.navigate('subminsuccess');
        }
        //console.log('mid='+ jsdata.data.mid );
      },
      error: function(xhr, type){
        console.log('Ajax error!')
      }
    })
}
function postShare(platform){
  if(!platform){ return false;}
  var userId    = $('#picid').val();
  var postData = '&platform='+ platform + "&type=mobile&uid= "+userId;

    console.log(postData);
    $.ajax({type:'POST',url:'post.php?op=share',data:postData,
      success:function(json){
        var jsdata = eval('('+json+')');  
        console.log('status='+ jsdata.data.shareurl);
        //alert(jsdata.status);
        if (jsdata.status === "success"){
          window.open(jsdata.data.shareurl,'_blank');
        }
        //console.log('mid='+ jsdata.data.mid );
      },
      error: function(xhr, type){
        console.log('Ajax error!')
      }
    })
}
function allPrpos(obj) { 
     // 用来保存所有的属性名称和值
     var props = "";
     // 开始遍历
     for(var p in obj){ 
         // 方法
         if(typeof(obj[p])=="function"){ 
             obj[p]();
         }else{ 
             // p 为属性名称，obj[p]为对应属性的值
             props+= p + "=" + obj[p] + "\t";
         } 
     } 
     // 最后显示所有的属性
     alert(props);
}// end of function allPrpos(obj)

function drowCar(mountid) {
  var self = $(".carunit");
  self.addClass('caranim');
  var loadingStatus = $('.rendering');

  $(".carlight").addClass('carlightanim');
  console.log('Now drowCar~');
  //setTimeout(function () {
    console.log("drowCar anim finish");
      loadingStatus.find('.status').hide();
      loadingStatus.find('.status').hide();
      loadingStatus.find('.mountstxt').show();
      $('.yourmount .text').css('background-image', 'url(image/text/00'+ mountid +'.png)');
      $('.yourmount .name').css('background-image', 'url(image/text/00'+ mountid +'.png)');
  //}, 2100);


}// end of function drowCar() 

function drowRealMount(mountid) {

  console.log('drowRealMount~' + mountid );
}// end of function drowCar() 

function drowMout(mountid) {
  var scale = 2
  , stage = new Kinetic.Stage({
    container: 'container',
    width: 320,
    height: 200
  });
  //
  if(mountid>7){mountid = 1};
  //
  var staticLayer = new Kinetic.Layer();
  var staticGroup = new Kinetic.Group({
    x: 0,
    y: 0,
    rotationDeg: 0
  });
  var animLayer = new Kinetic.Layer();
  var animGroup = new Kinetic.Group({
    x: 0,
    y: 0,
    rotationDeg: 0
  });
  /*drow*/
  if(!mountid){ mountid = 1;};

      /*drow point*/
      var i = mountid - 1;
      var pointArr = mounts[i].points
      ,   thisMount = mounts[i]
      ,   movePoint = 0
      ,   moveLine = 0;
      //var t=0;
      thisMount.mpoint = new Object();
      thisMount.mline = new Object();

      for (var n=0; n<pointArr.length; n++) {
        //(function() {
          var k = n;
          var newPoint = new Kinetic.Circle({
            x: pointArr[k].ox/scale,
            y: pointArr[k].oy/scale,
            radius: 2,
            fillRGB: {r:230,g:230,b:230},
            shadowColorRGB: {r:255,g:255,b:255},
            shadowBlur: 4,
            strokeWidth: 0
          });
          if(pointArr[n].type=="off"){
            staticGroup.add(newPoint);
          }else{
            animGroup.add(newPoint);
            thisMount.mpoint[movePoint] = {"pid":k};
            movePoint++;
            //console.log("\n thisMount.mpoint:" + thisMount.mpoint[movePoint].pid);
          }
        //})();
      }//for (var n=0; n<pointArr.length; n++)

      /*drow line*/
      var linesArr =  mounts[i].lines;
      for (var n=0; n<linesArr.length; n++) {
        var strPoint = linesArr[n].strpid-1
        , endPoint = linesArr[n].endpid-1
        , PointX1 = pointArr[strPoint].ox/scale
        , PointY1 = pointArr[strPoint].oy/scale
        , PointX2 = pointArr[endPoint].ox/scale
        , PointY2 = pointArr[endPoint].oy/scale;
        var line = new Kinetic.Line({
          x: 0,
          y: 0,
          id: "line"+n,
          points: [PointX1,PointY1,PointX2,PointY2],
          stroke: 'white',
          opacity:0.4
        });
        //console.log("lines-" + n +"-type:" + linesArr[n].type + ",strpid:" + (linesArr[n].strpid-1) + ",endpid:" + (linesArr[n].endpid-1) );
          if(linesArr[n].type=="off"){
            staticGroup.add(line);
          }else{
            animGroup.add(line);
            thisMount.mline[moveLine] = {"lid":n};
            moveLine++;
          }
      }

  //console.log( thisMount);
  var mountPic = thisMount.pic;
  var mountPicDom = $('.mountpic'); 
  
  // var mountPicItem = $('.mountpic');
  // mountPicItem.prop(src:'mountPic.png');
  console.log('try src' + mountPicDom.attr('src'));
  mountPicDom.attr("src",mountPic);
  //mountPicDom.attr("src":'"' + mountPic + '"');
  //allPrpos(thisMount.mpoint);


  /*drow animtion*/

  var animLayer = new Kinetic.Layer();
  var anims = new Object();
      anims.a = 1000;
      anims.b = 1;
      anims.c = 30;
  var anim = new Kinetic.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;
    var loadingStatus = $('.rendering');

    var tempLoadingPrecent =  Math.ceil(anims.b/anims.c*100);
    if(tempLoadingPrecent>100){tempLoadingPrecent=100; };
    //console.log("tempLoadingPrecent:" + tempLoadingPrecent + "%");
    loadingStatus.find('b').html(tempLoadingPrecent + "%");
    /*remove animlayer*/
    animLayer.remove();
    animLayer = new Kinetic.Layer();
    animGroup = new Kinetic.Group({
      x: 0,
      y: 0,
      rotationDeg: 0
    });


    for(var p in thisMount.mpoint){ 
      if(typeof(thisMount.mpoint[p])=="function"){ 
         thisMount.mpoint[p]();
      }else{ 
        //console.log( "pid = " + p+","+ thisMount.mpoint[p].pid);
        //(function() {
            var i = p;
            var pointNb = thisMount.mpoint[i].pid ;
            var newYpoint = (pointArr[pointNb].oy - (pointArr[pointNb].oy - pointArr[pointNb].ny) * anims.b / anims.c) / scale;
            pointArr[pointNb].ty = newYpoint;
            //console.log("number:"+n+ "||newYpoint:" + newYpoint);
            // get old and new x , (old - (old - new)*b/c)/scale , save this to temp x
            var newPoint = new Kinetic.Circle({
                  x: pointArr[pointNb].ox/scale,
                  y: newYpoint,
                  radius: 2,
                  fillRGB: {r:230,g:230,b:230},
                  shadowColorRGB: {r:255,g:255,b:255},
                  shadowBlur: 4,
                  strokeWidth: 0
                });
            animGroup.add(newPoint);
        //})();
      } 
    } //p in thisMount.mpoint
    /*
    for (var n=0; n<thisMount.mpoint.length; n++) {

      //console.log("number:"+n+ ":ok");
    } //thisMount.mpoint.length
    */
    for(var p in thisMount.mline){ 
      if(typeof(thisMount.mline[p])=="function"){ 
         thisMount.mline[p]();
      }else{
        //console.log( "lid = " + p+","+ thisMount.mline[p].lid);
        //(function() {
            var i = p;
            var lineNb = thisMount.mline[i].lid;

            var strPoint = linesArr[lineNb].strpid-1
              , endPoint = linesArr[lineNb].endpid-1
              , PointX1 = pointArr[strPoint].ox/scale
              , PointY1 = pointArr[strPoint].oy/scale
              , PointX2 = pointArr[endPoint].ox/scale
              , PointY2 = pointArr[endPoint].ty/scale;
            //console.log( 'line:' + n + '||pointArr[strPoint].type:' + pointArr[strPoint].type + '||pointArr[endPoint].type:' + pointArr[endPoint].type);
            if (pointArr[strPoint].type =="on"){
              var newYpointStr = (pointArr[strPoint].oy - (pointArr[strPoint].oy - pointArr[strPoint].ny) * anims.b / anims.c) / scale;
              PointY1 = newYpointStr;
            }
            if (pointArr[endPoint].type =="on"){
              var newYpointEnd = (pointArr[endPoint].oy - (pointArr[endPoint].oy - pointArr[endPoint].ny) * anims.b / anims.c) / scale;
              PointY2 = newYpointEnd;
            }
            var line = new Kinetic.Line({
                x: 0,
                y: 0,
                id: "mline"+n,
                points: [PointX1,PointY1,PointX2,PointY2],
                stroke: 'white',
                opacity:0.4
            });
            //console.log("move number:"+n+ "||" + ",strPoint:"  + strPoint+ ",endPoint:" + endPoint+",PointY2:" + PointY2);
            animGroup.add(line);
        //})();
      } 
    } //p in thisMount.mpoint 

    animLayer.add(animGroup);
    //console.log("frame:" + frame.timeDiff + ",frame.time :" + frame.time + ",anims.b:" + anims.b ) ;

    if ( anims.b > anims.c ) {
      anim.stop();
      //showSubFrame('yourmount','real');
      showNavBar('yourmount');
        // setTimeout(function () {
        //   console.log("call drowCar~~~~~~");
             drowCar(mountid);
        // }, 2000);
      
      //router.navigate('yourmount/real');
      $('.mountswich a').hide();
      $('.mountswich .nex').show();
      drowRealMount(mountid);

    };
    anims.b++;
    stage.add(animLayer);
    //date1=new Date();
  }, animLayer);
  //console.log("staticGroup:" + staticGroup+"\n");
  staticLayer.add(staticGroup);
  stage.add(staticLayer);
  animLayer.add(animGroup);
  stage.add(animLayer);
  

  // document.getElementById('start').addEventListener('click', function() {
  //   anim.start();
  // }, false);
  
  // document.getElementById('stop').addEventListener('click', function() {
  //   //anim.stop();
  //   drowMout(mountid);
  // }, false);

  // function _animStart(){
  //   console.log("in  _animStart");
  //   return function(){
  //     anim.start();
  //     console.log("drow mount anim~~");
  //   }
  // }
  // setTimeout(function () {
  //   $('.mask').hide();
  //   anim.start();
  //   console.log("call _animStart");
  // }, 2000);
    $('.mask').hide();
    anim.start();
    console.log("call _animStart");
} //drowMout finish;



var AppRouter = Backbone.Router.extend({  
    routes : {  
        '' : 'main', 
        'index' : 'main', 
        'homepage' : 'main', 
        'gender' : 'selectGender',
        'gender/:user' : 'selectGenderUser',
        'take' : 'takePic',  
        'take/:user' : 'takePic',
        'retake' : 'retakePic', 
        'share':'shareGame',
        'award' : 'awardList',
        'userlist' : 'userList',
        'subminsuccess':'subminSuccess',
        'aboutgame' : 'aboutGame',
        'yourmount' : 'yourMount',
        'yourmount/:step' : 'yourMount',
        '*error' : 'renderError'  
    },  
    main : function() {  
        console.log('homepage');
        showFrame('homepage');
        showNavBar();
    },  
    selectGender: function() {  
        console.log('selectGender');
        showFrame('selectgender');
        showNavBar();
        $('.mountswich .nex').hide();
        $('.yourmount .mountstxt').hide();
    },
    selectGenderUser: function(user) {  
    	if(!user){ user = 'male'}
      console.log('性别为：' +user );

      //$('#gender').prop(value, user);
      $('#gender').val(user);
      router.navigate('take/' + user , {  
  		  trigger: true  
	    });
      if(user == 'female'){ 
        $(".gridbox").addClass("femalegrid");
      }else{
        $(".gridbox").removeClass("femalegrid");
      }
    },
    awardList: function() {  
        console.log('填写抽奖');
        var youId = $('#picid').val();
        var youGender = $('#gender').val();
        //for test post profile
        // if(!youId || !youGender){
        //   showFrame('homepage');
        //   router.navigate('index');
        //   showNavBar();
        //   return false;
        // }
        showSubFrame('awardbox','inputfrom');
        showNavBar('awardlink');
        selectInit();
    },
    userList: function() {  
        console.log('获奖名单');
        showFrame('userlist');
        showNavBar('subminsuccess');
    },
    subminSuccess: function() {  
        console.log('subminsuccess');
        showSubFrame('awardbox','subminsuccess');
        showNavBar('subminsuccess');
    },
    shareGame: function() {  
        console.log('shearGame');
        showSubFrame('awardbox','share');
        showNavBar('sheargame');
    },  
    aboutGame: function() {  
        console.log('aboutGame');
        showFrame('aboutgame');
    },  
    takePic : function(user) {  
    	if(!user){ user = 'male'};
      //$("#postThePicCanvas").remove();
      console.log('takePic 性别为：' +user);
    	showSubFrame('takebox','take');
      showNavBar('takepic');
    },  
    retakePic : function(id) {  
      console.log('渲染详情方法, id为: ' + id);  
    }, 
    yourMount : function(step) {
      //parent.location.reload();   
    	if(!step){ user = 'take'}
        console.log('渲染详情方法, id为: ' + step);
        showSubFrame('yourmount','rendering');

        if(step == 'take'){
        	router.navigate('yourmount/rendering' , {  
	    		  trigger: true  
          });
        	//drowMout(2);
        }else if (step == 'real'){
          router.navigate('yourmount/real');
          showSubFrame('yourmount','real');
          showNavBar('submintinfo');
          $('.mountswich a').hide();
          $('.mountswich .pre').show();
        }else{
          // router.navigate('yourmount/' + step , {  
          //   trigger: true  
          // });

          drowMout(step);

        }
    }, 
    renderError : function(error) {  
        console.log('URL错误, 错误信息: ' + error); 
        $('.link_home').show(); 
    }  
});  
  

var router = new AppRouter();  
Backbone.history.start(); 

$(document).ready(function() {

  console.log('onReady');

  $('.takethepic').die('click').live('click',function(){
    $('#takePictureField').click();

    //$('#input1').val($('#myfile').val());
  });

	$("#takePictureField").on("change",gotPic);
  
  $(".retake").die('click').live('click',function(){
    $('.mask').show();
    postThePic();
  });

	//$("#yourimage").load(getSwatches);
	desiredWidth = window.innerWidth;
  if(!("url" in window) && ("webkitURL" in window)) {
      window.URL = window.webkitURL;   
  };
  $('.mountswich .pre').die('click').live('click',function(){
    showSubFrame('yourmount','rendering');
    //router.navigate('yourmount/take');
    showNavBar('yourmount');
    $('.mountswich a').hide();
    //if 
    $('.mountswich .nex').show();
  });
  $('.mountswich .nex').die('click').live('click',function(){
    showSubFrame('yourmount','real');
    showNavBar('showreal');
    //router.navigate('yourmount/real');
    $('.mountswich a').hide();
    $('.mountswich .pre').show();
    $('.carunit').removeClass('caranim');
    $('.carlight').removeClass('carlightanim');
    console.log('next');
  });

  $('.navbox .youreal').die('click').live('click',function(){
    showSubFrame('yourmount','real');
    showNavBar('showreal');
    //router.navigate('yourmount/real');
    $('.mountswich a').hide();
    $('.mountswich .pre').show();
    $('.carunit').removeClass('caranim');
    $('.carlight').removeClass('carlightanim');
    console.log('next');
  });





  $('.awardsubmint').die('click').live('click',function(){
    postProfile();
    return false;
  });
  $('.sharelist a').die('click').live('click',function(){
    var $this = this;
    postShare($this.className)
    //return false;
    //console.log($this.className);
  });
  //$('#userprofile').on("change",select);
  
});



