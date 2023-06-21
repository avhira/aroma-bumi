import '../style/home.css';
import feed1 from '../icon/Feed 1.png';
import feed2 from '../icon/Feed 2.png';
import feed3 from '../icon/Feed 3.png';
import feed4 from '../icon/Feed 4.png';
import feed5 from '../icon/Feed 5.png';
import feed6 from '../icon/Feed 6.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="home-wrapper">
        <div className="header-wrapper">
          <div className="header">
            <h1>Freshly Brewed</h1>
            <h1>Coffe & Tea</h1>
            <p>Best qualities from our local soil</p>
          </div>
        </div>
        <main>
          <div className="main-content">
            <div className="main-item">
              <div className="img1 img"></div>
              <div className="main-data">
                <h2>Who are we?</h2>
                <p>We are Jakarta-based coffee and tea house focused on professionally brewing local sourced, high quality, coffee beans and tea leaves.</p>
              </div>
            </div>
            <div className="main-item">
              <div className="img2 img"></div>
              <div className="main-data">
                <h2>Product Showcase</h2>
                <p>Our products contain the highest quality ingredients processed with care.</p>
                <button>
                  <Link to="/menu">See our coffee and tea</Link>
                </button>
              </div>
            </div>
            <div className="main-item">
              <div className="img3 img"></div>
              <div className="main-data">
                <h2>Hang out with us!</h2>
                <p>Our stores use sustainable furnitures. surrounded by nature, to help our planet service.</p>
                <button>
                  <Link to="/findus">Find our cafes</Link>
                </button>
              </div>
            </div>
          </div>
        </main>

        <div className="gallery">
          <h2>
            Find us out at Instagram <span>@aroma_bumi</span>!
          </h2>
          <div className="gallery-list">
            <img src={feed1} alt="Feed 1" />
            <img src={feed2} alt="Feed 2" />
            <img src={feed3} alt="Feed 3" />
            <img src={feed4} alt="Feed 4" />
            <img src={feed5} alt="Feed 5" />
            <img src={feed6} alt="Feed 6" />
          </div>
        </div>

        <div className="home-contact">
          <h2>Ask us more!</h2>
          <p>if you have any questions or interested to cooperate with us, kindly let us know here:</p>
          <button>
            <Link to="/contact">Contact us</Link>
          </button>
        </div>
      </section>
    </>
  );
}
