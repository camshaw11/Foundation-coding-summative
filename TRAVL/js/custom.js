
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

		/////////// modal pop out ///////////

		// Get the modal
		var modal 			= document.getElementById('myModal');

		// Get the button that opens the modal
		var btn 			= document.getElementById("motorbike");
		var smartCarBtn 	= document.getElementById('smartCar');
		var largeCarBtn 	= document.getElementById('largeCar');
		var motorhomeBtn 	= document.getElementById('motorhome');
		var h1Elem			= document.getElementsByClassName('head-modal');
		var h2Elem			= document.getElementsByClassName('modalPrice');
		var h2Elem2			= document.getElementsByClassName('modalPrice2');

		// Get the <span> element that closes the modal
		var span 			= document.getElementsByClassName("close")[0];

		var buttons = document.getElementsByClassName('car');
			for (var i = 0, len = buttons.length; i < len; i++) {
    			buttons[i].onclick = function (){
        			modal.style.display = "block";
			};
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		};

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		};

		smartCarBtn.addEventListener('click', function() {
			document.getElementById('photoTransport').src="img/smartcar.png";
			h1Elem["0"].textContent = "SMARTCAR";
			h2Elem["0"].textContent = "$129 PER DAY";
			h2Elem2["0"].textContent ="8.5L/100KM";
		});

		largeCarBtn.addEventListener('click', function() {
			document.getElementById('photoTransport').src="img/large-car.png";
			h1Elem["0"].textContent = "CHRYSLER 200";
			h2Elem["0"].textContent = "$144 PER DAY";
			h2Elem2["0"].textContent ="9.7L/100KM";
		});

		motorhomeBtn.addEventListener('click', function() {
			document.getElementById('photoTransport').src="img/motorhome.png";
			h1Elem["0"].textContent = "MOTORHOME";
			h2Elem["0"].textContent = "$200 PER DAY";
			h2Elem2["0"].textContent ="17L/100KM";
		});

		btn.addEventListener('click', function() {
			document.getElementById('photoTransport').src="img/motorbike.png";
			h1Elem["0"].textContent = "MOTORBIKE";
			h2Elem["0"].textContent = "$109 PER DAY";
			h2Elem2["0"].textContent ="3.7L/100KM";
		});


		var myLocation 			= document.getElementById('input-space-from');
		var myDestinationIs 	= document.getElementById('input-space-to');
		var peopleAmount 		= document.getElementById('my-number');
		var daysAmount 			= document.getElementById('my-number-days');
		var subtractPeople		= document.getElementById('subtract');
		var addPeople			= document.getElementById('add');
		var addDays				= document.getElementById('add-days');
		var subtractDays		= document.getElementById('subtract-days');

		var carSelect 			= document.getElementsByClassName('checkbox');
		var carSelectMotor		= document.getElementById('motorbikeCheck');
		var carSelectSmall		= document.getElementById('smartCarCheck');
		var carSelectLarge		= document.getElementById('largeCarCheck');
		var carSelectMotorhome	= document.getElementById('motorhomeCheck');

		var noOptionsAvailable  = document.getElementById('noOptionText');
		var noOptionContainer	= document.getElementsByClassName('noOption');

		// car divs 
		var car1 				= document.getElementById("motorbike");
		var car2 				= document.getElementById("smartCar");
		var car3 				= document.getElementById("largeCar");
		var car4 				= document.getElementById("motorhome");

		// costs
		var fuelCost 			= document.getElementById('fuel-cost');
		var overDistanceCost 	= document.getElementById('over-cost');
		

		$(document).ready(function(){

    		$("#submit-arrow").click(function(event){
    			event.preventDefault();


			var peopleAmountInt = parseInt(peopleAmount.value);
			var daysAmountInt 	= parseInt(daysAmount.value);

			if ((peopleAmountInt === 1) && (daysAmountInt >= 1 && daysAmountInt <= 5)) {
					car1.style.display = "inline-block";
			} else {
					// car1.style.display = "none";
					$(car1).hide(400);	
			}	

			if ((peopleAmountInt >= 1 && peopleAmountInt <= 2) && (daysAmountInt >= 1 && daysAmountInt <= 10)){
					car2.style.display = "inline-block";
			} else {
					// car2.style.display = "none";
					$(car2).hide(400);
			}

			if ((peopleAmountInt <= 5) && (daysAmountInt >= 3 && daysAmountInt <= 10)) {
					car3.style.display = "inline-block";
			} else {
					// car3.style.display = "none";
					$(car3).hide(400);
			}

			if ((peopleAmountInt >= 2 && peopleAmountInt <= 6) && (daysAmountInt >= 2 && daysAmountInt <= 15)) {
					car4.style.display = "inline-block";
			} else {
					// car4.style.display = "none";
					$(car4).hide(400);
			} 
				// console.dir(noOptionContainer); ["0"].style.cssText 
			if ((peopleAmountInt > 6 || peopleAmountInt < 1) || (daysAmountInt < 1 || daysAmountInt > 15)) {
					noOptionContainer[0].style.display = "inline-block";
					noOptionsAvailable.textContent = "No options available";
			} else {
					noOptionContainer[0].style.display = "none";
			}

		var pricePerDay = {

			motorbike: 109,
			smallCar: 129,
			largeCar: 144,
			motorhome: 200
		};

		$(carSelect).change(function() {

    		if (carSelectMotor.checked == true) {
        			fuelCost.textContent = "TOTAL:" + " " + "$" + daysAmountInt * pricePerDay.motorbike;
        	} else if (carSelectSmall.checked == true) {
        			fuelCost.textContent = "TOTAL:" + " " + "$" + daysAmountInt * pricePerDay.smallCar;
        	} else if (carSelectLarge.checked == true) {
        			fuelCost.textContent = "TOTAL:" + " " + "$" + daysAmountInt * pricePerDay.largeCar;
        	} else if (carSelectMotorhome.checked == true) {
        			fuelCost.textContent = "TOTAL:" + " " + "$" + daysAmountInt * pricePerDay.motorhome;
        	}

		});
        		// console.log(daysAmount.value);
        		// // console.log(carSelect[0].checked);
        		// console.log(carSelectSmall.checked);
        		// console.log(carSelectLarge.checked);
        		// console.log(carSelectMotorhome.checked);
   		 	});
		});

		addPeople.addEventListener('click', increaseValue);
		function increaseValue() {
			  var value = parseInt(peopleAmount.value, 10);
			  value = isNaN(value) ? 0 : value;
			  value++;
			  peopleAmount.value = value;
		}

		subtractPeople.addEventListener('click', decreaseValue);
		function decreaseValue() {
			  var value = parseInt(peopleAmount.value, 10);
			  value = isNaN(value) ? 0 : value;
			  value < 1 ? value = 1 : '';
			  value--;
			  peopleAmount.value = value;
		}
		
		addDays.addEventListener('click', increaseValue2);
		function increaseValue2() {
			  var value = parseInt(daysAmount.value, 10);
			  value = isNaN(value) ? 0 : value;
			  value++;
			  daysAmount.value = value;
		}

		subtractDays.addEventListener('click', decreaseValue2);
		function decreaseValue2() {
			  var value = parseInt(daysAmount.value, 10);
			  value = isNaN(value) ? 0 : value;
			  value < 1 ? value = 1 : '';
			  value--;
			  daysAmount.value = value;
		}

		// function myFunction() {
  //   		setTimeout(function() { 
  //   		alert("Hello");

  //   		}, 3000);
		// }

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