import React from "react";
import productList from "./data";
import toast, { Toaster } from 'react-hot-toast';


const Content = ({ setProductId }) => {
  const handleAddToCart = (id) => {
    setProductId(id);
    toast.success('Product Added');
  };

  return (
    <div className="container-fluid px-5">
      <div className="row gap-4 justify-content-center">
        <Toaster />
        {productList?.map((product, index) => {
          return (
            <div className="col-2 border rounded mt-2" key={product?.id}>
              <div className="d-flex justify-content-center p-2">
                <img src={product?.img} alt="" className="product-width" />
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between px-2">
                  <p className="m-0 font-weight font-size">{product?.brand}</p>
                  <p className="m-0 font-weight font-size">{product?.model}</p>
                </div>
                <div className=" px-2">
                  <p className="m-0 font-weight">
                    Rs.{product?.price}
                  </p>
                  <p className="m-0  text-hidden">{product?.space}</p>
                </div>
                <div className="px-2 mt-1">
                  <button onClick={() => handleAddToCart(product?.id)}
                    className="btn btn-primary p-1 w-100">
                    AddToCart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;