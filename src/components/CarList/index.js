import "./carliststyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarList = (props) => {
  const { data } = props;

  return (
    <div className="container">
      <div className="list_cars">
        {!!data.length &&
          data.map((item) => (
            <div className="card_cars">
              <div>
                <img src={item.image} />
              </div>
              <div className="card_detail">
                <h1>{item.name}</h1>
                <h2>Rp {item.price} / hari</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <Link to={`/detailcar/${item.id}`}>
                  <button className="buy_btn">Pilih Mobil</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarList;
