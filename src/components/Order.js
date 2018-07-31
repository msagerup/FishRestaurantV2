import React, { Component } from 'react';

export default class Order extends Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.this.props.order[key];
      const isAvailable = fish && fish.status === 'avaliable';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <div className="total">
          <strong>{total}</strong>
        </div>
      </div>
    );
  }
}
