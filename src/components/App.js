import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Update state
    // Take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to fishes const
    fishes[`fish${Date.now()}`] = fish;
    //  3. set new object to state
    this.setState({
      fishes
    });

    console.log(fishes);
    console.log(fish);
    console.log('state:', this.state);
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <Header tagline="Magnus is cool" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}
