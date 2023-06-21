import '../style/findus.css';

export default function Findus() {
  return (
    <>
      <section className="map-wrapper">
        <div className="map">
          <div className="map-left">
            <div className="map-title">
              <h1>Find Us!</h1>
            </div>
            <div className="map-slog">
              <p>Come visit us at our store or deliver to your house!</p>
            </div>
            <div className="map-content">
              <div className="map-item">
                <h3>Block 71</h3>
                <p>Ariobimo Sentral, South Jakarta, RT.9/RW.4, East Kuningan, Setiabudi, Jakarta, 12950</p>
              </div>
              <div className="map-item">
                <h3>Woodland Park Residence</h3>
                <p>Jl. Raya Kalibata No.22, RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750</p>
              </div>
              <div className="map-item">
                <h3>IKEA Alam Sutera</h3>
                <p>Alam Sutera, Jl. Jalur Sutera Boulevard No.45, Kunciran, Kec.Pinang, Kota Tangerang, Banten 15320</p>
              </div>
            </div>
          </div>
          <div className="map-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126888.26131872016!2d106.68303874335938!3d-6.3606228999999965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1a804e8b85%3A0xd7bf80e1977cea07!2sUniversitas%20Indonesia!5e0!3m2!1sid!2sid!4v1687211978749!5m2!1sid!2sid"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
