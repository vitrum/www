/**/
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
  if(!barname){ $('.navbar').hide();}
  $('.navbar').hide();
  $('.navbox').show();
  $('.' + barname ).show();
  //check nav bar prostion;
}

function gotPic(event) {
  if(event.target.files.length == 1 && 
    event.target.files[0].type.indexOf("image/") == 0) {
    $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
    showNavBar('retakepic');
  }
}

function postThePic(event) {
  //alert("postThePic OK!");
  router.navigate('yourmount/take');
  showSubFrame('yourmount','rendering');
  showNavBar('take');
  drowMout(1);
  console.log('postThePic OK!');
}

function drowCar() {


  console.log('drowCar~');
}
function drowMout(mountid) {
  var scale = 2
  , stage = new Kinetic.Stage({
    container: 'container',
    width: 300,
    height: 280
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
  //for (var i=0; i<mounts.length; i++) {
    //if (mounts[i].mid == mountid ){
      /*drow point*/
      var i = mountid - 1;
      var pointArr = mounts[i].points
      ,   thisMount = mounts[i];
      //var t=0;
      //console.log("\n thisMount.mpoint:" + thisMount.mpoint);

      for (var n=0; n<pointArr.length; n++) {
        //console.log(pointArr[n].ox + ","+ pointArr[n].oy);
        (function() {
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
          //console.log( "pointArr" + i +":"+pointArr[n].type + "\n");
          
          console.log("point-" + n +"-type:" + pointArr[n].type);
          if(pointArr[n].type=="off"){
            staticGroup.add(newPoint);
          }else{
            
            animGroup.add(newPoint);
            /* add to move arry 
            thisMount.mpoint[t]='aa';//pointArr[k].pid;
            console.log("t:" + t + " pid:"+ pointArr[k].pid)
            t++;
            */
          }
        })();
        
      }
      console.log("\n thisMount.mpoint:" + thisMount.mpoint + " number"+ thisMount.mpoint.length );
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
        console.log("lines-" + n +"-type:" + linesArr[n].type);
          if(linesArr[n].type=="off"){
            staticGroup.add(line);
          }else{
            animGroup.add(line);
          }
      }
    //}//for mounts[i].mid
    //console.log(mountid)
  //}//for mountid

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
    //console.log(thisMount.mpoint + ":mpoint:"+ thisMount.mpoint.length);
    for (var n=0; n<thisMount.mpoint.length; n++) {
      (function() {
          var i = n;
          var pointNb = thisMount.mpoint[i].pid - 1;
          //console.log("number:"+n+ ":start" + "pid:" +pointNb + "|pointArr[pointNb]:" + pointArr[pointNb] );
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
      })();
      //console.log("number:"+n+ ":ok");
    } //thisMount.mpoint.length
    for (var n=0; n<thisMount.mline.length; n++) {
      (function() {
          var i = n;
          var lineNb = thisMount.mline[n].lid - 1;

          var strPoint = linesArr[lineNb].strpid-1
            , endPoint = linesArr[lineNb].endpid-1
            , PointX1 = pointArr[strPoint].ox/scale
            , PointY1 = pointArr[strPoint].oy/scale
            , PointX2 = pointArr[endPoint].ox/scale
            , PointY2 = pointArr[endPoint].ty/scale;
          var newYpoint = (pointArr[endPoint].oy - (pointArr[endPoint].oy - pointArr[endPoint].ny) * anims.b / anims.c) / scale;
          PointY2 = newYpoint;
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
      })();
      
    }



    animLayer.add(animGroup);
    console.log("frame:" + frame.timeDiff + ",frame.time :" + frame.time + ",anims.b:" + anims.b ) ;

    if ( anims.b > anims.c ) {
      anim.stop();
      //showSubFrame('yourmount','real');
      showNavBar('yourmount');
      drowCar();
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
    anim.stop();
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
        	drowMout(1);
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



