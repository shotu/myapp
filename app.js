var App = Ember.Application.create({
	LOG_TRANSITIONS:true
});

App.Router.map(function(){

	this.route('about');
	this.resource('products');
	this.resource('product',{ path: '/products/:title'}); 

});

App.IndexController = Ember.Controller.extend({
	productsCount: 10,
	logo: 'images/logo.png',
	time: function(){
		return (new Date()).toDateString()
	}.property()
});

App.PRODUCTS = [
	{
		title:'Flint',
		price:99,
		description:'Flint is ...',
		isOnSale: true,
		image: 'images/products/flint.png'
	},
	{
		title: 'Kindling',
		price:249,
		description: 'Easily....',
		isOnSale: true,
		image: 'images/products/kindling.png'
	}
];

App.ProductsRoute = Ember.Route.extend({
	 
model: function(){
	return App.PRODUCTS;

}

});

App.ProductRoute = Ember.Route.extend({
	model:function(params){
		return App.PRODUCTS.findBy('title',params.title);
	}


});