import { useState } from 'react';
import './style.css';
import AccordionSection from '../../components/accordion-section';

function Shop({addToCart, theme}) {

    const products = [
        {
            id: 1,
            name: 'Avocado',
            options: [
                { id: '1a', name: 'Hass Avocado', price: 2.5 },
                { id: '1b', name: 'Fuerte Avocado', price: 2.8 },
            ],
            description: "Avocados are packed with nutrients. They're rich in healthy fats, vitamins, and fibers. Our avocados are organically grown and handpicked.",
            image: "https://images.unsplash.com/photo-1551460188-2f48af84543c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name: 'Milk',
            options: [
                { id: '2a', name: 'Whole Milk', price: 1.5 },
                { id: '2b', name: 'Almond Milk', price: 2.0 },
                { id: '2c', name: 'Soy Milk', price: 1.8 },
            ],
            description: "Our farm-fresh milk comes straight from well-cared-for cows, ensuring a naturally creamy and nutritious product.",
            image: "https://images.unsplash.com/photo-1601436423474-51738541c1b1?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: 'Donut',
            options: [
                { id: '3a', name: 'Classic Glazed', price: 1.2 },
                { id: '3b', name: 'Chocolate', price: 1.5 },
                { id: '3c', name: 'Blueberry', price: 1.7 },
            ],
            description: "Indulge in our mouth-watering donuts, a perfect treat for any time of the day.",
            image: "https://images.unsplash.com/photo-1609873539027-d4ad052cb6a7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];


return (
        <div className="Shop">
            <h1 className={`shop__title--${theme}`}>Our Products</h1>
            {products.map(product => (
                <AccordionSection key={product.id} title={product.name}>
                    <img className="accordion__pic" src={product.image} alt={product.name} />
                    <p>{product.description}</p>

                    {product.options.map(option => (
                        <ProductOption
                            key={option.id}
                            productName={product.name}
                            option={option}
                            addToCart={addToCart}
                        />
                    ))}
                </AccordionSection>
            ))}
        </div>
    );
}

function ProductOption({ productName, option, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const item = {
            id: option.id,
            name: `${productName} - ${option.name}`,
            price: option.price,
            quantity: quantity,
            image: option.image,
        };
        addToCart(item);
    };

    return (
        <div className="product-option">
            <p><strong>{option.name}</strong> - ${option.price.toFixed(2)}</p>
            <label>
                Quantity:
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
            </label>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Shop;