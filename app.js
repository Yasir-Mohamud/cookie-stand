'use strict';
var hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var stores = [seattle , tokyo , dubai , paris , lima ];
//  var sales_per_hour = [];

var seattle = {
  name : 'seattle',
  sales_per_hour : [],
  customer_min : 23 ,
  customer_max : 65 ,
  average_cookies : 6.3 ,
  render : function() {
    var seattleUl = document.getElementById('seattle');
    for ( var i = 0; i < hours.length ; i++){
      var seattleLi = document.createElement('li');
      seattleLi.textContent = hours[i] + ' ' + this.sales_per_hour[i] + ' cookies';
      seattleUl.appendChild(seattleLi);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total ' + total(seattle) + ' cookies';
    seattleLi.appendChild(totalLi);
  }
};
seattle.cookies_per_hour = cookie_sales_per_hour(seattle);
seattle.total_cookies = total (seattle);

seattle.render();

//tokyo object
var tokyo = {
  name : 'tokyo',
  sales_per_hour : [],
  customer_min : 3 ,
  customer_max : 24 ,
  average_cookies : 1.2 ,
  render : function() {
    var tokyoUl = document.getElementById('tokyo');
    for ( var i = 0; i < hours.length ; i++){
      var tokyoLi = document.createElement('li');
      tokyoLi.textContent = hours[i] + ' ' + this.sales_per_hour[i] + ' cookies';
      tokyoUl.appendChild(tokyoLi);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total ' + total(tokyo) + ' cookies';
    tokyoLi.appendChild(totalLi);
  }
};
tokyo.cookies_per_hour = cookie_sales_per_hour(tokyo);
tokyo.total_cookies = total (tokyo);

tokyo.render();

//dubai object
var dubai = {
  name : 'dubai',
  sales_per_hour : [],
  customer_min : 11 ,
  customer_max : 38 ,
  average_cookies : 3.7 ,
  render : function() {
    var dubaiUl = document.getElementById('dubai');
    for ( var i = 0; i < hours.length ; i++){
      var dubaiLi = document.createElement('li');
      dubaiLi.textContent = hours[i] + ' ' + this.sales_per_hour[i] + ' cookies';
      dubaiUl.appendChild(dubaiLi);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total ' + total(dubai) + ' cookies';
    dubaiLi.appendChild(totalLi);
  }
};
dubai.cookies_per_hour = cookie_sales_per_hour(dubai);
dubai.total_cookies = total (dubai);

dubai.render();

//paris object
var paris = {
  name : 'paris',
  sales_per_hour : [],
  customer_min : 20 ,
  customer_max : 38 ,
  average_cookies : 3.7 ,
  render : function() {
    var parisUl = document.getElementById('paris');
    for ( var i = 0; i < hours.length ; i++){
      var parisLi = document.createElement('li');
      parisLi.textContent = hours[i] + ' ' + this.sales_per_hour[i] + ' cookies';
      parisUl.appendChild(parisLi);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total ' + total(paris)+ ' cookies';
    parisLi.appendChild(totalLi);
  }
};
paris.cookies_per_hour = cookie_sales_per_hour(paris);
paris.total_cookies = total (paris);

paris.render();
//lima object
var lima = {
  name : 'lima',
  sales_per_hour : [],
  customer_min : 2 ,
  customer_max : 16 ,
  average_cookies : 4.6 ,
  render : function() {
    var limaUl = document.getElementById('lima');
    for ( var i = 0; i < hours.length ; i++){
      var limaLi = document.createElement('li');
      limaLi.textContent = hours[i] + ' ' + this.sales_per_hour[i] + ' cookies';
      limaUl.appendChild(limaLi);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total ' + total(lima) + ' cookies';
    limaLi.appendChild(totalLi);
  }
};
lima.cookies_per_hour = cookie_sales_per_hour(lima);
lima.total_cookies = total (lima);

lima.render();


function customer_per_hour (min , max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//number of cookies sold for every hour
function cookie_sales_per_hour (store) {
  for (var i = 0 ; i < hours.length ; i++ ) {
    var sale = customer_per_hour(store.customer_min, store.customer_max) * Math.floor(store.average_cookies) ;
    store.sales_per_hour.push(sale);

  }
  return store.sales_per_hour;
}
//the total number of cookies sold in a day
function total (store) {
  var j = 0;
  var total_cookies = 0 ;
  while( j < hours.length) {
    var currentArray = store.sales_per_hour[j];
    total_cookies = currentArray + total_cookies;
    j++;
    console.log(currentArray);
  }
  console.log(total_cookies);
  return total_cookies;

}


