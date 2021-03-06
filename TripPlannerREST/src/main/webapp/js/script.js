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
//	setTimeout(loadTripsIndex, 5000);
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
	editButton.id = trip.id;
	editButton.addEventListener('click', function(e) {
		e.preventDefault();
		updateTripForm(trip)
	});

	var deleteButton = document.createElement('button');
	deleteButton.innerHTML = "Delete";
	deleteButton.setAttribute('type', 'submit');
	deleteButton.setAttribute('class', 'btn btn-danger');
	deleteButton.id = trip.id;

	document.deleteTripForm.innerHTML = "";
	document.deleteTripForm.appendChild(deleteButton);
	deleteButton.addEventListener('click', deleteTrip);
}

function updateTripForm(trip) {
	console.log(trip);
	document.editTripForm.innerHTML = "";

	var formElem = document.createElement('input');
	formElem.setAttribute('type', 'text');
	formElem.setAttribute('name', 'city');
	// formElem.setAttribute('class', 'form-control');
	formElem.setAttribute('value', trip.city);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'text');
	formElem.setAttribute('name', 'state');
	formElem.setAttribute('value', trip.state);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'text');
	formElem.setAttribute('name', 'country');
	formElem.setAttribute('value', trip.country);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'date');
	formElem.setAttribute('name', 'date');
	formElem.setAttribute('value', trip.date);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'time');
	formElem.setAttribute('name', 'flightTime');
	formElem.setAttribute('value', trip.flightTime);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'text');
	formElem.setAttribute('name', 'flightNumber');
	formElem.setAttribute('value', trip.flightNumber);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'text');
	formElem.setAttribute('name', 'flightCompany');
	formElem.setAttribute('value', trip.flightCompany);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'text');
	formElem.setAttribute('name', 'tripExpenses');
	formElem.setAttribute('value', trip.tripExpenses);
	document.editTripForm.appendChild(formElem);

	formElem = document.createElement('input');
	formElem.setAttribute('type', 'hidden');
	formElem.setAttribute('name', 'id');
	formElem.setAttribute('value', trip.id);
	document.editTripForm.appendChild(formElem);
	
	var submitEditButton = document.createElement('button');
	submitEditButton.innerHTML = "Submit Edit";
	submitEditButton.setAttribute('type', 'submit');
	submitEditButton.setAttribute('class', 'btn btn-info ');

	document.editTripForm.appendChild(formElem);
	document.editTripForm.appendChild(submitEditButton);
	
	submitEditButton.addEventListener('click', function(e) {
		e.preventDefault();
		console.log("Edit button clicked")
		var editedTrip = {};
		var editTripForm = e.target.parentElement;
		editedTrip.id = editTripForm.id.value;
		editedTrip.city = editTripForm.city.value;
		editedTrip.state = editTripForm.state.value;
		editedTrip.country = editTripForm.country.value;
		editedTrip.date = editTripForm.date.value;
		editedTrip.flightTime = editTripForm.flightTime.value;
		editedTrip.flightNumber = editTripForm.flightNumber.value;
		editedTrip.flightCompany = editTripForm.flightCompany.value;
		editedTrip.tripExpenses = editTripForm.tripExpenses.value;

		updateTrip(editedTrip);
//		editTripForm.reset();
	});

}

function addTrip(addedTrip) {
	var xhr = new XMLHttpRequest();
	xhr.open('post', 'api/trips', true);

	xhr.setRequestHeader("Content-type", "application/json")

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				var data = JSON.parse(xhr.responseText);
				loadTripsIndex();
			} else {
				console.log("POST request failed " + xhr.requestBody);
			}
		}
	}

	xhr.send(JSON.stringify(addedTrip));
}

function updateTrip(updatedTrip) {
	console.log(updatedTrip);
	var xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'api/trips/' + updatedTrip.id, true);

	xhr.setRequestHeader("Content-type", "application/json")

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				loadTripsIndex();
			} else {
				console.log("PATCH request failed " + xhr.requestBody);
				console.log(xhr.status + " " + xhr.statusText);
			}
		}
	}

	xhr.send(JSON.stringify(updatedTrip));
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
				loadTripsIndex();

			} else {
				console.log("DELETE request failed " + xhr.requestBody);
			}
		}
	}

	xhr.send(tId);
	displayTripDetails(null);
}
