import '../style/footer.css';
import Logo from '../icon/Logo White.png';
import { Mail } from 'react-feather';
import { Phone } from 'react-feather';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-logo">
            <a href="/#">
              <img src={Logo} alt="logo" />
            </a>
            <div className="footer-svg">
              <Link to="contact">
                <Mail className="icon-svg" />
              </Link>
              <Link to="contact">
                <Phone className="icon-svg" />
              </Link>
            </div>
          </div>
          <div className="footer-content">
            <ul>
              <li>
                <Link to="menu">
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <a href="#">Coffee Based</a>
              </li>
              <li>
                <a href="#">Non-Coffee</a>
              </li>
              <li>
                <a href="#">Tea Based</a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="findus">
                  <span>Store</span>
                </Link>
              </li>
              <li>
                <Link to="findus">Location</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="contact">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="contact">Customer Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
