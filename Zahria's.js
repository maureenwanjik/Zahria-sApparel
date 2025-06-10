//Product data (corrected and unchanged except for image paths)
const products = [
    {
        id: 1,
        name: "Grey Graphic Top",
        type: "top",
        price: 200,
        image: "image/WhatsApp Image 2025-06-03 at 11.05.22_7f6cdfe3.jpg",
        description: "A stylish grey top with a subtle graphic design, perfect for casual wear. <br><strong>Fabric:</strong> Cotton Blend<br><strong>Care:</strong> Machine wash cold",
        badge: "New",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Grey", "Black", "White"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 2,
        name: "White Graphic T-shirt",
        type: "top",
        price: 200,
        image: "image/WhatsApp Image 2025-06-03 at 11.05.22_8a58c060.jpg",
        description: "Classic white t-shirt with an artistic graphic print for a modern touch.<br><strong>Fabric:</strong> 100% Cotton<br><strong>Care:</strong> Hand wash",
        badge: "",
        inStock: true,
        sizes: ["S", "M", "L"],
        colors: ["White", "Black"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 3,
        name: "Beige Graphic Top",
        type: "top",
        price: 150,
        image: "image/WhatsApp Image 2025-06-03 at 11.05.22_57a81db2.jpg",
        description: "A breathable beige top with a unique design, ideal for relaxed occasions.<br><strong>Fabric:</strong> Rayon<br><strong>Care:</strong> Machine wash cold",
        badge: "",
        inStock: true,
        sizes: ["S", "M", "L"],
        colors: ["Beige", "Brown"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 4,
        name: "Pink Text T-shirt",
        type: "top",
        price: 190,
        image: "image/WhatsApp Image 2025-06-03 at 11.05.22_97b69503.jpg",
        description: "Soft pink top featuring subtle text detailing, stylish and comfortable.<br><strong>Fabric:</strong> Modal<br><strong>Care:</strong> Gentle cycle",
        badge: "Bestseller",
        inStock: true,
        sizes: ["M", "L"],
        colors: ["Pink"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 5,
        name: "Light Blue Jeans",
        type: "trousers",
        price: 500,
        image: "image/WhatsApp Image 2025-06-03 at 11.05.22_524ad1a8.jpg",
        description: "Classic light blue jeans with a relaxed fit, great for everyday wear.<br><strong>Fabric:</strong> Denim<br><strong>Care:</strong> Machine wash",
        badge: "",
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 6,
        name: "Blue Denim Jeans",
        type: "trousers",
        price: 550,
        image: "image/WhatsApp Image 2025-06-03 at 11.05.22_a65f8e75.jpg",
        description: "Timeless blue denim jeans with a durable fabric and great fit.<br><strong>Fabric:</strong> Cotton Denim<br><strong>Care:</strong> Machine wash warm",
        badge: "",
        inStock: true,
        sizes: ["M", "L", "XL"],
        colors: ["Blue", "Navy"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 7,
        name: "White Jeans",
        type: "trousers",
        price: 500,
        image: "image/WhatsApp Image 2025-06-04 at 11.52.13_85dd8976.jpg", // FIXED: was using backslash, now forward slash
        description: "Elegant white jeans, perfect for making a bold fashion statement.<br><strong>Fabric:</strong> Stretch Denim<br><strong>Care:</strong> Machine wash cold",
        badge: "New",
        inStock: true,
        sizes: ["S", "M", "L"],
        colors: ["White"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 8,
        name: "Black Tailored Trousers",
        type: "trousers",
        price: 550,
        image: "image/WhatsApp Image 2025-06-03 at 11.05.22_d0244987.jpg",
        description: "Premium black trousers with a tailored fit for a sophisticated look.<br><strong>Fabric:</strong> Poly-Cotton Blend<br><strong>Care:</strong> Dry clean only",
        badge: "",
        inStock: true,
        sizes: ["M", "L", "XL"],
        colors: ["Black"],
        reviews: [],
        added: "2025-06-03"
    },
    {
        id: 9,
        name: "Blue Text T-shirt",
        type: "top",
        price: 150,
        image: "image/WhatsApp Image 2025-06-04 at 11.52.10_b4163cdd.jpg", // FIXED: was using backslash, now forward slash
        description: "Soft blue top featuring subtle text detailing, stylish and comfortable.<br><strong>Fabric:</strong> Modal<br><strong>Care:</strong> Gentle cycle",
        badge: "Bestseller",
        inStock: true,
        sizes: ["M", "L"],
        colors: ["Blue"],
        reviews: [],
        added: "2025-06-03"
    }
];
let cart = [];
function loadCart() {
    const data = localStorage.getItem('cart');
    cart = data ? JSON.parse(data) : [];
}
loadCart();
let wishlist = [];
let currentProduct = null;
window.changeCartQty = changeCartQty;
window.removeFromCart = removeFromCart
// ---- Wishlist Persistence ----
function loadWishlist() {
    const data = localStorage.getItem('wishlist');
    wishlist = data ? JSON.parse(data) : [];
}
function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
loadWishlist();
// SPA Section Display Logicfunction showSection(sectionId) {
function showSection(sectionId) {
    const sections = [
        "hero", "history", "size-guide", "faqs", "products",
        "newsletter-section", "cart-modal", "product-detail-modal", "cart-page",
        "shipping-returns", "privacy-policy", "terms-of-use"
    ];
     sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    })
    if (sectionId === 'home') {
        sections.forEach(id => {
            let el = document.getElementById(id) || document.querySelector('.' + id) || document.querySelector('#' + id + '-section');
            if (el) el.style.display = (id === "hero") ? "" : "none";
        });
        document.querySelector('footer').style.display = '';
        return;
    }
    sections.forEach(id => {
        const el = document.getElementById(id) || document.querySelector('.' + id) || document.querySelector('#' + id + '-section');
        if (el) el.style.display = 'none';
    });
    if (sectionId === 'products') {
        document.getElementById('products').style.display = '';
    } else if (sectionId === 'cart-modal') {
        document.getElementById('cart-modal').style.display = 'flex';
    } else if (sectionId === 'cart-page') {
        document.getElementById('cart-page').style.display = 'block';
        renderCartPage();
    } else if (sectionId === 'product-detail-modal') {
        document.getElementById('product-detail-modal').style.display = 'flex';
    } else {
        let el = document.getElementById(sectionId) || document.querySelector('.' + sectionId) || document.querySelector('#' + sectionId + '-section');
        if (el) el.style.display = '';
    }
    document.querySelector('footer').style.display = '';
}
    
// ...other code unchanged...
function renderProducts(list) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = "";
    list.forEach(product => {
        const stockClass = product.inStock ? "instock" : "outofstock";
        const isFavorite = wishlist.includes(product.id);
        grid.innerHTML += `
        <div class="product-card ${stockClass}" data-id="${product.id}" tabindex="0">
            <div class="favorite-icon" data-id="${product.id}">
                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
            </div>
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.onerror=null;this.src='placeholder.jpg';">            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">KSh ${product.price}</div>
                <p class="product-desc">${product.description}</p>
            </div>
        </div>
        `;
    });

    // Add event listeners after rendering
    document.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            toggleFavorite(id, this);
        });
    });
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            addToCart(id, this);
        });
    });

    // Click a product card (not the button) to open details
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function (e) {
            // Prevents triggering when clicking the button
            if (e.target.closest('.add-to-cart')) return;
            const id = parseInt(this.getAttribute('data-id'));
            openProductDetail(id);
        });
        card.addEventListener('keypress', function (e) {
            if (e.key === "Enter" || e.key === " ") {
                const id = parseInt(this.getAttribute('data-id'));
                openProductDetail(id);
            }
        });
    });
}

function toggleFavorite(productId, element) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        element.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        wishlist.splice(index, 1);
        element.innerHTML = '<i class="far fa-heart"></i>';
    }
    saveWishlist();
}

document.getElementById('payment-method').addEventListener('change', function () {
    const mpesaDetails = document.getElementById('mpesa-details');
    mpesaDetails.style.display = this.value === 'mpesa' ? 'block' : 'none';
});
// Initialize payment method display
document.addEventListener('DOMContentLoaded', function () {
    const paymentMethod = document.getElementById('payment-method');
    if (paymentMethod) {
        paymentMethod.addEventListener('change', function () {
            const mpesaDetails = document.getElementById('mpesa-details');
            mpesaDetails.style.display = this.value === 'mpesa' ? 'block' : 'none';
        });
        paymentMethod.dispatchEvent(new Event('change'));
    }
});
function filterProductsByType(type) {
    let filtered = [...products];
    if (type) {
        filtered = filtered.filter(product => product.type === type);
    }
    const stockValue = document.getElementById('stock-filter').value;
    if (stockValue === "instock") {
        filtered = filtered.filter(p => p.inStock);
    } else if (stockValue === "outofstock") {
        filtered = filtered.filter(p => !p.inStock);
    }
    sortProducts(document.getElementById('sort').value, filtered);
}

document.getElementById('stock-filter').addEventListener('change', function () {
    const value = this.value;
    let filtered = [...products];
    if (value === "instock") filtered = filtered.filter(p => p.inStock);
    else if (value === "outofstock") filtered = filtered.filter(p => !p.inStock);
    sortProducts(document.getElementById('sort').value, filtered);
});

document.getElementById('sort').addEventListener('change', function () {
    let filtered = [...products];
    const value = document.getElementById('stock-filter').value;
    if (value === "instock") filtered = filtered.filter(p => p.inStock);
    else if (value === "outofstock") filtered = filtered.filter(p => !p.inStock);
    sortProducts(this.value, filtered);
});

// Navigation and SPA
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const section = href.substring(1);
            e.preventDefault();

            // Handle collection filtering
            const type = this.getAttribute('data-type');
            if (type) {
                filterProductsByType(type);
                showSection('products');
                return;
            }

            showSection(section);
        }
    });
});

showSection('home');
function sortProducts(sortType, prefiltered) {
    let sorted = [...(prefiltered || products)];
    if (sortType === 'newest') {
        sorted.sort((a, b) => new Date(b.added) - new Date(a.added));
    } else if (sortType === 'oldest') {
        sorted.sort((a, b) => new Date(a.added) - new Date(b.added));
    } else if (sortType === 'cheapest') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === 'expensive') {
        sorted.sort((a, b) => b.price - a.price);
    }
    renderProducts(sorted);
}
function openProductDetail(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    showSection('product-detail-modal');
    renderProductDetail(currentProduct);
}
function renderProductDetail(product) {
    const modal = document.querySelector('.product-detail-content');
    modal.innerHTML = `
        <span class="close-detail" title="Close">&times;</span>
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">KSh ${product.price}</div>
        <div class="options-row">
            <label for="size-select">Size:</label>
            <select id="size-select">${product.sizes.map(s => `<option>${s}</option>`).join('')}</select>
        </div>
        <div class="options-row">
            <label for="color-select">Color:</label>
            <select id="color-select">${product.colors.map(c => `<option>${c}</option>`).join('')}</select>
        </div>
        <div class="product-actions">
            <button class="wishlist-btn${wishlist.includes(product.id) ? " liked" : ""}" id="wishlist-btn">
                <i class="fa${wishlist.includes(product.id) ? "s" : "r"} fa-heart"></i> ${wishlist.includes(product.id) ? "Wishlisted" : "Add to Wishlist"}
            </button>
            <button class="btn" id="add-to-cart-btn">Add to Cart</button>
            <button class="btn" id="buy-now-btn">Buy Now</button>
        </div>
        <div class="reviews">
            <h4>Customer Reviews</h4>
            <div class="reviews-list" id="reviews-list">
                ${product.reviews.length ? product.reviews.map(r => `
                  <div class="review-entry"><strong>${r.name || "Customer"}:</strong> ${r.text}</div>
                `).join('') : "<em>No reviews yet.</em>"}
            </div>
            <form class="review-form" id="review-form">
                <textarea placeholder="Write a review..." required></textarea>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    `;
    modal.querySelector('.close-detail').onclick = () => { showSection('products'); };
    document.getElementById('product-detail-modal').onclick = function (e) {
        if (e.target === this) showSection('products');
    };
    modal.querySelector('#wishlist-btn').onclick = function () {
        if (!wishlist.includes(product.id)) {
            wishlist.push(product.id);
            saveWishlist();
            this.classList.add('liked');
            this.innerHTML = '<i class="fas fa-heart"></i> Wishlisted';
        }
     else {
        wishlist = wishlist.filter(id => id !== product.id);
        saveWishlist();
        this.classList.remove('liked');
        this.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
    }
    };
    modal.querySelector('#add-to-cart-btn').onclick = function () {
        if (!product.inStock) return;
        addToCart(product.id, null);
        alert("Added to cart!");
    };
    modal.querySelector('#buy-now-btn').onclick = function () {
        if (!product.inStock) return;
        addToCart(product.id, null);
        showSection('cart-page');
    };
    modal.querySelector('#review-form').onsubmit = function (e) {
        e.preventDefault();
        const txt = this.querySelector('textarea').value.trim();
        if (txt) {
            product.reviews.push({ name: "Customer", text: txt });
            renderProductDetail(product);
        }
    };
}

function renderCartPage() {
    const cartItems = document.getElementById('cart-page-items');
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById('cart-page-total').innerHTML = "";
        return;
    }
    let total = 0;
    cartItems.innerHTML = '<ul style="list-style:none;padding:0;">' + cart.map(item => {
        total += item.product.price * item.qty;
        return `<li style="margin-bottom:1rem;display:flex;align-items:center;gap:1rem;">
                <img src="${item.product.image}" alt="${item.product.name}" style="width:50px;height:50px;object-fit:cover;border-radius:5px;">
                <span style="flex:1;">${item.product.name}</span>
                <button aria-label="Decrease quantity" onclick="changeCartQty(${item.product.id}, -1)" style="padding:0.2rem 0.7rem;">-</button>
                <span>${item.qty}</span>
                <button aria-label="Increase quantity" onclick="changeCartQty(${item.product.id}, 1)" style="padding:0.2rem 0.7rem;">+</button>
                <span style="min-width:80px;text-align:right;">KSh ${item.product.price * item.qty}</span>
                <button aria-label="Remove item" onclick="removeFromCart(${item.product.id})" style="margin-left:0.5rem;color:#b00;background:none;border:none;font-size:1.3rem;">&times;</button>
            </li>
             `;
    }).join('') + '</ul>';
    document.getElementById('cart-page-total').innerHTML = `Total: KSh ${total}`;
}

document.getElementById('cart-link').addEventListener('click', function (e) {
    e.preventDefault();
    renderCartPage();         // <-- This must be called here!
    showSection('cart-page'); // Make sure this matches your section ID
});

document.getElementById('checkout-btn').addEventListener('click', function () {
    const method = document.getElementById('payment-method').value;
    alert("Checkout with " + method + ". (This is a demo.)");
});
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
loadCart();

document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[name="email"]');
    if (emailInput && emailInput.value) {
        alert('Thank you for subscribing, ' + emailInput.value + '!');
        emailInput.value = '';
    }
});

function addToCart(productId, btn) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!product.inStock) {
        alert('This product is out of stock');
        return;
    }

    const existing = cart.find(item => item.product.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ product, qty: 1 });
    }

    updateCartCount();
    saveCart();
    if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
        btn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
            btn.style.backgroundColor = '';
        }, 2000);
    }
}
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartCount();
    saveCart();
    renderCartPage();
}
function changeCartQty(productId, delta) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        updateCartCount();
        saveCart();
        renderCartPage();
    }
}

function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    document.querySelector('.cart-count').textContent = count;
}
// ---- Initial Page Setup ----
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    showSection('home');
    updateCartCount();
});
sortProducts('newest');
showSection('home');