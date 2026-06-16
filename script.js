/* ==========================================================================
   1. GLOBAL RESTAURANTS DATABASE
   ========================================================================== */
const restaurants = [
  {
    id: "mcdonalds",
    name: "McDonald's",
    category: "burger",
    image: "images/mcd-logo.jpg", 
    offer: "40% OFF",
    rating: "4.5",
    time: "25 mins",
    cuisine: "Burger • Fast Food",
    price: "₹250 for one"
  },
  {
    id: "burgerking",
    name: "Burger King",
    category: "burger",
    image: "images/burger-king.jpg",
    offer: "BUY 1 GET 1",
    rating: "4.4",
    time: "28 mins",
    cuisine: "Burger • Fries",
    price: "₹220 for one"
  },
  {
    id: "pizzahut",
    name: "Pizza Hut",
    category: "pizza",
    image: "images/Pizza-Hut-Logo.jpg",
    offer: "50% OFF",
    rating: "4.7",
    time: "30 mins",
    cuisine: "Pizza • Italian",
    price: "₹350 for one"
  },
  {
    id: "dominos",
    name: "Dominos",
    category: "pizza",
    image: "images/dominos-logo.png",
    offer: "30% OFF",
    rating: "4.5",
    time: "22 mins",
    cuisine: "Pizza • Cheese Burst",
    price: "₹320 for one"
  },
  {
    id: "sagarratna",
    name: "Sagar Ratna",
    category: "south",
    image: "image/sagarratna_card.jpg",
    offer: "PURE VEG",
    rating: "4.6",
    time: "20 mins",
    cuisine: "South Indian",
    price: "₹200 for one"
  },
  {
    id: "punjabidhaba",
    name: "Punjabi Dhaba",
    category: "north",
    image: "image/punjabidhaba_card.jpg",
    offer: "BUY 1 GET 1",
    rating: "4.4",
    time: "35 mins",
    cuisine: "North Indian",
    price: "₹280 for one"
  }
];

/* ==========================================================================
   2. EXPANDED RESTAURANT MENUS DATA (WITH LOCAL STORAGE IMAGE PLACEHOLDERS)
   ========================================================================== */
const restaurantMenus = {
  mcdonalds: {
    name: "McDonald's",
    banner: "images/mcdbanner.png",
    details: "⭐ 4.5 • 25 mins • Fast Food",
    categories: {
      "🔥 Value Meals & Combos": [
        { name: "[Meal] Big Mac Box for Two", image: "images/bigmacmeal.jpg", price: 549, desc: "NON-VEG | 2 Big Macs, 1 Large Fries, 2 Cold Drinks. Perfect for sharing." },
        { name: "[Meal] McChicken Share Pack", image: "images/mcchickenpack.jpg", price: 479, desc: "NON-VEG | 2 McChicken Burgers, 1 Medium Fries, 2 Regular Drinks." }
      ],
      "🍔 Gourmet Burgers": [
        { name: "Big Mac", image: "images/bigmac.png", price: 249, desc: "NON-VEG | Iconic double patty burger with legendary special sauce, pickles, and lettuce." },
        { name: "McChicken", image: "images/mcchicken.png", price: 159, desc: "NON-VEG | Crispy chicken patty topped with shredded lettuce and creamy mayonnaise." },
        { name: "Spicy McChicken", image: "images/McCrispyChicken.png", price: 179, desc: "NON-VEG | Tender chicken patty with a spicy kick, layered with fresh lettuce." },
        { name: "Mc Spicy Paneer", image: "images/Mcpaneer-burger.png", price: 199, desc: "NON-VEG | Fiery habanero hot sauce slathered over a crispy golden chicken patty." },
        { name: "McAloo Tikki", image: "images/mcaloo.png", price: 99, desc: "VEG | Sweet potato and pea patty with special spice mix, tomato, and sweet tomato mayo." }
      ],
      "🍟 Sides & Fries": [
        { name: "Classic French Fries (Small)", image: "images/MediumFries.png", price: 49, desc: "VEG | World-famous golden, crispy, perfectly salted potato fries." },
        { name: "Classic French Fries (Medium)", image: "images/MediumFries.png", price: 99, desc: "VEG | Standard shareable size of our signature golden fries." },
        { name: "Classic French Fries (Large)", image: "images/MediumFries.png", price: 199, desc: "VEG | Maximum size crispy golden potato standard fries." },
        { name: "Loaded Cheese Poutine", image: "images/mcdpoutine.png", price: 399, desc: "VEG | Thick-cut fries drenched in piping hot rich gravy and melting cheese curds." }
      ],
      "🥤 Beverages & Desserts": [
        { name: "Coca Cola (Regular)", image: "images/MediumCokeMCD.png", price: 49, desc: "VEG | Ice-cold refreshing carbonated classic cola." },
        { name: "Iced French Vanilla Coffee", image: "images/MediumIcedFrenchVanillaLatte.png", price: 99, desc: "VEG | Iced latte with vanilla shots" },
        { name: "Chocolate McFlurry", image: "images/OreoMintMcFlurry.png", price: 149, desc: "VEG | Creamy vanilla soft serve swirled with crunchy chocolate cookie bits." }
      ]
    }
  },
  burgerking: {
    name: "Burger King",
    banner: "images/home-bk-wall.jpg",
    details: "⭐ 4.4 • 28 mins • Burger • Fries",
    categories: {
      "👑 Ultimate Whopper Meals": [
        { name: "[Meal] Double Chicken Whopper Combo", image: "images/Combo-Burger-King-PNG-File.png", price: 499, desc: "NON-VEG | Flame-grilled chicken patties Whopper with large fries and a beverage." },
        { name: "[Family Pack] King's Feast for 4", image: "images/familypackBK.png", price: 1999, desc: "NON-VEG | 4 Chicken Whoppers, 2 Large Fries, 4 Soft Drinks, 5 pc chicken nuggets." }
      ],
      "🍔 Flame-Grilled Burgers": [
        { name: "Chicken Whopper", image: "images/chickenBurgerKing.png", price: 199, desc: "NON-VEG | Flame-grilled juicy chicken patty topped with classic mayo, lettuce, and pickles." },
        { name: "Veg Whopper", image: "images/vegBurgerKing.png", price: 169, desc: "VEG | Savory flame-grilled 100% plant-based signature patty packed with veggies." },
        { name: "Fiery Chicken King Burger", image: "images/spicychickenburgerKing.png", price: 219, desc: "NON-VEG | Spicy breaded breast fillet topped with hot ghost-pepper mayo infusion." }
      ],
      "🍟 King Sides": [
        { name: "BK French Fries (Medium)", image: "images/burgerkingFries.png", price: 125, desc: "VEG | Perfectly cut crisp golden potatoes with an exterior crunch layer." },
        { name: "Cheesy Fries with Jalapenos", image: "images/MozzarellaFriesBK.png", price: 189, desc: "VEG | Golden fries blanketed in liquid cheddar and spicy sliced jalapeno rounds." }
      ]
    }
  },
  pizzahut: {
    name: "Pizza Hut",
    banner: "images/Pizza-hut-Banner.jpg",
    details: "⭐ 4.7 • 30 mins • Pizza",
    categories: {
      "🔥 Box Meals & Combos": [
        { name: "[Meal] Hut Triple Treat Box", image: "images/Pizza-Hut-Banjara.png", price: 699, desc: "VEG | 2 Medium Pizzas, 1 Garlic Bread Stix, 1 Stuffed Pocket, and Dipping Sauces." },
        { name: "[Family Pack] Non-Veg Mega Feast", image: "images/b1g3_pizzahut.jpg", price: 1199, desc: "NON-VEG | 2 Large Non-Veg Signature Pan Pizzas, 2 Garlic Breads, 1 Potato Wedges, 1 Bottle Cola." }
      ],
      "🍕 Pan Pizzas": [
        { name: "Meat Lovers Pizza", image: "images/Meat-Lovers.jpg", price: 499, desc: "NON-VEG | Packed with pepperoni, sliced ham, Italian sausage, and seasoned beef cubes." },
        { name: "Classic Pepperoni", image: "images/Stuffed-Crust.jpg", price: 449, desc: "NON-VEG | Decadent double layers of classic cured beef pepperoni and premium mozzarella." },
        { name: "Veggie Lovers Pizza", image: "images/Veggie-Lovers.jpg", price: 299, desc: "VEG | Authentic base with rich marinara tomato reduction and double mozzarella layers and veg toppings." },
        { name: "Ultimate Cheese Lovers Pizza", image: "images/Pizza_Hut_UCC_Pepperoni.jpg", price: 429, desc: "VEG | Creamy Alfredo base loaded with mozzarella, parmesan, cheddar, and gouda cheese blocks." }
      ],
      "🥖 Appetizers & Sides": [
        { name: "Signature Garlic Bread (4 Pcs)", image: "images/pizzahutGarlicBread.png", price: 149, desc: "VEG | Freshly baked artisan bread loaf sections painted with garlic herbed butter." }
      ]
    }
  },
  dominos: {
    name: "Dominos",
    banner: "image/dominos_banner.jpg",
    details: "⭐ 4.5 • 22 mins • Pizza • Cheese Burst",
    categories: {
      "🔥 Combo Deals": [
        { name: "[Meal] Everyday Value 2-Pizza Combo", image: "image/dominos_combo.jpg", price: 499, desc: "VEG | Get 2 Medium Hand-Tossed Pizzas from the classic veg category tier." }
      ],
      "🍕 Cheese Burst Specials": [
        { name: "Farmhouse Cheese Burst Pizza", image: "image/farmhouse.jpg", price: 459, desc: "VEG | Capsicum, sweet corn, fresh tomatoes, and mushrooms on a liquid cheese-filled crust." },
        { name: "Spicy Chicken Dominator Burst", image: "image/chicken_dominator.jpg", price: 579, desc: "NON-VEG | Peri-peri chicken chunks, chicken tikka, and chicken meatballs over a liquid-core base." }
      ],
      "🍞 Sides": [
        { name: "Stuffed Garlic Breadsticks", image: "image/dominos_garlic_bread.jpg", price: 179, desc: "VEG | Stuffed with creamy mozzarella cheese melts, sweet corn kernels, and chopped jalapenos." }
      ]
    }
  },
  sagarratna: {
    name: "Sagar Ratna",
    banner: "image/sagarratna_banner.jpg",
    details: "⭐ 4.6 • 20 mins • South Indian",
    categories: {
      "☀️ Breakfast Platter Combos": [
        { name: "[Meal] Royal South Indian Feast Platter", image: "image/south_platter.jpg", price: 299, desc: "VEG | 1 Mini Dosa, 1 Idli, 1 Vada, Mini Uttapam, Kesari Halwa, Sambar, and 3 Chutneys." }
      ],
      "🥞 Crispy Dosas": [
        { name: "Masala Dosa", image: "image/masala_dosa.jpg", price: 150, desc: "VEG | Fermented rice-lentil crepe wrapped around savory spiced mustard-tempered potato mash." },
        { name: "Mysore Masala Dosa", image: "image/mysore_dosa.jpg", price: 175, desc: "VEG | Spiked with fiery garlic-red chili chutney spread over the internal crepe walls." },
        { name: "Rava Onion Dosa", image: "image/rava_dosa.jpg", price: 165, desc: "VEG | Lacy, crispy semolina-flour crepe studded with minced raw onions and green chilies." }
      ],
      "🍲 Steamed Idlis & Vadas": [
        { name: "Steamed Rice Idli (2 Pcs)", image: "image/idli.jpg", price: 90, desc: "VEG | Pillow-soft fluffy steamed savory white rice and de-husked black lentil cakes." },
        { name: "Medu Vada (2 Pcs)", image: "image/vada.jpg", price: 110, desc: "VEG | Deep-fried savory doughnut shapes crafted from spiced urad dal batter mix." }
      ],
      "☕ Beverages": [
        { name: "Authentic Filter Coffee", image: "image/filter_coffee.jpg", price: 75, desc: "VEG | Traditional frothed dark chicory coffee brew stretched with hot milk." }
      ]
    }
  },
  punjabidhaba: {
    name: "Punjabi Dhaba",
    banner: "image/punjabidhaba_banner.jpg",
    details: "⭐ 4.4 • 35 mins • North Indian",
    categories: {
      "🔥 Highway Special Combos": [
        { name: "[Meal] Executive Veg Thali Platter", image: "image/veg_thali.jpg", price: 320, desc: "VEG | Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Rotis, Sweet Raita." },
        { name: "[Family Pack] Royal Dhaba Feast for 4", image: "image/dhaba_feast.jpg", price: 1249, desc: "NON-VEG | 1 Kadhai Chicken Full, 1 Paneer Tikka, 2 Dal Makhani, 8 Butter Naans, 2 Dum Rice boxes." }
      ],
      "🍲 Main Course Curries": [
        { name: "Paneer Butter Masala", image: "image/paneer_butter.jpg", price: 250, desc: "VEG | Soft cottage cheese blocks swimming in rich, sweet, buttery tomato-cashew satin gravy." },
        { name: "Dhaba Style Dal Makhani", image: "image/dal_makhani.jpg", price: 210, desc: "VEG | Overnight slow-cooked black lentils enriched with heavy dairy cream and churning butter." },
        { name: "Kadhai Chicken (Dhaba Special)", image: "image/kadhai_chicken.jpg", price: 380, desc: "NON-VEG | Tender chicken cuts cooked with freshly pounded spice blends, bell peppers, and raw onions." }
      ],
      "🫓 Clay-Oven Tandoori Breads": [
        { name: "Butter Naan", image: "image/butter_naan.jpg", price: 55, desc: "VEG | Leavened flatbread slapped inside a charcoal tandoor oven, glistened with Amul butter chunks." },
        { name: "Tandoori Roti", image: "image/tandoori_roti.jpg", price: 30, desc: "VEG | Crispy multi-grain or whole wheat unleavened flatbread rounds cooked over clay walls." }
      ],
      "🍶 Refreshments": [
        { name: "Patiala Punjabi Lassi (Sweet)", image: "image/lassi.jpg", price: 90, desc: "VEG | Giant clay-tumbler serving of sweet thick yogurt emulsion capped with a layer of heavy malai cream." }
      ]
    }
  }
};

/* ==========================================================================
   3. THEME TOGGLE FUNCTIONALITY (DARK & LIGHT MODE)
   ========================================================================== */
function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById("themeBtn");
  
  body.classList.toggle("light-theme");
  
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
    if (themeBtn) themeBtn.innerText = "🌙 Dark Mode";
  } else {
    localStorage.setItem("theme", "dark");
    if (themeBtn) themeBtn.innerText = "☀️ Light Mode";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeBtn = document.getElementById("themeBtn");
  
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    if (themeBtn) themeBtn.innerText = "🌙 Dark Mode";
  } else {
    body.classList.remove("light-theme");
    if (themeBtn) themeBtn.innerText = "☀️ Light Mode";
  }
});

/* ==========================================================================
   4. RESTAURANT CARD RENDERING ENGINE
   ========================================================================== */
function createRestaurantCard(r) {
  return `
    <a href="restaurant-menu.html?restaurant=${r.id}" class="restaurant-card">
      <div class="restaurant-image">
        <img src="${r.image}">
        <div class="offer-tag">${r.offer}</div>
      </div>
      <div class="restaurant-info">
        <h2>${r.name}</h2>
        <p>⭐ ${r.rating} • ${r.time}</p>
        <p>${r.cuisine}</p>
        <p>${r.price}</p>
      </div>
    </a>
  `;
}

const recommendedGrid = document.getElementById("recommendedGrid");
const otherGrid = document.getElementById("otherGrid");

if (recommendedGrid && otherGrid) {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  const recommended = restaurants.filter(r => r.category === filter);
  const others = restaurants.filter(r => r.category !== filter);

  recommended.forEach(r => {
    recommendedGrid.innerHTML += createRestaurantCard(r);
  });

  others.forEach(r => {
    otherGrid.innerHTML += createRestaurantCard(r);
  });
}

/* ==========================================================================
   5. RESTAURANT DYNAMIC MENU PROCESSING
   ========================================================================== */
const restaurantId = new URLSearchParams(window.location.search).get("restaurant");

if (restaurantId && restaurantMenus[restaurantId]) {
  const restaurant = restaurantMenus[restaurantId];

  document.getElementById("restaurantBanner").src = restaurant.banner;
  document.getElementById("restaurantName").innerText = restaurant.name;
  document.getElementById("restaurantDetails").innerText = restaurant.details;

  const menuContainer = document.getElementById("menuContainer");

  for (let category in restaurant.categories) {
    let items = "";

    restaurant.categories[category].forEach(item => {
      items += `
        <div class="food-card">
          <img src="${item.image}">
          <div class="food-info">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <h2>₹${item.price}</h2>
            <button class="add-btn" onclick='addToCart(${JSON.stringify(item)})'>Add To Cart</button>
          </div>
        </div>
      `;
    });

    menuContainer.innerHTML += `
      <div class="menu-category">
        <h1>${category}</h1>
        <div class="food-grid">
          ${items}
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   6. CART ACTIONS & OPERATIONS STATE CONTROLLER
   ========================================================================== */
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item.name + " added to cart!");
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  if (confirm("Are you sure you want to empty your cart?")) {
    localStorage.removeItem("cart");
    renderCart();
  }
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  
  if (!cartItems) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 18px; color: #888;">Your cart is empty. Go add some delicious food! 😋</p>`;
    if (cartTotal) cartTotal.innerHTML = "<h2>Total: ₹0</h2>";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="food-card">
        <img src="${item.image}">
        <div class="food-info">
          <h2>${item.name}</h2>
          <p>${item.desc}</p>
          <h3>₹${item.price}</h3>
          <button class="remove-btn" onclick="removeFromCart(${index})">Remove Item</button>
        </div>
      </div>
    `;
  });

  if (cartTotal) {
    cartTotal.innerHTML = `
      <div class="cart-summary-footer">
        <h2>Total: ₹${total}</h2>
        <button id="clearCartBtn" class="clear-cart-btn" onclick="clearCart()">Clear All 🗑️</button>
      </div>
    `;
  }
}

if (document.getElementById("cartItems")) {
  renderCart();
}