$('#searchForm').submit(function( event )  {
	$('#results').html('loading...');
	event.preventDefault();
	let $input = $('#searchTerm');
	giphySearch($input.val());
});

function giphySearch(keyword) {
	$.get("http://api.giphy.com/v1/gifs/search?q="+keyword+"&api_key=IOFNyEzqhGPFgqVsda94eXxiMR6KszIe&limit=6", function( data ) {
		$('#results').html('');
		$.each(data.data, function (key, item) {
			console.log(item);
			let img = new Image();
			img.src = item.images.fixed_height_downsampled.url;
			appendImage(img);

		});
	});
}

function appendImage(img) {
	let $div = $('<div class="img-wrapper"></div>');
	$('<div class="inner"></div>').append(img).appendTo($div);
	$('#results').append($div)
}

