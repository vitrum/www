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
    mpImg.render(resCanvas2, { maxWidth: 320, maxHeight: 500, orientation: 6 });
    var dragbox = document.getElementById("gridbox");
    Hammer(dragbox).on("dragstart", function(event) {
      event.gesture.preventDefault();
      var g = event.gesture;
        dragx = g.center.pageX;
        dragy = g.center.pageY;
        dragging = true;
        console.log("\ndragstart\ndragx:" + dragx + ",dragy:" + dragy);
    });
    Hammer(dragbox).on("dragend", function(event) {
      //console.log("\ndrag event end! \ndragend\n dragx:" + dragx + ",dragy:" + dragy);
      alert("\ndrag event end! \ndragend\n dragx:" + dragx + ",dragy:" + dragy);
      dragx = dragy = null; 
      dragging = false;

      //clearInterval(intervalId);
    });
    Hammer(dragbox).on("drag", function(event) {
      event.gesture.preventDefault();
      var g = event.gesture;
          //alert("event:" + obj2string(event));
          //alert("point center:"+ obj2string(g.center) + "\n deltaX:" + g.deltaX + "\n deltaY:" + g.deltaY );
          if (!dragging) return;
        console.log("\deltaX\deltaY:" +  g.deltaX + ",dragy:" +  g.deltaY );
      });
  }
}

function postThePic(event) {
  //alert("postThePic OK!");
  var testCanvas = document.getElementById("postThePicCanvas");  
  var canvasData = testCanvas.toDataURL("image/png");
  var postData = '"sex":"male","uid":"111","image":"'+ canvasData +'"';
  console.log(postData);
  $.ajax({type:'POST',url:'post.php?op=upload', data : postData,success:function(data){
    console.log(data);
  }})
  /*
  $.ajax({
    type: 'POST',
    url:'post.php?op=upload',
    data: { name: 'vitrum.post' },
    // type of data we are expecting in return:
    dataType: 'json',
    timeout: 300,
    context: $('body'),
    success: function(json){
      // Supposing this JSON payload was received:
      //   {"project": {"id": 42, "html": "<div>..." }}
      // append the HTML to context object.
      console.log('mid='+ json.data.mid +",similar"+ json.data.similar);
      //router.navigate('yourmount/take');
      //showSubFrame('yourmount','rendering');
      //showNavBar('take');
      //drowMout(2);
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  })
*/

  //drowMout(2);
  console.log('postThePic OK!');
}// end of function postThePic(event)

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

function drowCar() {
  var self = $(".carunit");
  self.toggleClass('caranim');
  $(".carlight").toggleClass('carlightanim');
  console.log('drowCar~');
}// end of function drowCar() 

function drowMout(mountid) {
  var scale = 2
  , stage = new Kinetic.Stage({
    container: 'container',
    width: 320,
    height: 200
  });

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
        //console.log("lines-" + n +"-type:" + linesArr[n].type);
          if(linesArr[n].type=="off"){
            staticGroup.add(line);
          }else{
            animGroup.add(line);
            thisMount.mline[moveLine] = {"lid":n};
            moveLine++;
          }
      }

  //console.log( thisMount);
  console.log( thisMount);
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
        setTimeout(function () {
          console.log("drowCar~~~~~~");
            drowCar();
        }, 100);
      
      //router.navigate('yourmount/real');
      $('.mountswich a').hide();
      $('.mountswich .nex').show();

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
  

  document.getElementById('start').addEventListener('click', function() {
    anim.start();
  }, false);
  
  document.getElementById('stop').addEventListener('click', function() {
    //anim.stop();
    drowMout(mountid);
  }, false);

  /*
  function drowCar() {
    var carLayer = new Kinetic.Layer();
    var imageObj = new Image();
    imageObj.onload = function() {

        darth = new Kinetic.Image({
          x: 10,
          y: 10,
          image: imageObj,
          draggable: true,
          filter: Kinetic.Filters.Invert,
          filterRadius: 20
        });
      
        carLayer.add(darth);
        stage.add(carLayer); 
      };
      imageObj.src = 'image/x2/car-l-i.png';
  }//drowCar finish;
  */
} //drowMout finish;



var AppRouter = Backbone.Router.extend({  
    routes : {  
        '' : 'main', 
        'index' : 'main', 
        'gender' : 'selectGender',
        "gender/:user" : "selectGenderUser",
        'take' : 'takePic',  
        'take/:user' : 'takePic',
        'retake' : 'retakePic', 
        'share':'shareGame',
        'awardlist' : 'awardList',
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
    },
    selectGenderUser: function(user) {  
    	if(!user){ user = 'male'}
        console.log('性别为：' +user );
        router.navigate('take/' + user , {  
    		  trigger: true  
		    });
    },
    awardList: function() {  
        console.log('awardlist');
        showSubFrame('awardbox','inputfrom');
        showNavBar('awardlink');
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
    	if(!user){ user = 'male'}
      console.log('takePic 性别为：' +user);
    	showSubFrame('takebox','take');
      showNavBar('takepic');
    },  
    retakePic : function(id) {  
      console.log('渲染详情方法, id为: ' + id);  
    }, 
    yourMount : function(step) {  
    	if(!step){ user = 'take'}
        console.log('渲染详情方法, id为: ' + step);
        showFrame('yourmount');
        if(step == 'take'){
        	router.navigate('yourmount/' + step , {  
	    		  trigger: true  
          });
        	drowMout(2);
        }else if (step == 'real'){
          router.navigate('yourmount/real');
          showSubFrame('yourmount','real');
          showNavBar('submintinfo');
          $('.mountswich a').hide();
          $('.mountswich .pre').show();
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
    postThePic();
  });

	//$("#yourimage").load(getSwatches);
	desiredWidth = window.innerWidth;
  if(!("url" in window) && ("webkitURL" in window)) {
      window.URL = window.webkitURL;   
  };
  $('.mountswich .pre').die('click').live('click',function(){
    showSubFrame('yourmount','rendering');
    router.navigate('yourmount/take');
    showNavBar('yourmount');
    $('.mountswich a').hide();
    //if 
    $('.mountswich .nex').show();
  });
  $('.mountswich .nex').die('click').live('click',function(){
    showSubFrame('yourmount','real');
    showNavBar('showreal');
    router.navigate('yourmount/real');
    $('.mountswich a').hide();
    $('.mountswich .pre').show();
  });

  $('.navbox .youreal').die('click').live('click',function(){
    showSubFrame('yourmount','real');
    showNavBar('showreal');
    router.navigate('yourmount/real');
    $('.mountswich a').hide();
    $('.mountswich .pre').show();

  });
});



