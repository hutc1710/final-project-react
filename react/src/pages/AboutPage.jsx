import "../css/AboutPage.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Fragment } from "react";

const AboutPage = () => {
  return (
    <Fragment>
      <h1 className="aboutHeader"> About Us</h1>

      <div className="wrap">
        <div className="imagebox">
          <img
            className="aboutImg "
            src="https://airductnashville.com/wp-content/uploads/2020/05/Untitled-design-52.png"
            alt=" a worker cleaning "
          />
        </div>

        <div className="textbox">
          <h2 className="aboutHeader1">Dedicated Professionals!</h2>
          <p>
            Over the years Nashville Air-duct Cleaners has proved to be a
            reliable residential and commercial air duct cleaner to all! We
            dedicate all our work to making sure the air quality in the homes of
            many people around the Nashville area remains normal! Knowing what
            causes air pollution is the first step towards combating it, we are
            more than happy to explain this to any one of our clients in-depth!
            We offer free estimates over the phone and a 24/7 emergency service
            when you need us the most! Considered as the finest in the area, we
            pride ourselves on our air duct and dryer vent cleaning services!
          </p>
          <h4 className="aboutHeader2">
            {" "}
            Bonded and Insured License Number #12345863
          </h4>
        </div>
      </div>
      <div className="aboutContainer">
        <div className="blackLine"></div>
        <div className="listBox">
          <ul className="list">
            <li className="list-item">24 Hour Services</li>
            <li className="list-item">Lifetime Warranty</li>
            <li className="list-item">Residential & Commercial</li>
            <li className="list-item">Lifetime Carbon cells</li>
            <li className="list-item">Honest & Reliable</li>
            <li className="list-item">Guaranteed Services</li>
          </ul>
        </div>
        <div className="contentBox">
          <span className="callIcon">
            {" "}
            <FaPhoneSquareAlt className="icon" />
          </span>
          <span>Call Today For A Free Estimate: 615-630-1393</span>
        </div>
        <div className="statsContainer">
          <div className="stat">
            <img
              className="statsIcon"
              src="https://airductnashville.com/wp-content/uploads/2018/06/icon19-free-img.png"
              alt="icon19-free-img"
            />
            <h2 className="statNumber">496</h2>
            <p className="statText">Projects Done</p>
          </div>{" "}
          <div className="stat">
            <img
              className="statsIcon"
              src="https://airductnashville.com/wp-content/uploads/2018/06/icon18-free-img.png"
              alt="icon19-free-img"
            />
            <h2 className="statNumber">24/7</h2>
            <p className="statText">Hours Service</p>
          </div>
          <div className="stat">
            {" "}
            <img
              className="statsIcon"
              src="https://airductnashville.com/wp-content/uploads/2018/06/icon20-free-img.png"
              alt=" clock icon"
            />
            <h2 className="statNumber">520</h2>
            <p className="statText">Star Ratings</p>
          </div>
          <div className="stat">
            <img
              className="statsIcon"
              src="https://airductnashville.com/wp-content/uploads/2018/06/icon21-free-img.png"
              alt="phone icon "
            />
            <h2 className="statNumber">5</h2>
            <p className="statText">Branches In City</p>
          </div>
        </div>
        <div className="bottomHeadline">
          We provide patient work and experienced knowledge!
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
