# 🎨 Hand Made - متجر تجارة إلكترونية احترافي

موقع تجارة إلكترونية احترافي وكامل لبيع المنتجات اليدوية بنسخة عربية وإنجليزية.

## ✨ الميزات الرئيسية

### 🌍 نظام اللغات (AR/EN)
- **اللغة الافتراضية**: العربية
- **تبديل لغة فوري**: بدون إعادة تحميل الصفحة
- **اتجاه ديناميكي**: RTL للعربية، LTR للإنجليزية
- **حفظ اختيار اللغة**: في localStorage

### 🛒 نظام السلة المتقدم
- ✅ إضافة المنتجات بكل سهولة
- ✅ تعديل الكمية
- ✅ حذف المنتجات
- ✅ حساب إجمالي الأسعار
- ✅ حفظ السلة في LocalStorage
- ✅ تحديث عداد السلة تلقائي

### ❤️ نظام المفضلة
- إضافة المنتجات للمفضلة
- تأثيرات بصرية جذابة
- حفظ في LocalStorage
- رسائل Toast تأكيدية

### 📱 التصميم المتجاوب
- 100% Responsive Design
- يعمل على جميع الأجهزة
- تصميم احترافي وحديث
- animations سلسة وجميلة

### 🎯 الصفحات المتضمنة
1. **الصفحة الرئيسية** - Hero Section + Products
2. **صفحة المنتجات** - Grid + Filter + Search
3. **تفاصيل المنتج** - صور + وصف + خيارات
4. **سلة التسوق** - عرض + تعديل + دفع
5. **الدفع** - نموذج Validation كامل
6. **من نحن** - معلومات الشركة
7. **تواصل معنا** - نموذج اتصال + معلومات
8. **صفحة 404** - صفحة خطأ احترافية

## 📦 بيانات المنتجات

20 منتج تجريبي مع صور SVG ديناميكية:
- 🕯️ شموع معطرة (3 أنواع)
- 💍 إكسسوارات يدوية
- 🪑 لوحات خشبية
- ☕ أكواب مطبوعة
- 👕 تيشيرتات DTF
- ⛓️ سلاسل يدوية
- 👜 حقائب قماش

## 🎨 نظام الألوان والتصميم

```css
Primary Color: #C9956B (Brown/Tan)
Secondary Color: #E8D4C8 (Beige)
Accent Color: #B76E79 (Rose Gold)
Dark Color: #2C2C2C
Light Color: #F5F3F0
```

## 📁 هيكل المشروع

```
hand made/
├── index.html              (الصفحة الرئيسية)
├── products.html           (صفحة المنتجات)
├── product-details.html    (تفاصيل المنتج)
├── cart.html               (سلة التسوق)
├── checkout.html           (الدفع)
├── about.html              (من نحن)
├── contact.html            (تواصل معنا)
├── 404.html                (صفحة الخطأ)
├── css/
│   └── style.css           (أنماط شاملة)
├── js/
│   ├── lang.js             (نظام اللغات)
│   ├── data.js             (بيانات المنتجات)
│   └── main.js             (الكود الرئيسي)
└── assets/images/          (مجلد الصور)
```

## 🚀 الميزات التقنية

### ✅ استخدم Vanilla JavaScript فقط
- لا توجد مكتبات خارجية
- كود نظيف ومنظم
- Classes و OOP
- Event Listeners ديناميكي

### ✅ CSS3 متقدم
- Flexbox و Grid
- CSS Variables
- Animations & Transitions
- Media Queries

### ✅ HTML5 السيمانتي
- Tags صحيح
- Meta Tags كاملة
- Accessibility

## 💻 الفئات الرئيسية

### `LanguageManager`
```javascript
// تبديل اللغة
langManager.setLanguage('en');

// الحصول على ترجمة
langManager.get('common.copyright');

// تبديل آلي
langManager.toggle();
```

### `CartManager`
```javascript
// إضافة للسلة
cartManager.addToCart(product, quantity);

// حذف من السلة
cartManager.removeFromCart(productId);

// الحصول على الإجمالي
cartManager.getCartTotal();

// إدارة المفضلة
cartManager.addToFavorites(product);
```

### `ProductRenderer`
```javascript
// عرض منتج واحد
ProductRenderer.renderProduct(product);

// عرض عدة منتجات
ProductRenderer.renderProducts(products, container);
```

### `Toast` Notifications
```javascript
Toast.show('تم الإضافة', 'success');
Toast.show('خطأ', 'error');
Toast.show('تحذير', 'warning');
```

## 🎯 كيفية الاستخدام

### فتح الموقع
```bash
# ببساطة افتح index.html في المتصفح
# أو استخدم Live Server
```

### تخصيص الموقع

#### تغيير البيانات
1. عدّل `js/data.js`
2. أضف منتجات جديدة
3. قم بتحديث الفئات

#### تغيير الألوان
```css
/* في css/style.css */
:root {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
}
```

#### تغيير النصوص
```javascript
// في js/lang.js
const translations = {
  ar: {
    navbar: {
      home: 'الرئيسية'
    }
  }
}
```

## ✅ المميزات المتقدمة

### Toast Notifications
- رسائل تأكيد ديناميكية
- أنواع مختلفة (success, error, warning)
- تتلاشى تلقائياً

### Back to Top Button
- ظهور عند التمرير
- تأثيرات سلسة
- سريع وفعال

### Form Validation
- التحقق من الحقول المطلوبة
- التحقق من البريد الإلكتروني
- رسائل خطأ واضحة

### Lazy Loading
- تحميل الصور ديناميكياً
- أداء أفضل
- تجربة مستخدم أسرع

## 🔐 الأمان

- ✅ التحقق من المدخلات
- ✅ لا توجد بيانات حقيقية في الكود
- ✅ محفوظات آمنة في localStorage
- ✅ لا توجد مشاكل XSS

## 📊 الإحصائيات

- **20** منتج تجريبي
- **8** صفحات رئيسية
- **7** فئات منتجات
- **2** لغة (AR + EN)
- **1000+** سطر كود
- **100%** واجهة مستجيبة

## 🎓 مثالي للـ

- 🏪 متاجر فعلية
- 👨‍💼 مشاريع تجارية
- 📚 عينات توظيف
- 🎯 محافظ عمل
- 🚀 نقطة انطلاق

## 📝 الملاحظات المهمة

1. **الصور**: تستخدم SVG ديناميقية - يمكنك استبدالها برابط صور حقيقية
2. **البيانات**: بيانات تجريبية - أضف بيانات حقيقية حسب احتياجاتك
3. **الدفع**: لا يتصل بأي خدمة - أضف Stripe أو بوابة دفع حقيقية
4. **الإمايلات**: نموذج فقط - وصل بـ Email API
5. **الخريطة**: توضيحية - استبدل بـ Google Maps

## 🚀 الخطوات التالية

### لتحويل الموقع لمشروع حقيقي:

1. **استخدم قاعدة بيانات**
   - MongoDB أو Firebase
   - تخزين المنتجات والطلبات

2. **أضف Backend**
   - Node.js + Express
   - معالجة الطلبات
   - نظام الدفع

3. **ربط بوابة الدفع**
   - Stripe
   - PayPal
   - Apple Pay

4. **نظام البريد**
   - SendGrid أو Nodemailer
   - تأكيدات الطلبات

5. **التوثيق والأمان**
   - JWT للمصادقة
   - HTTPS
   - Rate Limiting

## 📧 الدعم والسؤالات

للأسئلة والمساعدة:
- 📧 info@handmade.com
- 📱 +966 50 123 4567

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الحر.

---

**تم إنشاؤه بـ ❤️ لتقديم تجربة تسوق احترافية**

**Hand Made © 2026 - جميع الحقوق محفوظة**
