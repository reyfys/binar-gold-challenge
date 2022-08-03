import "../../App.css";
import "./CTAstyle.css";
import { Link } from "react-router-dom";

const CTAButton = () => {
  return (
    <div>
      <Link to="/carimobil">
        <button className="CTAButton">Mulai Sewa Mobil</button>
      </Link>
    </div>
  );
};

export default CTAButton;
