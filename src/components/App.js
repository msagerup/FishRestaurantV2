import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
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
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
