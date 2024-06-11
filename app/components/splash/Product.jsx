import React from "react";

function Product() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="text-center">
          <h2 className="product-heading">Our Products</h2>
          <hr
            className="w-50 border-3 mx-auto py-2"
            style={{ borderColor: "#ff0000" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
