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
/*!
 * move
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */(function(exports){var current=window.getComputedStyle||window.currentStyle,map={top:"px",bottom:"px",left:"px",right:"px",width:"px",height:"px","font-size":"px",margin:"px","margin-top":"px","margin-bottom":"px","margin-left":"px","margin-right":"px",padding:"px","padding-top":"px","padding-bottom":"px","padding-left":"px","padding-right":"px"};exports.move=function(selector){return new Move(move.select(selector))},exports.move.version="0.0.3",move.defaults={duration:500},move.ease={"in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",linear:"cubic-bezier(0.250, 0.250, 0.750, 0.750)","ease-in-quad":"cubic-bezier(0.550, 0.085, 0.680, 0.530)","ease-in-cubic":"cubic-bezier(0.550, 0.055, 0.675, 0.190)","ease-in-quart":"cubic-bezier(0.895, 0.030, 0.685, 0.220)","ease-in-quint":"cubic-bezier(0.755, 0.050, 0.855, 0.060)","ease-in-sine":"cubic-bezier(0.470, 0.000, 0.745, 0.715)","ease-in-expo":"cubic-bezier(0.950, 0.050, 0.795, 0.035)","ease-in-circ":"cubic-bezier(0.600, 0.040, 0.980, 0.335)","ease-in-back":"cubic-bezier(0.600, -0.280, 0.735, 0.045)","ease-out-quad":"cubic-bezier(0.250, 0.460, 0.450, 0.940)","ease-out-cubic":"cubic-bezier(0.215, 0.610, 0.355, 1.000)","ease-out-quart":"cubic-bezier(0.165, 0.840, 0.440, 1.000)","ease-out-quint":"cubic-bezier(0.230, 1.000, 0.320, 1.000)","ease-out-sine":"cubic-bezier(0.390, 0.575, 0.565, 1.000)","ease-out-expo":"cubic-bezier(0.190, 1.000, 0.220, 1.000)","ease-out-circ":"cubic-bezier(0.075, 0.820, 0.165, 1.000)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1.275)","ease-out-quad":"cubic-bezier(0.455, 0.030, 0.515, 0.955)","ease-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1.000)","ease-in-out-quart":"cubic-bezier(0.770, 0.000, 0.175, 1.000)","ease-in-out-quint":"cubic-bezier(0.860, 0.000, 0.070, 1.000)","ease-in-out-sine":"cubic-bezier(0.445, 0.050, 0.550, 0.950)","ease-in-out-expo":"cubic-bezier(1.000, 0.000, 0.000, 1.000)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.150, 0.860)","ease-in-out-back":"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},move.select=function(selector){if("string"!=typeof selector)return selector;return document.getElementById(selector)||document.querySelectorAll(selector)[0]};function EventEmitter(){this.callbacks={}}EventEmitter.prototype.on=function(event,fn){(this.callbacks[event]=this.callbacks[event]||[]).push(fn);return this},EventEmitter.prototype.emit=function(event){var args=Array.prototype.slice.call(arguments,1),callbacks=this.callbacks[event],len;if(callbacks){len=callbacks.length;for(var i=0;i<len;++i)callbacks[i].apply(this,args)}return this},exports.Move=function Move(el){if(!(this instanceof Move))return new Move(el);EventEmitter.call(this),this.el=el,this._props={},this._rotate=0,this._transitionProps=[],this._transforms=[],this.duration(move.defaults.duration)},Move.prototype=new EventEmitter,Move.prototype.constructor=Move,Move.prototype.transform=function(transform){this._transforms.push(transform);return this},Move.prototype.skew=function(x,y){y=y||0;return this.transform("skew("+x+"deg, "+y+"deg)")},Move.prototype.skewX=function(n){return this.transform("skewX("+n+"deg)")},Move.prototype.skewY=function(n){return this.transform("skewY("+n+"deg)")},Move.prototype.translate=Move.prototype.to=function(x,y){y=y||0;return this.transform("translate("+x+"px, "+y+"px)")},Move.prototype.translateX=Move.prototype.x=function(n){return this.transform("translateX("+n+"px)")},Move.prototype.translateY=Move.prototype.y=function(n){return this.transform("translateY("+n+"px)")},Move.prototype.scale=function(x,y){y=null==y?x:y;return this.transform("scale("+x+", "+y+")")},Move.prototype.scaleX=function(n){return this.transform("scaleX("+n+")")},Move.prototype.scaleY=function(n){return this.transform("scaleY("+n+")")},Move.prototype.rotate=function(n){return this.transform("rotate("+n+"deg)")},Move.prototype.ease=function(fn){fn=move.ease[fn]||fn||"ease";return this.setVendorProperty("transition-timing-function",fn)},Move.prototype.animate=function(name,props){for(var i in props)props.hasOwnProperty(i)&&this.setVendorProperty("animation-"+i,props[i]);return this.setVendorProperty("animation-name",name)},Move.prototype.duration=function(n){n=this._duration="string"==typeof n?parseFloat(n)*1e3:n;return this.setVendorProperty("transition-duration",n+"ms")},Move.prototype.delay=function(n){n="string"==typeof n?parseFloat(n)*1e3:n;return this.setVendorProperty("transition-delay",n+"ms")},Move.prototype.setProperty=function(prop,val){this._props[prop]=val;return this},Move.prototype.setVendorProperty=function(prop,val){this.setProperty("-webkit-"+prop,val),this.setProperty("-moz-"+prop,val),this.setProperty("-ms-"+prop,val),this.setProperty("-o-"+prop,val);return this},Move.prototype.set=function(prop,val){this.transition(prop),"number"==typeof val&&map[prop]&&(val+=map[prop]),this._props[prop]=val;return this},Move.prototype.add=function(prop,val){if(!!current){var self=this;return this.on("start",function(){var curr=parseInt(self.current(prop),10);self.set(prop,curr+val+"px")})}},Move.prototype.sub=function(prop,val){if(!!current){var self=this;return this.on("start",function(){var curr=parseInt(self.current(prop),10);self.set(prop,curr-val+"px")})}},Move.prototype.current=function(prop){return current(this.el).getPropertyValue(prop)},Move.prototype.transition=function(prop){if(!this._transitionProps.indexOf(prop))return this;this._transitionProps.push(prop);return this},Move.prototype.applyProperties=function(){var props=this._props,el=this.el;for(var prop in props)props.hasOwnProperty(prop)&&el.style.setProperty(prop,props[prop],"");return this},Move.prototype.move=Move.prototype.select=function(selector){this.el=move.select(selector);return this},Move.prototype.then=function(fn){if(fn instanceof Move)this.on("end",function(){fn.end()});else if("function"==typeof fn)this.on("end",fn);else{var clone=new Move(this.el);clone._transforms=this._transforms.slice(0),this.then(clone),clone.parent=this;return clone}return this},Move.prototype.pop=function(){return this.parent},Move.prototype.end=function(fn){var self=this;this.emit("start"),this._transforms.length&&this.setVendorProperty("transform",this._transforms.join(" ")),this.setVendorProperty("transition-properties",this._transitionProps.join(", ")),this.applyProperties(),fn&&this.then(fn),setTimeout(function(){self.emit("end")},this._duration);return this}})(this);



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
function cleanAnim(){
  $('.carunit').removeClass('caranim caranim-1 caranim-2 caranim-3 caranim-4 caranim-5 caranim-6 caranim-7 caranim-8 caranim-9 caranim-10 caranim-11 caranim-12 caranim-13 caranim-14 caranim-15 caranim-16 caranim-17 caranim-18 caranim-19 caranim-20 caranim-21 caranim-22 caranim-23 caranim-24 caranim-25 caranim-26 caranim-27 caranim-28 caranim-29 caranim-30');

    $('.carlight').removeClass('carlightanim carlightanim-1 carlightanim-2 carlightanim-3 carlightanim-4 carlightanim-5  carlightanim-6 carlightanim-7 carlightanim-8 carlightanim-9  carlightanim-10 carlightanim-11 carlightanim-12 carlightanim-13 carlightanim-14 carlightanim-15  carlightanim-16 carlightanim-17 carlightanim-18 carlightanim-19  carlightanim-20 carlightanim-21 carlightanim-22 carlightanim-23 carlightanim-24 carlightanim-25  carlightanim-26 carlightanim-27 carlightanim-28 carlightanim-29  carlightanim-30');
}
function cleanCanvas(){
  var resCanvas2 = document.getElementById("newCanvas");
  var ctx  = resCanvas2.getContext("2d");
  ctx.clearRect (0,0,999,999);
  ctx.save();
  ctx.restore();
  var backCanvas = document.getElementById('backcanvas');
  var ctx2  = backCanvas.getContext("2d");
  var savedData = document.getElementById('savedate');
  // savedData.src = "";
  ctx2.clearRect (0,0,999,999);
  ctx2.save();
  ctx2.restore();
  setTimeout(function(){
    savedData.src = backcanvas.toDataURL("image/png");
    //document.body.appendChild(savedData);
    $("#savedate").hide();
    //$("#backcanvas").hide();
  },500);
  $('#backcanvas').show();
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
  $('.navbox .' + barname ).show();
  if(!barname){ 
    $('.navbox').hide();
    $('.navbar').hide();
  }
  //check nav bar prostion;
}

function hammerInit() {
// create backing canvas
  var c=document.getElementById("newCanvas");
  var ctx=c.getContext("2d");
  var backCanvas = document.getElementById('backcanvas');
  var backCtx = backCanvas.getContext('2d');
  //var resImage = document.getElementById('resultImage');
  var canvasData = backCtx.getImageData(0, 0, 999, 999);
  var savedData = document.getElementById('savedate');

  setTimeout(function(){
    
    
    //document.body.appendChild(savedData);
    $("#savedate").hide();
    //$("#backcanvas").hide();
    //alert("backCanvas.height:" + Number(backCanvas.height));
    if (Number(backCanvas.height)>400){
      // var temp = document.getElementById('tempcanvas2');
      // var tempCtx = temp.getContext('2d');
      // var imgData=backCtx.getImageData(0,20,300,400);
      // tempCtx.putImageData(imgData,0,0);
      // savedData.src = temp.toDataURL("image/png");
      //alert(temp.toDataURL("image/png"));
      //resize c size
      c.height = backCanvas.height;
      //savedData.width =  backCanvas.width;
      //savedData.height =  backCanvas.height;
    }
    //savedData.src = backcanvas.toDataURL("image/png");
  },500);
  
  setTimeout(function(){
    savedData.src = backcanvas.toDataURL("image/png");
    //alert("backCanvas.height:" + Number(backCanvas.height) +",newCanvas.hight:" + c.height + ",savedData.height:" + savedData.height + ",savedData.width:" + savedData.width);
  },500);
  
  var hammertime = Hammer(document.getElementById("gridbox"), {
    transform_always_block: true,
    transform_min_scale: 1,
    drag_block_horizontal: true,
    drag_block_vertical: true,
    drag_min_distance: 0
  });
  var posX=0, posY=0,last_posX,last_posY,
      scale=1, last_scale,
      rotation= 1, last_rotation;
  var touchEd = false;
  hammertime.on("touch drag transform", function(ev) {
    switch(ev.type) {
      case 'touch':
        last_scale = scale;
        last_rotation = rotation;
        $("#backcanvas").hide();
        touchEd = true;
        break;
      case 'drag':
        posX = ev.gesture.deltaX+150 ;
        posY = ev.gesture.deltaY+200 ;
        break;
      case 'transform':
        rotation = last_rotation + ev.gesture.rotation;
        scale = Math.max(0.85, Math.min(last_scale * ev.gesture.scale, 1.4));
        break;
    }
      // transform!
    var transform =
      "translate3d("+posY+"px,"+posX+"px, 0) " +
      //"scale3d("+scale+","+scale+", 0) " +
      "scale("+scale+","+scale+") " +
      "rotate("+rotation+"deg) ";
    //console.log("translate3d("+posX+"px,"+posY+"px, 0) " +"scale3d("+scale+","+scale+", 0) " + "rotate("+rotation+"deg) ");
    var x = Number(backCanvas.width); //canvas.width / 2;
    var y = Number(backCanvas.height);//canvas.height / 2;
    var width = Number(backCanvas.width);//image.width;
    var height = Number(backCanvas.height); //image.height;
    ctx.clearRect (0,0,999,999);
    ctx.save();
    ctx.translate(posX,posY);
    var angleInRadians = rotation * Math.PI / 180;
    ctx.rotate(angleInRadians);
    ctx.scale(scale, scale);
    ctx.drawImage(savedData, -width / 2, -height / 2, width, height);
    ctx.restore();
    //takeNewCanvas();
  });
}
function takeNewCanvas(posX,posY,scale,rotation) {
  //var ctx = $('#postThePicCanvas').get(0).getContext("2d");//.get(0).getContext('2d');
  var c=document.getElementById("newCanvas");
  var ctx=c.getContext("2d");
  var c2=document.getElementById("postThePicCanvas");
  var ctx2 = c2.getContext("2d");
  console.log("take new pic to postThePicCanvas");
  // ctx2.save(); 
  // ctx2.rotate(rotate);
  
  var imgData=ctx.getImageData(90,170,190,190);
  var userSex = $('#gender').val();
  if (userSex =="female" ){
    imgData=ctx.getImageData(40,170,190,190);
  }
  ctx2.putImageData(imgData,0,0);
  //alert("touchEd = " + touchEd );
  // ctx2.restore(); 
}
function gotPic(e) {
  $(".default").hide();
  if(event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
    //$("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
    showNavBar('retakepic');
    console.log("Handle file called.");
    var inputID = "takePictureField";
    var fileInput = document.getElementById(inputID);
    var file = fileInput.files[0];
    var dragging = false;
      
    var resCanvas2 = document.getElementById('newCanvas');
    var ctx = resCanvas2.getContext("2d");
    var newImage = true;
    ctx.clearRect (0,0,999,999);

    // MegaPixImage constructor accepts File/Blob object.
    var mpImg = new MegaPixImage(file);

    var backcanvas = document.getElementById('backcanvas');
      EXIF.getData(e.target.files[0], function() {
        var picX = EXIF.getTag(this,"PixelXDimension");
        var picY = EXIF.getTag(this,"PixelYDimension");
        if (picX>picY){
            mpImg.render(backcanvas, { maxWidth: 400, maxHeight: 533, orientation: 6 });
        }else{
            mpImg.render(backcanvas, { maxWidth: 400, maxHeight: 533, orientation: 0 });
        }
    });
    hammerInit();
  }
}
function reGotPic(e){
  console.log("re take pic.");
  $(".default").hide();
  if(event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
    //$("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
    showNavBar('retakepic');
    console.log("Handle file called.");
    var inputID = "takePictureField2";
    var fileInput = document.getElementById(inputID);
    var file = fileInput.files[0];
    var dragging = false;
      
    var resCanvas2 = document.getElementById('newCanvas');
    var ctx = resCanvas2.getContext("2d");
    var newImage = true;
    ctx.clearRect (0,0,999,999);

    // MegaPixImage constructor accepts File/Blob object.
    var mpImg = new MegaPixImage(file);

    var backcanvas = document.getElementById('backcanvas');
      EXIF.getData(e.target.files[0], function() {
        //alert(EXIF.pretty(this));
        var picX = EXIF.getTag(this,"PixelXDimension");
        var picY = EXIF.getTag(this,"PixelYDimension");
        // alert("picX:" + picX + ",picY:" + picY);
        if (picX>picY){
            mpImg.render(backcanvas, { maxWidth: 400, maxHeight: 533, orientation: 6 });
        }else{
            mpImg.render(backcanvas, { maxWidth: 400, maxHeight: 533, orientation: 0 });
        }
    });
    $("#backcanvas").show();
    hammerInit();

  }
}
function postThePic(event) {
  takeNewCanvas();
  //alert("postThePic OK!");
  //var testCanvas = document.getElementById("postThePicCanvas");  
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
      var mid = 1;
      if (!jsdata.data.mid){
        alert("很抱歉，请确保将手掌整体置于拍摄区域内，请重试");
        $('.mask').hide();
        return false;
      }else{
        mid =jsdata.data.mid;
      }
      router.navigate('yourmount/'+ mid , {  
        trigger: true  
      });
      showSubFrame('yourmount','rendering');
      showNavBar();
      //drowMout(Number(jsdata.data.mid));
      $('#picid').val(jsdata.data.uid);
      //change share link's pic address//
      changeHref("#flash_sina",mid);
      changeHref("#flash_qq",mid);
      changeHref("#flash_ren",mid);
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
    
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(userPhone))){ 
        alert("不是完整的11位手机号或者正确的手机号前七位"); 
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
  //$('.rendering .status').hide();
  $(".carlight").addClass('carlightanim');
  console.log('Now drowCar~');
  //setTimeout(function () {
    console.log("drowCar anim finish");
      loadingStatus.find('.status').hide();
      //loadingStatus.find('.status').hide();
      loadingStatus.find('.mountstxt').show();
      $('.yourmount .text').css('background-image', 'url(image/text/00'+ mountid +'.png)');
      $('.yourmount .name').css('background-image', 'url(image/text/00'+ mountid +'.png)');
  //}, 2100);
}// end of function drowCar() 

function drawCarAnim(mid){
  var scale = 2;
  var i = mid - 1;
  var pointArr = mounts[i].carway;
  var animCode ="";
  var animLCode ="";
  var n = 0;
  var loadingStatus = $('.rendering');
  var carimgtxt = "<img src='"+mounts[i].carimg+"' width='100' height='67'>"
  //$('.carunit').css({'background':'none)'});
  cleanAnim();
  $('.carunit').html(carimgtxt);
  carimgtxt = "<img src='"+mounts[i].lightimg+"' width='300' height='200'>"
  //$(".carlight").html(carimgtxt);
  //console.log(lightbgimg);
  //var lightbgimg = "'"+mounts[i].lightimg+"'"
  //$('.carlight').css('background-image','url('+mounts[i].lightimg +')');
  var self = $(".carunit");
  //self.removeClass('caranim caranim-1 caranim-2 caranim-3 caranim-4 caranim-5 caranim-6 caranim-7 caranim-8');
  self.addClass('caranim').addClass('caranim-'+mid);

  //$(".carlight").removeClass(' carlightanim carlightanim-1 carlightanim-2 carlightanim-3 carlightanim-4 carlightanim-5  carlightanim-6 carlightanim-7 carlightanim-8');
  
  $(".carlight").addClass('carlightanim').addClass('carlightanim-'+mid);
  //console.log("drowCar anim in new way");
  // var scale = 2;
  // var i = mid - 1;
  // var pointArr = mounts[i].carway;
  // var animCode ="";
  // var animLCode ="";
  // var n = 0;
  // var loadingStatus = $('.rendering');
  // var carimgtxt = "<img src='"+mounts[i].carimg+"' width='100' height='67'>"
  // $('.carunit').css('opacity','1');
  // $('.carunit').html(carimgtxt);
  // //console.log(lightbgimg);
  // //var lightbgimg = "'"+mounts[i].lightimg+"'"
  // $('.carlight').css('background-image','url('+mounts[i].lightimg +')');
  // for (var p in pointArr) {
  //   var k = p;
  //   if(k=="0"){ 
  //     animCode ="move('.carunit').x("+pointArr[k].x+").y("+pointArr[k].y+").duration('0s')";

  //     animLCode="move('.carlight').set('-webkit-mask-position','"+pointArr[k].mx+"px "+pointArr[k].my+"px').duration('0s')";
  //   }
  //   else{
  //     animCode = animCode + ".then().x("+pointArr[k].x+").y("+pointArr[k].y+")";
  //     //if(pointArr[k].ease){animCode = animCode + ".ease('"+ pointArr[k].ease +"')";}
  //     animCode = animCode + ".duration('"+pointArr[k].time+"s')";
  //     animLCode = animLCode + ".then().set('-webkit-mask-position','"+pointArr[k].mx+"px "+pointArr[k].my+"px').duration('"+pointArr[k].time+"s')";
  //   }
  //   n++;
  // }
  // for (var u=0; u<n-1; u++) {
  //   animCode = animCode +".pop()";
  //   animLCode = animLCode +".pop()";
  // }
  // animCode = animCode + ".end();";
  // animLCode = animLCode + ".end();";
  // console.log(animCode);
  // eval(animCode);
  // console.log(animLCode);
  // eval(animLCode);
      loadingStatus.find('.status').hide();
      //loadingStatus.find('.status').hide();
      loadingStatus.find('.mountstxt').show();
      $('.yourmount .text').css('background-image', 'url(image/text/00'+ mid +'.png)');
      $('.yourmount .name').css('background-image', 'url(image/text/00'+ mid +'.png)');
}
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
  //need remove this code, this only for test.
  //if(mountid>20){mountid = Math.max(1,mountid-20);};
  //need remove this code, this only for test.
  $('.rendering .status').show();
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
        console.log("lines-" + n +"-type:" + linesArr[n].type + ",strpid:" + (linesArr[n].strpid-1) + ",endpid:" + (linesArr[n].endpid-1) );
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
           console.log("call drowCar~~~~new way~~");
           
             drawCarAnim(mountid);
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

    $('.mask').hide();
    anim.start();
    console.log("call _animStart");
} //drowMout finish;
function changeHref(selector,mid,similar){
  var href=$(selector).attr("href"),
      index=href.indexOf("&pic=")
      str="php%3fmid%3d";
  if(mid){
    //console.log(encodeURI('http://client.17bi.net/luxgen/img.php?mid='));
    href=href.replace(str,"php%3fmid%3d"+mid);
  }
  console.log('href:'+ href);
  $(selector).attr("href",href);
}


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
        _gaq.push(['_trackPageview', '/pv/homepage']);
    },  
    selectGender: function() {  
        console.log('selectGender');
        showFrame('selectgender');
        showNavBar();
        cleanCanvas();
        cleanAnim();
        $(".default").show();
        $('.mountswich .nex').hide();
        $('.yourmount .mountstxt').hide();
        _smq.push(['custom','活动按钮','首页','解密你的掌纹山势']);
        _gaq.push(['_trackPageview', '/pv/selectgender']);
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
        $(".default").addClass("femaledefault");
        _smq.push(['custom','活动按钮','互动页','选择性别-女']);
        _gaq.push(['_trackPageview', '/pv/selectgender/female']);

      }else if(user == 'male'){
        $(".gridbox").removeClass("femalegrid");
        $(".default").removeClass("femaledefault");
        _smq.push(['custom','活动按钮','互动页','选择性别-男']);
        _gaq.push(['_trackPageview', '/pv/selectgender/male']);
      }else{
        
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
        router.navigate('award');
        _gaq.push(['_trackPageview', '/pv/profile']);
        //_smq.push(['custom','活动按钮','互动页','互动完成-参与抽奖']);
        //_smq.push(['custom','活动按钮','首页','获奖名单']);
    },
    userList: function() {  
        console.log('获奖名单');
        showFrame('userlist');
        showNavBar();
        _gaq.push(['_trackPageview', '/pv/userlist']);
    },
    subminSuccess: function() {  
        console.log('subminsuccess');
        showSubFrame('awardbox','subminsuccess');
        showNavBar('subminsuccess');
        _smq.push(['custom','活动按钮','提交成功页','活动说明']);
        _gaq.push(['_trackPageview', '/pv/profile/subminsuccess']);

    },
    shareGame: function() {  
        console.log('shearGame');
        showSubFrame('awardbox','share');
        showNavBar('sheargame');
        _smq.push(['custom','活动按钮','互动页','互动完成-即刻分享']);
        _gaq.push(['_trackPageview', '/pv/share']);
    },  
    aboutGame: function() {  
        console.log('aboutGame');
        showFrame('aboutgame');
        showNavBar();
        _smq.push(['custom','活动按钮','首页','活动说明']);
        _gaq.push(['_trackPageview', '/pv/aboutgame']);
    },  
    takePic : function(user) {  
    	if(!user){ user = 'male'};
      //$("#postThePicCanvas").remove();
      console.log('takePic 性别为：' +user);
    	showSubFrame('takebox','take');
      showNavBar('takepic');
      _gaq.push(['_trackPageview', '/pv/takepic']);
    },  
    retakePic : function(id) {  
      console.log('渲染详情方法, id为: ' + id); 
      //_gaq.push(['_trackPageview', '/pv/takepic'); 
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
          _gaq.push(['_trackPageview', '/pv/real']);
        }else{
          // router.navigate('yourmount/' + step , {  
          //   trigger: true  
          // });
          _gaq.push(['_trackPageview', '/pv/rendering']);
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

  //console.log('onReady');

  $('.takepic .takethepic').die('click').live('click',function(){
    $('#takePictureField').click();
    cleanCanvas();
    _smq.push(['custom','活动按钮','互动页','拍摄按钮']);
    _gaq.push(['_trackEvent','btn','takepic','take']);
    //$('#input1').val($('#myfile').val());
  });
  $('.retakepic .takethepic').die('click').live('click',function(){
    $('#takePictureField').click();
    cleanCanvas();
    _smq.push(['custom','活动按钮','互动页','拍摄完成-重新拍摄']);
    _gaq.push(['_trackEvent','btn','takepic','retake']);
  });
	$("#takePictureField").on("change",gotPic);
  $("#takePictureField2").on("change",reGotPic);
  
  $(".retake").die('click').live('click',function(){
    $('.mask').show();
    _smq.push(['custom','活动按钮','互动页','拍摄完成-使用']);
    _gaq.push(['_trackEvent','btn','takepic','post']);
    postThePic();
  });
  $(".btn_post").die('click').live('click',function(){
    $('.mask').show();
    _smq.push(['custom','活动按钮','互动页','拍摄完成-使用']);
    _gaq.push(['_trackEvent','btn','takepic','post']);
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
    //$('.carunit').removeClass('caranim');
    //$('.carlight').removeClass('carlightanim');
    _smq.push(['custom','活动按钮','互动页','您专属的掌纹山势图']);
    _gaq.push(['_trackPageview', '/pv/real']);
    //console.log('next');
  });

  $('.navbox .youreal').die('click').live('click',function(){
    showSubFrame('yourmount','real');
    showNavBar('showreal');
    //router.navigate('yourmount/real');
    $('.mountswich a').hide();
    $('.mountswich .pre').show();
    //$('.carunit').removeClass('caranim');
    //$('.carlight').removeClass('carlightanim');
    console.log('您专属的掌纹山势图');
    _smq.push(['custom','活动按钮','互动页','您专属的掌纹山势图']);
    _gaq.push(['_trackPageview', '/pv/real']);
  });

  $('.btn_youreal').die('click').live('click',function(){
    showSubFrame('yourmount','real');
    showNavBar('showreal');
    //router.navigate('yourmount/real');
    $('.mountswich a').hide();
    $('.mountswich .pre').show();
    //$('.carunit').removeClass('caranim');
    //$('.carlight').removeClass('carlightanim');
    console.log('您专属的掌纹山势图');
    _smq.push(['custom','活动按钮','互动页','您专属的掌纹山势图']);
    _gaq.push(['_trackPageview', '/pv/real']);
  });



  $('.navbox .linkaward').die('click').live('click',function(){
    showNavBar('awardlink');
    _smq.push(['custom','活动按钮','互动页','互动完成-参与抽奖']);
    _gaq.push(['_trackEvent','btn','jump','profile']);
  });
  $('.navbox .awardsubmint').die('click').live('click',function(){

    postProfile();
    _smq.push(['custom','活动按钮','填写信息页','确认提交']);
    _gaq.push(['_trackEvent','btn','jump','submitprofile']);
    return false;
  });
  $('.sharelist a').die('click').live('click',function(){
    var $this = this;
    postShare($this.className);
    switch($this.className) {
        case 'sina':
            _smq.push(['custom','活动按钮','分享页面','新浪微博']);
            _gaq.push(['_trackEvent','btn','share','weibo']);
            break;
        case 'qq':
            _smq.push(['custom','活动按钮','分享页面','腾讯微博']);
            _gaq.push(['_trackEvent','btn','share','qq']);
            break;
        case 'renren':
            _smq.push(['custom','活动按钮','分享页面','人人网']);
            _gaq.push(['_trackEvent','btn','share','renren']);
            break;
    }
    //return false;
    //console.log($this.className);
  });
  $('.navbox .replay').die('click').live('click',function(){
    cleanCanvas();
    cleanAnim();
    $(".default").show();
    $(".navbox .takepic").show();
        showFrame('selectgender');
        showNavBar();
        $('.mountswich .nex').hide();
        $('.yourmount .mountstxt').hide();
    _smq.push(['custom','活动按钮','互动页','互动完成-再试一次']); 
    _gaq.push(['_trackEvent','btn','game','replay']);
    router.navigate('gender');
  });
  $('.navbox .sheargame').die('click').live('click',function(){
    _smq.push(['custom','活动按钮','分享页面','填写中奖信息']);
    _gaq.push(['_trackEvent','btn','share','post']);
  });
  $('.book').die('click').live('click',function(){
    //_smq.push(['custom','活动按钮','导航栏','预约试驾']);
  });
  $('.back').die('click').live('click',function(){
    showFrame('selectgender');
    showNavBar();
    $('.mountswich .nex').hide();
    $('.yourmount .mountstxt').hide();
    _smq.push(['custom','活动按钮','互动页拍摄','返回按钮']);
    _gaq.push(['_trackEvent','btn','takepic','back']);
  });
  $('.btn_back').die('click').live('click',function(){
    showFrame('selectgender');
    showNavBar();
    $('.mountswich .nex').hide();
    $('.yourmount .mountstxt').hide();
    _smq.push(['custom','活动按钮','互动页拍摄','返回按钮']);
    _gaq.push(['_trackEvent','btn','takepic','back']);
  });
  $('.link_home .link_home').die('click').live('click',function(){
    _smq.push(['custom','活动按钮','首页','回到首页']);
    _gaq.push(['_trackEvent','btn','jump','home']);
  });
  $('.link_home .book').die('click').live('click',function(){
    _smq.push(['custom','活动按钮','首页','预约试驾']);
    _gaq.push(['_trackPageview', '/pv/reserve']);
  });

});



