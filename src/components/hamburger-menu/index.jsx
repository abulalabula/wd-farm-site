import { useState } from 'react';
import './style.css';


function HamburgerMenu({ setPage, theme }) {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'History', page: 'History' },
        { name: 'Animals', page: 'Animal' },
        { name: 'Local Community', page: 'Community' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            {/* Hamburger Icon*/}
            <i className="gg-menu hamburger-menu__icon" aria-label="Read more about submenu" tabIndex="0" onClick={toggleMenu}></i>
            {isOpen && (
                <ul className="hamburger-menu__list">
                    {menuItems.map((item, index) => (
                        <li key={index} className={`hamburger-menu__item--${theme}`} >
                            <div className={`hamburger-menu__link--${theme}`} onClick={() => setPage(item.page)} theme={theme}>
                                {item.name}
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Dropdown Menu*/}
            <div className="dropdown">
                <button className="dropdown__button">
                    <span>More stories</span>
                </button>
                <ul className="dropdown__list">
                    {menuItems.map((item, index) => (
                        <li key={index} className="dropdown__item" onClick={() => setPage(item.page)} theme={theme}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HamburgerMenu;