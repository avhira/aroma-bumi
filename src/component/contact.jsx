import '../style/contact.css';

export default function Contact() {
  return (
    <>
      <section className="contact-wrapper">
        <div className="contact">
          <div className="contact-title">
            <h1>How can we help?</h1>
          </div>
          <form>
            <div className="contact-item">
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="contact-item">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="contact-item">
              <label>Phone Number</label>
              <input type="number" placeholder="Phone Number" />
            </div>
            <div className="contact-item">
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </div>
            <div className="contact-item">
              <label>
                <span>Message</span>
              </label>
              <textarea></textarea>
            </div>
            <div className="btn-wrapper">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
