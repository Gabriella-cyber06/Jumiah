Jumiah - AngularJS eCommerce Website

A shopping website that uses AngularJS, HTML, CSS and JSON

This project is a simple Jumia-style eCommerce website built with AngularJS (v1.7.9). It includes key e-commerce features like product browsing, viewing product details, managing a shopping cart, applying discounts with coupons, and a checkout form.

Features

 1.   Product Listing Page Functionality
 2.   Product Details View Functionality
 3.   Add to Cart , Update Cart and Remove Cart Functionality
 4.   Cart Summary and Total Calculation Functionality
 5.  A 13.2% Discount with PowerLabsX Coupon Functionality
 6.   Search and Filter Products Functionality
 7.   Checkout Form with Validation Functionality
 8.   Cart Persistence via "localStorage"
 9.   Routing with "ngRoute"

Project Structure

jumiah/ 
│ ├── index.html # Main entry point 
├── products.html # Product listing template 
├── product-details.html # Single product detail template 
├── Views/ 
│ └── cart.html # Shopping cart page 
| └── help.html # Help page 
| └── home.html # Returns user back product.html 
├── Scripts/ 
│ └── jumia.js # AngularJS app, controllers, factories, services and routes 
├── Styles/ 
│ └── jumia.css # CSS for styling 
├── JSON/ 
│ └── jumia.json # Product data in JSON format 
└── README.md # This file