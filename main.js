// ========================================
// Hand Made E-Commerce - Main JavaScript
// Professional E-Commerce Platform
// ========================================

// ========== Toast Notifications ==========
class Toast {
  static show(message, type = 'success', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideOutDown 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
}

// ========== Currency Formatter ==========
function formatCurrency(price) {
  // Use Egyptian Pound for Egyptian locale, EGP for English
  const symbol = (typeof langManager !== 'undefined' && langManager.currentLang === 'ar') ? 'ج.م' : 'EGP';
  return `${price.toFixed(2)} ${symbol}`;
}

// ========== Back to Top Button ==========
class BackToTop {
  constructor() {
    this.button = document.createElement('button');
    this.button.className = 'back-to-top';
    this.button.innerHTML = '↑';
    this.button.setAttribute('data-i18n-title', 'common.back_to_top');
    document.body.appendChild(this.button);

    this.button.addEventListener('click', () => this.scrollToTop());
    window.addEventListener('scroll', () => this.toggleVisibility());
  }

  toggleVisibility() {
    if (window.scrollY > 300) {
      this.button.classList.add('active');
    } else {
      this.button.classList.remove('active');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// ========== Navbar Management ==========
class NavbarManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupLanguageToggle();
    this.updateCartBadge();
    window.addEventListener('cartUpdated', () => this.updateCartBadge());
    // Ensure the language button updates when language changes from other controls
    window.addEventListener('languageChanged', () => this.updateLanguageButtonText());
  }

  setupLanguageToggle() {
    const languageBtn = document.getElementById('language-toggle');
    if (languageBtn) {
      languageBtn.addEventListener('click', () => {
        langManager.toggle();
        this.updateLanguageButtonText();
      });
      this.updateLanguageButtonText();
    }
  }

  updateLanguageButtonText() {
    const languageBtn = document.getElementById('language-toggle');
    if (languageBtn) {
      languageBtn.textContent = langManager.currentLang === 'ar' ? 'EN' : 'AR';
    }
  }

  updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      const count = cartManager.getCartItemCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }
}

// ========== Product Renderer ==========
class ProductRenderer {
  static renderProduct(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${getProductName(product)}" loading="lazy">
        ${product.isBestSeller ? '<span class="product-badge">Best Seller</span>' : ''}
        <button class="product-favorite ${cartManager.isFavorite(product.id) ? 'active' : ''}" 
                data-product-id="${product.id}" title="${langManager.get('common.add_to_favorites')}">
          ♡
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryName(product.category)}</div>
        <h3 class="product-name">${getProductName(product)}</h3>
        <div class="product-price">${formatCurrency(product.price)}</div>
        <div class="product-actions">
          <button class="btn btn-secondary btn-sm add-to-cart" data-product-id="${product.id}">
            ${langManager.get('productDetails.add_to_cart')}
          </button>
          <button class="btn btn-primary btn-sm view-details" onclick="window.location.href='product-details.html?id=${product.id}'">
            ${langManager.get('productDetails.buy_now')}
          </button>
        </div>
      </div>
    `;

    // Add to Cart
    productCard.querySelector('.add-to-cart').addEventListener('click', () => {
      cartManager.addToCart(product, 1);
      Toast.show(langManager.get('common.added_to_cart'), 'success');
      document.querySelector('.product-favorite').classList.add('animate-pulse');
    });

    // Favorite Button
    const favoriteBtn = productCard.querySelector('.product-favorite');
    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cartManager.isFavorite(product.id)) {
        cartManager.removeFromFavorites(product.id);
        Toast.show(langManager.get('common.removed_from_favorites'), 'warning');
      } else {
        cartManager.addToFavorites(product);
        Toast.show(langManager.get('common.added_to_favorites'), 'success');
      }
      favoriteBtn.classList.toggle('active');
    });

    return productCard;
  }

  static renderProducts(products, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (products.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #999;">
        ${langManager.get('products.noProducts')}
      </div>`;
      return;
    }

    products.forEach(product => {
      const productCard = this.renderProduct(product);
      container.appendChild(productCard);
    });
  }
}

// ========== Products Filter & Search ==========
class ProductsManager {
  constructor() {
    this.products = productsData;
    this.filteredProducts = [...this.products];
    this.init();
  }

  init() {
    this.setupSearch();
    this.setupFilters();
    this.renderProducts();
    window.addEventListener('languageChanged', () => this.renderProducts());
  }

  setupSearch() {
    const searchBox = document.getElementById('search-box');
    if (searchBox) {
      searchBox.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        this.filterBySearch(query);
        this.renderProducts();
      });
    }
  }

  setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => this.applyFilters());
    }

    if (priceFilter) {
      priceFilter.addEventListener('change', () => this.applyFilters());
    }
  }

  filterBySearch(query) {
    this.filteredProducts = this.products.filter(product => {
      const name = getProductName(product).toLowerCase();
      const description = getProductDescription(product).toLowerCase();
      return name.includes(query) || description.includes(query);
    });
  }

  applyFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    let filtered = [...this.products];

    if (categoryFilter && categoryFilter.value) {
      filtered = filtered.filter(p => p.category === categoryFilter.value);
    }

    if (priceFilter && priceFilter.value) {
      const [min, max] = priceFilter.value.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    this.filteredProducts = filtered;
  }

  renderProducts() {
    const container = document.getElementById('products-grid');
    ProductRenderer.renderProducts(this.filteredProducts, container);
  }
}

// ========== Product Details Page ==========
class ProductDetailsPage {
  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = productsData.find(p => p.id === productId);

    if (!product) {
      window.location.href = '404.html';
      return;
    }

    this.product = product;
    this.init();
  }

  init() {
    this.renderProductDetails();
    this.renderRelatedProducts();
    this.setupEventListeners();
    window.addEventListener('languageChanged', () => this.updateContent());
  }

  renderProductDetails() {
    const container = document.querySelector('.product-details');
    if (!container) return;

    const quantity = document.querySelector('.quantity-control input');
    
    container.innerHTML = `
      <div class="product-images">
        <div class="product-main-image">
          <img src="${this.product.image}" alt="${getProductName(this.product)}" id="main-image">
        </div>
        <div class="product-thumbnails" id="thumbnails-container"></div>
      </div>
      <div class="product-details-info">
        <h1>${getProductName(this.product)}</h1>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span>(125 Reviews)</span>
        </div>
        <div class="product-availability in-stock">
          ${langManager.get('productDetails.inStock')}
        </div>
        <div class="product-details-price">${formatCurrency(this.product.price)}</div>
        
        <div class="quantity-selector">
          <label>${langManager.get('productDetails.quantity')}:</label>
          <div class="quantity-control">
            <button class="decrease-qty">-</button>
            <input type="number" value="1" min="1" max="100">
            <button class="increase-qty">+</button>
          </div>
        </div>

        <div class="product-actions-detail">
          <button class="btn btn-primary btn-lg add-to-cart-detail">
            ${langManager.get('productDetails.add_to_cart')}
          </button>
          <button class="btn btn-secondary btn-lg favorite-detail" id="favorite-btn">
            ♡ ${langManager.get('common.add_to_favorites')}
          </button>
        </div>

        <div class="product-description">
          <h3>${langManager.get('productDetails.description')}</h3>
          <p>${getProductDescription(this.product)}</p>
        </div>
      </div>
    `;

    this.setupDetailsEventListeners();
  }

  setupDetailsEventListeners() {
    const quantityInput = document.querySelector('.quantity-control input');
    const decreaseBtn = document.querySelector('.decrease-qty');
    const increaseBtn = document.querySelector('.increase-qty');
    const addToCartBtn = document.querySelector('.add-to-cart-detail');
    const favoriteBtn = document.querySelector('.favorite-detail');

    if (decreaseBtn) {
      decreaseBtn.addEventListener('click', () => {
        quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
      });
    }

    if (increaseBtn) {
      increaseBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
      });
    }

    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        cartManager.addToCart(this.product, quantity);
        Toast.show(langManager.get('common.added_to_cart'), 'success');
        quantityInput.value = 1;
      });
    }

    if (favoriteBtn) {
      const isFav = cartManager.isFavorite(this.product.id);
      favoriteBtn.classList.toggle('active', isFav);
      
      favoriteBtn.addEventListener('click', () => {
        if (cartManager.isFavorite(this.product.id)) {
          cartManager.removeFromFavorites(this.product.id);
          Toast.show(langManager.get('common.removed_from_favorites'), 'warning');
        } else {
          cartManager.addToFavorites(this.product);
          Toast.show(langManager.get('common.added_to_favorites'), 'success');
        }
        favoriteBtn.classList.toggle('active');
      });
    }
  }

  renderRelatedProducts() {
    const related = productsData
      .filter(p => p.category === this.product.category && p.id !== this.product.id)
      .slice(0, 4);

    const container = document.getElementById('related-products');
    if (container) {
      ProductRenderer.renderProducts(related, container);
    }
  }

  updateContent() {
    this.renderProductDetails();
    this.renderRelatedProducts();
  }
}

// ========== Cart Page Management ==========
class CartPage {
  constructor() {
    this.init();
  }

  init() {
    this.renderCartItems();
    window.addEventListener('cartUpdated', () => this.renderCartItems());
    window.addEventListener('languageChanged', () => this.renderCartItems());
  }

  renderCartItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cartManager.cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <h2>${langManager.get('cart.empty')}</h2>
          <p>${langManager.get('products.noProducts')}</p>
          <button class="btn btn-primary" onclick="window.location.href='products.html'">
            ${langManager.get('cart.continue_shopping')}
          </button>
        </div>
      `;
      
      const summary = document.querySelector('.cart-summary');
      if (summary) summary.style.display = 'none';
      return;
    }

    container.innerHTML = '';
    cartManager.cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.nameAr}">
        </div>
        <div class="cart-item-details">
          <h3>${langManager.currentLang === 'ar' ? item.nameAr : item.nameEn}</h3>
          <p>${formatCurrency(item.price)}</p>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-quantity">
            <button onclick="cartManager.updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
            <input type="number" value="${item.quantity}" readonly>
            <button onclick="cartManager.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
          </div>
          <button class="cart-item-remove" onclick="cartManager.removeFromCart(${item.id})">
            ${langManager.get('cart.remove')}
          </button>
          <span style="font-weight: 700; color: var(--primary-color);">
            ${formatCurrency(item.price * item.quantity)}
          </span>
        </div>
      `;
      container.appendChild(itemElement);
    });

    this.updateSummary();
  }

  updateSummary() {
    const subtotal = cartManager.getCartTotal();
    const shipping = 25;
    const tax = subtotal * 0.15;
    const total = subtotal + shipping + tax;

    const summaryHTML = `
      <div class="summary-item">
        <span>${langManager.get('cart.subtotal')}</span>
        <span>${formatCurrency(subtotal)}</span>
      </div>
      <div class="summary-item">
        <span>${langManager.get('cart.shipping')}</span>
        <span>${formatCurrency(shipping)}</span>
      </div>
      <div class="summary-item">
        <span>${langManager.get('cart.tax')}</span>
        <span>${formatCurrency(tax)}</span>
      </div>
      <div class="summary-item" style="border-bottom: none; margin-top: var(--spacing-md); padding-top: var(--spacing-md); padding-bottom: 0;">
        <span class="summary-total">${langManager.get('cart.total')}</span>
        <span class="summary-total">${formatCurrency(total)}</span>
      </div>
      <button class="btn btn-primary btn-lg" style="width: 100%; margin-top: var(--spacing-lg);" onclick="window.location.href='checkout.html'">
        ${langManager.get('cart.checkout')}
      </button>
    `;

    const summary = document.querySelector('.cart-summary');
    if (summary) {
      summary.innerHTML = summaryHTML;
      summary.style.display = 'block';
    }
  }
}

// ========== Checkout Form ==========
class CheckoutManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupFormValidation();
    this.setupSubmitHandler();
  }

  setupFormValidation() {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.validateField(input));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const isValid = this.isFieldValid(field, value);

    const formGroup = field.closest('.form-group');
    if (!formGroup) return isValid;

    if (isValid) {
      formGroup.classList.remove('error');
    } else {
      formGroup.classList.add('error');
    }

    return isValid;
  }

  isFieldValid(field, value) {
    if (!value) return false;

    const type = field.type;
    const name = field.name;

    if (type === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    if (name === 'phone') {
      return /^\d{9,}$/.test(value.replace(/\D/g, ''));
    }

    if (name === 'cardNumber') {
      return /^\d{13,19}$/.test(value.replace(/\s/g, ''));
    }

    if (name === 'cvv') {
      return /^\d{3,4}$/.test(value);
    }

    return true;
  }

  setupSubmitHandler() {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputs = form.querySelectorAll('input[required], select[required]');
      let allValid = true;

      inputs.forEach(input => {
        if (!this.validateField(input)) {
          allValid = false;
        }
      });

      if (!allValid) {
        Toast.show(langManager.get('checkout.required'), 'error');
        return;
      }

      // Show success message
      Toast.show(langManager.get('checkout.success'), 'success');
      
      // Clear cart and redirect
      setTimeout(() => {
        cartManager.clearCart();
        window.location.href = 'index.html';
      }, 2000);
    });
  }
}

// ========== Home Page ==========
class HomePage {
  constructor() {
    this.init();
  }

  init() {
    this.renderFeaturedProducts();
    this.renderBestSellers();
    this.renderCategoryPreview();
    window.addEventListener('languageChanged', () => {
      this.renderFeaturedProducts();
      this.renderBestSellers();
      this.renderCategoryPreview();
    });
  }

  renderFeaturedProducts() {
    const featured = productsData.filter(p => p.isFeatured).slice(0, 6);
    const container = document.getElementById('featured-products');
    ProductRenderer.renderProducts(featured, container);
  }

  renderBestSellers() {
    const bestSellers = productsData.filter(p => p.isBestSeller).slice(0, 6);
    const container = document.getElementById('bestsellers-products');
    ProductRenderer.renderProducts(bestSellers, container);
  }

  renderCategoryPreview() {
    const categories = [
      { id: 'candles', name: translations[langManager.currentLang].categories.candles },
      { id: 'accessories', name: translations[langManager.currentLang].categories.accessories },
      { id: 'wooden', name: translations[langManager.currentLang].categories.wooden },
      { id: 'mugs', name: translations[langManager.currentLang].categories.mugs },
      { id: 'tshirts', name: translations[langManager.currentLang].categories.tshirts },
      { id: 'chains', name: translations[langManager.currentLang].categories.chains },
      { id: 'bags', name: translations[langManager.currentLang].categories.bags }
    ];

    const container = document.getElementById('categories-grid');
    if (!container) return;

    container.innerHTML = '';
    categories.forEach(category => {
      const categoryCard = document.createElement('div');
      categoryCard.className = 'category-card';
      categoryCard.innerHTML = `
        <div class="category-image">📦</div>
        <h3>${category.name}</h3>
        <a href="products.html?category=${category.id}" class="btn btn-sm btn-outline">
          ${langManager.get('productDetails.buy_now')}
        </a>
      `;
      container.appendChild(categoryCard);
    });
  }
}

// ========== Contact Form ==========
class ContactFormManager {
  constructor() {
    this.init();
  }

  init() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Validate
      if (!data.name || !data.email || !data.message) {
        Toast.show(langManager.get('checkout.required'), 'error');
        return;
      }

      // Show success
      Toast.show(langManager.get('contact.success'), 'success');
      form.reset();
    });
  }
}

// ========== Initialize on Page Load ==========
document.addEventListener('DOMContentLoaded', () => {
  // Initialize common components
  new NavbarManager();
  new BackToTop();

  // Global handler for any element that should toggle language (keeps inline handlers consistent)
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action="toggle-language"]');
    if (target) {
      e.preventDefault();
      langManager.toggle();
    }
  });

  // Initialize page-specific components
  const page = document.body.dataset.page;
  
  switch (page) {
    case 'home':
      new HomePage();
      break;
    case 'products':
      new ProductsManager();
      break;
    case 'product-details':
      new ProductDetailsPage();
      break;
    case 'cart':
      new CartPage();
      break;
    case 'checkout':
      new CheckoutManager();
      break;
    case 'contact':
      new ContactFormManager();
      break;
  }
});

// ========== Global Toast Animation ==========
const style = document.createElement('style');
style.textContent = `
  @keyframes slideOutDown {
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  .product-favorite {
    animation: heartBeat 0.6s ease;
  }

  @keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.3); }
    50% { transform: scale(1.1); }
  }

  .animate-pulse {
    animation: pulse 0.6s ease;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
`;
document.head.appendChild(style);
