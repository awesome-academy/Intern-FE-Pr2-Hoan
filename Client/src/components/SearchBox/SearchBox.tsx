import React, { useState } from "react";
import "./SearchBox.scss";
import { BiSearchAlt } from 'react-icons/bi';

interface searchProps {}

const SearchBox: React.FC<searchProps> = (props) => {
  const [search, setSearch] = useState("");
  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    setSearch(search);
  };
  const clearSearch = () => {
    setSearch("");
  };
  return (
    <div className="goya-search">
      <form action="search" onSubmit={onSubmitSearch}>
        <fieldset>
          <div className="search-button-group">
            <span className="search-icon">
              <BiSearchAlt />
            </span>
            <input
              type="search"
              className="search-field"
              autoComplete="off"
              placeholder="Search products..."
              onChange={onSearch}
              value={search}
            />
            <div
              className={`btn-close ${search.length ? "active" : ""}`}
              onClick={clearSearch}></div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBox;
