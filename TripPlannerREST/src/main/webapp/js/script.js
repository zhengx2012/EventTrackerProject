window.addEventListener('load', function(e) {
	loadTripsIndex();
	init();

});

function init() {
	document.createTripForm.addTrip
			.addEventListener(
					'click',
					function(e) {
						e.preventDefault();
						var addedTrip = {};

						addedTrip.city = createTripForm.city.value;
						addedTrip.state = createTripForm.state.value;
						addedTrip.country = createTripForm.country.value;
						addedTrip.date = createTripForm.date.value;
						addedTrip.flightTime = (createTripForm.flightTime.value ? createTripForm.flightTime.value
								+ ":00"
								: '00:00:00');
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
		if (this.readyState === 4) {
			if (this.status === 200) {
				var trips = JSON.parse(this.responseText);
				displayTripsIndex(trips);
				showAggregateData(trips);
			}
		}
	};
	xhr.send(null);
	setTimeout(loadTripsIndex, 5000);
}

function displayTripsIndex(trips) {
	var div = document.getElementById('tripsIndex');
	div.textContent = '';
	var table = document.createElement('table');
	var thead = document.createElement('thead');
	var th = document.createElement('th');
	var tbody = document.createElement('table');

	th.textContent = 'Upcoming Trips';

	thead.appendChild(th);
	table.appendChild(thead);

	for ( var p in trips) {
		var tr = document.createElement('tr');
		tr.tripId = trips[p].id;

		td = document.createElement('td');
		td.textContent = trips[p].city;
		tr.appendChild(td);

		tbody.appendChild(tr);

		tr.addEventListener('click', function(e) {
			var cell = e.target;
			var id = cell.parentElement.tripId;

			if (!isNaN(id) && id > 0) {
				getTrip(id);
			}
		});
	}
	table.appendChild(tbody);

	div.appendChild(table);
}

function getTrip(tripId) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'api/trips/' + tripId, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				displayTripDetails(data);
			} else {
				displayTripNotFound(tripId);
			}
		}

	}
	xhr.send(null);
}

function displayTripDetails(trip) {
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

	editDeleteFormButtons(trip);

}

function displayTripNotFound() {
	var div = document.getElementById('tripDetails');
	div.textContent = 'No trips found';
}

function showAggregateData(trips) {
	var tripTotal = 0;
	for ( var p in trips) {
		tripTotal += trips[p].tripExpenses;
	}

	var div = document.getElementById('aggregateData');
	div.textContent = '';
	var title = document.createElement('h4');
	title.setAttribute('class', 'header');
	title.textContent = 'Total Trip Expenses';

	var cost = document.createElement('p');
	cost.textContent = tripTotal;
	title.appendChild(cost);

	div.appendChild(title);
}

function editDeleteFormButtons(trip) {
	var editButton = document.createElement('button');
	editButton.innerHTML = "Edit";
	editButton.setAttribute('type', 'submit');
	editButton.setAttribute('class', 'btn btn-primary ');

	document.editTripButton.innerHTML = "";
	document.editTripButton.appendChild(editButton);
	editButton.addEventListener('click', updateTripForm);
	editButton.id = trip.id;

	var deleteButton = document.createElement('button');
	deleteButton.innerHTML = "Delete";
	deleteButton.setAttribute('type', 'submit');
	deleteButton.setAttribute('class', 'btn btn-danger');
	deleteButton.id = trip.id;

	document.deleteTripForm.innerHTML = "";
	document.deleteTripForm.appendChild(deleteButton);
	deleteButton.addEventListener('click', deleteTrip);
}

function addTrip(addedTrip) {
	var xhr = new XMLHttpRequest();
	xhr.open('post', 'api/trips', true);

	xhr.setRequestHeader("Content-type", "application/json")

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				var data = JSON.parse(xhr.responseText);
			} else {
				console.log("POST request failed " + xhr.requestBody);
			}
		}
	}

	xhr.send(JSON.stringify(addedTrip));
	loadTripsIndex();
}

function updateTripForm(e) {
	var tId = e.target.id;
	console.log(tId);

	var formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'text');
	editTripForm.setAttribute('name', 'city');
	editTripForm.setAttribute('value', e.target.parentElement.city);
	document.editTripButton.appendChild(formElem);
	
	formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'text');
	editTripForm.setAttribute('name', 'state');
	editTripForm.setAttribute('value', e.target.parentElement.state);
	document.editTripButton.appendChild(formElem);
	
	formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'text');
	editTripForm.setAttribute('name', 'city');
	editTripForm.setAttribute('value', e.target.parentElement.country);
	document.editTripButton.appendChild(formElem);
	
	formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'date');
	editTripForm.setAttribute('name', 'city');
	editTripForm.setAttribute('value', e.target.parentElement.date);
	document.editTripButton.appendChild(formElem);
	
	formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'time');
	editTripForm.setAttribute('name', 'city');
	editTripForm.setAttribute('value', e.target.parentElement.flightTime);
	document.editTripButton.appendChild(formElem);
	
	formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'text');
	editTripForm.setAttribute('name', 'city');
	editTripForm.setAttribute('value', e.target.parentElement.flightNumber);
	document.editTripButton.appendChild(formElem);
	
	formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'text');
	editTripForm.setAttribute('name', 'city');
	editTripForm.setAttribute('value', e.target.parentElement.flightCompany);
	document.editTripButton.appendChild(formElem);
	
	formElem = document.createElement('input');
	editTripForm.setAttribute('type', 'text');
	editTripForm.setAttribute('name', 'city');
	editTripForm.setAttribute('value', e.target.parentElement.tripExpenses);
	document.editTripButton.appendChild(formElem);
	
	
	var editButton = document.createElement('button');
	editButton.innerHTML = "Submit Edit";
	editButton.setAttribute('type', 'submit');
	editButton.setAttribute('class', 'btn btn-primary ');

	document.editTripForm.innerHTML = "";
	document.editTripForm.appendChild(editButton);

	editButton.addEventListener('click', updateTrip);
}

function updateTrip(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.open('patch', 'api/trips/' + e.target.id, true);

	xhr.setRequestHeader("Content-type", "application/json")

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {

			} else {
				console.log("PATCH request failed " + xhr.requestBody);
			}
		}
	}

	xhr.send(e.target.id);
}

function deleteTrip(e) {
	e.preventDefault();
	var tId = e.target.id;
	console.log(e.target);
	console.log(e.target.parentElement);
	console.log(tId);

	var xhr = new XMLHttpRequest();
	xhr.open('delete', 'api/trips/' + tId, true);

	xhr.setRequestHeader("Content-type", "application/json")

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {

			} else {
				console.log("DELETE request failed " + xhr.requestBody);
			}
		}
	}

	xhr.send(tId);
	displayTripDetails(null);
}
