import { useState } from 'react';
import './style.css';

function Cart({cartItems, removeFromCart, updateQuantity}) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            {/* Left Side: Cart Items */}
            <div className="cart-items">
                <button className="back-button">← Continue shopping</button>
                <h2>Shopping Cart</h2>
                <p>You have {cartItems.length} items in your cart</p>

                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className="item-quantity">
                                    <input type="number" value={item.quantity || 1} min="1" onChange={(e) => updateQuantity(item.id, Number(e.target.value))}/>
                                </div>
                                <p className="item-price">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑️</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side: Checkout Form */}
            <div className="checkout">
                <h3>Card Details</h3>
                <div className="payment-icons">
                    {/* Use placeholders for card icons */}
                    <span>Visa</span> <span>Mastercard</span> <span>PayPal</span>
                </div>
                <form>
                    <input type="text" placeholder="Cardholder's Name" required />
                    <input type="text" placeholder="Card Number" required />
                    <div className="card-info">
                        <input type="text" placeholder="Expiration" required />
                        <input type="text" placeholder="CVV" required />
                    </div>
                    <div className="order-summary">
                        <p>Subtotal: ${totalPrice.toFixed(2)}</p>
                        <p>Shipping: $5.00</p>
                        <p>Total (Incl. taxes): ${(totalPrice + 5).toFixed(2)}</p>
                    </div>
                    <button type="submit" className="checkout-button">Checkout</button>
                </form>
            </div>
        </div>
    );
};

export default Cart;