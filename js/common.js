var AppRouter = Backbone.Router.extend({  
    routes : {  
        '' : 'main', 
        'index' : 'main', 
        'gender' : 'selectGender',
        "gender/:user" : "selectGenderUser",
        'take' : 'takePic',  
        'take/:user' : 'takePic',
        'retake' : 'retakePic', 
        'awardlist' : 'awardList',
        'aboutgame' : 'aboutGame',
        'yourmount' : 'yourMount',
        'yourmount/:step' : 'yourMount',
        '*error' : 'renderError'  
    },  
    main : function() {  
        console.log('homepage');
        showFrame('homepage');
    },  
    selectGender: function() {  
        console.log('selectGender');
        showFrame('selectgender');
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
        showFrame('awardbox');
    },
    aboutGame: function() {  
        console.log('aboutGame');
        showFrame('aboutgame');
    },  
    takePic : function(user) {  
    	if(!user){ user = 'male'}
        console.log('takePic 性别为：' +user);
    	showSubFrame('takebox','take');
    },  
    retakePic : function(id) {  
        console.log('渲染详情方法, id为: ' + id);  
    }, 
    yourMount : function(step) {  
    	if(!step){ user = 'take'}
        console.log('渲染步骤为: ' + step);
    	showFrame('yourmount');
        if(step == 'take'){
        	router.navigate('yourmount/' + step , {  
	    		trigger: true  
			});
        	drowMout(1);
        }
    }, 
    renderError : function(error) {  
        console.log('URL错误, 错误信息: ' + error); 
        $('.link_home').show(); 
    }  
});  
  

function showFrame(framename) {
	if(!framename){ framename = 'homepage'}
	$('.frame').hide();
	if(framename !=='homepage' ){ $('.link_home').show();} else {$('.link_home').hide();};
    $('.' + framename ).show();
}

function showSubFrame(framename,subframename) {
	if(!framename && !subframename) {return false;};
	showFrame(framename);
	$('.' + framename + ' .subframe').hide();
	$('.' + framename + ' .' + subframename).show();
}

function gotPic(event) {
    if(event.target.files.length == 1 && 
       event.target.files[0].type.indexOf("image/") == 0) {
        $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
    }
}

function drowMout(mountid) {
  var scale = 2
	, stage = new Kinetic.Stage({
		container: 'container',
		width: 300,
		height: 280
	});


  var stage = new Kinetic.Stage({
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
  for (var i=0; i<mounts.length; i++) {
    if (mounts[i].mid == mountid ){
      /*drow point*/
      var pointArr = mounts[i].points;
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
          if(mounts[i].type=="on"){
            staticGroup.add(newPoint);
          }else{
            animGroup.add(newPoint);
          }
        })();
      }
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
          points: [PointX1,PointY1,PointX2,PointY2],
          stroke: 'white',
          opacity:0.4
        });
          if(linesArr[n].type=="on"){
            staticGroup.add(line);
          }else{
            animGroup.add(line);
          }
      }
    }
    //console.log(mountid)
  }

  /*drow animtion*/

  var animLayer = new Kinetic.Layer();
  var anim = new Kinetic.Animation(function(frame) {
    /*remove animlayer*/
    animLayer.remove();
    animLayer = new Kinetic.Layer();

    console.log("frame:" + frame.timeDiff + ",frame.time :" + frame.time) ;

    if ( frame.time > 600 ) {anim.stop();};
    stage.add(animLayer);
    //date1=new Date();
  })
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

}


var router = new AppRouter();  
Backbone.history.start(); 




$(document).ready(function() {
  console.log('onReady');
	$("#takePictureField").on("change",gotPic);
	//$("#yourimage").load(getSwatches);
	desiredWidth = window.innerWidth;
    
    if(!("url" in window) && ("webkitURL" in window)) {
        window.URL = window.webkitURL;   
    }
});


