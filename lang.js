// نظام اللغات - Language System
const translations = {
  ar: {
    // Navbar
    navbar: {
      home: 'الرئيسية',
      products: 'المنتجات',
      about: 'عن المتجر',
      contact: 'اتصل بينا',
      cart: 'العربة',
      items: 'عناصر'
    },
    // Hero Section
    hero: {
      title: 'حاجات يدوية مميزة وأنيقة',
      subtitle: 'اشتري أحسن الحاجات المصنوعة بإيدينا وبزوق',
      cta: 'يلا نبدأ التسوق'
    },
    // Home Page
    home: {
      featured: 'الأكتر مميزة عندنا',
      bestSellers: 'الأكتر مبيعاً',
      categories: 'التصنيفات',
      reviews: 'آراء الناس',
      about_short: 'إحنا مين؟'
    },
    // Products Page
    products: {
      title: 'المنتجات',
      search: 'دور على حاجة...',
      filter: 'التصفيات',
      price: 'السعر',
      category: 'التصنيف',
      sort: 'رتّب بـ',
      noProducts: 'ملقناش حاجة',
      allCategories: 'كل التصنيفات'
    },
    // Product Details
    productDetails: {
      quantity: 'العدد',
      price: 'السعر',
      add_to_cart: 'حط في العربة',
      buy_now: 'اشتري دلوقتي',
      description: 'تفاصيل',
      related: 'حاجات تانية ممكن تعجبك',
      inStock: 'متوفر',
      outOfStock: 'مخلص'
    },
    // Cart Page
    cart: {
      title: 'عربة التسوق',
      empty: 'العربة فاضية',
      product: 'المنتج',
      price: 'السعر',
      quantity: 'العدد',
      total: 'المجموع',
      remove: 'شيل',
      continue_shopping: 'كمل تسوق',
      checkout: 'اكمل الدفع',
      subtotal: 'المجموع الجزئي',
      shipping: 'الشحن',
      tax: 'الضريبة'
    },
    // Checkout Page
    checkout: {
      title: 'إكمال الطلب',
      personalInfo: 'معلومات شخصية',
      shippingInfo: 'عنوان الشحنة',
      paymentInfo: 'بيانات الدفع',
      firstName: 'الاسم',
      lastName: 'اللقب',
      email: 'الإيميل',
      phone: 'الموبايل',
      address: 'العنوان',
      city: 'المدينة',
      zipCode: 'الرمز البريدي',
      cardNumber: 'رقم البطاقة',
      expiryDate: 'تاريخ الانتهاء',
      cvv: 'CVV',
      placeOrder: 'أرسل الطلب',
      required: 'مطلوب',
      success: 'طلبك تم بنجاح!',
      order_confirmation: 'شكراً! هنكلمك قريباً'
    },
    // About Page
    about: {
      title: 'عن المتجر',
      story: 'حكايتنا',
      mission: 'هدفنا',
      vision: 'رؤيتنا',
      story_text: 'إحنا بنحب الحرف اليدوية وبنشتغل بكل شغف عشان نطلع منتجات متقنة وبمذاق مختلف. كل قطعة معمولالها بحُب واهتمام',
      mission_text: 'هدفنا نوفر لكم حاجات يدوية بجودة عالية وتعبر عن الذوق الحقيقي',
      vision_text: 'نطمح نكون أول اختيار لكل واحد بيدور على حاجات يدوية مميزة'
    },
    // Contact Page
    contact: {
      title: 'اتصل بينا',
      form: 'ابعتلنا',
      name: 'الاسم',
      email: 'الإيميل',
      message: 'الرسالة',
      send: 'إبعت',
      phone: 'الموبايل',
      address: 'العنوان',
      info: 'معلومات التواصل',
      success: 'رسالتك اتبعتت بنجاح'
    },
    // Common
    common: {
      add_to_favorites: 'حط في المفضلة',
      remove_from_favorites: 'شيل من المفضلة',
      added_to_cart: 'اتضافت للعربة',
      added_to_favorites: 'اتحطت في المفضلة',
      removed_from_favorites: 'اتشالت من المفضلة',
      loading: 'بيحمل...',
      back_to_top: 'للأعلى',
      copyright: '© 2026 Hand Made. جميع الحقوق محفوظة',
      '404': 'الصفحة مش موجودة',
      '404_msg': 'معليش، الصفحة اللي بتدور عليها مش موجودة'
    },
    // Categories
    categories: {
      candles: 'شموع معطرة',
      accessories: 'إكسسوارات',
      wooden: 'لوحات خشب',
      mugs: 'أكواب',
      tshirts: 'تيشيرتات',
      chains: 'سلاسل',
      bags: 'شنط'
    }
  },
  en: {
    // Navbar
    navbar: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      cart: 'Cart',
      items: 'items'
    },
    // Hero Section
    hero: {
      title: 'Unique & Elegant Handmade Products',
      subtitle: 'Shop the best handmade products crafted with love and excellence',
      cta: 'Start Shopping Now'
    },
    // Home Page
    home: {
      featured: 'Featured Products',
      bestSellers: 'Best Sellers',
      categories: 'Categories',
      reviews: 'Customer Reviews',
      about_short: 'About Us'
    },
    // Products Page
    products: {
      title: 'Products',
      search: 'Search for a product...',
      filter: 'Filters',
      price: 'Price',
      category: 'Category',
      sort: 'Sort by',
      noProducts: 'No products found',
      allCategories: 'All Categories'
    },
    // Product Details
    productDetails: {
      quantity: 'Quantity',
      price: 'Price',
      add_to_cart: 'Add to Cart',
      buy_now: 'Buy Now',
      description: 'Description',
      related: 'Related Products',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock'
    },
    // Cart Page
    cart: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      product: 'Product',
      price: 'Price',
      quantity: 'Quantity',
      total: 'Total',
      remove: 'Remove',
      continue_shopping: 'Continue Shopping',
      checkout: 'Proceed to Checkout',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      tax: 'Tax'
    },
    // Checkout Page
    checkout: {
      title: 'Checkout',
      personalInfo: 'Personal Information',
      shippingInfo: 'Shipping Address',
      paymentInfo: 'Payment Information',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      address: 'Address',
      city: 'City',
      zipCode: 'Zip Code',
      cardNumber: 'Card Number',
      expiryDate: 'Expiry Date',
      cvv: 'CVV',
      placeOrder: 'Place Order',
      required: 'This field is required',
      success: 'Order placed successfully!',
      order_confirmation: 'Thank you! We will contact you soon'
    },
    // About Page
    about: {
      title: 'About Us',
      story: 'Our Story',
      mission: 'Our Mission',
      vision: 'Our Vision',
      story_text: 'We believe in the power of unique handmade products. Every item is crafted with meticulous care and love to provide the best quality',
      mission_text: 'Our mission is to provide high-quality handmade products that reflect true creativity and art',
      vision_text: 'We aspire to be the first choice for unique and elegant handmade products'
    },
    // Contact Page
    contact: {
      title: 'Contact Us',
      form: 'Contact Form',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      phone: 'Phone',
      address: 'Address',
      info: 'Contact Information',
      success: 'Your message has been sent successfully'
    },
    // Common
    common: {
      add_to_favorites: 'Add to Favorites',
      remove_from_favorites: 'Remove from Favorites',
      added_to_cart: 'Added to cart',
      added_to_favorites: 'Added to favorites',
      removed_from_favorites: 'Removed from favorites',
      loading: 'Loading...',
      back_to_top: 'Back to Top',
      copyright: '© 2026 Hand Made. All rights reserved',
      '404': 'Page Not Found',
      '404_msg': 'Sorry, the page you are looking for does not exist'
    },
    // Categories
    categories: {
      candles: 'Scented Candles',
      accessories: 'Accessories',
      wooden: 'Wooden Signs',
      mugs: 'Printed Mugs',
      tshirts: 'DTF T-Shirts',
      chains: 'Handmade Chains',
      bags: 'Canvas Bags'
    }
  }
};

// نظام إدارة اللغة
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'ar';
    this.setLanguage(this.currentLang);
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    this.updatePageContent();
  }

  get(path) {
    const keys = path.split('.');
    let value = translations[this.currentLang];
    
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        return path;
      }
    }
    
    return value || path;
  }

  updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = this.get(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = this.get(key);
    });

    document.querySelectorAll('[data-i18n-value]').forEach(element => {
      const key = element.getAttribute('data-i18n-value');
      element.value = this.get(key);
    });

    // تحديث الأحداث المخصصة
    window.dispatchEvent(new Event('languageChanged'));
  }

  toggle() {
    this.setLanguage(this.currentLang === 'ar' ? 'en' : 'ar');
  }
}

// إنشاء نسخة عامة من مدير اللغات
const langManager = new LanguageManager();
