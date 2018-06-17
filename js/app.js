'use strict';

// VARIABLES
var hoursOperation = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
var storeLocations = []; // create empty variable to store locations
var storeTable = document.getElementById('storeTable'); // access table in DOM

//========================================================================================================================
//========================================================================================================================
// ALL THE METHODS/FUNCITONS/OBJECTS======================================================================================
function Stores(storeName, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesPerHour = [];
  this.totalCookies();
  storeLocations.push(this);
}

//total cookies for each hour
Stores.prototype.totalCookies = function() {
  for(var i = 0; i < hoursOperation.length; i++) {
    //gives random number of customers
    var randomCustomer = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
    // this.cookiesPerHour = Math.round(randomCustomer * this.avgCookiesPerSale);
    this.cookiesPerHour.push(Math.round(randomCustomer * this.avgCookiesPerSale));
  }
};

// create header for table
Stores.makeHeader = function() {
  var tHeaderEl = document.createElement('th');
  var tRowEl = document.createElement('tr');
  
  tHeaderEl.textContent = 'Location';
  tRowEl.appendChild(tHeaderEl);

  for(var i = 0; i < hoursOperation.length; i++) {
    tHeaderEl = document.createElement('th');
    tHeaderEl.textContent = hoursOperation[i];
    tRowEl.appendChild(tHeaderEl);
  }
  tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = 'Total';
  tRowEl.appendChild(tHeaderEl);

  storeTable.appendChild(tRowEl);
};

// creating table // one function that renders a row for stores data for loop for middle and singles for total plus location.
Stores.prototype.renderRow = function() {
  var trElement = document.createElement('tr'); // create 2nd row
  var tdElement = document.createElement('td'); // create data cell

  trElement.textContent = this.storeLocations; // store name goes in the first cell
  trElement.appendChild(tdElement); // append to parent


  for(var i = 0; i < hoursOperation.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPerHour;
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookies();
  trElement.appendChild(tdElement);

  storeTable.appendChild(trElement);
};

//========================================================================================================================
//========================================================================================================================
// CALLING FUNCTIONS/METHODS==============================================================================================
new Stores('1st and Pike', 23, 65, 6.3);
new Stores('SeaTac Airport', 24, 3, 1.2);
new Stores('Seattle Center', 38, 11, 3.7);
new Stores('Capitol Hill', 38, 20, 2.3);
new Stores('Alki', 16, 2, 4.6);

Stores.makeHeader();
Stores.prototype.renderRow();

