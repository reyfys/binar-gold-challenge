import React from "react";
import "./whystyle.css";
import "../../App.css";

const WhyUs = (props) => {
  const { CardWhyUs } = props;

  return (
    <div className="container">
      <div id="WhyUs">
        <div className="why_content">
          <div className="why_title">
            <h1>Why Us?</h1>
            <h2>Mengapa harus pilih Binar Car Rental?</h2>
          </div>
          <div className="card_why">
            {CardWhyUs.map((item) => (
              <div className="card_content">
                <div>
                  <img src={item.icon} />
                </div>
                <div>
                  <h1>{item.titleWhy}</h1>
                </div>
                <div>
                  <p>{item.detailWhy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
