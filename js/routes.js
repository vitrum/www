Case.Router = Backbone.Router.extend({

	routes: {
        "" : "index",         // entry point: no hash fragment or #
        "/step" : "getStep",
        "/aboutgame" : "aboutGame"
	},

	// main and initial route
	index: function() {
		console.log('应用入口方法'); 
	},
	getStep: function() {
       // List all teams 
    },
    aboutGame: function() {
       // List all teams 
       console.log('aboutGame'); 
    }

});
