var my_url = 'http://api.bandcamp.com/api/band/3/search?key=snaefellsjokull&name=metallica&callback=?';
var res;
$.ajax({
    'url': my_url,
    'type': "GET",
    'dataType': 'jsonp',
    success: function(res) {
        var bandId = res.results[0].band_id;
        console.log(bandId);
    }
});
