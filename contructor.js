function Location(locationName, minHourlyCust, maxHourlyCust, averageSales, elementName) {
    this.locationName = locationName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.averageSales = averageSales;

    this.elementName = elementName;
}

var pioneerSquare = new Location("Pioneer Square", 17, 88, 5.2);

console.log(pioneerSquare.minHourlyCust);

var locations = [
    new Location("Pioneer Square", 17, 88, 5.2),
    new Location("Portland Airport", 6, 24, 1.2),
    new Location("Washington Square", 11, 38, 1.9),
    new Location("Sellwood", 20, 48, 3.3),
    new Location("Pearl District", 3, 24, 2.6)
];
