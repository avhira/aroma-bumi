import '../style/menu.css';
import Gambar1 from '../icon/aren latte.png';
import Gambar2 from '../icon/cafe latte.png';
import Gambar3 from '../icon/caramel latte.png';
import Gambar4 from '../icon/americano.png';
import Gambar5 from '../icon/cappucino.png';
import Gambar6 from '../icon/butterscotch.png';
import { Link } from 'react-router-dom';

export default function Menu() {
  // Data menu item dalam bentuk array
  const menuItems = [
    { id: 1, name: 'Aren Latte', price: 'Rp 18.000,-', image: Gambar1 },
    { id: 2, name: 'Cafe Latte', price: 'Rp 24.000,-', image: Gambar2 },
    { id: 3, name: 'Caramel Latte', price: 'Rp 30.000,-', image: Gambar3 },
    { id: 4, name: 'Americano', price: 'Rp 18.000,-', image: Gambar4 },
    { id: 5, name: 'Cappuccino', price: 'Rp 24.000,-', image: Gambar5 },
    { id: 6, name: 'Butterscotch', price: 'Rp 24.000,-', image: Gambar6 },
  ];

  // Menggunakan map untuk membuat elemen JSX untuk setiap menu item
  const menuList = menuItems.map((item, index) => (
    <Link to={`/detail/${item.id}`} className="menu-item" key={index}>
      <p className="title">{item.name}</p>
      <p>{item.price}</p>
      <img src={item.image} alt={item.name} />
    </Link>
  ));

  return (
    <>
      <section className="menu-wrapper">
        <div className="menu">
          <h2>Our Coffe Based Products</h2>
          <p>Locally sourced best ingredient = best coffee.</p>
          <div className="menu-list">{menuList}</div>
        </div>
      </section>
    </>
  );
}
