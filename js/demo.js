var Case = {
	Models:      {},
	Collections: {},
	Views:       {},
	Utils:       {},

	// Called once, at app startup
	init: function () {
		// Grab the Trigger twitter feed


		// to be called once we have the Trigger twitter feed
		function showIndex(data) {
			// Save away initial data
			Case.items = new Case.Collections.Items(data);

			// Set up Backbone
			Case.router = new Case.Router();
			Backbone.history.start();
		}
	}
};
