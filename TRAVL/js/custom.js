
// Mapbox controls 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtbXkxMSIsImEiOiJjamFib2p6cGwwMjNhMnhtaGptbmF1azJrIn0.OtcZ5rIhMtthxs7yu6KqmQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/cammy11/cjalqspmrczga2smswy6q4kgx',
center: [169.130632, -41.709066],
zoom: 5,
minZoom: 5
});

function panelMove () {
    $('.panel').click(function(){
        // alert("The was clicked.");
          // $(this).removeClass('panel-three').addClass('panel-back');
            $(this).toggleClass('panel-back panel');
          // $(this).removeClass('panel-back').addClass('panel-three');
    });
};
panelMove ();
