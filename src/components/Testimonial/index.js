import React from "react";
import Slider from "react-slick";
import "./testistyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";

const Testimonial = (props) => {
  const { CardTestimonial } = props;

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="wrapper">
      <div id="Testimonial">
        <div className="testi_content">
          <div className="testi_title">
            <h1>Testimonial</h1>
            <h2>Berbagai review positif dari para pelanggan kami</h2>
          </div>
          <div className="card_testi">
            <Slider ref={slider} {...settings}>
              {CardTestimonial.map((item) => (
                <div className="card_testi_content">
                  <div className="testi_photo">
                    <img src={item.photo} />
                  </div>
                  <div className="testi_text">
                    <div className="rating">
                      <img src={item.rating} />
                    </div>
                    <div>
                      <h1>{item.detailTesti}</h1>
                    </div>
                    <div>
                      <h2>{item.name}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="arrows">
              <ArrowLeftCircleFill
                size={30}
                className="carousel_arrow"
                onClick={previous}
              />
              <ArrowRightCircleFill
                size={30}
                className="carousel_arrow"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
