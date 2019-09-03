var map;
var markers = [];


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: -34.6153929, lng: -58.4500449 },
		zoom: 8

	});

}


function addMarker(place) {

	var marker = new google.maps.Marker({
		position: place.coord,
		map,
		title: place.name,
		draggable:true,

	})
	var infoWindow = new google.maps.InfoWindow({
		content:`<div><div><strong>Discripción:</strong> ${place.name}</div>
				<div><strong>Dirección:</strong> ${place.adress}</div>
				<div><strong>Teléfono:</strong> ${place.phone}</div>
				<div><strong>(X,Y):</strong> ${place.coord.lat+','+place.coord.lng}</div>
				<div><strong>Categoría:</strong> ${place.type}</div>
				<di><button class='delete' onclick='DeleteMarker()'>Detele</button></div>
		</div>`
	});
	marker.addListener('click',function(){
		infoWindow.open(map, marker);
	})
	markers.push(
		marker
	);
}

function deleteMarkers() {
	markers = [];
}

function sendForm(event) {

	event.preventDefault();
	var place = {
		name: document.getElementById('name').value,
		adress: document.getElementById('adress').value,
		phone: document.getElementById('phone').value,
		type: document.getElementById('type').value,
		coord: getCordinate()

	};
	if (!place.coord) {
		return;
	}
	addMarker(place);

	document.getElementById('name').value = '';
	document.getElementById('adress').value = '';
	document.getElementById('phone').value = '';
	document.getElementById('type').value = '';
	document.getElementById('coord').value = '';
}

function getCordinate() {

	var coord = document.getElementById('coord').value;
	var aux = coord.split(',');

	var position = { lat: parseFloat(aux[0]), lng: parseFloat(aux[1]) }

	if (position.lat > -180 && position.lat < 180 && position.lng > -90 && position.lng < 90) {
		return position;
	}
	alert('Coordenas incorrectas');
}

function DeleteMarker(id) {
        
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].id == id) {
                               
                markers[i].setMap(null);
 
            
                markers.splice(i, 1);
                return;
            }
        }
    };

    