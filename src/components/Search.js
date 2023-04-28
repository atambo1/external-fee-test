import React, { useState } from "react";
import { Input } from "antd";

const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearchClear = () => {
    setSearchText("");
    handleSearch("");
  };

  return (
    <div className="search">
      <Input.Search
        placeholder="Search by Author's Name"
        value={searchText}
        onChange={handleInputChange}
        onSearch={handleSearch}
        allowClear
        onClear={handleSearchClear}
      />
    </div>
  );
};

export default Search;
