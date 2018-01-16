//  Flatiron bootcamp prep
//  shopping cart lab

//  Ryan Roat
//  Jan 15 2018

var cart = [];

function rando(max) {
  return (Math.floor(Math.random() * Math.floor(max))+1);   // returns a 'random' number btwn 1 and max inclusive
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  let price = rando(100);
  cart.push({[item]: price});
  console.log (`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
