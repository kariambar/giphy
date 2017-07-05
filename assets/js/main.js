$(document).ready(function(){
	var dibujarGits = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			git = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(git, url));
		});
	}
