import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
 const [searchTerm, setSearchTerm] = useState("");

  const handleChange = () => {};

  return (
    <>
      <form className="header__form" action="">
        <input
          className="form__search"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
        <button className="form__searchBtn" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
};

export default Searchbar;
