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
        listBuilt += '<tr>';
        listBuilt += '<th>' + this.locationName + '</th>';
        listBuilt += '<th>Cookies Per Hour</th>';


        for (var i = this.openHour; i <= this.closeHour; i++) {
            listBuilt += '<tr><td>';
            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust))+this.minHourlyCust);
            console.log(randomCustomers);
            var randCookiesSales = randomCustomers * this.averageSales;
            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

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
            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesPerHour[i - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;

        }
        // Display the values of each array as unordered lists in the browser
        var listsElem = document.getElementById("pioneerSquare");

        listsElem.innerHTML = listBuilt;
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
        var listBuilt = '';
        listBuilt += '<tr>';
        listBuilt += '<th>' + this.locationName + '</th>';
        listBuilt += '<th>Cookies Per Hour</th>';


        for (var i = this.openHour; i <= this.closeHour; i++) {
            listBuilt += '<tr><td>';
            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust))+this.minHourlyCust);
            console.log(randomCustomers);
            var randCookiesSales = randomCustomers * this.averageSales;
            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

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
            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesPerHour[i - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;

        }
        // Display the values of each array as unordered lists in the browser
        var listsElem = document.getElementById("portlandAirport");

        listsElem.innerHTML = listBuilt;
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
        var listBuilt = '';
        listBuilt += '<tr>';
        listBuilt += '<th>' + this.locationName + '</th>';
        listBuilt += '<th>Cookies Per Hour</th>';


        for (var i = this.openHour; i <= this.closeHour; i++) {
            listBuilt += '<tr><td>';
            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust))+this.minHourlyCust);
            console.log(randomCustomers);
            var randCookiesSales = randomCustomers * this.averageSales;
            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

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
            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesPerHour[i - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;

        }
        // Display the values of each array as unordered lists in the browser
        var listsElem = document.getElementById("washingtonSquare");

        listsElem.innerHTML = listBuilt;
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
        var listBuilt = '';
        listBuilt += '<tr>';
        listBuilt += '<th>' + this.locationName + '</th>';
        listBuilt += '<th>Cookies Per Hour</th>';


        for (var i = this.openHour; i <= this.closeHour; i++) {
            listBuilt += '<tr><td>';
            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust))+this.minHourlyCust);
            console.log(randomCustomers);
            var randCookiesSales = randomCustomers * this.averageSales;
            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

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
            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesPerHour[i - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;

        }
        // Display the values of each array as unordered lists in the browser
        var listsElem = document.getElementById("sellwood");

        listsElem.innerHTML = listBuilt;
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
        var listBuilt = '';
        listBuilt += '<tr>';
        listBuilt += '<th>' + this.locationName + '</th>';
        listBuilt += '<th>Cookies Per Hour</th>';


        for (var i = this.openHour; i <= this.closeHour; i++) {
            listBuilt += '<tr><td>';
            // Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust))+this.minHourlyCust);
            console.log(randomCustomers);
            var randCookiesSales = randomCustomers * this.averageSales;
            // Store the results for each location in a separate array
            this.salesPerHour.push(parseInt(randCookiesSales));

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
            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesPerHour[i - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;

        }
        // Display the values of each array as unordered lists in the browser
        var listsElem = document.getElementById("pearlDistrict");

        listsElem.innerHTML = listBuilt;
    }
};

var locations = [pioneerSquare,portlandAirport,washingtonSquare,sellwood,pearlDistrict];

for (var i = 0; i < locations.length; i++) {
    locations[i].randomCustomersPerHour();
}
