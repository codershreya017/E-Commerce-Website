import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartAllProduct }) => {

  return (
    <div className="container-fluid px-3">
      <div className="row bg">
        <div className="col-12 d-flex justify-content-between">
          <ul className="d-flex gap-5 align-items-center m-0 p-0 p-3">
            <NavLink to="/" className="list-unstyled p-0 align-items-center m-0 py-2 text-decoration-none pointer text-black">Home
            </NavLink>
            <li className="list-unstyled p-0 align-items-center m-0 py-2">About</li>
            <li className="list-unstyled p-0 align-items-center m-0 py-2">Contact</li>
            <li className="list-unstyled p-0 align-items-center m-0 py-2">Shop</li>
            <li className="list-unstyled p-0 align-items-center m-0 py-2">Contact</li>
          </ul>
          <ul className="m-0 p-0 py-3 position-relative">
            <NavLink to="/cart" className="m-0 p-0 py-3 pointer">
              <i className="fa-solid fa-cart-shopping fs-2 text-black"></i>
            </NavLink>
            <span className="text-decoration-none rounded-pill text-black position-absolute top-0 right" style={{ background: 'orange', right: '-45%' }}>{cartAllProduct?.length}</span>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;