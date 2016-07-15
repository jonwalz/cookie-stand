var pioneerSquare = {
    // Stores the min/max hourly customers, and the average cookies per customer, in object properties
    locationName: "Pioneer Square",
    minHourlyCust: 17,
    maxHourlyCust: 88,
    averageSales: 5.2,
    openHour: 10,
    closeHour: 18,
    salesPerHour: [],

    // Uses a method of that object to generate a random number of customers per hour
    randomCustomersPerHour: function() {
        var listBuilt = '';
        listBuilt += '<h1>' + this.locationName + '</h1>';
        listBuilt += '<ul>';

        for (var i = this.openHour; i <= this.closeHour; i++) {

            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randCookiesSales = Math.random() * (this.maxHourlyCust - this.minHourlyCust);
            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));
            listBuilt += '<li>';
            var hour = this.openHour;
            if (hour < 12) {
                listBuilt += this.openHour;
                listBuilt += 'am';
            } else if (hour == 12) {
                listBuilt += this.openHour;
                listBuilt += 'pm';
            } else {
                listBuilt += (this.openHour - 12);
                // hour = (hour - 12);
                listBuilt += 'pm';
            }
            listBuilt += " " + this.salesPerHour[i-10] + "<br />";
            listBuilt += '</li>';
            this.openHour++;

        }
        // Display the values of each array as unordered lists in the browser
        var listsElem = document.getElementById("lists");

        listsElem.innerHTML = listBuilt;
    }
};

var portlandAirport = {};
var washingtonSquare = {};
var sellwood = {};
var pearlDistrict = {};

pioneerSquare.randomCustomersPerHour();
