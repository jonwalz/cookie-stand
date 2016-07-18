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
        var pioneerListElem = document.getElementById("pioneerSquare");

        // Table Header ELements
        var headerTitle = document.createElement('th');
        var headerCount = document.createElement('th');

        var countTitle = document.createTextNode('Cookies Sold');
        var titleText = document.createTextNode(this.locationName);
        headerTitle.appendChild(titleText);
        headerCount.appendChild(countTitle);
        pioneerListElem.appendChild(headerTitle);
        pioneerListElem.appendChild(headerCount);

        for (var i = this.openHour; i <= this.closeHour; i++) {
            var tableRow = document.createElement('tr');
            var salesNode = document.createElement('td');
            var timeNode = document.createElement('td');

            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            var randCookiesSales = randomCustomers * this.averageSales;

            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

            var hour = this.openHour;
            var sales = document.createTextNode(this.salesPerHour[i - 10]);
            if (hour < 12) {
                var timeAm = document.createTextNode(this.openHour + 'am');
                timeNode.appendChild(timeAm);
                salesNode.appendChild(sales);
            } else if (hour == 12) {
                var timeNoon = document.createTextNode(this.openHour + 'pm');
                timeNode.appendChild(timeNoon);
                salesNode.appendChild(sales);
            } else {
                var timePm = document.createTextNode(this.openHour - 12 + 'pm');
                timeNode.appendChild(timePm);
                salesNode.appendChild(sales);
            }
            tableRow.appendChild(timeNode);
            tableRow.appendChild(salesNode);
            pioneerListElem.appendChild(tableRow);

            this.openHour++;

        }
        // List total day sales
        var total = 0;
        for (var j = 0; j < this.salesPerHour.length; j++) {
            total += this.salesPerHour[j];
        }
        var totalRow = document.createElement('tr');
        var totalNode = document.createElement('td');
        var totalTdTextNode = document.createElement('td');
        var totalWordTextNode = document.createTextNode('Total:');
        var dataTotal = document.createTextNode(total);

        totalTdTextNode.appendChild(totalWordTextNode);
        totalRow.appendChild(totalTdTextNode);

        totalNode.appendChild(dataTotal);
        totalRow.appendChild(totalNode);
        pioneerListElem.appendChild(totalRow);
    }
};

var portlandAirport = {
    // Stores the min/max hourly customers, and the average cookies per customer, in object properties
    locationName: "Portland Airport",
    minHourlyCust: 6,
    maxHourlyCust: 24,
    averageSales: 1.2,
    openHour: 10,
    closeHour: 18,
    salesPerHour: [],

    // Uses a method of that object to generate a random number of customers per hour
    randomCustomersPerHour: function() {

        var portlandAirport = document.getElementById("portlandAirport");
        // Table Header ELements
        var headerTitle = document.createElement('th');
        var headerCount = document.createElement('th');

        var countTitle = document.createTextNode('Cookies Sold');
        var titleText = document.createTextNode(this.locationName);
        headerTitle.appendChild(titleText);
        headerCount.appendChild(countTitle);
        portlandAirport.appendChild(headerTitle);
        portlandAirport.appendChild(headerCount);

        for (var i = this.openHour; i <= this.closeHour; i++) {
            var tableRow = document.createElement('tr');
            var salesNode = document.createElement('td');
            var timeNode = document.createElement('td');

            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            var randCookiesSales = randomCustomers * this.averageSales;

            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

            var hour = this.openHour;
            var sales = document.createTextNode(this.salesPerHour[i - 10]);
            if (hour < 12) {
                var timeAm = document.createTextNode(this.openHour + 'am');
                timeNode.appendChild(timeAm);
                salesNode.appendChild(sales);
            } else if (hour == 12) {
                var timeNoon = document.createTextNode(this.openHour + 'pm');
                timeNode.appendChild(timeNoon);
                salesNode.appendChild(sales);
            } else {
                var timePm = document.createTextNode(this.openHour - 12 + 'pm');
                timeNode.appendChild(timePm);
                salesNode.appendChild(sales);
            }
            tableRow.appendChild(timeNode);
            tableRow.appendChild(salesNode);
            portlandAirport.appendChild(tableRow);

            this.openHour++;

        }
        // List total day sales
        var total = 0;
        for (var j = 0; j < this.salesPerHour.length; j++) {
            total += this.salesPerHour[j];
        }
        var totalRow = document.createElement('tr');
        var totalNode = document.createElement('td');
        var totalTdTextNode = document.createElement('td');
        var totalWordTextNode = document.createTextNode('Total:');
        var dataTotal = document.createTextNode(total);

        totalTdTextNode.appendChild(totalWordTextNode);
        totalRow.appendChild(totalTdTextNode);

        totalNode.appendChild(dataTotal);
        totalRow.appendChild(totalNode);
        portlandAirport.appendChild(totalRow);
    }
};

var washingtonSquare = {
    // Stores the min/max hourly customers, and the average cookies per customer, in object properties
    locationName: "Washington Square",
    minHourlyCust: 11,
    maxHourlyCust: 38,
    averageSales: 1.9,
    openHour: 10,
    closeHour: 18,
    salesPerHour: [],

    // Uses a method of that object to generate a random number of customers per hour
    randomCustomersPerHour: function() {
        var washingtonSquare = document.getElementById("washingtonSquare");
        // Table Header ELements
        var headerTitle = document.createElement('th');
        var headerCount = document.createElement('th');

        var countTitle = document.createTextNode('Cookies Sold');
        var titleText = document.createTextNode(this.locationName);
        headerTitle.appendChild(titleText);
        headerCount.appendChild(countTitle);
        washingtonSquare.appendChild(headerTitle);
        washingtonSquare.appendChild(headerCount);


        for (var i = this.openHour; i <= this.closeHour; i++) {
            var tableRow = document.createElement('tr');
            var salesNode = document.createElement('td');
            var timeNode = document.createElement('td');

            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            var randCookiesSales = randomCustomers * this.averageSales;

            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

            var hour = this.openHour;
            var sales = document.createTextNode(this.salesPerHour[i - 10]);
            if (hour < 12) {
                var timeAm = document.createTextNode(this.openHour + 'am');
                timeNode.appendChild(timeAm);
                salesNode.appendChild(sales);
            } else if (hour == 12) {
                var timeNoon = document.createTextNode(this.openHour + 'pm');
                timeNode.appendChild(timeNoon);
                salesNode.appendChild(sales);
            } else {
                var timePm = document.createTextNode(this.openHour - 12 + 'pm');
                timeNode.appendChild(timePm);
                salesNode.appendChild(sales);
            }
            tableRow.appendChild(timeNode);
            tableRow.appendChild(salesNode);
            washingtonSquare.appendChild(tableRow);

            this.openHour++;

        }
        // List total day sales
        var total = 0;
        for (var j = 0; j < this.salesPerHour.length; j++) {
            total += this.salesPerHour[j];
        }
        var totalRow = document.createElement('tr');
        var totalNode = document.createElement('td');
        var totalTdTextNode = document.createElement('td');
        var totalWordTextNode = document.createTextNode('Total:');
        var dataTotal = document.createTextNode(total);

        totalTdTextNode.appendChild(totalWordTextNode);
        totalRow.appendChild(totalTdTextNode);

        totalNode.appendChild(dataTotal);
        totalRow.appendChild(totalNode);
        washingtonSquare.appendChild(totalRow);
    }
};
var sellwood = {
    // Stores the min/max hourly customers, and the average cookies per customer, in object properties
    locationName: "Sellwood",
    minHourlyCust: 20,
    maxHourlyCust: 48,
    averageSales: 3.3,
    openHour: 10,
    closeHour: 18,
    salesPerHour: [],

    // Uses a method of that object to generate a random number of customers per hour
    randomCustomersPerHour: function() {
        var sellwood = document.getElementById("sellwood");
        // Table Header ELements
        var headerTitle = document.createElement('th');
        var headerCount = document.createElement('th');

        var countTitle = document.createTextNode('Cookies Sold');
        var titleText = document.createTextNode(this.locationName);
        headerTitle.appendChild(titleText);
        headerCount.appendChild(countTitle);
        sellwood.appendChild(headerTitle);
        sellwood.appendChild(headerCount);
        for (var i = this.openHour; i <= this.closeHour; i++) {
            var tableRow = document.createElement('tr');
            var salesNode = document.createElement('td');
            var timeNode = document.createElement('td');

            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            var randCookiesSales = randomCustomers * this.averageSales;

            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

            var hour = this.openHour;
            var sales = document.createTextNode(this.salesPerHour[i - 10]);
            if (hour < 12) {
                var timeAm = document.createTextNode(this.openHour + 'am');
                timeNode.appendChild(timeAm);
                salesNode.appendChild(sales);
            } else if (hour == 12) {
                var timeNoon = document.createTextNode(this.openHour + 'pm');
                timeNode.appendChild(timeNoon);
                salesNode.appendChild(sales);
            } else {
                var timePm = document.createTextNode(this.openHour - 12 + 'pm');
                timeNode.appendChild(timePm);
                salesNode.appendChild(sales);
            }
            tableRow.appendChild(timeNode);
            tableRow.appendChild(salesNode);
            sellwood.appendChild(tableRow);

            this.openHour++;

        }
        // List total day sales
        var total = 0;
        for (var j = 0; j < this.salesPerHour.length; j++) {
            total += this.salesPerHour[j];
        }
        var totalRow = document.createElement('tr');
        var totalNode = document.createElement('td');
        var totalTdTextNode = document.createElement('td');
        var totalWordTextNode = document.createTextNode('Total:');
        var dataTotal = document.createTextNode(total);

        totalTdTextNode.appendChild(totalWordTextNode);
        totalRow.appendChild(totalTdTextNode);

        totalNode.appendChild(dataTotal);
        totalRow.appendChild(totalNode);
        sellwood.appendChild(totalRow);
    }
};
var pearlDistrict = {
    // Stores the min/max hourly customers, and the average cookies per customer, in object properties
    locationName: "Pearl District",
    minHourlyCust: 3,
    maxHourlyCust: 24,
    averageSales: 2.6,
    openHour: 10,
    closeHour: 18,
    salesPerHour: [],

    // Uses a method of that object to generate a random number of customers per hour
    randomCustomersPerHour: function() {
        var pearl = document.getElementById("pearlDistrict");
        // Table Header ELements
        var headerTitle = document.createElement('th');
        var headerCount = document.createElement('th');

        var countTitle = document.createTextNode('Cookies Sold');
        var titleText = document.createTextNode(this.locationName);
        headerTitle.appendChild(titleText);
        headerCount.appendChild(countTitle);
        pearl.appendChild(headerTitle);
        pearl.appendChild(headerCount);
        for (var i = this.openHour; i <= this.closeHour; i++) {
            var tableRow = document.createElement('tr');
            var salesNode = document.createElement('td');
            var timeNode = document.createElement('td');

            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            var randCookiesSales = randomCustomers * this.averageSales;

            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

            var hour = this.openHour;
            var sales = document.createTextNode(this.salesPerHour[i - 10]);
            if (hour < 12) {
                var timeAm = document.createTextNode(this.openHour + 'am');
                timeNode.appendChild(timeAm);
                salesNode.appendChild(sales);
            } else if (hour == 12) {
                var timeNoon = document.createTextNode(this.openHour + 'pm');
                timeNode.appendChild(timeNoon);
                salesNode.appendChild(sales);
            } else {
                var timePm = document.createTextNode(this.openHour - 12 + 'pm');
                timeNode.appendChild(timePm);
                salesNode.appendChild(sales);
            }
            tableRow.appendChild(timeNode);
            tableRow.appendChild(salesNode);
            pearl.appendChild(tableRow);

            this.openHour++;

        }
        // List total day sales
        var total = 0;
        for (var j = 0; j < this.salesPerHour.length; j++) {
            total += this.salesPerHour[j];
        }
        var totalRow = document.createElement('tr');
        var totalNode = document.createElement('td');
        var totalTdTextNode = document.createElement('td');
        var totalWordTextNode = document.createTextNode('Total:');
        var dataTotal = document.createTextNode(total);

        totalTdTextNode.appendChild(totalWordTextNode);
        totalRow.appendChild(totalTdTextNode);

        totalNode.appendChild(dataTotal);
        totalRow.appendChild(totalNode);
        pearl.appendChild(totalRow);
    }
};
var locations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];

for (var i = 0; i < locations.length; i++) {
    locations[i].randomCustomersPerHour();
}
