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
    	showFrame('takebox');
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
		width: 328,
		height: 320
	});
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


