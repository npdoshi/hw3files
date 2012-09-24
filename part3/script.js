/**
 * Created with JetBrains WebStorm.
 * User: npdoshi
 * Date: 9/23/12
 * Time: 3:30 PM
 * To change this template use File | Settings | File Templates.
 */

var geocoder;
var map;


geocoder = new google.maps.Geocoder();






        google.maps.event.addDomListener(window, 'load', initialize);

        function initialize() {
            geocoder = new google.maps.Geocoder();
            var mapProp = {
                center:new google.maps.LatLng(51.508742,-0.120850),
                zoom:5,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }

function codeAddress() {
    console.log("In codeAddress");

    var position = document.getElementById("div_list_ex").id;
    console.dir(position);
    var birds = {
        'tag': 'sunset',
        'rect': {'sw': {'lat': -30, 'lng': 10.5}, 'ne': {'lat': 50.5, 'lng': 30}}};
    var list_ex_options = {'width': 1000, 'height': 100, 'columns': 3, 'croppedPhotos': true};
    var list_ex_widget = new panoramio.PhotoListWidget(position, birds, list_ex_options);
    list_ex_widget.setPosition(0);



    var address = document.getElementById('address').value;

    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //map.setCenter(results[0].geometry.location);
            console.dir(results[0]);
            console.log(results[0].geometry.location.Xa);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

