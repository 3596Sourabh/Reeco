import React, { Fragment, useState } from "react";
import "./ProductTable.css";
import { Check, X } from "react-feather";
import ProductModal from "./ProductModal";

const ProductTable = ({ products }) => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit((preState) => !preState);
  };
  return (
    <Fragment>
      <div className="product-table">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
                <td>
                  <Check size={15} />
                  <X size={15} />
                  <p onClick={toggleEdit}> Edit</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ProductModal edit={edit} toggleEdit={toggleEdit} />
    </Fragment>
  );
};

export default ProductTable;
