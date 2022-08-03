import "./footerstyle.css";
import facebook from "../../asset/icon_facebook.png";
import instagram from "../../asset/icon_instagram.png";
import mail from "../../asset/icon_mail.png";
import twitch from "../../asset/icon_twitch.png";
import twitter from "../../asset/icon_twitter.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="address">
          <h1>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
          <h1>binarcarrental@gmail.com</h1>
          <h1>081-233-334-808</h1>
        </div>
        <div className="navigation_footer">
          <a href="#Our Services">Our Services</a>
          <a href="#Why Us">Why Us</a>
          <a href="#Testimonial">Testimonial</a>
          <a href="#FAQ">FAQ</a>
        </div>
        <div className="connect">
          <div className="connect_title">
            <h1>Connect with us</h1>
          </div>
          <div className="connect_icon">
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={instagram} />
            </div>
            <div>
              <img src={twitter} />
            </div>
            <div>
              <img src={mail} />
            </div>
            <div>
              <img src={twitch} />
            </div>
          </div>
        </div>
        <div className="copyright">
          <h1>Copyright Binar 2022</h1>
          <div className="footer_logo"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
