import React from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import Contact from './Contact';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="nav-button"><Link to="/addproduct" style={{ textDecoration: 'none' }}>Add Product</Link></div>
          <div className="nav-button"><Link to="/updateproduct" style={{ textDecoration: 'none' }}>Update Product</Link></div>
          <div className="nav-button"><Link to="/deleteproduct" style={{ textDecoration: 'none' }}>Delete Product</Link></div>
          <div className="nav-button"><Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link></div>
        </nav>
        <Switch>
          <Route path="/addproduct" component={AddProduct}></Route>
          <Route path="/updateproduct" component={UpdateProduct}></Route>
          <Route path="/deleteproduct" component={DeleteProduct}></Route>
          <Route path="/contact" component={Contact}></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
