import { useEffect, useState } from "react";
import "./searchresultstyle.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarList from "../../components/CarList";
import Banner from "../../components/Banner";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import { navList } from "../../staticData";

const SearchResult = () => {
  const [data, setData] = useState([]);
  const [fdata, setFdata] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length === 0) {
      setFdata([]);
      setNotFound(false);
    }
  };

  const handleSearch = () => {
    let newArr = data.filter((data) => data.name === name);
    if (newArr.length === 0) {
      setNotFound(true);
    }
    setFdata(newArr);
  };

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const props = {
    data,
    handleChangeName,
    handleSearch,
    navList,
  };

  return (
    <div>
      <Navbar {...props} />
      <Banner />
      <SearchBar {...props} />
      <div className="container">
        {!!notFound && (
          <h1 className="notfound_wording">Mobil tidak ditemukan</h1>
        )}
      </div>
      <CarList data={!fdata.length ? data : fdata} />
      <Footer />
    </div>
  );
};

export default SearchResult;
