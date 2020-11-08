import React from "react";
import "./search-box.css";

const SearchBox = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search Monsters ..."
      onChange={props.handleChange}
    />
  );
};
export default SearchBox;
