import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  // Create ref for form
  myInput = React.createRef();

  goToStore = e => {
    e.preventDefault();
    // 1. Get text from input
    const storeName = this.myInput.value.value;
    // 2. Change the page to /store/whatever-enetered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
