import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Logo from '../icon/Logo White.png';
import '../style/navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname === '/aroma-bumi/');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsActive(scrollPosition === 0);
    };

    if (location.pathname === '/aroma-bumi/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (location.pathname === '/aroma-bumi/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location]);

  useEffect(() => {
    setIsActive(location.pathname === '/aroma-bumi/');
  }, [location]);

  const navbarClass = classNames({ active: isActive });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const ulClass = classNames({ slide: isChecked });

  return (
    <div className="nav-wrapper">
      <nav className={navbarClass}>
        <Link to="/aroma-bumi/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={ulClass}>
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
        <div className="menu-toggle">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}
