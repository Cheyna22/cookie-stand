'use strict';

// object literals for each store
// create variable to store times open
// store min/max hourly customers, avg cookies per sale,
// use method of that object to generate random customers per hour
// calculate cookies purchased per hour per location (use avg cookies and random # of customers)
// Store those amounts in separate array
// Display list of these values in unordered list (through JS)
// Display lists on sales.html file

var hoursOperation = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];



// 1st and Pike
var pikeStore = {
  minCustomers : 23,
  maxCustomers : 65,
  avgCookiesPerSale : 6.3,
  pikesCustPerHour : [],
  randomCustomer : function (minCustomers, maxCustomers) {
    var custHour = Math.random() * (maxCustomers - minCustomers) + minCustomers;
    custHour = Math.floor(custHour);
    return custHour;
  },
  avgCustPerHour: function () {
    for(var h = 0; h < hoursOperation.length; h++) {
      var count = pikeStore.randomCustomer(pikeStore.minCustomers, pikeStore.maxCustomers);
      console.log(count);
      this.pikesCustPerHour.push(count);
    }
    console.log(this.pikesCustPerHour);
  }
};

pikeStore.avgCustPerHour();

// Seatac Airport
var seatacAirportStore = {
  maxCustomers: 24,
  minCustomers: 3,
  avgCookiesPerSale: 1.2,
};

// Seattle Center
var seattleCenterStore = {
  maxCustomers: 38,
  minCustomers: 11,
  avgCookiesPerSale: 3.7,
};

// Capitol Hill
var capitolHillStore = {
  maxCustomers: 38,
  minCustomers: 20,
  avgCookiesPerSale: 2.3,
};

// Alki Store
var alkiStore = {
  maxCustomers: 16,
  minCustomers: 2,
  avgCookiesPerSale: 4.6,
};
