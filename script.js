const contact = {
  phone: "256750408931",
  displayPhone: "+256 750 408 931",
  email: "marywizard01@gmail.com",
  location: "Ruharo, Mbarara, Uganda",
};

const imageUrl = (photo, width = 760) => `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=82`;
const products = [
  { id: "royal-oud", name: "Royal Oud Perfume", category: "Perfumes", price: 120000, description: "Rich, elegant and long-lasting fragrance.", image: imageUrl("photo-1594035910387-fea47794261f"), colors: ["Amber", "Black"], sizes: ["50 ml", "100 ml"], badge: "Featured", featured: true, isNew: true },
  { id: "velvet-rose", name: "Velvet Rose Perfume", category: "Perfumes", price: 110000, description: "Elegant floral fragrance for sophisticated evenings.", image: imageUrl("photo-1547887538-e3a2f32cb1cc"), colors: ["Rose", "Clear"], sizes: ["50 ml", "100 ml"], badge: "New arrival", featured: false, isNew: true },
  { id: "imperial-noir", name: "Imperial Noir Perfume", category: "Perfumes", price: 135000, description: "Deep, confident and luxurious men's fragrance.", image: imageUrl("photo-1592945403244-b3fbafd7f539"), colors: ["Black", "Gold"], sizes: ["50 ml", "100 ml"], badge: "Featured", featured: true, isNew: false },
  { id: "golden-musk", name: "Golden Musk Perfume", category: "Perfumes", price: 125000, description: "Warm, smooth and unforgettable fragrance.", image: imageUrl("photo-1615634260167-c8cdede054de"), colors: ["Gold", "Amber"], sizes: ["50 ml", "100 ml"], badge: "New arrival", featured: false, isNew: true },
  { id: "premium-classic-shirt", name: "Premium Classic Shirt", category: "Men's Shirts", price: 95000, description: "Elegant long-sleeve shirt for smart occasions.", image: imageUrl("photo-1598033129183-c4f50c736f10"), colors: ["White", "Blue", "Black"], sizes: ["S", "M", "L", "XL", "XXL"], badge: "New arrival", featured: false, isNew: true },
  { id: "luxe-oxford-shirt", name: "Luxe Oxford Shirt", category: "Men's Shirts", price: 110000, description: "Premium smart-casual men's shirt.", image: imageUrl("photo-1603252109303-2751441dd157"), colors: ["White", "Sky blue", "Navy"], sizes: ["S", "M", "L", "XL", "XXL"], badge: "Featured", featured: true, isNew: true },
  { id: "executive-slim-shirt", name: "Executive Slim-Fit Shirt", category: "Men's Shirts", price: 120000, description: "Modern tailored fit with a refined finish.", image: imageUrl("photo-1596755094514-f87e34085b2c"), colors: ["White", "Black", "Wine"], sizes: ["S", "M", "L", "XL"], badge: "New arrival", featured: false, isNew: true },
  { id: "classic-tailored-trousers", name: "Classic Tailored Trousers", category: "Men's Trousers", price: 130000, description: "Smart-cut trousers for business and formal wear.", image: imageUrl("photo-1473966968600-fa801b869a1a"), colors: ["Black", "Charcoal", "Navy"], sizes: ["30", "32", "34", "36", "38"], featured: true, isNew: false },
  { id: "premium-slim-trousers", name: "Premium Slim Trousers", category: "Men's Trousers", price: 145000, description: "Modern slim-fit trousers with a sophisticated finish.", image: imageUrl("photo-1603252110481-7ba873bf42ab"), colors: ["Black", "Charcoal", "Tan"], sizes: ["30", "32", "34", "36", "38"], featured: false, isNew: false },
  { id: "executive-formal-trousers", name: "Executive Formal Trousers", category: "Men's Trousers", price: 160000, description: "Elegant trousers designed for premium formal styling.", image: imageUrl("photo-1515886657613-9f3515b0c78f"), colors: ["Black", "Navy"], sizes: ["30", "32", "34", "36", "38"], featured: false, isNew: false },
  { id: "classic-executive-suit", name: "Classic Executive Suit", category: "Men's Suits", price: 450000, description: "Timeless two-piece suit for business and formal occasions.", image: imageUrl("photo-1617137968427-85924c800a22"), colors: ["Black", "Charcoal", "Navy"], sizes: ["S", "M", "L", "XL", "XXL"], badge: "Featured", featured: true, isNew: false },
  { id: "premium-black-suit", name: "Premium Black Suit", category: "Men's Suits", price: 550000, description: "Elegant black suit with a sophisticated tailored appearance.", image: imageUrl("photo-1592878904946-b3cd8ae243d0"), colors: ["Black"], sizes: ["S", "M", "L", "XL", "XXL"], featured: false, isNew: false },
  { id: "luxe-three-piece-suit", name: "Luxe Three-Piece Suit", category: "Men's Suits", price: 650000, description: "Premium three-piece suit for weddings, events and special occasions.", image: imageUrl("photo-1598808503746-f34c53b9323e"), colors: ["Black", "Navy", "Charcoal"], sizes: ["S", "M", "L", "XL"], badge: "New arrival", featured: false, isNew: true },
  { id: "luxe-lady-handbag", name: "Luxe Lady Handbag", category: "Ladies' Bags", price: 180000, description: "Elegant everyday handbag with a premium appearance.", image: imageUrl("photo-1584917865442-de89df76afd3"), colors: ["Black", "Tan", "Cream"], sizes: ["One size"], badge: "Featured", featured: true, isNew: false },
  { id: "classic-leather-handbag", name: "Classic Leather Handbag", category: "Ladies' Bags", price: 220000, description: "Sophisticated handbag for work and special occasions.", image: imageUrl("photo-1590874103328-eac38a683ce7"), colors: ["Black", "Brown", "Burgundy"], sizes: ["One size"], featured: false, isNew: false },
  { id: "signature-luxe-bag", name: "Signature Luxe Bag", category: "Ladies' Bags", price: 280000, description: "Statement handbag designed for elegant styling.", image: imageUrl("photo-1566150905458-1bf1fc113f0d"), colors: ["Black", "Ivory", "Burgundy"], sizes: ["One size"], badge: "New arrival", featured: false, isNew: true },
  { id: "premium-evening-bag", name: "Premium Evening Bag", category: "Ladies' Bags", price: 150000, description: "Compact luxury bag perfect for dinners and special events.", image: imageUrl("photo-1601924994987-69e26d50dc26"), colors: ["Black", "Gold", "Champagne"], sizes: ["One size"], featured: false, isNew: false },
  { id: "saffron-oud", name: "Saffron Oud Perfume", category: "Perfumes", price: 185000, description: "A rich oud fragrance warmed with elegant saffron notes.", image: imageUrl("photo-1594035910387-fea47794261f"), colors: ["Amber", "Black"], sizes: ["50 ml", "100 ml"], badge: "New arrival", featured: true, isNew: true },
  { id: "amber-elixir", name: "Amber Elixir Perfume", category: "Perfumes", price: 145000, description: "A smooth amber scent with a warm, memorable finish.", image: imageUrl("photo-1547887538-e3a2f32cb1cc"), colors: ["Amber", "Gold"], sizes: ["50 ml", "100 ml"], featured: false, isNew: true },
  { id: "burgundy-top-handle", name: "Burgundy Luxe Top-Handle Bag", category: "Ladies' Bags", price: 320000, description: "A polished top-handle silhouette for elegant days and evenings.", image: imageUrl("photo-1566150905458-1bf1fc113f0d"), colors: ["Burgundy", "Black"], sizes: ["One size"], badge: "Featured", featured: true, isNew: true },
  { id: "chic-crossbody", name: "Chic Everyday Crossbody Bag", category: "Ladies' Bags", price: 165000, description: "A refined hands-free style for everyday outings.", image: imageUrl("photo-1590874103328-eac38a683ce7"), colors: ["Tan", "Black", "Cream"], sizes: ["One size"], featured: false, isNew: true },
  { id: "leather-dress-belt", name: "Classic Leather Dress Belt", category: "Accessories", price: 85000, description: "A versatile finishing touch for tailored and smart-casual looks.", image: imageUrl("photo-1617137968427-85924c800a22"), colors: ["Black", "Brown"], sizes: ["S", "M", "L", "XL"], featured: false, isNew: false },
  { id: "silk-finish-tie", name: "Silk Finish Tie", category: "Accessories", price: 65000, description: "A refined tie to bring a considered finish to formal wear.", image: imageUrl("photo-1592878904946-b3cd8ae243d0"), colors: ["Navy", "Wine", "Black"], sizes: ["One size"], featured: true, isNew: true },
  { id: "luxe-pocket-square", name: "Luxe Pocket Square Set", category: "Accessories", price: 40000, description: "An elegant pocket-square set for a personal finishing detail.", image: imageUrl("photo-1598808503746-f34c53b9323e"), colors: ["Ivory", "Burgundy", "Navy"], sizes: ["Set of 2"], featured: false, isNew: false },
];

products.push(
  { id: "amber-velvet-parfum", name: "Amber Velvet Parfum", category: "Perfumes", price: 168000, description: "A warm amber scent with a soft, elegant finish.", image: imageUrl("photo-1594736797933-d0501ba2fe65"), colors: ["Amber", "Gold"], sizes: ["50 ml", "100 ml"], badge: "New arrival", featured: true, isNew: true },
  { id: "oud-horizon-eau-de-parfum", name: "Oud Horizon Eau de Parfum", category: "Perfumes", price: 192000, description: "A rich oud fragrance with a polished, lasting character.", image: imageUrl("photo-1608571423902-eed4a5ad8108"), colors: ["Amber", "Black"], sizes: ["50 ml", "100 ml"], featured: false, isNew: true },
  { id: "noir-saffron-fragrance", name: "Noir Saffron Fragrance", category: "Perfumes", price: 178000, description: "A confident blend of warm amber and smooth woods.", image: imageUrl("photo-1585386959984-a4155224a1ad"), colors: ["Black", "Gold"], sizes: ["50 ml", "100 ml"], featured: false, isNew: false },
  { id: "luxe-travel-satchel", name: "Luxe Travel Satchel", category: "Ladies' Bags", price: 285000, description: "A practical, structured carryall for polished days away.", image: imageUrl("photo-1553062407-98eeb64c6a62"), colors: ["Black", "Tan"], sizes: ["One size"], badge: "Featured", featured: true, isNew: true },
  { id: "soft-curve-shoulder-bag", name: "Soft Curve Shoulder Bag", category: "Ladies' Bags", price: 245000, description: "A graceful everyday silhouette with a softly structured shape.", image: imageUrl("photo-1598532163257-ae3c6b2524b6"), colors: ["Black", "Burgundy", "Cream"], sizes: ["One size"], featured: false, isNew: true },
  { id: "textured-cotton-shirt", name: "Textured Cotton Shirt", category: "Men's Shirts", price: 118000, description: "A crisp textured shirt for relaxed and smart occasions.", image: imageUrl("photo-1576566588028-4147f3842f27"), colors: ["White", "Blue", "Black"], sizes: ["S", "M", "L", "XL", "XXL"], featured: false, isNew: true },
  { id: "modern-occasion-suit", name: "Modern Occasion Suit", category: "Men's Suits", price: 585000, description: "A contemporary tailored suit for celebrations and formal events.", image: imageUrl("photo-1503342217505-b0a15ec3261c"), colors: ["Black", "Navy", "Charcoal"], sizes: ["S", "M", "L", "XL"], badge: "New arrival", featured: true, isNew: true },
  { id: "beauty-essentials-set", name: "Beauty Essentials Set", category: "Accessories", price: 98000, description: "A thoughtfully assembled set of everyday personal-care essentials.", image: imageUrl("photo-1596462502278-27bfdc403348"), colors: ["Rose", "Neutral"], sizes: ["One size"], featured: false, isNew: false },
  { id: "classic-leather-ankle-boots", name: "Men's Classic Leather Lace-Up Work Boots", category: "Men's Boots", price: 245000, description: "Hard-wearing leather work boots with secure lacing and a timeless profile.", image: imageUrl("photo-1608256246200-53e635b5b65f"), colors: ["Black", "Dark Brown"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], badge: "Featured", featured: true, isNew: true },
  { id: "heritage-lace-up-boots", name: "Men's Heritage Lace-Up Boots", category: "Men's Boots", price: 255000, description: "A sturdy men's lace-up boot with classic leather detailing.", image: imageUrl("photo-1520639888713-7851133b1ed0"), colors: ["Brown", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: false },
  { id: "city-leather-combat-boots", name: "Men's City Lace-Up Combat Boots", category: "Men's Boots", price: 285000, description: "A durable lace-up combat boot with confident city styling.", image: imageUrl("photo-1608231387042-66d1773070a5"), colors: ["Black", "Olive"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: true, isNew: true },
  { id: "signature-lace-up-boots", name: "Men's Signature Leather Lace-Up Boots", category: "Men's Boots", price: 230000, description: "A distinctive men's lace-up boot with a polished leather finish.", image: imageUrl("photo-1551107696-a4b0c5a0d9a2"), colors: ["Black", "Chestnut"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "artisan-brown-lace-ups", name: "Men's Artisan Brown Lace-Up Boots", category: "Men's Boots", price: 268000, description: "Brown leather boots with a sturdy sole and heritage-inspired lacing.", image: imageUrl("photo-1638609348722-aa2a3a67db26"), colors: ["Brown", "Dark Brown"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], badge: "New arrival", featured: true, isNew: true },
  { id: "timber-trail-lace-ups", name: "Men's Timber Trail Lace-Up Boots", category: "Men's Boots", price: 310000, description: "Rugged men's work boots with a traditional lace-up front.", image: imageUrl("photo-1706587161985-abec97ad6af8"), colors: ["Tan", "Brown"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "pavement-brown-lace-ups", name: "Men's Pavement Brown Lace-Up Boots", category: "Men's Boots", price: 238000, description: "Brown leather lace-up boots with a classic ankle profile.", image: imageUrl("photo-1511283402428-355853756676"), colors: ["Brown", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "workbench-leather-lace-ups", name: "Men's Workbench Leather Lace-Up Boots", category: "Men's Boots", price: 295000, description: "Traditional leather work boots with a reinforced lace-up front.", image: imageUrl("photo-1542840410-51984f97783a"), colors: ["Brown", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], badge: "Featured", featured: true, isNew: false },
  { id: "winter-guard-black-lace-ups", name: "Men's Winter Guard Black Lace-Up Boots", category: "Men's Boots", price: 325000, description: "Black leather lace-up boots with a sturdy cold-weather profile.", image: imageUrl("photo-1581803274518-8d42d0c961de"), colors: ["Black", "Charcoal"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: true },
  { id: "distressed-brown-lace-ups", name: "Men's Distressed Brown Lace-Up Boots", category: "Men's Boots", price: 255000, description: "Relaxed brown leather boots finished with a classic lace front.", image: imageUrl("photo-1774112071355-e96575421bd7"), colors: ["Brown", "Tan"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: false },
  { id: "black-leather-six-eye-boots", name: "Men's Black Leather Six-Eye Lace-Up Boots", category: "Men's Boots", price: 315000, description: "A substantial black leather boot with a classic six-eye lace front.", image: imageUrl("photo-1608256255256-411200dde1ee"), colors: ["Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], badge: "New arrival", featured: true, isNew: true },
  { id: "two-tone-combat-lace-ups", name: "Men's Two-Tone Combat Lace-Up Boots", category: "Men's Boots", price: 305000, description: "Black and brown leather combat boots with secure front lacing.", image: imageUrl("photo-1621996659546-b0dd8b7e57af"), colors: ["Black and Brown"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "classic-walnut-lace-ups", name: "Men's Classic Walnut Lace-Up Boots", category: "Men's Boots", price: 275000, description: "Walnut leather lace-up boots with a clean, versatile shape.", image: imageUrl("photo-1608256264403-74a5ab98311e"), colors: ["Walnut", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: false },
  { id: "autumn-walk-lace-up-boots", name: "Men's Autumn Walk Lace-Up Boots", category: "Men's Boots", price: 258000, description: "Leather lace-up boots for everyday wear through cooler months.", image: imageUrl("photo-1611452416962-84935f992748"), colors: ["Brown", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "brown-pavement-lace-up-boots", name: "Men's Brown Pavement Lace-Up Boots", category: "Men's Boots", price: 248000, description: "A versatile brown leather lace-up boot with a durable finish.", image: imageUrl("photo-1558412915-9db18f878b23"), colors: ["Brown", "Cognac"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "smoke-grey-hiking-lace-ups", name: "Men's Smoke Grey Hiking Lace-Up Boots", category: "Men's Boots", price: 335000, description: "Supportive grey hiking boots with an adjustable lace-up fit.", image: imageUrl("photo-1785711249106-e81408434ab3"), colors: ["Grey", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], badge: "Featured", featured: true, isNew: true },
  { id: "brown-leather-hiker-lace-ups", name: "Men's Brown Leather Hiker Lace-Ups", category: "Men's Boots", price: 325000, description: "Brown hiking boots with a supportive lace-up design.", image: imageUrl("photo-1542840411-4275cdfe7782"), colors: ["Brown", "Dark Brown"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "urban-lace-up-combat-boots", name: "Men's Urban Lace-Up Combat Boots", category: "Men's Boots", price: 295000, description: "A confident black combat boot with a sturdy lace-up front.", image: imageUrl("photo-1544592444-7ed1193f5336"), colors: ["Black", "Olive"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "black-ankle-lace-up-boots", name: "Men's Black Ankle Lace-Up Boots", category: "Men's Boots", price: 275000, description: "A refined black ankle boot secured with traditional lacing.", image: imageUrl("photo-1581803274668-261faa12dca7"), colors: ["Black", "Charcoal"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "field-ready-lace-up-boots", name: "Men's Field-Ready Lace-Up Boots", category: "Men's Boots", price: 320000, description: "Leather field boots with a stable sole and adjustable laces.", image: imageUrl("photo-1550173093-3cab1f3b671f"), colors: ["Brown", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], badge: "New arrival", featured: true, isNew: true },
  { id: "heritage-military-lace-ups", name: "Men's Heritage Military Lace-Up Boots", category: "Men's Boots", price: 298000, description: "A military-inspired leather boot with an authentic lace-up front.", image: imageUrl("photo-1605737640001-3ed7090f6ee5"), colors: ["Black", "Olive"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "black-polished-lace-ups", name: "Men's Black Polished Lace-Up Boots", category: "Men's Boots", price: 330000, description: "Polished black leather lace-ups with a sharp formal profile.", image: imageUrl("photo-1561222015-1862bf2f483a"), colors: ["Black", "Cognac"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "brown-six-eye-lace-ups", name: "Men's Brown Six-Eye Lace-Up Boots", category: "Men's Boots", price: 278000, description: "A brown leather six-eye boot with a sturdy everyday sole.", image: imageUrl("photo-1504826023244-4694f7330c73"), colors: ["Brown", "Chestnut"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "dark-brown-tread-lace-ups", name: "Men's Dark Brown Tread Lace-Up Boots", category: "Men's Boots", price: 288000, description: "Dark brown leather boots with a durable tread and front laces.", image: imageUrl("photo-1730724620919-31f349cd1b2e"), colors: ["Dark Brown", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "woodland-trail-lace-ups", name: "Men's Woodland Trail Lace-Up Boots", category: "Men's Boots", price: 340000, description: "Men's trail boots with a supportive lace-up fit for outdoor wear.", image: imageUrl("photo-1568020874900-4ffa1bdc16f9"), colors: ["Brown", "Olive"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], badge: "Featured", featured: true, isNew: true },
  { id: "slate-grey-lace-up-boots", name: "Men's Slate Grey Lace-Up Boots", category: "Men's Boots", price: 268000, description: "A versatile grey boot with a visible lace-up front.", image: imageUrl("photo-1520683111718-ef0a20c6a470"), colors: ["Grey", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "black-leather-lace-up-work-boots", name: "Men's Black Leather Lace-Up Work Boots", category: "Men's Boots", price: 315000, description: "Tough black leather work boots with a fully laced front.", image: imageUrl("photo-1589185581028-d9674e13dfc0"), colors: ["Black", "Charcoal"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "espresso-leather-lace-ups", name: "Men's Espresso Leather Lace-Up Boots", category: "Men's Boots", price: 282000, description: "Rich espresso leather lace-ups with a refined ankle-high cut.", image: imageUrl("photo-1608256301056-3806c4970e64"), colors: ["Espresso", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"], featured: false, isNew: false },
  { id: "charcoal-six-eye-lace-ups", name: "Men's Charcoal Six-Eye Lace-Up Boots", category: "Men's Boots", price: 295000, description: "A charcoal lace-up boot with a sturdy, versatile profile.", image: imageUrl("photo-1610903510879-803c9ed3b088"), colors: ["Charcoal", "Black"], sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"], featured: false, isNew: true },
  { id: "heritage-gold-watch", name: "Heritage Gold Watch", category: "Watches", price: 195000, description: "A polished gold-tone watch with a timeless everyday face.", image: "3.jpg", colors: ["Gold", "Silver"], sizes: ["40 mm", "42 mm"], badge: "Featured", featured: true, isNew: true },
  { id: "classic-silver-watch", name: "Classic Silver Watch", category: "Watches", price: 185000, description: "A clean silver-tone design for workdays and special occasions.", image: "4.webp", colors: ["Silver", "Gold"], sizes: ["40 mm", "42 mm"], featured: false, isNew: true },
  { id: "midnight-dial-watch", name: "Midnight Dial Watch", category: "Watches", price: 215000, description: "A confident dark dial paired with a refined metal bracelet.", image: "5.webp", colors: ["Black", "Silver"], sizes: ["40 mm", "42 mm"], badge: "New arrival", featured: true, isNew: true },
  { id: "rose-gold-elegance-watch", name: "Rose Gold Elegance Watch", category: "Watches", price: 205000, description: "Warm rose-gold tones give this elegant watch a distinctive finish.", image: "6.jpg", colors: ["Rose Gold", "Gold"], sizes: ["36 mm", "40 mm"], featured: false, isNew: false },
  { id: "minimalist-leather-watch", name: "Minimalist Leather Watch", category: "Watches", price: 175000, description: "A pared-back dial and leather strap for understated style.", image: "6.webp", colors: ["Black", "Brown"], sizes: ["38 mm", "40 mm"], featured: false, isNew: true },
  { id: "executive-chronograph-watch", name: "Executive Chronograph Watch", category: "Watches", price: 265000, description: "A bold chronograph look made for a sharp, modern wardrobe.", image: "7.jpg", colors: ["Black", "Silver"], sizes: ["42 mm", "44 mm"], badge: "Featured", featured: true, isNew: true },
  { id: "signature-link-watch", name: "Signature Link Watch", category: "Watches", price: 235000, description: "A refined link bracelet and versatile dial for everyday wear.", image: "8.jpg", colors: ["Silver", "Gold"], sizes: ["40 mm", "42 mm"], featured: false, isNew: false },
  { id: "royal-amber-extrait", name: "Royal Amber Extrait", category: "Perfumes", price: 485000, description: "A rich amber extrait with a warm, elegant signature and lasting presence.", image: imageUrl("photo-1458538977777-0549b2370168"), colors: ["Amber"], sizes: ["50 ml", "100 ml"], badge: "Featured", featured: true, isNew: true },
  { id: "oud-imperial-reserve", name: "Oud Imperial Reserve", category: "Perfumes", price: 620000, description: "A distinguished oud fragrance crafted for memorable evenings.", image: imageUrl("photo-1622618991746-fe6004db3a47"), colors: ["Oud", "Amber"], sizes: ["50 ml", "100 ml"], badge: "New arrival", featured: true, isNew: true },
  { id: "velvet-rose-parfum", name: "Velvet Rose Parfum", category: "Perfumes", price: 360000, description: "A graceful rose parfum with a soft, polished floral trail.", image: imageUrl("photo-1543422655-ac1c6ca993ed"), colors: ["Rose", "Ivory"], sizes: ["50 ml", "100 ml"], featured: false, isNew: true },
  { id: "saffron-nocturne-extrait", name: "Saffron Nocturne Extrait", category: "Perfumes", price: 595000, description: "A deep evening extrait layered with warm woods and rich golden notes.", image: imageUrl("photo-1557170334-a9632e77c6e4"), colors: ["Black", "Gold"], sizes: ["50 ml", "100 ml"], badge: "Featured", featured: true, isNew: true },
  { id: "santal-elite-eau-de-parfum", name: "Santal Elite Eau de Parfum", category: "Perfumes", price: 425000, description: "Smooth sandalwood and refined musk create a poised signature scent.", image: imageUrl("photo-1594125311687-3b1b3eafa9f4"), colors: ["Sandalwood", "Cream"], sizes: ["50 ml", "100 ml"], featured: false, isNew: true },
  { id: "jasmine-veil-parfum", name: "Jasmine Veil Parfum", category: "Perfumes", price: 385000, description: "An elegant white-floral parfum with a luminous, graceful finish.", image: imageUrl("photo-1588405748880-12d1d2a59f75"), colors: ["Ivory", "Gold"], sizes: ["50 ml", "100 ml"], featured: false, isNew: true },
  { id: "maison-noir-intense", name: "Maison Noir Intense", category: "Perfumes", price: 520000, description: "A confident dark fragrance with a smooth, sophisticated character.", image: imageUrl("photo-1566977776052-6e61e35bf9be"), colors: ["Black", "Deep Amber"], sizes: ["50 ml", "100 ml"], badge: "New arrival", featured: true, isNew: true },
  { id: "citrus-royale-eau-de-parfum", name: "Citrus Royale Eau de Parfum", category: "Perfumes", price: 335000, description: "Bright citrus notes settle into a clean, elegant woody base.", image: imageUrl("photo-1615108395437-df128ad79e80"), colors: ["Citrus", "Gold"], sizes: ["50 ml", "100 ml"], featured: false, isNew: true },
  { id: "golden-myrrh-reserve", name: "Golden Myrrh Reserve", category: "Perfumes", price: 575000, description: "A luxurious resinous fragrance with a warm, distinctive finish.", image: imageUrl("photo-1733660227168-444e3c751a1e"), colors: ["Myrrh", "Amber"], sizes: ["50 ml", "100 ml"], badge: "Featured", featured: true, isNew: true },
  { id: "atelier-ambre-signature", name: "Atelier Ambre Signature", category: "Perfumes", price: 455000, description: "A polished amber signature balanced with soft woods and musk.", image: imageUrl("photo-1733660227163-01bc46e0d7d7"), colors: ["Amber", "Ivory"], sizes: ["50 ml", "100 ml"], featured: false, isNew: true },
);

const categories = [
  { name: "Luxury Perfumes", filter: "Perfumes", image: imageUrl("photo-1594035910387-fea47794261f", 1000), position: "center" },
  { name: "Watches", filter: "Watches", image: "3.jpg", position: "center" },
  { name: "Men's Boots", filter: "Men's Boots", image: imageUrl("photo-1608256246200-53e635b5b65f", 1000), position: "center" },
  { name: "Men's Shirts", filter: "Men's Shirts", image: imageUrl("photo-1598033129183-c4f50c736f10", 900), position: "center" },
  { name: "Men's Trousers", filter: "Men's Trousers", image: imageUrl("photo-1473966968600-fa801b869a1a", 900), position: "center" },
  { name: "Men's Suits", filter: "Men's Suits", image: imageUrl("photo-1617137968427-85924c800a22", 900), position: "center" },
  { name: "Ladies' Classy Bags", filter: "Ladies' Bags", image: imageUrl("photo-1584917865442-de89df76afd3", 900), position: "center" },
  { name: "Curated Accessories", filter: "Accessories", image: imageUrl("photo-1598808503746-f34c53b9323e", 900), position: "center" },
  { name: "New Arrivals", filter: "New Arrivals", image: imageUrl("photo-1483985988355-763728e1935b", 900), position: "center" },
  { name: "Featured Collection", filter: "Featured", image: imageUrl("photo-1529139574466-a303027c1d8b", 900), position: "center" },
];

const money = new Intl.NumberFormat("en-UG");
const productGrid = document.querySelector("#product-grid");
const arrivalGrid = document.querySelector("#arrival-grid");
const filterList = document.querySelector("#filter-list");
const productCount = document.querySelector("#product-count");
const searchInput = document.querySelector("#product-search");
const sortSelect = document.querySelector("#product-sort");
const emptyResults = document.querySelector("#empty-results");
const dialog = document.querySelector("#product-dialog");
const dialogContent = document.querySelector("#dialog-content");
let activeFilter = "All";

function formatPrice(price) {
  return `UGX ${money.format(price)}`;
}

function whatsappUrl(message) {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}

function orderMessage(product, quantity = 1) {
  return `Hello OFN Luxe, I am interested in ${product.name} priced at ${formatPrice(product.price)}.${quantity > 1 ? ` Quantity: ${quantity}.` : ""} Is it available?`;
}

function renderCategories() {
  document.querySelector("#category-grid").innerHTML = categories.map((category, index) => `
    <a class="category-card category-card-${index + 1}" href="#shop" data-set-category="${category.filter}" style="--category-image: url('${category.image}'); --image-position: ${category.position}">
      <span class="category-number">0${index + 1}</span><span class="category-copy"><strong>${category.name}</strong><span>Shop collection <b aria-hidden="true">&#8594;</b></span></span>
    </a>`).join("");
}

function renderFilters() {
  const filters = ["All", "Perfumes", "Men's Boots", "Watches", "Men", "Men's Shirts", "Men's Trousers", "Men's Suits", "Women", "Ladies' Bags", "Accessories", "New Arrivals", "Featured"];
  filterList.innerHTML = filters.map((filter) => `<button type="button" class="filter-button${filter === activeFilter ? " is-active" : ""}" data-filter="${filter}" aria-pressed="${filter === activeFilter}">${filter}</button>`).join("");
}

function productCard(product, arrival = false) {
  const badge = arrival ? "New" : product.badge;
  return `<article class="product-card" data-product-id="${product.id}">
    <button type="button" class="product-image-button" data-action="details" data-id="${product.id}" aria-label="View ${product.name} details">
      <img src="${product.image}" alt="${product.name}" loading="lazy">${badge ? `<span class="product-badge">${badge}</span>` : ""}<span class="image-quick-view">Discover piece &#8599;</span>
    </button>
    <div class="product-info"><p class="product-category">${product.category}</p><h3>${product.name}</h3><p class="product-description">${product.description}</p><div class="product-buy-row"><strong class="product-price">${formatPrice(product.price)}</strong><button class="detail-button" type="button" data-action="details" data-id="${product.id}">View details <span>&#8599;</span></button></div>
      <a class="whatsapp-order" href="${whatsappUrl(orderMessage(product))}" target="_blank" rel="noopener noreferrer" aria-label="Order ${product.name} on WhatsApp"><span aria-hidden="true">WA</span> Order on WhatsApp</a>
    </div>
  </article>`;
}

function visibleProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let results = products.filter((product) => {
    const matchesCategory = activeFilter === "All" || (activeFilter === "New Arrivals" ? product.isNew : activeFilter === "Featured" ? product.featured : activeFilter === "Men" ? product.category.startsWith("Men's") : activeFilter === "Women" ? product.category === "Ladies' Bags" : product.category === activeFilter);
    const matchesSearch = !query || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  if (sortSelect.value === "price-low") results.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-high") results.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "name") results.sort((a, b) => a.name.localeCompare(b.name));
  return results;
}

function renderProducts() {
  const results = visibleProducts();
  productGrid.innerHTML = results.map((product) => productCard(product)).join("");
  productCount.textContent = `${results.length} ${results.length === 1 ? "piece" : "pieces"}`;
  emptyResults.hidden = results.length > 0;
}

function renderArrivals() {
  arrivalGrid.innerHTML = products.filter((product) => product.isNew).slice(0, 8).map((product) => productCard(product, true)).join("");
}

function showProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 2);
  const optionLabel = "Colour";
  const sizeLabel = "Size";
  dialogContent.innerHTML = `<div class="product-detail"><div class="detail-gallery"><img class="detail-main-image" src="${product.image.replace("w=760", "w=1200")}" alt="${product.name}" fetchpriority="high"><span class="detail-image-label">OFN LUXE / ${product.category}</span></div><div class="detail-copy"><p class="product-category">${product.category}</p><h2 id="detail-name">${product.name}</h2><p class="detail-price">${formatPrice(product.price)}</p><p class="detail-description">${product.description} Carefully selected by OFN Luxe for customers who appreciate elegance, confidence and quality.</p><label class="variant-label" for="color-choice">${optionLabel}<select id="color-choice">${product.colors.map((color) => `<option>${color}</option>`).join("")}</select></label><label class="variant-label" for="size-choice">${sizeLabel}<select id="size-choice">${product.sizes.map((size) => `<option>${size}</option>`).join("")}</select></label><label class="variant-label quantity-label" for="quantity-choice">Quantity<input id="quantity-choice" type="number" min="1" max="20" value="1"></label><a class="lux-button lux-button-dark detail-order" href="${whatsappUrl(orderMessage(product))}" target="_blank" rel="noopener noreferrer">Order on WhatsApp <span>&#8599;</span></a><a class="detail-contact" href="mailto:${contact.email}">Have a question? Contact us</a>${related.length ? `<div class="related-products"><h3>More from ${product.category}</h3><div>${related.map((item) => `<button type="button" data-action="details" data-id="${item.id}"><img src="${item.image}" alt="" loading="lazy"><span>${item.name}</span><strong>${formatPrice(item.price)}</strong></button>`).join("")}</div></div>` : ""}</div></div>`;
  dialog.showModal();
}

function updateDetailOrder() {
  const productName = dialog.querySelector("#detail-name")?.textContent;
  const product = products.find((item) => item.name === productName);
  if (!product) return;
  const quantity = Math.max(1, Math.min(20, Number(dialog.querySelector("#quantity-choice").value) || 1));
  dialog.querySelector("#quantity-choice").value = String(quantity);
  const color = dialog.querySelector("#color-choice").value;
  const size = dialog.querySelector("#size-choice").value;
  const optionLabel = "Colour";
  const sizeLabel = "Size";
  const message = `${orderMessage(product, quantity)} ${optionLabel}: ${color}. ${sizeLabel}: ${size}.`;
  dialog.querySelector(".detail-order").href = whatsappUrl(message);
}

function closeMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  document.querySelector(".site-nav").classList.remove("is-open");
}

function setCategory(filter) {
  activeFilter = filter;
  searchInput.value = "";
  renderFilters();
  renderProducts();
}

renderCategories();
renderFilters();
renderProducts();
renderArrivals();

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const isExpanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!isExpanded));
  event.currentTarget.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  document.querySelector(".site-nav").classList.toggle("is-open", !isExpanded);
});

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  const categoryLink = event.target.closest("[data-set-category]");
  const categoryNav = event.target.closest("[data-category-link]");
  const productButton = event.target.closest("[data-action='details']");
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    renderFilters();
    renderProducts();
  }
  if (categoryLink) setCategory(categoryLink.dataset.setCategory);
  if (categoryNav) {
    event.preventDefault();
    setCategory(categoryNav.dataset.categoryLink);
    document.querySelector("#shop").scrollIntoView({behavior: "smooth"});
  }
  if (productButton) showProduct(productButton.dataset.id);
  if (event.target === dialog) dialog.close();
  if (event.target.closest(".site-nav a")) closeMenu();
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
dialog.addEventListener("click", (event) => {
  if (event.target.closest(".dialog-close")) dialog.close();
});
dialog.addEventListener("input", updateDetailOrder);
dialog.addEventListener("change", updateDetailOrder);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const message = `Hello OFN Luxe, my name is ${formData.get("name")}. ${formData.get("message")}`;
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
});