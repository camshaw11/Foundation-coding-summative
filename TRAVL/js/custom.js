
var init = function () {

	function myForm() {

		// Mapbox controls 
		mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtbXkxMSIsImEiOiJjamFib2p6cGwwMjNhMnhtaGptbmF1azJrIn0.OtcZ5rIhMtthxs7yu6KqmQ';
		var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/cammy11/cjalqspmrczga2smswy6q4kgx',
		center: [174.763817,-41.295241],
		zoom: 12,
		minZoom: 5
		});

		// tipr plugin for tooltips
		$(document).ready(function() {
	     	$('.tip').tipr({
	          	'speed': 400,
          		'mode': 'above',
          		'space': 7
	     	});
		});




		// location stuff
		var location 	= document.getElementById('input-space-from').value;
		var destination = document.getElementById('input-space-to').value;
		var myArray = [location, destination];
		console.log(myArray);





		// panel moving function
		// function panelMove () {
		//     $('.panel').click(function(){
		//         // alert("The was clicked.");
		//           // $(this).removeClass('panel-three').addClass('panel-back');
		//             $(this).toggleClass('panel-back panel');
		//           // $(this).removeClass('panel-back').addClass('panel-three');
		//     });
		// }
		// panelMove ();

	




	} // myForm function ends

	myForm (); //invoke myForm

}(); //main function ends