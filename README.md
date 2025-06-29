<!-- Jumiah - AngularJS eCommerce Website -->

A shopping website that uses AngularJS, HTML, CSS and JSON

This project is a simple Jumia-style eCommerce website built with AngularJS (v1.7.9). It includes key e-commerce features like product browsing, viewing product details, managing a shopping cart, applying discounts with coupons, and a checkout form.

<!-- Features -->

 1.   Product Listing Page Functionality
 2.   Product Details View Functionality
 3.   Add to Cart , Update Cart and Remove Cart Functionality
 4.   Cart Summary and Total Calculation Functionality
 5.  A 13.2% Discount with PowerLabsX Coupon Functionality
 6.   Search and Filter Products Functionality
 7.   Checkout Form with Validation Functionality
 8.   Cart Persistence via "localStorage"
 9.   Routing with "ngRoute"

<!-- Project Structure -->

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

<!-- How to use -->
 This guide will walk you through how to browse, search, add to cart, apply a coupon, and place your order.

 First and foremost, Go to any available browser(Prefarably "Firefox") using the website address below:
 https://jumiah.vercel.app

 <!-- 1. Browsing for Products -->
Steps:
    On the homepage (you’ll see “Welcome to Jumiah”), scroll down to view available products.
    Each product has:

       1. An image
       2. A name
       3. A price
       4. A View Details button

    Tip: You can also click the "Products" link at the top to explore all items.


 <!-- 2. Searching for a Product -->
Steps:
  =>  At the top of the page, you'll see a search bar with a "Search" button.

  => Type the name of what you’re looking for (e.g., "shoes", "TV").

  => Click the Search button — products matching your search will be shown.

    Example: Searching for "phone" will show all phones in the catalog.


 <!-- 3. Viewing Product Details -->
Steps:
  =>  When you find a product you like, click the "View Details" button.

  =>  You’ll be taken to a page showing:
       1. The full-size image
       2. The product name
       3. A detailed description
       4. The price
       5. An Add to Cart button


<!-- 4. Adding Items to Your Cart -->
Steps:
  =>  On the product details page, click “Add to Cart”.
  =>  A message will pop up saying it’s been added.
  =>  You’ll see your cart count (🛒) at the top right increase.
  =>  You can add as many products as you want.


<!-- 5. Viewing and Managing Your Cart -->
Steps:
  =>  Click the Cart link in the top menu or go to the Cart page.

  =>  You will see:
       1. All products added
       2. The quantity for each
       3. The price and total cost

You can:

   a. Change the quantity of any product
   b. Remove a product using the Remove button


 <!-- 6. Using a Coupon Code (Discount!) -->
Coupon Code: powerlabsx
Steps:
  =>  On the cart page, find the "Coupon Code" section.
  => Enter powerlabsx and click Apply.
    You’ll get a 13.2% discount on your total purchase.

     If the coupon works, you’ll see a green success message.


<!-- 7. Placing Your Order (Checkout) -->
Steps:
 =>  Below your cart, find the Checkout Form.
    Enter:
      1.  Your Name
      2. Your Delivery Address

    Click “Place Order”.

 You’ll get a confirmation alert: “Thank you! Your order has been placed.”

 Your cart will be cleared and you’ll be redirected to the product page.


<!-- 8. Getting Help -->
If you're confused or need assistance:
    1. Go to the Help page using the top menu or click here.
    2. Contact our team:
       a.  Phone: 0909090909

