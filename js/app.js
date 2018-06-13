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

  // generating random number of customers
  randomCustomer : function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },

  // generating average customers per hour with rounded # and multiplying it by cookies
  avgPerHour: function () {
    return Math.round(this.randomCustomer() * this.avgCookiesPerSale);

  },

  // making list
  makeList: function() {
    var pikeStoreEl = document.getElementById('pikeStore');
    var allStoreTotal = 0;

    // use for loop
    for(var i = 0; i < hoursOperation.length; i++) {
    // create list elements
      var pikeHourEl = document.createElement('li');
      // give them content
      var pikesCookies = this.avgPerHour();
      pikeHourEl.textContent = hoursOperation[i] + ': ' + pikesCookies + ' cookies';
      allStoreTotal += pikesCookies;

      //append to DOM (parentElement.appendChild(childElement);)
      pikeStoreEl.appendChild(pikeHourEl);
    }
    // create element for all store total
    var totalCookiesEl = document.createElement('li');
    pikeStoreEl.appendChild(totalCookiesEl),
    totalCookiesEl.textContent = 'Total: ' + allStoreTotal;
  },
};

// Seatac Airport
var seatacAirportStore = {
  maxCustomers : 24,
  minCustomers : 3,
  avgCookiesPerCust : 1.2,

  // generates random # of customers
  randomCustomer : function () {
  // have min max customers
  // generate random # (MDN!!!)
  // return Math.random() * (max - min) + min;
    return Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  // round the avg per hour and multiplys it by coookies per sale/customer
  averagePerHour :  function() {
    return Math.round(this.randomCustomer() * this.avgCookiesPerCust);
  },



  makeList : function () {
    var ulEl = document.getElementById('seatacAirportStore');
    var runningTotal = 0;

    // use for loop
    for(var i = 0; i < hoursOperation.length; i++) {
      // create list elements
      var liEl = document.createElement('li');

      // give them content
      var liRandomNum = this.averagePerHour();
      liEl.textContent = hoursOperation[i] + ': ' + liRandomNum + ' cookies';
      console.log(liEl);
      runningTotal += liRandomNum;

      // append to the DOM
      // parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = 'Total ' + runningTotal;
  },
};

seatacAirportStore.averagePerHour();

// Seattle Center
var seattleCenterStore = {
  maxCustomers: 38,
  minCustomers: 11,
  avgCookiesPerSale: 3.7,

  // generates random # of customers
  randomCustomer: function() {
    return Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },

  // round the avg per hour and multiply it by cookies
  averagePerHour: function() {
    return Math.round(this.randomCustomer() * this.avgCookiesPerSale);
  },



  makeList: function () {
    var seattleUlEl = document.getElementById('seattleCenterStore');
    var storeTotal = 0;

    // for every hour display # cookies sold (For Loop)
    for(var i = 0; i < hoursOperation.length; i++) {
      // create list elements
      var seattleHourEl = document.createElement('li');
      // give them content
      var seattleCookies = this.averagePerHour();
      seattleHourEl.textContent = hoursOperation[i] + ': ' + seattleCookies + ' cookies.';
      storeTotal += seattleCookies;
      seattleUlEl.appendChild(seattleHourEl);
    }
    var totalCookiesUlEl = document.createElement('li');
    seattleUlEl.appendChild(totalCookiesUlEl),
    totalCookiesUlEl.textContent ='Total: ' + storeTotal;
  },
};

// Capitol Hill
var capitolHillStore = {
  maxCustomers: 38,
  minCustomers: 20,
  avgCookiesPerSale: 2.3,

  // generate random # of customer with function and return it rounded
  randomCustomer: function() {
    return Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  // round random customer and multiply by average cookies per customer/sale
  averagePerHour: function() {
    return Math.round(this.randomCustomer() * this.avgCookiesPerSale);
  },

  // make list for HTML
  makeList: function() {
    var capitolHillUlEl = document.getElementById('alkiStore');
    var capitolHillTotal = 0;

    // use for loop
    for(var i = 0; i < hoursOperation.length; i++) {
    // create list elements
      var capitolHillLiEl = document.createElement('li');
      // give it content
      var capitolHillCookies = this.averagePerHour();
      capitolHillLiEl.textContent = hoursOperation[i] + ': ' + capitolHillCookies + ' cookies';
      capitolHillTotal += capitolHillCookies; 
      // append to the DOM -> parentElement.appendChild(childElement);
      capitolHillUlEl.appendChild(capitolHillLiEl);
    }

    var totalCookiesEl = document.createElement('li');
    totalCookiesEl.textContent = 'Total: '+ alkiTotal;
    capitolHillUlEl.appendChild(totalCookiesEl);
  },
};

// Alki Store
var alkiStore = {
  maxCustomers: 16,
  minCustomers: 2,
  avgCookiesPerSale: 4.6,

  // generate random # of customer with function and return it rounded
  randomCustomer: function() {
    return Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  // round random customer and multiply by average cookies per customer/sale
  averagePerHour: function() {
    return Math.round(this.randomCustomer() * this.avgCookiesPerSale);
  },

  // make list for HTML
  makeList: function() {
    var alkiUlEl = document.getElementById('capitolHillStore');
    var alkiTotal = 0;

    // use for loop
    for(var i = 0; i < hoursOperation.length; i++) {
    // create list elements
      var alkiLiEl = document.createElement('li');
      // give it content
      var alkiCookies = this.averagePerHour();
      alkiLiEl.textContent = hoursOperation[i] + ': ' + alkiCookies + ' cookies';
      alkiTotal += alkiCookies; 
      // append to the DOM -> parentElement.appendChild(childElement);
      alkiUlEl.appendChild(alkiLiEl);
    }

    var totalCookiesEl = document.createElement('li');
    alkiUlEl.appendChild(totalCookiesEl);
    totalCookiesEl.textContent = 'Total: '+ alkiTotal;
  },
};

// Call the functions
pikeStore.makeList();
seatacAirportStore.makeList();
seattleCenterStore.makeList();
alkiStore.makeList();
capitolHillStore.makeList();

// Method: a function is a property of an object and must be invoked using do notation, such as firstAndPike.randomCustPerHour()

// This is how to define a function that is NOT a method - function randomCustPerHour() {}

