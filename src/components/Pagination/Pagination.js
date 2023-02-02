import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  postPerPage,
  totalPosts,
  paginate,
  handleCount,
  increaseCount,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  // const [p, setP] = useState(1);
  // const handleCount = () => {
  //   setP(p - 1);
  //   if (p === 1) {
  //     setP(4);
  //   }
  // };
  // const increaseCount = () => {
  //   setP(p + 1);
  //   if (p === 4) {
  //     setP(1);
  //   }
  // };
  // console.log(p);

  return (
    <nav>
      <ul className="pagination btn-group">
        <li>
          <button className="btn" onClick={() => handleCount()}>
            Previous
          </button>
        </li>
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
        <li>
          <button className="btn" onClick={() => increaseCount()}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
