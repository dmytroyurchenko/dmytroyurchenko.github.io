var lastfm = {};

lastfm.tracker = (function(){

	//Set up an object for DOM elements and data source
	var config = {
		getTopArtistsURL: "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1af3e272563e82dcfe131c68b84f4530&format=json",
		user: "remaster_custom",
	};


	var setupLastFM = function(){
		createTopArtistsChart();
	};


	var createTopArtistsChart = function(){
		$.getJSON(config.getTopArtistsURL,function(data){
			var artistData = data.artists.artist,
			artists = $.map(artistData, function(artist) {
				return [[artist.name]];
			}),

			playcounts = $.map(artistData, function(playcount) {
				return [[playcount.playcount]];
			});

			playcountsArray = playcounts.slice(0,10);
			artistsArray = artists.slice(0,10);

            playcountsArray.unshift("playcount");
            artistsArray.unshift("x");


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
