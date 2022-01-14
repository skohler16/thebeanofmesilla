import React from "react";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>About Us!</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Owner</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col">
            <img
              src="assets/images/balderas-with-pasteries.jpeg"
              alt="owner with pasteries"
              id="owner"
            />
          </div>
        </div>
        <div className="row">
          <div className=" col mt-2 mb-2">
            <img
              src="assets/images/staffPic.png"
              alt="the bean staff "
              id="staff"
            />
          </div>
          <div className="col mt-2">
            <h4>Staff</h4>
            <p>
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit aDuis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cup.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
