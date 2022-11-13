import "../css/ContactPage.css";
import { FaPhoneSquareAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contactContainer">
      <div className="contactHeader">Contact Us</div>
      <div className="contentBox">
        <span className="callIcon">
          {" "}
          <FaPhoneSquareAlt className="icon" />
        </span>
        <span>Call Today For A Free Estimate: 615-630-1393</span>
      </div>
      <div className="infoContanier">
        <div className="contactBox">
          <img
            className="contactIcon"
            src="https://airductnashville.com/wp-content/uploads/2018/06/icon22-free-img.png"
            alt="location icon"
          />
          <h2>Location</h2>
          <p>2056 hickory brook dr</p>
          <p>Hermitage TN 37076</p>
        </div>
        <div className="contactBox">
          {" "}
          <img
            className="contactIcon"
            src="https://airductnashville.com/wp-content/uploads/2018/06/icon25-free-img.png"
            alt=" clock icon"
          />
          <h2>Working Hours</h2>
          <p>09:00 AM – 07:00 PM</p>
          <p>Monday – Sunday</p>
        </div>
        <div className="contactBox">
          <img
            src="https://airductnashville.com/wp-content/uploads/2018/06/icon23-free-img.png"
            alt="phone icon "
            className="contactIcon"
          />
          <h2>Phone Number</h2>
          <p>615-630-1393</p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d824584.6960951518!2d-86.623098!3d36.165728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646ba99ebee955%3A0xb31ef6cee73c9dbd!2s2056%20Hickory%20Brook%20Dr%2C%20Hermitage%2C%20TN%2037076!5e0!3m2!1siw!2sus!4v1665423189460!5m2!1siw!2sus"
          width="900"
          height="550"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
