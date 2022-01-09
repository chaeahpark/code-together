import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <form
        className="header__form"
        action=""
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          className="form__search"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="form__searchBtn" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
};

export default Searchbar;
