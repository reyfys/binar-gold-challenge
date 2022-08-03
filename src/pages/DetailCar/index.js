import "./detailcar.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import DetailList from "../../components/DetailList";
import { DetailInclude, DetailExclude, navList } from "../../staticData";
import iconcategory from "../../asset/fi_users.png";

const DetailCar = () => {
  const props = { navList };

  const detailList = {
    DetailInclude,
    DetailExclude,
  };

  const [car, setCar] = useState({});

  const param = useParams();
  const id = param.id;

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar {...props} />
      <div className="background"></div>
      <SearchBar />
      <div className="container">
        <div className="detail_content">
          <div>
            <DetailList {...detailList} />
          </div>
          <div>
            {!!Object.keys(car).length && (
              <div className="detail_card">
                <div className="car_image">
                  <img src={car.image} />
                </div>
                <div className="car_info">
                  <div>
                    <h1>{car.name}</h1>
                  </div>
                  <div className="car_category">
                    <div>
                      <img src={iconcategory} />
                    </div>
                    <div>
                      <h3>{car.category}</h3>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <div>
                    <h1>Total</h1>
                  </div>
                  <div>
                    <h2>{car.price}</h2>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCar;
