// بيانات المنتجات - Products Data
const productsData = [
  {
    id: 1,
    nameAr: 'شموع معطرة - الورد والعطور',
    nameEn: 'Rose & Fragrance Scented Candles',
    descriptionAr: 'شموع معطرة طبيعية مصنوعة يدويًا من شمع الصويا النقي مع زيوت عطرية فاخرة',
    descriptionEn: 'Natural handmade scented candles made from pure soy wax with luxurious essential oils',
    price: 45,
    category: 'candles',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23E8D4C8" width="200" height="250"/%3E%3Ccircle cx="100" cy="100" r="50" fill="%23C9956B"/%3E%3Crect x="90" y="70" width="20" height="40" fill="%23FF6B35"/%3E%3Cpath d="M 100 110 Q 95 120 100 130 Q 105 120 100 110" fill="%23FFA500"/%3E%3Ctext x="100" y="180" font-size="14" text-anchor="middle" fill="%23333"%3EScented Candle%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 2,
    nameAr: 'إكسسوارات يدوية - أقراط نحاسية',
    nameEn: 'Handmade Copper Earrings',
    descriptionAr: 'أقراط نحاسية مصنوعة يدويًا بتصاميم فريدة وأنيقة، مناسبة لجميع المناسبات',
    descriptionEn: 'Handmade copper earrings with unique and elegant designs, suitable for all occasions',
    price: 25,
    category: 'accessories',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F5E6D3" width="200" height="250"/%3E%3Ccircle cx="50" cy="80" r="20" fill="%23B87333"/%3E%3Ccircle cx="150" cy="80" r="20" fill="%23B87333"/%3E%3Crect x="45" y="100" width="10" height="20" fill="%23999"/%3E%3Crect x="145" y="100" width="10" height="20" fill="%23999"/%3E%3Ctext x="100" y="180" font-size="14" text-anchor="middle" fill="%23333"%3ECopper Earrings%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: false
  },
  {
    id: 3,
    nameAr: 'لوحة خشبية - شروق الشمس',
    nameEn: 'Wooden Sign - Sunrise',
    descriptionAr: 'لوحة خشبية مزخرفة بتصميم شروق الشمس، مصنوعة من خشب طبيعي عالي الجودة',
    descriptionEn: 'Decorative wooden sign with sunrise design, made from high-quality natural wood',
    price: 65,
    category: 'wooden',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%238B7355" width="200" height="250"/%3E%3Ccircle cx="100" cy="80" r="35" fill="%23FFD700"/%3E%3Cline x1="30" y1="180" x2="170" y2="180" stroke="%23F4A460" stroke-width="3"/%3E%3Ctext x="100" y="220" font-size="12" text-anchor="middle" fill="%23FFF"%3EWooden Sign%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: true
  },
  {
    id: 4,
    nameAr: 'كوب مطبوع - قهوة الصباح',
    nameEn: 'Printed Mug - Morning Coffee',
    descriptionAr: 'كوب مطبوع بجودة عالية مع تصاميم عصرية وعملية، مثالي للهدايا',
    descriptionEn: 'High-quality printed mug with modern and practical designs, perfect for gifts',
    price: 20,
    category: 'mugs',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F0F0F0" width="200" height="250"/%3E%3Crect x="50" y="80" width="80" height="100" fill="%23FFF" stroke="%23333" stroke-width="2" rx="5"/%3E%3Crect x="140" y="110" width="20" height="40" fill="none" stroke="%23333" stroke-width="2" rx="10"/%3E%3Ctext x="90" y="135" font-size="12" text-anchor="middle" fill="%23333"%3EMug%3C/text%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23333"%3EPrinted Mug%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 5,
    nameAr: 'تيشيرت DTF - تصميم فني',
    nameEn: 'DTF T-Shirt - Art Design',
    descriptionAr: 'تيشيرت عالي الجودة مع طباعة DTF متقدمة بتصاميم فنية حصرية',
    descriptionEn: 'High-quality t-shirt with advanced DTF printing and exclusive artistic designs',
    price: 35,
    category: 'tshirts',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F5E6D3" width="200" height="250"/%3E%3Cpath d="M 60 80 L 100 100 L 140 80 L 140 180 L 60 180 Z" fill="%23333"/%3E%3Crect x="70" y="90" width="60" height="50" fill="%23FF6B35" rx="5"/%3E%3Ctext x="100" y="145" font-size="10" text-anchor="middle" fill="%23FFF"%3EArt%3C/text%3E%3Ctext x="100" y="210" font-size="12" text-anchor="middle" fill="%23333"%3EDTF T-Shirt%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 6,
    nameAr: 'سلسلة يدوية - ذهبي',
    nameEn: 'Handmade Chain - Gold',
    descriptionAr: 'سلسلة يدوية مصنوعة من معادن فاخرة بتصميم عصري وأنيق',
    descriptionEn: 'Handmade chain made from luxury metals with modern and elegant design',
    price: 55,
    category: 'chains',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23FFF" width="200" height="250"/%3E%3Ccircle cx="50" cy="100" r="12" fill="%23FFD700" stroke="%23DAA520" stroke-width="2"/%3E%3Ccircle cx="100" cy="100" r="12" fill="%23FFD700" stroke="%23DAA520" stroke-width="2"/%3E%3Ccircle cx="150" cy="100" r="12" fill="%23FFD700" stroke="%23DAA520" stroke-width="2"/%3E%3Cline x1="62" y1="100" x2="88" y2="100" stroke="%23FFD700" stroke-width="2"/%3E%3Cline x1="112" y1="100" x2="138" y2="100" stroke="%23FFD700" stroke-width="2"/%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23333"%3EGold Chain%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: false
  },
  {
    id: 7,
    nameAr: 'حقيبة قماش - كاكي',
    nameEn: 'Canvas Bag - Khaki',
    descriptionAr: 'حقيبة قماش متينة وعملية مع تصميم بسيط وأنيق، مثالية للاستخدام اليومي',
    descriptionEn: 'Durable and practical canvas bag with simple and elegant design, perfect for daily use',
    price: 42,
    category: 'bags',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23C4B5A0" width="200" height="250"/%3E%3Crect x="50" y="80" width="100" height="90" fill="%23D4C4B0" stroke="%23999" stroke-width="2" rx="5"/%3E%3Crect x="70" y="70" width="60" height="15" fill="%23999"/%3E%3Cline x1="70" y1="170" x2="130" y2="170" stroke="%23999" stroke-width="1"/%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23333"%3ECanvas Bag%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: true
  },
  {
    id: 8,
    nameAr: 'شموع معطرة - الفانيليا',
    nameEn: 'Vanilla Scented Candles',
    descriptionAr: 'شموع معطرة برائحة الفانيليا الفاخرة المصنوعة يدويًا',
    descriptionEn: 'Vanilla scented candles with a luxurious aroma, handmade',
    price: 40,
    category: 'candles',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F5DEB3" width="200" height="250"/%3E%3Ccircle cx="100" cy="100" r="50" fill="%23C99A6E"/%3E%3Crect x="90" y="70" width="20" height="40" fill="%23FF8C00"/%3E%3Cpath d="M 100 110 Q 95 120 100 130 Q 105 120 100 110" fill="%23FFA500"/%3E%3Ctext x="100" y="180" font-size="14" text-anchor="middle" fill="%23333"%3EVanilla Candle%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: false
  },
  {
    id: 9,
    nameAr: 'أقراط حجرية - زمردي',
    nameEn: 'Stone Earrings - Emerald',
    descriptionAr: 'أقراط حجرية أنيقة بألوان زمردية طبيعية، تصميم عصري راقي',
    descriptionEn: 'Elegant stone earrings with natural emerald colors, refined modern design',
    price: 35,
    category: 'accessories',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F0F8FF" width="200" height="250"/%3E%3Ccircle cx="50" cy="80" r="20" fill="%2350C878"/%3E%3Ccircle cx="150" cy="80" r="20" fill="%2350C878"/%3E%3Crect x="45" y="100" width="10" height="20" fill="%23999"/%3E%3Crect x="145" y="100" width="10" height="20" fill="%23999"/%3E%3Ctext x="100" y="180" font-size="12" text-anchor="middle" fill="%23333"%3EStone Earrings%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 10,
    nameAr: 'لوحة خشبية - غروب الشمس',
    nameEn: 'Wooden Sign - Sunset',
    descriptionAr: 'لوحة خشبية جميلة برسومات يدوية لغروب الشمس، ديكور منزلي راقي',
    descriptionEn: 'Beautiful wooden sign with hand-drawn sunset art, elegant home decor',
    price: 70,
    category: 'wooden',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%238B4513" width="200" height="250"/%3E%3Ccircle cx="100" cy="80" r="35" fill="%23FF4500"/%3E%3Cline x1="30" y1="180" x2="170" y2="180" stroke="%23FF6347" stroke-width="3"/%3E%3Ctext x="100" y="220" font-size="12" text-anchor="middle" fill="%23FFF"%3ESunset Sign%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 11,
    nameAr: 'كوب مطبوع - اقتباسات ملهمة',
    nameEn: 'Printed Mug - Inspiring Quotes',
    descriptionAr: 'كوب مطبوع برسائل ملهمة وإيجابية، هدية مثالية لمن تحب',
    descriptionEn: 'Printed mug with inspiring and positive messages, perfect gift for loved ones',
    price: 22,
    category: 'mugs',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F5F5F5" width="200" height="250"/%3E%3Crect x="50" y="80" width="80" height="100" fill="%23FFF" stroke="%23333" stroke-width="2" rx="5"/%3E%3Crect x="140" y="110" width="20" height="40" fill="none" stroke="%23333" stroke-width="2" rx="10"/%3E%3Ctext x="90" y="130" font-size="10" text-anchor="middle" fill="%23333"%3EQuotes%3C/text%3E%3Ctext x="100" y="200" font-size="11" text-anchor="middle" fill="%23333"%3EInspiring Mug%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 12,
    nameAr: 'تيشيرت DTF - رسالة بسيطة',
    nameEn: 'DTF T-Shirt - Simple Message',
    descriptionAr: 'تيشيرت بطباعة DTF برسالة بسيطة وأنيقة، مرتاح وعملي',
    descriptionEn: 'DTF printed t-shirt with simple and elegant message, comfortable and practical',
    price: 32,
    category: 'tshirts',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F9F9F9" width="200" height="250"/%3E%3Cpath d="M 60 80 L 100 100 L 140 80 L 140 180 L 60 180 Z" fill="%23222"/%3E%3Crect x="70" y="95" width="60" height="40" fill="%2300A86B" rx="5"/%3E%3Ctext x="100" y="125" font-size="9" text-anchor="middle" fill="%23FFF"%3EMessage%3C/text%3E%3Ctext x="100" y="210" font-size="12" text-anchor="middle" fill="%23333"%3EDTF T-Shirt%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 13,
    nameAr: 'سلسلة يدوية - فضي',
    nameEn: 'Handmade Chain - Silver',
    descriptionAr: 'سلسلة يدوية بلون فضي ناصع مع تصميم كلاسيكي فاخر',
    descriptionEn: 'Handmade chain in pure silver with classic luxury design',
    price: 50,
    category: 'chains',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23FFF" width="200" height="250"/%3E%3Ccircle cx="50" cy="100" r="12" fill="%23C0C0C0" stroke="%23808080" stroke-width="2"/%3E%3Ccircle cx="100" cy="100" r="12" fill="%23C0C0C0" stroke="%23808080" stroke-width="2"/%3E%3Ccircle cx="150" cy="100" r="12" fill="%23C0C0C0" stroke="%23808080" stroke-width="2"/%3E%3Cline x1="62" y1="100" x2="88" y2="100" stroke="%23C0C0C0" stroke-width="2"/%3E%3Cline x1="112" y1="100" x2="138" y2="100" stroke="%23C0C0C0" stroke-width="2"/%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23333"%3ESilver Chain%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 14,
    nameAr: 'حقيبة قماش - رمادي',
    nameEn: 'Canvas Bag - Grey',
    descriptionAr: 'حقيبة قماش رمادية متينة، تصميم بسيط يناسب أي إطلالة',
    descriptionEn: 'Durable grey canvas bag, simple design that suits any outfit',
    price: 40,
    category: 'bags',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23808080" width="200" height="250"/%3E%3Crect x="50" y="80" width="100" height="90" fill="%23A9A9A9" stroke="%23666" stroke-width="2" rx="5"/%3E%3Crect x="70" y="70" width="60" height="15" fill="%23666"/%3E%3Cline x1="70" y1="170" x2="130" y2="170" stroke="%23666" stroke-width="1"/%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23FFF"%3EGrey Bag%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 15,
    nameAr: 'شموع معطرة - اللافندر',
    nameEn: 'Lavender Scented Candles',
    descriptionAr: 'شموع معطرة برائحة اللافندر الهادئة المصنوعة من شمع طبيعي',
    descriptionEn: 'Lavender scented candles with calming aroma, made from natural wax',
    price: 45,
    category: 'candles',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23E6D5E8" width="200" height="250"/%3E%3Ccircle cx="100" cy="100" r="50" fill="%239370DB"/%3E%3Crect x="90" y="70" width="20" height="40" fill="%238A2BE2"/%3E%3Cpath d="M 100 110 Q 95 120 100 130 Q 105 120 100 110" fill="%239932CC"/%3E%3Ctext x="100" y="180" font-size="14" text-anchor="middle" fill="%23333"%3ELavender%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: false
  },
  {
    id: 16,
    nameAr: 'إكسسوارات - خلخال ذهبي',
    nameEn: 'Accessories - Gold Anklet',
    descriptionAr: 'خلخال ذهبي دقيق مصنوع يدويًا بتصميم عصري وأنثوي',
    descriptionEn: 'Delicate gold anklet handmade with modern and feminine design',
    price: 28,
    category: 'accessories',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23FFEFD5" width="200" height="250"/%3E%3Cellipse cx="100" cy="150" rx="45" ry="20" fill="none" stroke="%23FFD700" stroke-width="3"/%3E%3Ccircle cx="70" cy="150" r="8" fill="%23FFD700"/%3E%3Ccircle cx="100" cy="150" r="8" fill="%23FFD700"/%3E%3Ccircle cx="130" cy="150" r="8" fill="%23FFD700"/%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23333"%3EGold Anklet%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 17,
    nameAr: 'لوحة خشبية - فن تجريدي',
    nameEn: 'Wooden Sign - Abstract Art',
    descriptionAr: 'لوحة خشبية برسومات تجريدية حديثة، قطعة فنية فريدة للجدران',
    descriptionEn: 'Wooden sign with modern abstract art, unique wall piece',
    price: 75,
    category: 'wooden',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%235C4033" width="200" height="250"/%3E%3Crect x="40" y="60" width="30" height="30" fill="%23FF6B35"/%3E%3Crect x="85" y="70" width="35" height="35" fill="%236366F1"/%3E%3Crect x="135" y="75" width="25" height="25" fill="%2310B981"/%3E%3Ctext x="100" y="220" font-size="12" text-anchor="middle" fill="%23FFF"%3EAbstract Art%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 18,
    nameAr: 'كوب مطبوع - تصميم جغرافي',
    nameEn: 'Printed Mug - Geometric Design',
    descriptionAr: 'كوب بتصاميم جغرافية حديثة، هدية مثالية لهواة التصميم',
    descriptionEn: 'Mug with modern geometric designs, perfect gift for design lovers',
    price: 24,
    category: 'mugs',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F0F0F0" width="200" height="250"/%3E%3Crect x="50" y="80" width="80" height="100" fill="%23FFF" stroke="%23333" stroke-width="2" rx="5"/%3E%3Crect x="140" y="110" width="20" height="40" fill="none" stroke="%23333" stroke-width="2" rx="10"/%3E%3Crect x="60" y="90" width="15" height="15" fill="%236366F1"/%3E%3Crect x="85" y="105" width="15" height="15" fill="%23FF6B35"/%3E%3Crect x="110" y="90" width="15" height="15" fill="%2310B981"/%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23333"%3EGeometric Mug%3C/text%3E%3C/svg%3E',
    isFeatured: false,
    isBestSeller: false
  },
  {
    id: 19,
    nameAr: 'تيشيرت DTF - لوجو علامة تجارية',
    nameEn: 'DTF T-Shirt - Brand Logo',
    descriptionAr: 'تيشيرت بطباعة لوجو علامة تجارية احترافي وراقي',
    descriptionEn: 'T-shirt with professional and elegant brand logo printing',
    price: 38,
    category: 'tshirts',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23F5F5F5" width="200" height="250"/%3E%3Cpath d="M 60 80 L 100 100 L 140 80 L 140 180 L 60 180 Z" fill="%234A4A4A"/%3E%3Ccircle cx="100" cy="105" r="15" fill="%23FF6B35"/%3E%3Ctext x="100" y="112" font-size="10" text-anchor="middle" fill="%23FFF" font-weight="bold"%3EHM%3C/text%3E%3Ctext x="100" y="210" font-size="12" text-anchor="middle" fill="%23333"%3EBrand Tee%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: false
  },
  {
    id: 20,
    nameAr: 'سلسلة يدوية - روز جولد',
    nameEn: 'Handmade Chain - Rose Gold',
    descriptionAr: 'سلسلة يدوية بلون روز جولد الفاخر مع تصميم عصري وأنثوي',
    descriptionEn: 'Handmade chain in luxurious rose gold color with modern and feminine design',
    price: 60,
    category: 'chains',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"%3E%3Crect fill="%23FFF" width="200" height="250"/%3E%3Ccircle cx="50" cy="100" r="12" fill="%23B76E79" stroke="%23A0616A" stroke-width="2"/%3E%3Ccircle cx="100" cy="100" r="12" fill="%23B76E79" stroke="%23A0616A" stroke-width="2"/%3E%3Ccircle cx="150" cy="100" r="12" fill="%23B76E79" stroke="%23A0616A" stroke-width="2"/%3E%3Cline x1="62" y1="100" x2="88" y2="100" stroke="%23B76E79" stroke-width="2"/%3E%3Cline x1="112" y1="100" x2="138" y2="100" stroke="%23B76E79" stroke-width="2"/%3E%3Ctext x="100" y="200" font-size="12" text-anchor="middle" fill="%23333"%3ERose Gold%3C/text%3E%3C/svg%3E',
    isFeatured: true,
    isBestSeller: true
  }
];

// دالة للحصول على اسم المنتج حسب اللغة
function getProductName(product) {
  return langManager.currentLang === 'ar' ? product.nameAr : product.nameEn;
}

// دالة للحصول على وصف المنتج حسب اللغة
function getProductDescription(product) {
  return langManager.currentLang === 'ar' ? product.descriptionAr : product.descriptionEn;
}

// دالة للحصول على فئة المنتج حسب اللغة
function getCategoryName(category) {
  return langManager.get(`categories.${category}`);
}

// نظام إدارة السلة
class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.favorites = this.loadFavorites();
  }

  loadCart() {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(product, quantity = 1) {
    const existingItem = this.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        nameAr: product.nameAr,
        nameEn: product.nameEn,
        price: product.price,
        quantity: quantity,
        image: product.image
      });
    }
    
    this.saveCart();
    this.notifyCartChange();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.notifyCartChange();
  }

  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
      this.notifyCartChange();
    }
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.notifyCartChange();
  }

  loadFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  addToFavorites(product) {
    if (!this.isFavorite(product.id)) {
      this.favorites.push(product.id);
      this.saveFavorites();
      this.notifyFavoritesChange();
      return true;
    }
    return false;
  }

  removeFromFavorites(productId) {
    this.favorites = this.favorites.filter(id => id !== productId);
    this.saveFavorites();
    this.notifyFavoritesChange();
  }

  isFavorite(productId) {
    return this.favorites.includes(productId);
  }

  notifyCartChange() {
    window.dispatchEvent(new Event('cartUpdated'));
  }

  notifyFavoritesChange() {
    window.dispatchEvent(new Event('favoritesUpdated'));
  }
}

// إنشاء نسخة عامة من إدارة السلة
const cartManager = new CartManager();
