var lastfm = {};

lastfm.tracker = (function(){

	//Set up an object for DOM elements and data source
	var config = {
		getMostPopularArtistsURL: "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=jimmersjukebox&api_key=6db1989bd348bf91797bad802c6645d8&format=json",
		user: "jimmersjukebox",
	};


	var setupLastFM = function(){
		createPopularArtistsChart();
	};


	var createPopularArtistsChart = function(){
		$.getJSON(config.getMostPopularArtistsURL,function(data){
			var artistData = data.topartists.artist,
			artists = $.map(artistData, function(artist) {
				return [[artist.name]];
			}),

			playcounts = $.map(artistData, function(playcount) {
				return [[playcount.playcount]];
			});

			playcountsArray = playcounts.slice(0,10);
			artistsArray = artists.slice(0,10);

            playcountsArray.unshift('playcount');
            artistsArray.unshift('x');


			var popularArtists = c3.generate({
				bindto: '#popularArtists',
				data: {
					x: 'x',
					columns: [
						playcountsArray,
						artistsArray
					],
					axes: {
						data: 'artists' // ADD
					},
					types: {
						playcount: 'bar'
					}
				},
				axis: {
					x: {
						type: 'category'
					},
				}
			});


		});
	};

	return{
		config: config,
		init: function(){
			setupLastFM();
		}
	};
})();
$(window).load(lastfm.tracker.init);
