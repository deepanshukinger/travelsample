var galleryFeed = new Instafeed({
	get: "user",
	userID: 4697558499,
	accessToken: "4697558499.1677ed0.64cc6caa36ed4bd0a889a3fd90fae4dd",
	resolution: "standard_resolution",
	useHttp: "true",
	limit:3,
	template: '<img src="{{image}}" class="img-responsive">',
	target: "instafeed-gallery",
	
});
galleryFeed.run();