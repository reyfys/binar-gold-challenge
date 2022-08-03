import "../../App.css";
import "./bannerstyle.css";
import carImage from "../../asset/img_car.png";
import CTAButton from "../CTAButton";
import React from "react";

const Banner = ({ showCTAbtn }) => {
  return (
    <div className="wrapper">
      <div className="hero_banner">
        <div className="hero_content">
          <h1>Sewa & Rental Mobil Terbaik di kawasan Bandung</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {!!showCTAbtn && <CTAButton />}
        </div>
        <div className="heroImg">
          <img src={carImage} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
