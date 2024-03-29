"use client";
import React, { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className="flex items-center mx-auto mr-4">
      <input
        type="text"
        placeholder="Search"
        value={searchInput || ""}
        onChange={handleSearchInputChange}
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
      />
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
  );
};

export default SearchBar;
