import React from "react";
import "./bannersewastyle.css";
import CTAButton from "../CTAButton";

const BannerSewa = () => {
  return (
    <div className="container">
      <div className="banner_sewa">
        <div className="bannersewa_content">
          <div>
            <h1> Sewa Mobil di Bandung Sekarang </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSewa;
