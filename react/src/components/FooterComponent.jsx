import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import "../css/FooterComponent.css";

function FooterComponent() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#21081a" }}
    >
      <MDBContainer className="p-4">
        <div className="footerInformation">
          <div className="box">
            <img
              className="footerIcon"
              src="https://airductnashville.com/wp-content/uploads/2018/06/icon22-free-img.png"
              alt="location icon"
            />
            <h2>Location</h2>
            <p>2056 hickory brook dr</p>
            <p>Hermitage TN 37076</p>
          </div>
          <div className="box">
            {" "}
            <img
              className="footerIcon"
              src="https://airductnashville.com/wp-content/uploads/2018/06/icon25-free-img.png"
              alt=" clock icon"
            />
            <h2>Working Hours</h2>
            <p>09:00 AM – 07:00 PM</p>
            <p>Monday – Sunday</p>
          </div>
          <div className="box">
            <img
              src="https://airductnashville.com/wp-content/uploads/2018/06/icon23-free-img.png"
              alt="phone icon "
              className="footerIcon"
            />
            <h2>Phone Number</h2>
            <p>615-630-1393</p>
          </div>
        </div>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white"> Yoav oren</a>
      </div>
    </MDBFooter>
  );
}
export default FooterComponent;
