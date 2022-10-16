import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Pagination1 = ({
  currentPage,
  setCurrentPage,
  maxPages,
  celebrities,
}) => {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push(i);
  }

  return (
    <Pagination>
      <Pagination.First
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {array.map((item, i) => (
        <Pagination.Item
          key={i}
          active={item === currentPage}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </Pagination.Item>
      ))}

      <Pagination.Ellipsis>...</Pagination.Ellipsis>

      <Pagination.Next
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === maxPages}
      />
      <Pagination.Last
        onClick={() => setCurrentPage(maxPages)}
        disabled={currentPage === maxPages}
      />
    </Pagination>
  );
};

export default Pagination1;
