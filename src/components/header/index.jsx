import './style.css';
import Navigation from '../navigation';

function Header({ setPage, theme, toggleTheme }) {

    return (
        <header className={`header header--${theme}`}>
            <img
                src="https://images.unsplash.com/photo-1525734826689-2c53dedc44d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="header__logo"
                alt="Meow cat"
            />
            <h1 className={`header__title--${theme}`}>
                Webb Desi Farms
            </h1>
            
            <span className={`theme-switcher__label--${theme}`}>
                {theme === 'light' ? 'Light' : 'Dark'}
            </span>
            <i className="gg-dark-mode" onClick={toggleTheme} aria-label="Toggle Theme"></i>
            <i className="gg-shopping-cart" onClick={() => setPage('Cart')} aria-label="Shopping Cart"></i>
            {<Navigation setPage={setPage} theme={theme}/>}
        </header>
    );
}

export default Header;