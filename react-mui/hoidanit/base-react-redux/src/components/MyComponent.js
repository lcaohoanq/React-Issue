// Class Component
// Functional Component

import React from "react";

class MyComponent extends React.Component {
  //state la trang thai
  //state la object
  //state la mot cach ma react kiem soat data cua component
  //khi state thay doi, component render lai
  state = {
    name: "Hieu",
    address: "Ha Noi",
    age: 18,
  };

  //JSX
  render() {
    return (
      <div>
        My First Component
        {Math.random()}
        <div>
          <div>Name: {this.state.name}</div>
          <div>Address: {this.state.address}</div>
          <div>Age: {this.state.age}</div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
