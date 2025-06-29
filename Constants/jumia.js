var app = angular.module("JApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/products', {
        templateUrl: 'Components/products.html',
        controller: 'JCtrl'
    })
    .when('/product/:id', {
        templateUrl: 'Components/product-details.html',
        controller: 'ProductDetailsCtrl'
    })
    .when('/cart', {
        templateUrl: 'Components/cart.html',
        controller: 'CartCtrl'
    })
    .when('/home', {
        templateUrl: 'Components/products.html',
        controller: 'JCtrl'
    })
    .when('/help', {
        templateUrl: 'Components/help.html'
    })
    .otherwise({
        redirectTo: '/products'
    });
});

app.factory('CartService', function () {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return {
        add: function (product) {
            var existing = cart.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                product.quantity = 1;
                cart.push(product);
            }
            saveCart();
        },
        get: function () {
            return cart;
        },
        updateQuantity: function (product, quantity) {
            var item = cart.find(p => p.id === product.id);
            if (item) {
                item.quantity = quantity;
                saveCart();
            }
        },
        remove: function (product) {
            var index = cart.findIndex(p => p.id === product.id);
            if (index > -1) {
                cart.splice(index, 1);
                saveCart();
            }
        },
        getTotal: function () {
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        getCount: function () {
            return cart.reduce((count, item) => count + item.quantity, 0);
        },

        clear: function () {
            cart = [];
            saveCart();
        }
    };
});

app.controller('CartHeaderCtrl', function ($scope, CartService) {
    $scope.cartCount = CartService.getCount();
    
    $scope.$watch(function () {
        return CartService.getCount();
    }, function (newVal) {
        $scope.cartCount = newVal;
    });
});


app.controller('JCtrl', function ($scope, $http, $location) {
    $scope.message = "Welcome to Jumia";
    $scope.products = [];
    $scope.Search = "";
    $scope.searchText = "";

    $scope.applySearch = function () {
       
    };


    $http.get("JSON/jumia.json").then(
        function(response) {
            console.log("Data loaded:", response.data);
            $scope.products = response.data; 
            $scope.searchText = $scope.tempSearch;
        }, 
        function(error) {
            console.error("Error loading products:", error);
            $scope.products = [
                { 
                    id: 1,
                    name: "Demo Product", 
                    description: "Fallback item", 
                    price: 100,
                    image: "https://via.placeholder.com/150" 
                }
            ];
        }
    );

    $scope.viewDetails = function(product) {
        $location.path('/product/' + product.id);
    };
});


app.controller('ProductDetailsCtrl', function ($scope, $routeParams, $http, CartService) {
    var productId = parseInt($routeParams.id);
    
    $http.get("JSON/jumia.json").then(function(response) {
        var allProducts = response.data;
        $scope.product = allProducts.find(p => p.id === productId);
    }, function() {
        $scope.product = {
            name: "Not Found",
            description: "This product does not exist.",
            price: 0,
            image: "https://via.placeholder.com/150"
        };
    });

    $scope.addToCart = function(product) {
        CartService.add(product);
        alert(product.name + ' added to cart!');
    };
 });
app.controller('CartCtrl', function ($scope, CartService, $location) {
    $scope.cart = CartService.get();
    $scope.couponCode = "powerlabsx";
    $scope.discount = 0;
    $scope.invalidCoupon = false;

    $scope.cart.forEach(item => item.updatedQty = item.quantity);

    $scope.updateCart = function () {
        $scope.cart.forEach(item => {
            if (item.updatedQty < 1 || isNaN(item.updatedQty)) {
                item.updatedQty = 1;
            }
            CartService.updateQuantity(item, parseInt(item.updatedQty));
        });
        alert("Cart updated!");
    };

    $scope.removeItem = function (item) {
        CartService.remove(item);
    };

    $scope.getTotalBeforeDiscount = function () {
        return CartService.getTotal();
    };

    $scope.getTotal = function () {
        return $scope.getTotalBeforeDiscount() - $scope.discount;
    };

    $scope.applyCoupon = function () {
        if ($scope.couponCode.toLowerCase() === "powerlabsx") {
            const total = $scope.getTotalBeforeDiscount();
            $scope.discount = total * 0.132;
            $scope.invalidCoupon = false;
        } else {
            $scope.discount = 0;
            $scope.invalidCoupon = true;
        }
    };

    $scope.checkout = function () {
        CartService.clear();
        alert("Thank you! Your order has been placed.");
        $location.path('/products');
    };
});
