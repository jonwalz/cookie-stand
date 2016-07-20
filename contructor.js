function Location(locationName, minHourlyCust, maxHourlyCust, averageSales, elementName) {
    this.locationName = locationName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.averageSales = averageSales;

    this.elementName = elementName;
    randomCustomersPerHour = function(){

    };
    this.addLocation = function(){
        var timeRow = document.createElement("tr");
        var timeCel = documenbt.createElement("td");
        timeCel.innerText = this.locationName;
        timeRow.appendChild(timeCel);
        var salesCel = document.createElement("td");
        salesCel.innerText = this.averageSales;
        timeRow.appendChild(salesCel);

        var table = document.getElementById("");
    };

}

var pioneerSquare = new Location("Pioneer Square", 17, 88, 5.2);

var locations = [
    new Location("Pioneer Square", 17, 88, 5.2),
    new Location("Portland Airport", 6, 24, 1.2),
    new Location("Washington Square", 11, 38, 1.9),
    new Location("Sellwood", 20, 48, 3.3),
    new Location("Pearl District", 3, 24, 2.6)
];

function addLocation(){

}

for (var i = 0; i < locations.length; i++) {
    locations[i]
}
