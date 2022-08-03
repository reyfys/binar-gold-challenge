import serviceImage from "../../asset/img_service.png";
import checkIcon from "../../asset/cek_icon.png";
import "./servicestyle.css";
import "../../App.css";

const Services = (props) => {
  const { strList } = props;

  return (
    <div className="container">
      <div id="OurServices">
        <div className="service_content">
          <div className="service_content_left">
            <img src={serviceImage} />
          </div>
          <div className="service_content_right">
            <h1>Best Car Rental for any kind of trip in Bandung!</h1>
            <h2>
              Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </h2>
            <div className="services">
              {strList.map((item) => (
                <div className="services_all">
                  <div className="service_check">
                    <img src={checkIcon} />
                  </div>
                  <div className="service_list">
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
