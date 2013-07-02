// A Backbone view you can use which supports transitions
Case.Views.Page = Backbone.View.extend({
	className: "page",

	initialize: function () {
		this.render();
	},
	show: function () {
		$('.page').css({"position": "absolute"});
		var direction_coefficient = this.options.back? 1 : -1;
		if ($('.page').length) {
			
			var $old = $('.page').not(this.el);
			
			//This fix was hard-won, just doing .css(property, '') doesn't work!
			$old.get(0).style["margin-left"] = ""
			$old.get(0).style["-webkit-transform"] = ""
			
			this.$el.appendTo('body').hide();
			this.$el.show().css({"margin-left": 320 * direction_coefficient});
			this.$el.anim({translate3d: -320 * direction_coefficient +'px,0,0'}, 0.3, 'linear');
			$old.anim({translate3d: -320 * direction_coefficient + 'px,0,0'}, 0.3, 'linear', function() {
				$old.remove();
				$('.page').css({"position": "static"});
			});
		} else {
			this.$el.appendTo('body').hide();
			this.$el.show();
		}
		/* TODO: This is not cross platform. Jquery has .scrollTop(), but zepto does not. Port? */
		window.scrollTo(0, 0);
	}
});


Case.Views.Index = Case.Views.Page.extend({

	initialize: function() {
		this.render();
	},

	render: function() {
		var that = this;
		this.collection.each(function(feed_item, index){
				if (index % 2 === 1) {
					var new_view = new Case.Views.Feed({
						model: feed_item,
						odd: true}
					);
				} else {
					var new_view = new Case.Views.Feed({
						model: feed_item,
						odd: false
					});
				}
				$(that.el).append(new_view.el);
		});
		return this;
	}
});


Case.Views.Feed = Backbone.View.extend({

	events: Case.Utils.click_or_tap({
		".feed-even": "expand_item",
		".feed-odd" : "expand_item"
	}),
	
	expand_item: function () {
		Case.router.navigate("item/" + this.model.cid.split("").slice(1), true);
	},
	
	initialize: function() {
		this.render();
	},
	
	render: function() {
		var feed_class = (this.options.odd? "feed-odd" : "feed-even");
		$(this.el).append('<div class="' + feed_class + '">' +
							this.model.get("text") +
							"</div>");
		return this;
	},
});


Case.Views.Item = Case.Views.Page.extend({

	events: Case.Utils.click_or_tap({
		"#back.feed-even": "go_back",
		"#item.feed-even": "expand_item",
		"#item.feed-odd" : "expand_item"
	}),

	expand_item: function () {
		// Open an external URL in a separate view
		forge.tabs.open("https://twitter.com/triggercorp/status/"+this.model.get("id_str"));
	},

	initialize: function() {
		this.render();
	},

	go_back: function() {
		Case.router.navigate("", true);
	},
	
	render: function() {
		var author = this.model.get("contributors");
		var author_line = (author ? " by " + author : "");

		$(this.el).append('<div id="back", class="feed-even">Back</div>');
		
		$(this.el).append('<li id="item", class="feed-odd">' +
							this.model.get("text") +
							'<div class="author">' +
								author_line +
							'</div>' +
							'<div class="date">' +
								this.model.get("created_at").split(" ").slice(0, -2).join(" ") +
							'</div>' +
						  '</li>');
		return this;
	}
});
