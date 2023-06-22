import '../style/detail.css';
import item1 from '../icon/aren latte.png';
import item2 from '../icon/cafe latte.png';
import item3 from '../icon/caramel latte.png';
import item4 from '../icon/americano.png';
import item5 from '../icon/cappucino.png';
import item6 from '../icon/butterscotch.png';
import { ChevronLeft } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();

  const data = {
    1: {
      image: item1,
      name: 'Aren Latte',
      slog: 'Smooth like butter like criminal undercover.',
      price: 'Rp 18.000,-',
      description: 'Made with a perfect combination of freshly grinded arabica coffee beans, full cream milk, and exquisite butterscotch sauce. Perfect for those who crave little bit of sweet things in their life.',
    },
    2: {
      image: item2,
      name: 'Cafe Latte',
      slog: 'Smooth like butter like criminal undercover.',
      price: 'Rp 24.000,-',
      description: 'Made with a perfect combination of freshly grinded arabica coffee beans, full cream milk, and exquisite butterscotch sauce. Perfect for those who crave little bit of sweet things in their life.',
    },
    3: {
      image: item3,
      name: 'Caramel Latte',
      slog: 'Smooth like butter like criminal undercover.',
      price: 'Rp 30.000,-',
      description: 'Made with a perfect combination of freshly grinded arabica coffee beans, full cream milk, and exquisite butterscotch sauce. Perfect for those who crave little bit of sweet things in their life.',
    },
    4: {
      image: item4,
      name: 'Americano',
      slog: 'Smooth like butter like criminal undercover.',
      price: 'Rp 18.000,-',
      description: 'Made with a perfect combination of freshly grinded arabica coffee beans, full cream milk, and exquisite butterscotch sauce. Perfect for those who crave little bit of sweet things in their life.',
    },
    5: {
      image: item5,
      name: 'Cappucino',
      slog: 'Smooth like butter like criminal undercover.',
      price: 'Rp 24.000,-',
      description: 'Made with a perfect combination of freshly grinded arabica coffee beans, full cream milk, and exquisite butterscotch sauce. Perfect for those who crave little bit of sweet things in their life.',
    },
    6: {
      image: item6,
      name: 'Butterscotch',
      slog: 'Smooth like butter like criminal undercover.',
      price: 'Rp 24.000,-',
      description: 'Made with a perfect combination of freshly grinded arabica coffee beans, full cream milk, and exquisite butterscotch sauce. Perfect for those who crave little bit of sweet things in their life.',
    },
  };

  const item = data[id];

  // Menyiapkan konten berdasarkan item yang ditemukan atau item tidak ditemukan
  const content = item ? (
    <div className="detail">
      <div className="detail-content">
        <img src={item.image} alt={item.name} />
        <div className="detail-title">
          <h2>{item.name}</h2>
          <p>{item.slog}</p>
          <h1>{item.price}</h1>
        </div>
      </div>
      <div className="detail-data">
        <h1>Description</h1>
        <p>{item.description}</p>
        <button>
          <Link to="../../menu">
            <ChevronLeft />
            Back to our products
          </Link>
        </button>
      </div>
    </div>
  ) : (
    <h1>Item not found</h1>
  );

  return (
    <>
      <section className="detail-wrapper">{content}</section>
    </>
  );
}
