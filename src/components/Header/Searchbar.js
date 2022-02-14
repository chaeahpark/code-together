import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { useProjects } from "../../contexts/ProjectContext";

import { searchProjects } from "../../api/postApi";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { projectList, setSearchingProjects } = useProjects();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchingProjects(searchTerm);
    setSearchTerm("");
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
          value={searchTerm}
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
