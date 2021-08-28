import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/homepage-contents/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/cartWork/Cart";
import Products from "./pages/Products";
import Address from "./pages/Address";
// import { getDefaultNormalizer } from "@testing-library/react";

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/products" exact component={Products} />
        <Route path="/payment-proceeds" exact component={Address} />
      </BrowserRouter>
    </div>
  );
};

export default App;
// floydworkassistant@.com - firebase deploy
// https://imposing-pager-323611.web.app/