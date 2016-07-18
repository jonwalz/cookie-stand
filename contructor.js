function Location(locationName, minHourlyCust, maxHourlyCust, averageSales, elementName) {
    this.locationName = locationName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.averageSales = averageSales;

    this.elementName = elementName;
}

var pioneerSquare = new Location("Pioneer Square", 17, 88, 5.2);

console.log(pioneerSquare);
