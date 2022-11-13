import { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../css/CarouselCompenent.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
function CarouselCompenent() {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="img1"
            src={image1}
            alt="before and after photo number 1"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="img2 "
            src={image2}
            alt="before and after photo number 2"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="headline">
        <h2>Why Choose Us!</h2>
        <p>
          We delivering unsurpassed professionalism and old-fashioned customer
          service to our customers.
        </p>
      </div>
    </Fragment>
  );
}

export default CarouselCompenent;
