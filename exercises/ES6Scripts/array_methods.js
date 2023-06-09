"use strict";
let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

console.log("=====Exercise 1=====");
const cartItemNames = cart.map(function (cartItem) {
  return cartItem.item;
});

function displayCartItem(name) {
  console.log(name);
}
cartItemNames.forEach(displayCartItem);
console.log("=====Exercise 2=====");
console.log("====items sorted====");

cartItemNames.sort();

function displaycart(names) {
  console.log(names);
}

cartItemNames.forEach(displaycart);
