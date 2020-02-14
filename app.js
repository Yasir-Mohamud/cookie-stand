'use strict';
var hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


var table = document.getElementById('sales');

var total_stores = [];

//constructor for the cookie stores
function Cookie_store (name ,customer_min , customer_max , average_cookies) {
  this.name = name ,
  this.customer_min = customer_min;
  this.customer_max = customer_max;
  this.average_cookies = average_cookies;
  this.cookie_sales_per_hour = [];
  this.cookie_sales_per_day = 0;
  total_stores.push(this);
}
//creates the numbers of cookies sold for every hour
Cookie_store.prototype.create_cookie_sales_per_hour = function () {
  for (var i = 0 ; i < hours.length ; i++) {
    var sales = customer_per_hour (this.customer_min , this.customer_max ) * Math.floor(this.average_cookies);
    this.cookie_sales_per_hour.push(sales);
  }

};
//creates the total of cookies sold in a day
Cookie_store.prototype.daily_total = function () {
  for (var i = 0; i < this.cookie_sales_per_hour.length ; i++) {
    this.cookie_sales_per_day= this.cookie_sales_per_day + this.cookie_sales_per_hour[i];
  }
};


var seattle = new Cookie_store ('Seattle',23,65,6.3);
var tokyo = new Cookie_store ('Tokyo',3,24,1.2);
var dubai = new Cookie_store ('Dubai',11,38,3.7);
var paris = new Cookie_store ('Paris',20,38,2.3);
var lima = new Cookie_store ('Lima',2,16,4.6);


// creates header
function header () {
  var row = document.createElement('tr');
  var locations = document.createElement('th');
  locations.textContent = ('Locations');
  row.appendChild(locations);
  //creates hours headers
  for ( var i = 0 ; i < hours.length ; i++) {
    var time = document.createElement('th');
    time.textContent = hours[i];
    row.appendChild(time);
  }
  var total = document.createElement('th');
  total.textContent = ('Daily Totals');
  row.appendChild(total);

  table.appendChild(row);

}
header();

// creates the sales body
function render (store) {
  var row = document.createElement('tr');
  var name = document.createElement('th');
  name.textContent = store.name;
  row.appendChild(name);
  // creates row for the cookie sales
  for ( var i = 0; i < hours.length ; i++) {
    var sale = document.createElement('th');
    sale.textContent = store.cookie_sales_per_hour[i];
    row.appendChild(sale);
    console.log(sale);
  }
  //creates the total
  var total = document.createElement('th');
  total.textContent = store.cookie_sales_per_day;
  row.appendChild(total);

  table.appendChild(row);
}

//generates random customer
function customer_per_hour (min , max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (var i = 0; i < total_stores.length; i++) {
  total_stores[i].create_cookie_sales_per_hour();
  total_stores[i].daily_total();
  render(total_stores[i]);

}

function works (event) {
  event.preventDefault();
  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.average.value);
  console.log('it works');
  var newstore = new Cookie_store(name,min,max,avg);

  console.log(newstore.cookie_sales_per_hour);
  newstore.create_cookie_sales_per_hour();
  newstore.daily_total();

  render(newstore);
  form.reset();
}

var form = document.getElementById('form');
form.addEventListener('submit', works);

var tm = [];

function footer () {
  /// creates the total name
  var row = document.createElement('tr');
  var final = document.createElement('th');
  final.textContent = ('TOTAL');
  row.appendChild(final);

  // //creates the total sale of cookies for every hour
  for (var j = 0; j < hours.length ; j++){
    var sum = 0;
    for (var i = 0; i < total_stores.length; i++) {
      sum = sum + total_stores[i].cookie_sales_per_hour[j];

    }
  
    var total = document.createElement('th');
    total.textContent = sum;
    row.appendChild(total);
  }
  ///creates the daily totals.
  var add = 0;
  for (var i = 0; i < total_stores.length; i++) {
    add = add+ total_stores[i].cookie_sales_per_day;
  }
  var all = document.createElement('th');
  all.textContent = add;
  row.appendChild(all);

  table.appendChild(row);

}
footer();

console.log(arr);