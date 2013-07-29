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
var pages=["home","hand","pro","win","intro"];
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
  }else{
    if(hash=="hand"){
      subPanel="hand_type";
    }else if(hash=="win"){
      subPanel="win_list";
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
  $(".nav_main a").removeClass("current");
  $("#nav_"+hash).addClass("current");
  $(".pagination_number a").removeClass("current");
  $("#page_"+hash).addClass("current");
  var i=getIndex(hash,pages,5,1),
      next=pages[i];
  $(".pagination_next").attr("href","#"+next);
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

$(document).ready(function() {
  var $height=parseInt(document.documentElement.clientHeight);
  $(".body").css({"height":$height});
  $(".panel").css({"height":$height});
  window.onhashchange=function(){
    pageTransition();
  }
  window.onload=function(){
    pageTransition();
  }
  $regTelPhone = /^1[3458]\d{9}$/; //手机号
  $blank = /^(|\s+)$/; //空格



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
    //$('.mask').show();

    postThePic();
  });
  $(".btn_post").die('click').live('click',function(){
    //$('.mask').show();

    postThePic();
  });

  $('.navbox .replay').die('click').live('click',function(){
    cleanCanvas();
    cleanAnim();

  });



});