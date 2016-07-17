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
        // var total = 0;
        // for (var j = 0; j < this.salesPerHour.length; j++) {
        //     total += this.salesPerHour[j];
        // }
        // console.log("Sales day total: " + total);
        // listBuilt += '<tr>';
        // listBuilt += '<td>';
        // listBuilt += 'Day Total: ';
        // listBuilt += '</td>';
        // listBuilt += '<td>';
        // listBuilt += total;
        // listBuilt += '</td>';
        // listBuilt += '</tr>';
        // // Display the values of each array as unordered lists in the browser
        // var listsElem = document.getElementById("pioneerSquare");
        //
        // listsElem.innerHTML = listBuilt;
    }
};

pioneerSquare.randomCustomersPerHour();
