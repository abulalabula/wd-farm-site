import { useState } from 'react';
import './App.css';

import Home from './pages/home';
import Header from './components/header';
import About from './pages/about';
import Animal from './pages/animal';
import Community from './pages/community';
import Contact from './pages/contact';
import History from './pages/history';
import Shop from './pages/shop';
import Tour from './pages/tour';
import Cart from './components/cart';
import Footer from './components/footer';

function App() {
  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState('light');
  const [cartItems, setCartItems] = useState([]);

  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const totalItems = cartItems.length;

  return (
    <div className={`app--${theme}`}>
    <Header setPage={setPage} theme={theme} toggleTheme={toggleTheme}/>
    { (page === 'Home') && <Home setPage={setPage} theme={theme}/> }
    { (page === 'About') && <About setPage={setPage} theme={theme}/>}
    { (page === 'History') && <History theme={theme}/>}
    { (page === 'Animal') && <Animal theme={theme}/> }
    { (page === 'Community') && <Community theme={theme}/> }
    { (page === 'Contact') && <Contact theme={theme}/> }
    { (page === 'Shop') && <Shop setPage={setPage} theme={theme} addToCart={addToCart}/> }
    { (page === 'Tour') && <Tour theme={theme}/> }
    { (page === 'Cart') && <Cart setPage={setPage} cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
    <Footer/>
    </div>
  );
}

export default App;
