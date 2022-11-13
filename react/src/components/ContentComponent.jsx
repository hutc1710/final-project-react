import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../css/ContentComponent.css";
import Button from "react-bootstrap/Button";
import { FaPhoneSquareAlt } from "react-icons/fa";
import ContactPage from "../pages/ContactPage";

export const CardsComponent = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("/cardReview")
      .then((response) => {
        setCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul>
      {cards.map((card, index) => (
        <li key={card.description + index}>{card.description}</li>
      ))}
    </ul>
  );
};
function ContentComponent() {
  return (
    <Fragment>
      <div className="box1">
        <div className="carouselContainer">
          <div
            id="carouselExampleControlsNoTouching"
            class="carousel slide "
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://airductnashville.com/wp-content/uploads/2020/10/Untitled-design-40.png"
                  alt="Untitled design "
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://airductnashville.com/wp-content/uploads/2020/10/Untitled-design-38.png"
                  alt="Untitled design"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://airductnashville.com/wp-content/uploads/2020/10/Untitled-design-33.png"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <p>
          <h1 className="headline1">Breath Easy</h1>
        </p>
        <p>
          <h4>Air Conditioning Cleaning Solutions!</h4>
        </p>
        <br></br>
        <div className="box2">
          <h5>
            We strive to offer the best Eco-friendly air duct cleaning in
            Nashville, TN. We strive to improve the indoor, air-quality in your
            home. It is also important to have your air ducts checked for mold.
            We offer mold testing and Inspections.
          </h5>
        </div>
        <Button className="btn2" variant="success" href="/contact">
          Schedule Today
        </Button>{" "}
      </div>
      <div className="box3">
        {" "}
        <div className="contentBox">
          <span className="callIcon">
            {" "}
            <FaPhoneSquareAlt className="icon" />
          </span>
          <span>Call Today For A Free Estimate: 615-630-1393</span>
        </div>
        <div className="contentBox2">
          <h1>Nashville Air Duct Cleaners Services</h1>
        </div>
        <div className="blueLine"></div>
        <div className="box4">
          <h1 className="boxHeader">100% SATISFACTION GUARANTEE</h1>
          <p className="boxContent">
            We offer dryer vent cleaning in Nashville to prevent fires and help
            your dryer work efficiently, pressure washing in Nashville and
            gutter cleaning in Nashville offers good curb appeal for when you
            would like to sell your home!!!
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default ContentComponent;
