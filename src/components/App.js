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

  addToOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either update the order or add to the order
    order[key] = order[key] + 1 || 1;
    // 3. Call setstate to update the state
    this.setState({ order });
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
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
