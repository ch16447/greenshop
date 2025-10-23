import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import '@/styles/Products.css'

export default function Products(){

    let products = [
        
            { name: "Eco Jacket", price: 1200, category: "clothes", image: "https://images.pexels.com/photos/6311651/pexels-photo-6311651.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 4 },
            { name: "Organic T-Shirt", price: 300, category: "clothes", image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 5 },
            { name: "Denim Pants", price: 800, category: "clothes", image: "https://images.pexels.com/photos/34380737/pexels-photo-34380737.jpeg", rating: 4 },
            { name: "Casual Hoodie", price: 950, category: "clothes", image: "https://images.pexels.com/photos/3758122/pexels-photo-3758122.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 5 },
            { name: "Cotton Dress", price: 650, category: "clothes", image: "https://images.pexels.com/photos/34360527/pexels-photo-34360527.jpeg", rating: 4 },
        
            { name: "Green Laptop", price: 3500, category: "electronics", image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 4 },
            { name: "Wireless Earbuds", price: 750, category: "electronics", image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 5 },
            { name: "Smart Watch", price: 500, category: "electronics", image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg", rating: 4 },
            { name: "Gaming Mouse", price: 200, category: "electronics", image: "https://images.pexels.com/photos/34396230/pexels-photo-34396230.jpeg", rating: 4 },
      
            { name: "Sunglasses", price: 250, category: "accessories", image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 4 },
            { name: "Eco Bag", price: 150, category: "accessories", image: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg", rating: 5 },
            { name: "Leather Wallet", price: 400, category: "accessories", image: "https://images.pexels.com/photos/982657/pexels-photo-982657.jpeg", rating: 4 },
            { name: "Silk Scarf", price: 180, category: "accessories", image: "https://images.pexels.com/photos/1056862/pexels-photo-1056862.jpeg", rating: 5 },
            { name: "Baseball Cap", price: 120, category: "accessories", image: "https://images.pexels.com/photos/1007804/pexels-photo-1007804.jpeg", rating: 4 },
   
            { name: "Sports Shoes", price: 300, category: "clothes", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 4 },
            { name: "ps4", price: 400, category: "electronics", image: "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 5 },
            { name: "Necklace", price: 280, category: "accessories", image: "https://images.pexels.com/photos/1035683/pexels-photo-1035683.jpeg", rating: 5 },
            { name: "Eco Watch", price: 600, category: "accessories", image: "https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg", rating: 4 },
            { name: "Smartphone", price: 2800, category: "electronics", image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600", rating: 5 },
    ]
    const [activeCategory, setActiveCategory] = useState<'all' | 'clothes' | 'electronics' | 'accessories'>('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory
    );

    return (
        <>
            <section className="section__container product__section" id="product">
                <div className="product__header">
                <h2>Popular Products</h2>
                <div className="product__filters">
                    <button
                        className={`filter__btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                        data-category="all"
                    >
                        All
                    </button>
                    <button
                        className={`filter__btn ${activeCategory === 'clothes' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('clothes')}
                        data-category="clothes"
                    >
                        Clothes
                    </button>
                    <button
                        className={`filter__btn ${activeCategory === 'electronics' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('electronics')}
                        data-category="electronics"
                    >
                        Electronics
                    </button>
                    <button
                        className={`filter__btn ${activeCategory === 'accessories' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('accessories')}
                        data-category="accessories"
                    >
                        Accessories
                    </button>
                </div>
                </div>

                <div className="product__container" id="productContainer">
                    {filteredProducts.map((item, index) => (
                        <div key={index} className="product__card" data-name={item.name} data-price={item.price} data-image={item.image}>
                            <img src={item.image} alt={item.name} />
                            <span className="product__category">
                                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                            </span>
                            <h3>{item.name}</h3>
                            <p className="price">${item.price}</p>
                            <div className="product__footer">
                                <div className="rating">
                                    {"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}
                                </div>
                                <button className="cart__btn"><MdShoppingCart/></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}      

