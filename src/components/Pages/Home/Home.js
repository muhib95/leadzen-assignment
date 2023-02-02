import React, { useEffect, useState } from "react";
import Pagination from "../../Pagination/Pagination";

const Home = () => {
  // const [p, setP] = useState(1);
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const findUser = (id) => {
    setView(id);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCount = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage === 1) {
      setCurrentPage(4);
    }
  };
  const increaseCount = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage === 4) {
      setCurrentPage(1);
    }
  };

  return (
    <div>
      <div className=" py-4">
        {currentPosts.map((user) => (
          <div
            key={user.id}
            className="card card-side bg-blue-300 text-black shadow-xl my-4"
          >
            <div className="card-body">
              <div className="grid grid-cols-5">
                <div>
                  <h2 className="card-title">{user.company.name}</h2>
                </div>
                <div>
                  <h2>Contact</h2>
                  <h2 className="card-title">{user.name}</h2>
                </div>
                <div>
                  <h1>City</h1>
                  <h2 className="card-title">{user.address.city}</h2>
                </div>
                <div>
                  <h1>Zip code</h1>
                  <h2 className="card-title">{user.address.zipcode}</h2>
                </div>
                <div className="card-actions justify-end">
                  {view !== user.id ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => findUser(user.id)}
                    >
                      View Details
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => setView(0)}
                    >
                      Hidden Details
                    </button>
                  )}
                </div>
              </div>
              {view === user.id && (
                <div className="border-solid border-2 border-sky-500 bg-slate-300">
                  <div>
                    <h2 className="text-center font-bold">Details</h2>
                    <div className="flex p-5">
                      <div>
                        <div>
                          <h2 className="font-bold">Contact Person</h2>
                          <p>{user.name}</p>
                        </div>
                        <div>
                          <h2 className="font-bold">Email</h2>
                          <p>{user.email}</p>
                        </div>
                        <div>
                          <h2 className="font-bold">Phone</h2>
                          <p>{user.phone}</p>
                        </div>
                      </div>
                      <div className="ml-6">
                        <div>
                          <h2 className="font-bold">Address</h2>
                          <p>{user.address.suite} </p>
                        </div>
                        <div>
                          <h2 className="font-bold">Street</h2>
                          <p>{user.address.street} </p>
                        </div>
                        <div>
                          <h2 className="font-bold">City</h2>
                          <p>{user.address.city} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div></div>
      </div>
      <div className="flex justify-center">
        <Pagination
          postPerPage={postsPerPage}
          totalPosts={users.length}
          paginate={paginate}
          handleCount={handleCount}
          increaseCount={increaseCount}
        ></Pagination>
      </div>
    </div>
  );
};

export default Home;
