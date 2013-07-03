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
        	drowStar(step);
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

function drowStar(event) {
	var stage = new Kinetic.Stage({
		container: 'container',
		width: 300,
		height: 280
	});

	var shapesLayer = new Kinetic.Layer();

      var group = new Kinetic.Group({
        x: 0,
        y: 0,
        rotationDeg: 20
      });
      var group2 = new Kinetic.Group({
        x: 220,
        y: 120,
        rotationDeg: 20
      });

      var groundFloorX = [ 20, 23, 46, 97,110,147,153,171 ]
      ,   groundFloorY = [123,132,125,117,100, 94, 88, 97 ]
      ,   groundLines  = [ 
                [ 20 ,123 , 23,132],
                [ 20 ,123 , 23,132],
                [ 20 ,123 , 46,125],
                [ 20 ,123 , 97,117],
                [ 20 ,123 ,110,132],
                [ 20 ,123 ,147, 94],
                [ 20 ,123 ,153, 88],
                [ 20 ,123 ,171, 97]
      ]
      ,   floatFloorX  = [ 30, 68,114,133,121,150]
      ,   floatFloorY  = [ 45, 74, 35, 71, 54, 55];
      if ( groundFloorX.length == groundFloorY.length){
        for(var n = 0; n < groundFloorX.length; n++) {
          // anonymous function to induce scope
          (function() {
            var i = n;
            var box = new Kinetic.Circle({
              x: groundFloorX[i],
              y: groundFloorY[i],
              radius: 2,
              //name: colors[i],
              fillRGB: {r:230,g:230,b:230},
              shadowColorRGB: {r:255,g:255,b:255},
              shadowBlur: 4,
              //lineJoin:miter,
              //stroke: 'black',
              strokeWidth: 0
            });
            console.log(groundFloorX[i]);
            group.add(box);
          })();
        }
        for (var n = 0; n < groundLines.length; n++) {
        	(function() {
            var i= n;
            var lines = new Kinetic.Line({
              x: 0,
              y: 0,
              points: groundLines[i],
              stroke: 'white',
              opacity:0.4
            }); 
            group.add(lines);
          })();
        };
      }

      shapesLayer.add(group);
      shapesLayer.add(group2);
      stage.add(shapesLayer);

      var amplitude = 150;
      var period = 2000;
      // in ms
      var centerY = stage.getWidth() / 2;

      var pointsNew = {};

      var lineLayer = new Kinetic.Layer();
      var anim = new Kinetic.Animation(function(frame) {
        var newYpoint= amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerY;
        group2.setY(newYpoint);
        lineLayer.remove();
        lineLayer = new Kinetic.Layer();
        // simple line
        var line = new Kinetic.Line({
          x: 0,
          y: 0,
          points: [73, 70, 340, newYpoint],
          stroke: 'white',
          opacity:0.4
        });

        lineLayer.add(line);
        stage.add(lineLayer);
        //console.log(newYpoint);

      }, shapesLayer);

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


