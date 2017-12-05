
var init = function () {

		// document.getElementById("add").addEventListener("click", incrementValue);
	function myForm() {

		// Mapbox controls 
		mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtbXkxMSIsImEiOiJjamFib2p6cGwwMjNhMnhtaGptbmF1azJrIn0.OtcZ5rIhMtthxs7yu6KqmQ';
		var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/cammy11/cjalqspmrczga2smswy6q4kgx',
		center: [169.130632, -41.709066],
		zoom: 5,
		minZoom: 5
		});

		// function panelMove () {
		//     $('.panel').click(function(){
		//         // alert("The was clicked.");
		//           // $(this).removeClass('panel-three').addClass('panel-back');
		//             $(this).toggleClass('panel-back panel');
		//           // $(this).removeClass('panel-back').addClass('panel-three');
		//     });
		// };
		// panelMove ();

		// document.getElementById("subtract").addEventListener("click", down);

		

		// var btn = document.getElementsByClassName('button-primary');
		// btn[0].addEventListener('click', up('10'), false);

		// function up(max) {
		//     document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
		//     if (document.getElementById("myNumber").value >= parseInt(max)) {
		//         document.getElementById("myNumber").value = max;
		//     }
		// }

		// up();
		// function down(min) {
		//     document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
		//     if (document.getElementById("myNumber").value <= parseInt(min)) {
		//         document.getElementById("myNumber").value = min;
		//     }
		// }
		// down();
		// var btn = document.getElementsByClassName('button-primary');
		// btn[0].addEventListener('click', addRemoveNumber, false);

		function addRemoveNumber () {

			function incrementValue() {		
				var value = parseInt(document.getElementById('my-number').value, 10);
				value = isNaN(value) ? 0 : value;
				value++;
				document.getElementById('my-number').value = value;

			}
			incrementValue();

			function incrementValueDays() {
				var value = parseInt(document.getElementById('my-number-days').value, 10);
				value = isNaN(value) ? 0 : value;
				value++;
				document.getElementById('my-number-days').value = value;
			}
			incrementValueDays();
		};

	}; // myForm function ends
	myForm ();

}(); //main function ends