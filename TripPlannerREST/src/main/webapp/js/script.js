window.addEventListener('load', function(e) {
	loadPlansIndex();

});

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
	
	for ( var p in trips ) {
		var tr = document.createElement('tr');
		tr.id = trips[p].id;
		
		var td = document.createElement('td');
		td.textContent = trips[p].city;
		tr.appendChild(td);
		
		table.appendChild(tr);
	}
	
	div.appendChild(table);
}

//$(function () {
//    $('#datetimepicker').datetimepicker({
//        inline: true,
//        sideBySide: true
//    });
//});