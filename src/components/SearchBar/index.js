import React from "react";
import "./searchstyle.css";
import Select from "react-select";

const SearchBar = (props) => {
  const { handleChangeName, handleSearch } = props;

  const status = [
    { value: "true", label: "True" },
    { value: "false", label: "False" },
  ];
  const kategori = [
    { label: "2 - 4 orang" },
    { label: "4 - 6 orang" },
    { label: "6 - 8 orang" },
  ];
  const harga = [
    { label: "< Rp 400.000" },
    { label: "Rp 400.000 - Rp 600.000" },
    { label: "> Rp 400.000" },
  ];

  return (
    <div className="container">
      <div className="searchfilter_box">
        <div className="searchfilter_title">
          <h1>Pencarianmu</h1>
        </div>
        <div className="select_box">
          <div>
            <h4>Cari mobil</h4>
            <input
              placeholder="Ketik nama/tipe mobil"
              className="search_input"
              onChange={(e) => handleChangeName(e)}
            />
          </div>
          <div>
            <h4>Kategori</h4>
            <Select
              isDisabled="true"
              options={kategori}
              className="dropdown_filter"
            />
          </div>
          <div>
            <h4>Harga</h4>
            <Select
              isDisabled="true"
              options={harga}
              className="dropdown_filter"
            />
          </div>
          <div>
            <h4>Satus</h4>
            <Select
              isDisabled="true"
              options={status}
              className="dropdown_filter"
            />
          </div>
          <div>
            <button className="btn_cari" onClick={handleSearch}>
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
