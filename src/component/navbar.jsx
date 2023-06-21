import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Logo from '../icon/Logo White.png';
import '../style/navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname === '/');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsActive(scrollPosition === 0);
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (location.pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location]);

  useEffect(() => {
    setIsActive(location.pathname === '/');
  }, [location]);

  const navbarClass = classNames('home', { active: isActive });

  return (
    <div className="nav-wrapper">
      <nav className={navbarClass}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/menu">Products</Link>
          </li>
          <li>
            <Link to="/findus">Store</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
