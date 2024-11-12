import './style.css';
import Button from '../button';

const Navigation = ({ setPage, theme }) => {
  return (
    <nav className={`navigation--${theme}`}>
      <ul className={`navigation__list--${theme}`}>
        <li className="navigation__item">
          <Button onClick={() => setPage('Home')} theme={theme}>Home</Button>
        </li>
        <li className="navigation__item">
          <Button onClick={() => setPage('About')} theme={theme}>About</Button>
        </li>
        <li className="navigation__item">
          <Button onClick={() => setPage('Shop')} theme={theme}>Shop</Button>
        </li>
        <li className="navigation__item">
          <Button onClick={() => setPage('Tour')} theme={theme}>Tour</Button>
        </li>
        <li className="navigation__item">
          <Button onClick={() => setPage('Contact')} theme={theme}>Contact</Button>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;