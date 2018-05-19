window.addEventListener('load', function(e) {
	loadTripsIndex();
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

function loadTripsIndex() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/trips');

	xhr.onreadystatechange = function() {
		if ( this.readyState === 4 ) {
			if ( this.status === 200 ) {
				var trips = JSON.parse(this.responseText);
				displayTripsIndex(trips);
			}
		}
	};
	xhr.send(null);
}

function getTrip(tripId) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'api/trips/' + tripId, true);
	xhr.onreadystatechange = function() {
		if ( xhr.readyState === xhr.DONE ) {
			if ( xhr.status === 200 ) {
				var data = JSON.parse(xhr.responseText);
				displayTrip(data);
			} else {
				displayTripNotFound(tripId);
			}
		}

	}
	xhr.send(null);
}

function displayTrip(trip) {
	var div = document.getElementById('tripDetails');
	div.textContent = '';
	var location = document.createElement('h3');
	location.textContent = trip.city + ', ' + trip.state + ', ' + trip.country;
	div.appendChild(location);
	
	var ul = document.createElement('ul');
	var li = document.createElement('li');
	li.textContent = trip.date;
	ul.appendChild(li);
	
	li = document.createElement('li');
	li.textContent = trip.flightTime;
	ul.appendChild(li);
	
	li = document.createElement('li');
	li.textContent = trip.flightNumber;
	ul.appendChild(li);
	
	li = document.createElement('li');
	li.textContent = trip.flightCompany;
	ul.appendChild(li);
	
	li = document.createElement('li');
	li.textContent = trip.tripExpenses;
	ul.appendChild(li);
	
	div.appendChild(ul);

}

function displayTripNotFound() {
	var div = document.getElementById('tripDetails');
	div.textContent = 'No trips found';
}

function displayTripsIndex(trips) {
	var div = document.getElementById('tripsIndex');
	var table = document.createElement('table');
	var thead = document.createElement('thead');
	var th = document.createElement('th');
	var tbody = document.createElement('table');

	th.textContent = 'Upcoming Trips';
	
	thead.appendChild(th);
	table.appendChild(thead);

	for ( var p in trips ) {
		var tr = document.createElement('tr');
		tr.tripId = trips[p].id;
			
		td = document.createElement('td');
		td.textContent = trips[p].city;
		tr.appendChild(td);

		tbody.appendChild(tr);
		
		tr.addEventListener('click', function(e) {
			var cell = e.target;
			var id = cell.parentElement.tripId;
			
			if ( !isNaN(id) && id > 0 ) {
		        getTrip(id);
		      }
		});
	}
	table.appendChild(tbody);

	div.appendChild(table);
}

function addTrip(addedTrip) {
	var xhr = new XMLHttpRequest();
	xhr.open('post', 'api/trips', true);

	xhr.setRequestHeader("Content-type", "application/json")

	xhr.onreadystatechange = function() {
		if ( xhr.readyState === 4 ) {
			if ( xhr.status === 200 || xhr.status === 201 ) {
				var data = JSON.parse(xhr.responseText);
			} else {
				console.log("POST request failed " + xhr.requestBody);
			}
		}
	}

	xhr.send(JSON.stringify(addedTrip));
	loadTripsIndex();
}
