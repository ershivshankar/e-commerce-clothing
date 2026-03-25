const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const prisma = new PrismaClient();

const categories = [
    // Men's categories
    { name: 'Jeans', slug: 'jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop', gender: 'men' },
    { name: 'T-Shirts', slug: 't-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', gender: 'men' },
    { name: 'Shirts', slug: 'shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', gender: 'men' },
    { name: 'Jeans Jacket', slug: 'jeans-jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop', gender: 'men' },
    // Women's categories
    { name: 'Kurtas', slug: 'kurtas', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop', gender: 'women' },
    { name: 'Lehengas', slug: 'lehengas', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop', gender: 'women' },
    { name: 'Sarees', slug: 'sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop', gender: 'women' },
    { name: 'Dresses', slug: 'dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop', gender: 'women' },
    { name: 'Anarkalis', slug: 'anarkalis', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop', gender: 'women' },
    { name: 'Kaftans', slug: 'kaftans', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop', gender: 'women' },
    { name: 'Sharara Sets', slug: 'sharara-sets', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop', gender: 'women' },
];

const products = [
    // Men - Jeans
    { name: 'Classic Slim Fit Jeans', price: 1899, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop', category: 'jeans', gender: 'men', sizes: ['28', '30', '32', '34', '36'], colors: ['Blue', 'Black', 'Dark Blue'], occasion: 'casual', season: 'all', isNew: false, description: 'Premium slim fit jeans crafted from stretch denim for everyday comfort.' },
    { name: 'Ripped Skinny Jeans', price: 2199, originalPrice: 2999, image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop', category: 'jeans', gender: 'men', sizes: ['28', '30', '32', '34'], colors: ['Light Blue', 'Black'], occasion: 'casual', season: 'all', isNew: true, description: 'Trendy ripped skinny jeans with a modern distressed finish.' },
    { name: 'Straight Fit Dark Wash', price: 2499, originalPrice: 3299, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop', category: 'jeans', gender: 'men', sizes: ['30', '32', '34', '36', '38'], colors: ['Dark Blue', 'Black'], occasion: 'casual', season: 'all', isNew: false, description: 'Classic straight fit jeans in a rich dark wash.' },
    { name: 'Tapered Comfort Jeans', price: 1799, originalPrice: 2399, image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop', category: 'jeans', gender: 'men', sizes: ['28', '30', '32', '34'], colors: ['Blue', 'Grey'], occasion: 'casual', season: 'all', isNew: false, description: 'Relaxed tapered jeans with a comfortable elastane blend.' },
    { name: 'Bootcut Premium Denim', price: 2899, originalPrice: 3799, image: 'https://images.unsplash.com/photo-1475178626620-a4d074967571?w=600&h=800&fit=crop', category: 'jeans', gender: 'men', sizes: ['30', '32', '34', '36'], colors: ['Indigo', 'Black'], occasion: 'casual', season: 'all', isNew: true, description: 'Premium bootcut denim with vintage-inspired detailing.' },

    // Men - T-Shirts
    { name: 'Essential Cotton Crew Tee', price: 799, originalPrice: 1199, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop', category: 't-shirts', gender: 'men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Black', 'Navy', 'Grey'], occasion: 'casual', season: 'all', isNew: false, description: 'Everyday essential crew neck tee in premium cotton.' },
    { name: 'Graphic Print Oversized Tee', price: 1299, originalPrice: 1799, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop', category: 't-shirts', gender: 'men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Olive'], occasion: 'casual', season: 'summer', isNew: true, description: 'Statement graphic tee with an oversized relaxed fit.' },
    { name: 'Polo Classic Fit', price: 1499, originalPrice: 1999, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop', category: 't-shirts', gender: 'men', sizes: ['S', 'M', 'L', 'XL'], colors: ['Navy', 'White', 'Red', 'Green'], occasion: 'casual', season: 'all', isNew: false, description: 'Timeless polo in breathable piqué cotton.' },
    { name: 'Striped V-Neck Tee', price: 999, originalPrice: 1499, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop', category: 't-shirts', gender: 'men', sizes: ['S', 'M', 'L', 'XL'], colors: ['Blue/White', 'Black/White'], occasion: 'casual', season: 'summer', isNew: false, description: 'Smart striped v-neck with a tailored relaxed fit.' },
    { name: 'Henley Long Sleeve', price: 1599, originalPrice: 2199, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop', category: 't-shirts', gender: 'men', sizes: ['M', 'L', 'XL'], colors: ['Charcoal', 'Burgundy', 'Olive'], occasion: 'casual', season: 'winter', isNew: true, description: 'Layering essential henley with premium waffle texture.' },

    // Men - Shirts
    { name: 'Oxford Button-Down', price: 2299, originalPrice: 2999, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop', category: 'shirts', gender: 'men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Light Blue', 'Pink'], occasion: 'formal', season: 'all', isNew: false, description: 'Classic Oxford button-down in premium weave cotton.' },
    { name: 'Linen Casual Shirt', price: 2699, originalPrice: 3499, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop', category: 'shirts', gender: 'men', sizes: ['S', 'M', 'L', 'XL'], colors: ['Beige', 'White', 'Sky Blue'], occasion: 'casual', season: 'summer', isNew: true, description: 'Breezy linen shirt perfect for summer occasions.' },
    { name: 'Mandarin Collar Shirt', price: 1999, originalPrice: 2699, image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&h=800&fit=crop', category: 'shirts', gender: 'men', sizes: ['M', 'L', 'XL'], colors: ['Black', 'Navy', 'White'], occasion: 'festive', season: 'all', isNew: false, description: 'Contemporary mandarin collar with subtle texture.' },
    { name: 'Checked Flannel Shirt', price: 1899, originalPrice: 2499, image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&h=800&fit=crop', category: 'shirts', gender: 'men', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Red/Black', 'Blue/White', 'Green/Black'], occasion: 'casual', season: 'winter', isNew: false, description: 'Warm brushed flannel in classic check patterns.' },

    // Men - Jeans Jacket
    { name: 'Classic Denim Jacket', price: 3499, originalPrice: 4499, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop', category: 'jeans-jacket', gender: 'men', sizes: ['S', 'M', 'L', 'XL'], colors: ['Blue', 'Black', 'Light Wash'], occasion: 'casual', season: 'winter', isNew: false, description: 'Iconic denim jacket with vintage-style metal buttons.' },
    { name: 'Sherpa Lined Denim Jacket', price: 4299, originalPrice: 5499, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=800&fit=crop', category: 'jeans-jacket', gender: 'men', sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Dark Blue', 'Black'], occasion: 'casual', season: 'winter', isNew: true, description: 'Warm sherpa-lined denim jacket for cold weather.' },
    { name: 'Distressed Trucker Jacket', price: 3899, originalPrice: 4999, image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600&h=800&fit=crop', category: 'jeans-jacket', gender: 'men', sizes: ['S', 'M', 'L', 'XL'], colors: ['Medium Wash', 'Black'], occasion: 'casual', season: 'all', isNew: false, description: 'Edgy distressed denim trucker with raw edge details.' },

    // Women - Kurtas
    { name: 'Embroidered Chanderi Kurta', price: 2999, originalPrice: 3999, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop', category: 'kurtas', gender: 'women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Yellow', 'Pink', 'Teal'], occasion: 'festive', season: 'all', isNew: true, description: 'Delicate chanderi silk kurta with intricate thread embroidery.' },
    { name: 'Cotton Straight Kurta', price: 1499, originalPrice: 1999, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop', category: 'kurtas', gender: 'women', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Blue', 'Green'], occasion: 'casual', season: 'summer', isNew: false, description: 'Comfortable cotton kurta for everyday elegance.' },
    { name: 'Anarkali Style Kurta', price: 3499, originalPrice: 4499, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'kurtas', gender: 'women', sizes: ['S', 'M', 'L', 'XL'], colors: ['Maroon', 'Navy', 'Emerald'], occasion: 'wedding', season: 'all', isNew: false, description: 'Flared anarkali-style kurta with mirror work detailing.' },
    { name: 'Printed A-Line Kurta', price: 1799, originalPrice: 2299, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop', category: 'kurtas', gender: 'women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Multicolor', 'Blue Print', 'Red Print'], occasion: 'casual', season: 'all', isNew: true, description: 'Vibrant block-printed A-line kurta in pure cotton.' },

    // Women - Lehengas
    { name: 'Bridal Red Lehenga', price: 24999, originalPrice: 34999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'lehengas', gender: 'women', sizes: ['S', 'M', 'L', 'XL'], colors: ['Red', 'Maroon'], occasion: 'wedding', season: 'all', isNew: true, description: 'Stunning bridal lehenga with heavy zardozi and sequin work.' },
    { name: 'Pastel Organza Lehenga', price: 18999, originalPrice: 24999, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop', category: 'lehengas', gender: 'women', sizes: ['S', 'M', 'L'], colors: ['Peach', 'Mint', 'Lavender'], occasion: 'wedding', season: 'all', isNew: false, description: 'Ethereal organza lehenga with delicate floral motifs.' },
    { name: 'Velvet Winter Lehenga', price: 21999, originalPrice: 28999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'lehengas', gender: 'women', sizes: ['S', 'M', 'L', 'XL'], colors: ['Royal Blue', 'Wine', 'Emerald'], occasion: 'wedding', season: 'winter', isNew: false, description: 'Luxurious velvet lehenga with golden zari border.' },
    { name: 'Georgette Party Lehenga', price: 12999, originalPrice: 16999, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop', category: 'lehengas', gender: 'women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Pink', 'Gold', 'Turquoise'], occasion: 'festive', season: 'all', isNew: true, description: 'Lightweight georgette lehenga with sequin scatter work.' },

    // Women - Sarees
    { name: 'Banarasi Silk Saree', price: 15999, originalPrice: 21999, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop', category: 'sarees', gender: 'women', sizes: ['Free Size'], colors: ['Red', 'Gold', 'Purple'], occasion: 'wedding', season: 'all', isNew: false, description: 'Handwoven Banarasi silk saree with rich gold zari.' },
    { name: 'Chiffon Printed Saree', price: 3999, originalPrice: 5499, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop', category: 'sarees', gender: 'women', sizes: ['Free Size'], colors: ['Floral', 'Abstract', 'Geometric'], occasion: 'casual', season: 'summer', isNew: true, description: 'Lightweight chiffon saree with contemporary prints.' },
    { name: 'Kanjivaram Silk Saree', price: 22999, originalPrice: 29999, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop', category: 'sarees', gender: 'women', sizes: ['Free Size'], colors: ['Magenta', 'Green', 'Royal Blue'], occasion: 'wedding', season: 'all', isNew: false, description: 'Authentic Kanjivaram silk with traditional temple border.' },
    { name: 'Linen Handloom Saree', price: 4999, originalPrice: 6999, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop', category: 'sarees', gender: 'women', sizes: ['Free Size'], colors: ['Beige', 'Grey', 'Teal'], occasion: 'casual', season: 'summer', isNew: false, description: 'Handloom linen saree with subtle stripe patterns.' },

    // Women - Dresses
    { name: 'Floral Maxi Dress', price: 3499, originalPrice: 4499, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop', category: 'dresses', gender: 'women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Floral Blue', 'Floral Pink', 'Floral Yellow'], occasion: 'casual', season: 'summer', isNew: true, description: 'Flowing floral maxi with a flattering wrap silhouette.' },
    { name: 'Bodycon Cocktail Dress', price: 4999, originalPrice: 6499, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop', category: 'dresses', gender: 'women', sizes: ['XS', 'S', 'M', 'L'], colors: ['Black', 'Red', 'Navy'], occasion: 'festive', season: 'all', isNew: false, description: 'Sleek bodycon cocktail dress with subtle shimmer.' },
    { name: 'A-Line Midi Dress', price: 2799, originalPrice: 3699, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop', category: 'dresses', gender: 'women', sizes: ['S', 'M', 'L', 'XL'], colors: ['Olive', 'Rust', 'Teal'], occasion: 'casual', season: 'all', isNew: false, description: 'Classic A-line midi with pockets and belted waist.' },
    { name: 'Satin Slip Dress', price: 3999, originalPrice: 5299, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop', category: 'dresses', gender: 'women', sizes: ['XS', 'S', 'M', 'L'], colors: ['Champagne', 'Black', 'Emerald'], occasion: 'festive', season: 'all', isNew: true, description: 'Luxurious satin slip dress with cowl neckline.' },

    // Women - Anarkalis
    { name: 'Floor Length Anarkali', price: 5999, originalPrice: 7999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'anarkalis', gender: 'women', sizes: ['S', 'M', 'L', 'XL'], colors: ['Royal Blue', 'Wine', 'Bottle Green'], occasion: 'wedding', season: 'all', isNew: true, description: 'Majestic floor-length anarkali with heavy dupatta.' },
    { name: 'Frock Style Anarkali', price: 4499, originalPrice: 5999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'anarkalis', gender: 'women', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Coral', 'Sky Blue', 'Mauve'], occasion: 'festive', season: 'all', isNew: false, description: 'Modern frock-style anarkali with threadwork embroidery.' },
    { name: 'Georgette Net Anarkali', price: 6999, originalPrice: 8999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'anarkalis', gender: 'women', sizes: ['S', 'M', 'L'], colors: ['Peach', 'Mint', 'Lilac'], occasion: 'wedding', season: 'all', isNew: false, description: 'Ethereal georgette net anarkali with sequin embellishment.' },

    // Women - Kaftans
    { name: 'Silk Printed Kaftan', price: 3299, originalPrice: 4299, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop', category: 'kaftans', gender: 'women', sizes: ['Free Size'], colors: ['Tropical', 'Abstract', 'Paisley'], occasion: 'casual', season: 'summer', isNew: true, description: 'Luxurious silk kaftan with vibrant tropical prints.' },
    { name: 'Embellished Evening Kaftan', price: 5499, originalPrice: 7299, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop', category: 'kaftans', gender: 'women', sizes: ['Free Size'], colors: ['Gold', 'Black', 'Teal'], occasion: 'festive', season: 'all', isNew: false, description: 'Statement evening kaftan with crystal embellishments.' },
    { name: 'Cotton Resort Kaftan', price: 1999, originalPrice: 2799, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop', category: 'kaftans', gender: 'women', sizes: ['Free Size'], colors: ['White', 'Blue', 'Coral'], occasion: 'casual', season: 'summer', isNew: false, description: 'Breezy cotton kaftan perfect for beach and resort wear.' },

    // Women - Sharara Sets
    { name: 'Bridal Sharara Set', price: 19999, originalPrice: 25999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'sharara-sets', gender: 'women', sizes: ['S', 'M', 'L', 'XL'], colors: ['Red', 'Pink', 'Gold'], occasion: 'wedding', season: 'all', isNew: true, description: 'Opulent bridal sharara set with heavy embroidery work.' },
    { name: 'Party Wear Sharara', price: 8999, originalPrice: 11999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'sharara-sets', gender: 'women', sizes: ['S', 'M', 'L', 'XL'], colors: ['Turquoise', 'Magenta', 'Navy'], occasion: 'festive', season: 'all', isNew: false, description: 'Glamorous party sharara with mirror work and tassels.' },
    { name: 'Cotton Mehendi Sharara', price: 5999, originalPrice: 7999, image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop', category: 'sharara-sets', gender: 'women', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Green', 'Yellow', 'Orange'], occasion: 'mehendi', season: 'all', isNew: true, description: 'Vibrant cotton sharara set perfect for mehendi celebrations.' },
];

const reviews = [
    { name: 'Priya Sharma', rating: 5, comment: 'Absolutely stunning lehenga! The embroidery work is exquisite and the fit was perfect. Got so many compliments at my sister\'s wedding.' },
    { name: 'Rahul Mehta', rating: 4, comment: 'Great quality jeans. The fabric is thick and durable. Slightly long but overall very happy with the purchase.' },
    { name: 'Ananya Patel', rating: 5, comment: 'The saree is gorgeous! The silk quality is premium and the colors are even more vibrant in person. Will definitely order again.' },
    { name: 'Vikram Singh', rating: 5, comment: 'Best denim jacket I\'ve owned. The sherpa lining is so warm and the fit is spot on. Highly recommend!' },
    { name: 'Meera Krishnan', rating: 4, comment: 'Beautiful anarkali suit. The fabric drapes so well and the embroidery is delicate. Shipping was fast too.' },
    { name: 'Arjun Reddy', rating: 5, comment: 'Premium quality shirts at reasonable prices. The linen shirt is perfect for summer. Love the minimalist packaging.' },
    { name: 'Sneha Gupta', rating: 5, comment: 'Ordered the kaftan for my vacation and it\'s absolutely perfect! The print is beautiful and the fabric is so soft and flowing.' },
    { name: 'Karan Malhotra', rating: 4, comment: 'Nice collection of t-shirts. The oversized fit is trendy and comfortable. Colors are true to what\'s shown online.' },
];

async function seedDB() {
    try {
        console.log('Clearing existing data...');
        await prisma.product.deleteMany({});
        await prisma.category.deleteMany({});
        await prisma.review.deleteMany({});
        console.log('Cleared existing data.');

        console.log('Seeding categories...');
        await prisma.category.createMany({ data: categories });
        console.log(`Seeded ${categories.length} categories.`);

        console.log('Seeding products...');
        await prisma.product.createMany({ data: products });
        console.log(`Seeded ${products.length} products.`);

        console.log('Seeding reviews...');
        await prisma.review.createMany({ data: reviews });
        console.log(`Seeded ${reviews.length} reviews.`);

        console.log('Database seeding complete!');
    } catch (error) {
        console.error('Seeding error:', error.message);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

seedDB();
