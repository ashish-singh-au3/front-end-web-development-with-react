import React, { Component } from "react";

import Menu from "./components/MenuComponent";

import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        <div className="">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} />
        </div>
      </div>
    );
  }
}
