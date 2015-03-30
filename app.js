var App = Ember.Application.create({
	LOG_TRANSITIONS:true
});

App.Router.map(function(){

	this.route('about');
	this.resource('products');

});

App.IndexController = Ember.Controller.extend({
	productsCount: 10,
	logo: 'images/logo.png',
	time: function(){
		return (new Date()).toDateString()
	}.property()
});