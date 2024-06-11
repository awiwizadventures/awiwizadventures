import { products } from "@/app/data/products";
import React from "react";

function Product() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container py-3">
        <div className="text-center mb-5">
          <h2 className="product-heading text-uppercase mt-3">Our Services</h2>
          <hr
            className="w-50 border-3 mx-auto py-2"
            style={{ borderColor: "#ff0000" }}
          />
        </div>

        <div className="row">
          {products?.map((product) => (
            <div key={product?.id} className="col-md-4 col-sm-12 mb-4">
              <div className="card h-100 text-center p-3 shadow-sm">
                <div className="card-body">
                  <div
                    className="icon mb-3"
                    style={{ fontSize: "3rem", color: "#2a4c09" }}
                  >
                    {product?.icon}
                  </div>
                  <h5 className="card-title">{product?.name}</h5>
                  <p className="card-text">{product?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
