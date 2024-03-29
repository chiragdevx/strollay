import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange?: any;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pageCount = Math.ceil(totalPages / 10);
  // Create an array with the number of pages
  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1,
  );

  const increasePage = () => {
    if (currentPage < pageCount) {
      onPageChange(currentPage + 1);
    }
  };
  const decreasePage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <button
        className="px-3 py-1 mx-1 rounded border border-gray-300 bg-white hover:bg-gray-100"
        onClick={decreasePage}
      >
        &lt;
      </button>
      {/* Loop through page numbers and render page buttons */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-3 py-1 mx-1 rounded border border-gray-300 ${number === currentPage ? "bg-blue-500 text-white" : "bg-white"} hover:bg-gray-100`}
          onClick={() => onPageChange && onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="px-3 py-1 mx-1 rounded border border-gray-300 bg-white hover:bg-gray-100"
        onClick={increasePage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
