window.addEventListener('load', function(e) {
	loadPlansIndex();
	init();

});

function init() {
	document.createTripForm.addTrip.addEventListener('click', function(e) {
		e.preventDefault();
		
		var addedTrip = {};

		addedTrip.city = createTripForm.city.value;
		addedTrip.state = createTripForm.state.value;
		addedTrip.country = createTripForm.country.value;
		addedTrip.date = createTripForm.date.value;
		addedTrip.flightTime = createTripForm.flightTime.value;
		addedTrip.flightNumber = createTripForm.flightNumber.value;
		addedTrip.flightCompany = createTripForm.flightCompany.value;
		addedTrip.tripExpenses = createTripForm.tripExpenses.value;
		
		addTrip(addedTrip);
		createTripForm.reset();
	});
}

function loadPlansIndex() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/trips');

	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				var trips = JSON.parse(this.responseText);
				displayPlansIndex(trips);
			}
		}
	};
	xhr.send(null);
}

function displayPlansIndex(trips) {
	var div = document.getElementById('tripsIndex');
	console.log(div);
	var table = document.createElement('table');

	for ( var p in trips) {
		var tr = document.createElement('tr');
		tr.id = trips[p].id;

		var td = document.createElement('td');
		td.textContent = trips[p].city;
		tr.appendChild(td);

		table.appendChild(tr);
	}

	div.appendChild(table);
}

//function addTrip(addedTrip) {
//	var xhr = new XMLHttpRequest();
//	xhr.open('post', 'api/trips', true);
//
//	xhr.setRequestHeader("Content-type", "application/json")
//
//	xhr.onreadystatechange = function() {
//		if (xhr.readyState === 4) {
//			if (xhr.status === 200 || xhr.status === 201) {
//				var data = JSON.parse(xhr.responseText);
//			} else {
//				console.log("POST request failed");
//			}
//		}
//	}
//
//	xhr.send(JSON.stringify(addedTrip));
//}
