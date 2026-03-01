// ========================================
// Hand Made E-Commerce - API Reference
// مرجع الدوال والفئات المتقدم
// ========================================

// ╔════════════════════════════════════════╗
// ║     Translations & Language System     ║
// ╚════════════════════════════════════════╝

/**
 * LanguageManager
 * إدارة اللغات والترجمات
 */
class LanguageManager {
  // تعيين اللغة
  setLanguage(lang: 'ar' | 'en')
  
  // الحصول على ترجمة
  get(path: string): string
  // مثال: langManager.get('common.copyright')
  
  // تحديث محتوى الصفحة
  updatePageContent(): void
  
  // تبديل اللغة الحالية
  toggle(): void
  
  // اللغة الحالية
  currentLang: 'ar' | 'en'
}

// الاستخدام:
langManager.setLanguage('ar');
langManager.setLanguage('en');
langManager.toggle();

// ╔════════════════════════════════════════╗
// ║        Products Data Management        ║
// ╚════════════════════════════════════════╝

/**
 * Product Interface
 * واجهة المنتج
 */
interface Product {
  id: number;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  price: number;
  category: string;
  image: string;
  isFeatured: boolean;
  isBestSeller: boolean;
}

/**
 * getProductName(product)
 * الحصول على اسم المنتج حسب اللغة
 */
const name = getProductName(product);
// العربية: getProductName(product) → "شموع معطرة"
// الإنجليزية: getProductName(product) → "Scented Candles"

/**
 * getProductDescription(product)
 * الحصول على وصف المنتج حسب اللغة
 */
const description = getProductDescription(product);

/**
 * getCategoryName(category)
 * الحصول على اسم الفئة حسب اللغة
 */
const categoryName = getCategoryName('candles');
// → "شموع معطرة" (العربية) أو "Scented Candles" (الإنجليزية)

// ╔════════════════════════════════════════╗
// ║         Shopping Cart Management       ║
// ╚════════════════════════════════════════╝

/**
 * CartManager
 * إدارة سلة التسوق
 */
class CartManager {
  // إضافة منتج للسلة
  addToCart(product: Product, quantity: number = 1): void
  // مثال: cartManager.addToCart(product, 2);
  
  // حذف منتج من السلة
  removeFromCart(productId: number): void
  
  // تحديث كمية المنتج
  updateQuantity(productId: number, quantity: number): void
  
  // الحصول على إجمالي السلة
  getCartTotal(): number
  
  // الحصول على عدد العناصر في السلة
  getCartItemCount(): number
  
  // إفراغ السلة
  clearCart(): void
  
  // إضافة للمفضلة
  addToFavorites(product: Product): boolean
  
  // حذف من المفضلة
  removeFromFavorites(productId: number): void
  
  // التحقق من المفضلة
  isFavorite(productId: number): boolean
  
  // مصفوفة السلة الحالية
  cart: CartItem[]
  
  // مصفوفة المفضلات
  favorites: number[]
}

/**
 * CartItem Interface
 */
interface CartItem {
  id: number;
  nameAr: string;
  nameEn: string;
  price: number;
  quantity: number;
  image: string;
}

// الاستخدام:
cartManager.addToCart(product, 1);
const total = cartManager.getCartTotal();
const count = cartManager.getCartItemCount();
cartManager.removeFromCart(1);
cartManager.updateQuantity(1, 5);

// المفضلة:
cartManager.addToFavorites(product);
cartManager.isFavorite(1); // true/false
cartManager.removeFromFavorites(1);

// ╔════════════════════════════════════════╗
// ║       Product Rendering System         ║
// ╚════════════════════════════════════════╝

/**
 * ProductRenderer
 * نظام عرض المنتجات
 */
class ProductRenderer {
  // عرض منتج واحد وإرجاع DOM element
  static renderProduct(product: Product): HTMLElement
  
  // عرض عدة منتجات في container
  static renderProducts(products: Product[], container: HTMLElement): void
}

// الاستخدام:
const productElement = ProductRenderer.renderProduct(product);
document.body.appendChild(productElement);

ProductRenderer.renderProducts(products, document.getElementById('products-grid'));

// ╔════════════════════════════════════════╗
// ║      Page-Specific Managers            ║
// ╚════════════════════════════════════════╝

/**
 * HomePage
 * إدارة الصفحة الرئيسية
 */
class HomePage {
  renderFeaturedProducts(): void
  renderBestSellers(): void
  renderCategoryPreview(): void
}

/**
 * ProductsManager
 * إدارة صفحة المنتجات
 */
class ProductsManager {
  setupSearch(): void
  setupFilters(): void
  filterBySearch(query: string): void
  applyFilters(): void
  renderProducts(): void
}

/**
 * ProductDetailsPage
 * إدارة صفحة تفاصيل المنتج
 */
class ProductDetailsPage {
  renderProductDetails(): void
  renderRelatedProducts(): void
  setupDetailsEventListeners(): void
  updateContent(): void
}

/**
 * CartPage
 * إدارة صفحة السلة
 */
class CartPage {
  renderCartItems(): void
  updateSummary(): void
}

/**
 * CheckoutManager
 * إدارة صفحة الدفع
 */
class CheckoutManager {
  setupFormValidation(): void
  validateField(field: HTMLElement): boolean
  setupSubmitHandler(): void
}

/**
 * ContactFormManager
 * إدارة نموذج التواصل
 */
class ContactFormManager {
  constructor()
}

// ╔════════════════════════════════════════╗
// ║        Utility Components              ║
// ╚════════════════════════════════════════╝

/**
 * Toast Notifications
 * إشعارات النظام
 */
class Toast {
  static show(
    message: string,
    type: 'success' | 'error' | 'warning' = 'success',
    duration: number = 3000
  ): void
}

// الاستخدام:
Toast.show('تم الإضافة للسلة', 'success');
Toast.show('حدث خطأ', 'error');
Toast.show('تحذير', 'warning', 5000);

/**
 * BackToTop Button
 * زر العودة للأعلى
 */
class BackToTop {
  toggleVisibility(): void
  scrollToTop(): void
}

/**
 * NavbarManager
 * إدارة الـ Navbar
 */
class NavbarManager {
  setupLanguageToggle(): void
  updateLanguageButtonText(): void
  updateCartBadge(): void
}

// ╔════════════════════════════════════════╗
// ║        Event Listeners                 ║
// ╚════════════════════════════════════════╝

// تحديث السلة
window.addEventListener('cartUpdated', () => {
  console.log('تم تحديث السلة');
});

// تغيير اللغة
window.addEventListener('languageChanged', () => {
  console.log('تم تغيير اللغة');
});

// تحديث المفضلة
window.addEventListener('favoritesUpdated', () => {
  console.log('تم تحديث المفضلة');
});

// ╔════════════════════════════════════════╗
// ║        Data Attributes                 ║
// ╚════════════════════════════════════════╝

/**
 * Internationalization Attributes
 */

// نص يتغير تلقائياً
<span data-i18n="common.copyright">© 2026 Hand Made</span>

// placeholder يتغير تلقائياً
<input type="text" data-i18n-placeholder="products.search">

// value يتغير تلقائياً
<button data-i18n-value="checkout.placeOrder">تأكيد</button>

// تحديد صفحة
<body data-page="home">
<body data-page="products">
<body data-page="cart">

// معرف المنتج
<button data-product-id="1">أضف</button>

// ╔════════════════════════════════════════╗
// ║        HTML Form Validation            ║
// ╚════════════════════════════════════════╝

/**
 * Form Field Structure
 */
<div class="form-group">
  <label>البريد الإلكتروني</label>
  <input type="email" name="email" required>
  <span class="form-error">هذا الحقل مطلوب</span>
</div>

// إضافة خطأ
fieldElement.closest('.form-group').classList.add('error');

// إزالة خطأ
fieldElement.closest('.form-group').classList.remove('error');

// ╔════════════════════════════════════════╗
// ║        CSS Customization               ║
// ╚════════════════════════════════════════╝

/**
 * CSS Variables (متغيرات CSS)
 */
:root {
  /* Colors */
  --primary-color: #C9956B;
  --secondary-color: #E8D4C8;
  --accent-color: #B76E79;
  
  /* Spacing */
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  
  /* Shadows */
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-normal: 0.3s ease;
}

// استخدام المتغيرات:
color: var(--primary-color);
padding: var(--spacing-md);
box-shadow: var(--shadow-md);

// ╔════════════════════════════════════════╗
// ║        LocalStorage Usage              ║
// ╚════════════════════════════════════════╝

/**
 * Stored Data
 */

// اللغة
localStorage.getItem('lang'); // 'ar' أو 'en'

// السلة (JSON)
JSON.parse(localStorage.getItem('cart')); // [...]

// المفضلة (JSON)
JSON.parse(localStorage.getItem('favorites')); // [...]

// حفظ بيانات
localStorage.setItem('key', value);

// حذف بيانات
localStorage.removeItem('key');

// حذف كل شيء
localStorage.clear();

// ╔════════════════════════════════════════╗
// ║        Initialization Flow             ║
// ╚════════════════════════════════════════╝

/**
 * ترتيب التهيئة:
 * 1. تحميل lang.js (نظام اللغات)
 * 2. تحميل data.js (البيانات والسلة)
 * 3. تحميل main.js (الكود الرئيسي)
 * 4. DOMContentLoaded event ينطلق
 * 5. يتم اختيار الصفحة حسب data-page
 * 6. تهيئة المكونات المناسبة
 */

// Flow Example:
document.addEventListener('DOMContentLoaded', () => {
  // الخطوة 1: تهيئة مشتركة
  new NavbarManager();
  new BackToTop();
  
  // الخطوة 2: تهيئة خاصة حسب الصفحة
  const page = document.body.dataset.page;
  
  if (page === 'home') {
    new HomePage();
  } else if (page === 'products') {
    new ProductsManager();
  }
  // ...إلخ
});

// ╔════════════════════════════════════════╗
// ║        Best Practices                  ║
// ╚════════════════════════════════════════╝

/**
 * ✅ استخدم:
 */
// 1. Classes للتنظيم
class Manager {
  constructor() { }
}

// 2. Arrow functions
const add = (a, b) => a + b;

// 3. Template literals
const message = `مرحباً ${name}`;

// 4. Destructuring
const { id, name } = product;

// 5. Try/Catch
try {
  // الكود
} catch (error) {
  console.error(error);
}

/**
 * ❌ تجنب:
 */
// 1. Global variables
// window.globalVar = 'bad';

// 2. eval()
// eval('dangerous code');

// 3. Inline styles
// element.style.color = 'red'; // استخدم classes بدلاً منه

// 4. Direct DOM manipulation بدون checking
// element.addEventListener(); // تحقق أن العنصر موجود أولاً

// 5. Synchronous operations
// لا تستخدم alert() أو confirm() في Production

// ╔════════════════════════════════════════╗
// ║        Debugging Tips                  ║
// ╚════════════════════════════════════════╝

// 1. console.log
console.log('Value:', value);
console.table(arrayOfObjects);

// 2. console.error
console.error('Error message:', error);

// 3. console.group
console.group('Group Name');
console.log('Item 1');
console.log('Item 2');
console.groupEnd();

// 4. debugger
debugger; // يوقف التنفيذ في DevTools

// 5. console.time
console.time('myTimer');
// ... code ...
console.timeEnd('myTimer'); // يطبع الوقت المستغرق

// ╔════════════════════════════════════════╗
// ║        Performance Tips                ║
// ╚════════════════════════════════════════╝

// 1. Debouncing (للعمليات المتكررة)
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// 2. Event Delegation
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    // ...
  }
});

// 3. Lazy Loading Images
<img loading="lazy" src="...">

// 4. Cache DOM queries
const el = document.getElementById('myElement');
// استخدم el بدلاً من إعادة الاستعلام

// ═══════════════════════════════════════════════════════════
// 🚀 Ready to Build Great Things!
// Happy Coding! 💻✨
// ═══════════════════════════════════════════════════════════
