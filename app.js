'use strict';
var hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//  var sales_per_hour = [];

var seattle = {
  sales_per_hour : [],
  customer_min : 23 ,
  customer_max : 65 ,
  average_cookies : 6.3 ,
  customer_per_hour (min , max ) {

    min = Math.ceil(this.customer_min);
    max = Math.floor(this.customer_max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } ,

  cookie_sales_per_hour () {
    for (var i = 0 ; i < hours.length ; i++ ) {
      var sale = this.customer_per_hour() * Math.floor(this.average_cookies) ;
      this.sales_per_hour.push(sale);

    }
    return this.sales_per_hour;
  } ,

  total () {
    var j = 0;
    var product = 1;
    while(j < this.sales_per_hour.length){
      var currentArray = this.sales_per_hour[j];
      product = currentArray + product;
      j++;
    }
    return product;
  } ,

  final () {
    var all = [];
    for ( var i = 0 ; i < hours.length ; i ++ ) {
      var str = ' ' + hours[i] + ' ' + this.sales_per_hour[i] ;
      all.push(str);
    }
    all.push(' Total ' + this.total());
    return all;
  }
};
console.log(seattle.customer_per_hour());
console.log(seattle.cookie_sales_per_hour());
console.log(seattle.total());
console.log(seattle.sales_per_hour);
console.log(seattle.final());
//tokyo object
var tokyo = {
  sales_per_hour : [],
  customer_min : 3 ,
  customer_max : 24 ,
  average_cookies : 1.2 ,
  customer_per_hour (min , max ) {

    min = Math.ceil(this.customer_min);
    max = Math.floor(this.customer_max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } ,

  cookie_sales_per_hour () {
    for (var i = 0 ; i < hours.length ; i++ ) {
      var sale = this.customer_per_hour() * Math.floor(this.average_cookies) ;
      this.sales_per_hour.push(sale);

    }
    return this.sales_per_hour;
  } ,

  total () {
    var j = 0;
    var product = 1;
    while(j < this.sales_per_hour.length){
      var currentArray = this.sales_per_hour[j];
      product = currentArray + product;
      j++;
    }
    return product;
  },


  final () {
    var all = [];
    for ( var i = 0 ; i < hours.length ; i ++ ) {
      var str = ' ' + hours[i] + ' ' + this.sales_per_hour[i];
      all.push(str);
    }
    all.push(' Total ' + this.total());
    return all;
  }
};
console.log(tokyo.customer_per_hour());
console.log(tokyo.cookie_sales_per_hour());
console.log(tokyo.total());
console.log(tokyo.sales_per_hour);

//dubai object
var dubai = {
  sales_per_hour : [],
  customer_min : 11 ,
  customer_max : 38 ,
  average_cookies : 3.7 ,
  customer_per_hour (min , max ) {

    min = Math.ceil(this.customer_min);
    max = Math.floor(this.customer_max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } ,

  cookie_sales_per_hour () {
    for (var i = 0 ; i < hours.length ; i++ ) {
      var sale = this.customer_per_hour() * Math.floor(this.average_cookies) ;
      this.sales_per_hour.push(sale);

    }
    return this.sales_per_hour;
  } ,

  total () {
    var j = 0;
    var product = 1;
    while(j < this.sales_per_hour.length){
      var currentArray = this.sales_per_hour[j];
      product = currentArray + product;
      j++;
    }
    return product;
  } ,


  final () {
    var all = [];
    for ( var i = 0 ; i < hours.length ; i ++ ) {
      var str = ' ' + hours[i] + ' ' + this.sales_per_hour[i];
      all.push(str);
    }
    all.push(' Total ' + this.total());
    return all;
  }
};
console.log(dubai.customer_per_hour());
console.log(dubai.cookie_sales_per_hour());
console.log(dubai.total());
console.log(dubai.sales_per_hour);

//paris object
var paris = {
  sales_per_hour : [],
  customer_min : 20 ,
  customer_max : 38 ,
  average_cookies : 3.7 ,
  customer_per_hour (min , max ) {

    min = Math.ceil(this.customer_min);
    max = Math.floor(this.customer_max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } ,

  cookie_sales_per_hour () {
    for (var i = 0 ; i < hours.length ; i++ ) {
      var sale = this.customer_per_hour() * Math.floor(this.average_cookies) ;
      this.sales_per_hour.push(sale);

    }
    return this.sales_per_hour;
  } ,

  total () {
    var j = 0;
    var product = 1;
    while(j < this.sales_per_hour.length){
      var currentArray = this.sales_per_hour[j];
      product = currentArray + product;
      j++;
    }
    return product;
  } ,


  final () {
    var all = [];
    for ( var i = 0 ; i < hours.length ; i ++ ) {
      var str = ' ' + hours[i] + ' ' + this.sales_per_hour[i];
      all.push(str);
    }
    all.push(' Total ' + this.total());
    return all;
  }
};
console.log(paris.customer_per_hour());
console.log(paris.cookie_sales_per_hour());
console.log(paris.total());
console.log(paris.sales_per_hour);

//lima object
var lima = {
  sales_per_hour : [],
  customer_min : 2 ,
  customer_max : 16 ,
  average_cookies : 4.6 ,
  customer_per_hour (min , max ) {

    min = Math.ceil(this.customer_min);
    max = Math.floor(this.customer_max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } ,

  cookie_sales_per_hour () {
    for (var i = 0 ; i < hours.length ; i++ ) {
      var sale = this.customer_per_hour() * Math.floor(this.average_cookies) ;
      this.sales_per_hour.push(sale);

    }
    return this.sales_per_hour;
  } ,

  total () {
    var j = 0;
    var product = 1;
    while(j < this.sales_per_hour.length){
      var currentArray = this.sales_per_hour[j];
      product = currentArray + product;
      j++;
    }
    return product;
  } ,


  final () {
    var all = [];
    for ( var i = 0 ; i < hours.length ; i ++ ) {
      var str = ' ' + hours[i] + ' ' + this.sales_per_hour[i];
      all.push(str);
    }
    all.push(' Total ' + this.total());
    return all;
  }

};
console.log('customer per hr', lima.customer_per_hour());
console.log(lima.cookie_sales_per_hour());
console.log(lima.total());
console.log(lima.sales_per_hour);


//SEATTLE
var seattleUl = document.getElementById('seattle');

for ( var i = 0; i < seattle.final().length ; i++){
  var seattleLi = document.createElement('li');
  seattleLi.textContent = seattle.final()[i];
  seattleUl.appendChild(seattleLi);
}



//TOKYO
var tokyoUl = document.getElementById('tokyo');

for ( var i = 0; i < seattle.final().length ; i++){
  var tokyoLi = document.createElement('li');
  tokyoLi.textContent = tokyo.final()[i];
  tokyoUl.appendChild(tokyoLi);
}


//DUBAI
var dubaiUl = document.getElementById('dubai');

for ( var i = 0; i < seattle.final().length ; i++){
  var dubaiLi = document.createElement('li');
  dubaiLi.textContent = dubai.final()[i];
  dubaiUl.appendChild(dubaiLi);
}

//PARIS
var parisUl = document.getElementById('paris');

for ( var i = 0; i < seattle.final().length ; i++){
  var parisLi = document.createElement('li');
  parisLi.textContent = paris.final()[i];
  parisUl.appendChild(parisLi);
}


//LIMA 
var limaUl = document.getElementById('lima');

for ( var i = 0; i < seattle.final().length ; i++){
  var limaLi = document.createElement('li');
  limaLi.textContent = lima.final()[i];
  limaUl.appendChild(limaLi);
}

