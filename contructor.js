function Location(locationName, minHourlyCust, maxHourlyCust, averageSales) {
    this.locationName = locationName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.averageSales = averageSales;
    this.openHour = 10;
    this.closeHour = 18;

    this.addLocation = function() {

        var table = document.createElement('table');
        var timeCol = document.createElement("tr");
        var timeCel = document.createElement("th");
        timeCel.innerText = this.locationName;
        timeCol.appendChild(timeCel);

        var salesCel = document.createElement("th");
        salesCel.innerText = "Hourly Sales";
        timeCol.appendChild(salesCel);
        table.appendChild(timeCol);

        var openHour = this.openHour;
        var closeHour = this.closeHour;
        var salesPerHour = [];

        // build sales array
        for (var j = openHour; j <= closeHour; j++) {
            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            var randCookiesSales = randomCustomers * this.averageSales;

            // Store the results for each location in a separate array
            salesPerHour.push(parseInt(randCookiesSales));
        }

        for (var i = 0; i < salesPerHour.length; i++) {
            var tableRow = document.createElement('tr');
            var timeNode = document.createElement('td');
            var salesNode = document.createElement('td');
            var sales = document.createTextNode(salesPerHour[i]);

            var hour = openHour;

            if (hour < 12) {
                var timeAm = document.createTextNode(openHour + 'am');
                timeNode.appendChild(timeAm);
                salesNode.appendChild(sales);

            } else if (hour == 12) {
                var timeNoon = document.createTextNode(openHour + 'pm');
                timeNode.appendChild(timeNoon);
                salesNode.appendChild(sales);

            } else {
                var timePm = document.createTextNode(openHour - 12 + 'pm');
                timeNode.appendChild(timePm);
                salesNode.appendChild(sales);
            }
            tableRow.appendChild(timeNode);
            tableRow.appendChild(salesNode);
            table.appendChild(tableRow);
            openHour++;
        }

        // List total day sales
        var total = 0;
        for (var k = 0; k < salesPerHour.length; k++) {
            total += salesPerHour[k];
        }
        var totalRow = document.createElement('tr');
        totalRow.className += "totalRow";
        var totalNode = document.createElement('td');
        var totalTdTextNode = document.createElement('td');
        var totalWordTextNode = document.createTextNode('Total:');
        var dataTotal = document.createTextNode(total);

        totalTdTextNode.appendChild(totalWordTextNode);
        totalRow.appendChild(totalTdTextNode);

        totalNode.appendChild(dataTotal);
        totalRow.appendChild(totalNode);
        table.appendChild(totalRow);

        // delete this table option
        var deleteRow = document.createElement('tr');
        deleteRow.className = "deleteRow";
        var deleteCel = document.createElement('td');
        deleteCel.colSpan = "2";
        var deleteText = document.createTextNode('DELETE THIS TABLE');

        deleteCel.appendChild(deleteText);
        deleteRow.appendChild(deleteCel);
        table.appendChild(deleteRow);

        return table;
    };
}

var locations = [
    new Location("Pioneer Square", 17, 88, 5.2),
    new Location("Portland Airport", 6, 24, 1.2),
    new Location("Washington Square", 11, 38, 1.9),
    new Location("Sellwood", 20, 48, 3.3),
    new Location("Pearl District", 3, 24, 2.6)
];

function runLocations() {

    for (var i = 0; i < locations.length; i++) {

        var newTable = locations[i].addLocation();

        var tablesContainer = document.getElementById("tables");
        tablesContainer.appendChild(newTable);
    }
}
runLocations();

// Button logic

var button = document.getElementById('locationBtn');

button.addEventListener("click", function(){addNewLocation(this.form);}, false);

function addNewLocation(form) {
    var locationName, minCust, maxCust, avgSls;
 
    locationName = form.name.value;
    minCust = form.minHour.value;
    maxCust = form.maxHour.value;
    avgSls = form.averageCust.value;
    locations.push(new Location(locationName, minCust, maxCust, avgSls));
    var addedLoc = new Location(locationName, minCust, maxCust, avgSls);

    var returnedTable = addedLoc.addLocation();

    var tablesContainer = document.getElementById("tables");
    tablesContainer.appendChild(returnedTable);
    runElementsArray();
}

// Delete Table

var deleteRowsArray = document.getElementsByClassName('deleteRow');

function listenFor(i) {
    deleteRowsArray[i].addEventListener("click", function name(params) {     
        this.parentNode.remove();
    });
}

function runElementsArray() {
    for (var i = 0; i < deleteRowsArray.length; i++) {
        listenFor(i);
    }
}
runElementsArray();

// Submit form when enter key is pressed

document.getElementById("averageCust").addEventListener("keydown", function(e) {
    console.log(e.target.form);
    if (e.keyCode == 13) {  addNewLocation(e.target.form); }
}, false);