import React, { Component } from "react";

import Menu from "./components/MenuComponent";

import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  /*   constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  } */

  render() {
    return (
      <BrowserRouter>
        {" "}
        <div>
          <div className="">
            <Main />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
