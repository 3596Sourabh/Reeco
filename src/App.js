
import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import Header from "./components/Header";
import Orders from "./components/Orders";
import OrderDetails from "./components/OrderDetails";
import ProductTable from "./components/ProductTable";

function App() {
  const handleBackClick = () => {
    alert("Back button clicked");
  };

  const handleApproveClick = () => {
    alert("Approve order button clicked");
  };

  const orderData = {
    supplier: "Supplier XYZ",
    shippingDate: "2023-09-30",
    totalAmount: 500,
    category: "Electronics",
    department: "Sales",
    status: "Pending",
  };
  const productsData = [
    { id: 1, name: 'Product 1', brand: 'Brand A', price: 10, quantity: 5, status: 'accepted' },
    { id: 2, name: 'Product 2', brand: 'Brand B', price: 20, quantity: 3, status: 'declined' },
    
  ];
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Orders
          orderId="12345"
          onBackClick={handleBackClick}
          onApproveClick={handleApproveClick}
        />
        <OrderDetails order={orderData} />
        <ProductTable products={productsData} />
      </div>
    </Provider>
  );
}

export default App;
