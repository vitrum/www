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
  $(".default").show();
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
    $("#backcanvas").show();
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
  console.log("call hammer!");
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
        scale = Math.max(0.5, Math.min(last_scale * ev.gesture.scale, 1.4));
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
  
  var imgData=ctx.getImageData(90,150,190,190);
  var userSex = $('#gender').val();
  if (userSex =="female" ){
    imgData=ctx.getImageData(40,150,190,190);
  }
  ctx2.putImageData(imgData,0,0);
  //alert("touchEd = " + touchEd );
  // ctx2.restore(); 
}
function gotPic(e) {
  $(".default").hide();
  $('#takePictureField2').hide();
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
            mpImg.render(backcanvas, { maxWidth: 600, maxHeight: 533, orientation: 6 });
        }else{
            mpImg.render(backcanvas, { maxWidth: 600, maxHeight: 533, orientation: 0 });
        }
    });
    hammerInit();
  }
}
function reGotPic(e){
  console.log("re take pic.");
  $(".default").hide();
  $('#takePictureField2').hide();
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
      $(".p_hand .subPanel").hide();
      $(".hand_share").show(0);

      //similar=parseInt(similar);

      changeHref("#flash_sina",mid,similar);
      changeHref("#flash_qq",mid,similar);
      changeHref("#flash_ren",mid,similar);
      window.location.href="#hand_share";
    }
  });
}
function postThePic(event) {
  takeNewCanvas();
  //alert("postThePic OK!");
  //var testCanvas = document.getElementById("postThePicCanvas");  
  var testCanvas = document.getElementById("postThePicCanvas");  
  var canvasData = testCanvas.toDataURL("image/png")
  ,   userSex   = $('#gender').val();
  //uid and sex need be update;
  var postData = '&sex='+userSex+'&type=pad&image='+ canvasData;

  $.ajax({type:'POST',url:'post.php?op=upload',data:postData,
    success:function(json){
      console.log(json);
      var jsdata = eval('('+json+')');  
      console.log('mid='+ jsdata.data.mid +",similar="+ jsdata.data.similar);
      var mid = 1;
      if (!jsdata.data.mid){
        alert("很抱歉，请确保将手掌整体置于拍摄区域内，请重试");
        cleanCanvas();
        window.location.href="#hand";
        $('.mask').hide();
        $('.takepic').show();
        $('#takePictureField').show();
        $('#backcanvas').show();
        $('#takePictureField2').show();
        $('.default').show();
        return false;
      }else{
        mid =jsdata.data.mid;
      }
      // router.navigate('yourmount/'+ mid , {  
      //   trigger: true  
      // });
      showSubFrame('yourmount','rendering');
      showNavBar();
      //drowMout(Number(jsdata.data.mid));
      //drowMout(jsdata.data.mid);
      drowMout(jsdata.data.uid,jsdata.data.mid,jsdata.data.similar,jsdata.data.sex);
      $('#picid').val(jsdata.data.uid);
      //console.log('mid='+ jsdata.data.mid );
    },
    error: function(xhr, type){
      console.log('Ajax error!')
    }
  })
  
  //console.log('postThePic OK!');
}// end of function postThePic(event)

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

function drawCarAnim(uid,mid,similar,sex){
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
      //setTimeout(showShare(uid,mid,similar,sex),1000);
      setTimeout(function(){
        showShare(uid,mid,similar,sex)
      },2000);
}
function drowRealMount(mountid) {

  console.log('drowRealMount~' + mountid );
}// end of function drowCar() 

function drowMout(uid,mountid,similar,sex) {
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
           
             //drawCarAnim(mountid);
             drawCarAnim(uid,mountid,similar,sex);
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
    cleanCanvas();
    //windoe.location.href="#hand_shareTo";
    console.log("call _animStart");
} //drowMout finish;
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
function pageTransition(){
  var bodyDiv=$("body");
  var $uid=bodyDiv.attr("uid"),
      $sex=bodyDiv.attr("sex"),
      $similar=bodyDiv.attr("similar"),
      $mid=bodyDiv.attr("mid");
  if($uid){bodyDiv.attr("uid",$uid);}
  if($sex){bodyDiv.attr("sex",$sex);}
  if($similar){bodyDiv.attr("similar",$similar);}
  if($mid){bodyDiv.attr("mid",$mid);}

  var hash=window.location.hash.replace("#",""),
      sub=hash.indexOf("_"),
      url=hash;
      subPanel=hash;
  if(sub>0){
    var hashArray=hash.split("_");
    hash=hashArray[0];
    if(hashArray.length==3){
      var sex=hashArray[2];
      subPanel=subPanel.replace("_"+sex,"");
      var divDefault=$("."+subPanel).find(".imagebox .default");
      var handMasek = $('.imagebox .gridbox');
      divDefault.removeClass("hand_male").removeClass("hand_female").addClass("hand_"+sex);
      handMasek.removeClass("mask_male").removeClass("mask_female").addClass("mask_"+sex);
    }
  }else{
    if(hash=="hand"){
      subPanel="hand_type";
      cleanCanvas();
      cleanAnim();
    }else if(hash=="win"){
      subPanel="win_awards";
    }
  }
  if(!hash||hash==""){hash="home";}
  if(hash=="hand"||hash=="win"){
    $(".subPanel").hide(0);
    $("."+subPanel).show(0);
  }
  if(hash=="intro"){
    $(".body").css({"height":"1200px"});
    $(".panel").css({"height":"1200px"});
  }
  if(url!="win_list"&&url!="win_awards"){
    $(".panel").hide(0);
    $(".p_"+hash).show(1000);
  }else{
    $(".p_win").show();
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
  renderHeight();
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
  $("#"+silders[current].id).show(0).addClass("current");
}
function renderHeight(){
  var $height = $(window).height()
      $width = $(window).width();
  $(".body").css({"height":$height});
  $(".panel").css({"height":$height});
}
function changeHref(selector,mid,similar){
  var href=$(selector).attr("href"),
      index=href.indexOf("&pic="),
      pic="&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d";
      href=href.slice(0,index);
  similar=parseInt(similar);
  if(mid){
    pic+=mid;
  }
  if(similar){
    pic+="%26similar%3d"+similar;
  }
  href+=pic;
  $(selector).attr("href",href);
}
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
function isWeiboAppWebview()  {
    var weibo = /weibo/gi;
    return weibo.test(navigator.userAgent);
}

$(document).ready(function() {
  renderHeight()
  window.onhashchange=function(){
    pageTransition();
  }
  window.onload=function(){
    pageTransition();
  }
  $regTelPhone = /^1[3|4|5|8][0-9]\d{4,8}$/; //手机号
  $blank = /^(|\s+)$/; //空格
  /*$("#formName").blur(function(){
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
    }else if(!name||name==""||$blank.test(name)){
      alert("请填写姓名");
      $("#formName").addClass("error").focus();
    }else if(!mobile||mobile==""||!$regTelPhone.test(mobile)){
      alert("请填写正确的手机号码");
      $("#formMobile").addClass("error").focus();
    }else if(!province||province==""||province=="请选择"){
      alert("请选择省份");
      $("#formProvince").addClass("error").focus();
    }else if(!city||city==""||city=="请选择"){
      alert("请选择城市");
      $("#formCity").addClass("error").focus();
    }else{
      $(".form_li input").removeClass("error");
      var tempUserName = name.replace(/[^\u4E00-\u9FA5]/g,'');
      if(tempUserName !== name ){
        alert("请输入正确的中文姓名");
        $("#formName").addClass("error").focus();
      }else{
        if(!sex||sex==""){sex="male";}  
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
  $("#nav_share").click(function(){
    $(".home_share").show(300);
  });
  $(".home_share .hand_close").click(function(){
    $(".home_share").hide(300);
  });
  $(".btn_erwei").click(function(){
    $(".pop_type").show(300);
  });
  $(".pop_close").click(function(){
    $(".pop_type").hide(300);
  });
  $(".hand_sex .hand_btns a").click(function(){
    $('#takePictureField').show();
    $('#takePictureField2').show();
    $('#backcanvas').show();
    $('.takepic').show();
  });
  $('.hand_btns .btn_upload').on('click',function(){
    $('.imagebox').addClass('uploadbox');
    $('#takePictureField').removeAttr('capture').attr('multiple', 'multiple');
    $('#takePictureField2').removeAttr('capture').attr('multiple', 'multiple');
  });
  $('.hand_btns .btn_camera').on('click',function(){
    $('.imagebox').removeClass('uploadbox');
    $('#takePictureField').removeAttr('multiple').attr('capture', 'camera');
    $('#takePictureField2').removeAttr('multiple').attr('capture', 'camera');
  });
/*take pic*/

  $('.takepic .takethepic').die('click').live('click',function(){
    $('#takePictureField').click();
    cleanCanvas();

  });
  $('.retakepic .takethepic').die('click').live('click',function(){
    $('#takePictureField').click();
    cleanCanvas();

  });
  $("#takePictureField").on("change",gotPic);
  $("#takePictureField2").on("change",reGotPic);
  
  $(".retake").die('click').live('click',function(){
    $('.mask').show();

    postThePic();
  });
  $(".btn_post").die('click').live('click',function(){
    $('.mask').show();

    postThePic();
  });

  $('.navbox .replay').die('click').live('click',function(){
    cleanCanvas();
    cleanAnim();

  });

  $('.hand_camera .btn_confirm').die('click').live('click',function(){
    $('.mask').show();
    postThePic();
  });

  $('.btn_male').die('click').live('click',function(){
    $('#gender').val('male');
  });
  $('.btn_female').die('click').live('click',function(){
    $('#gender').val('female');
  });
  $('.hand_draw .hand_close').click(function(){
    $('.subPanel').hide();
    $('.hand_share').show();  
  });
  $('.hand_shareTo .hand_close').click(function(){
    $('.subPanel').hide();
    $('.hand_share').show();
  });
  if(isWeiboAppWebview()){
    $('.appviewmask').show();
  }
});