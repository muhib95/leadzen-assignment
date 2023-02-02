import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination btn-group">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to=""
              className="page-link btn"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
