import React from 'react';
// import ReactDOM from 'react-dom';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: (this.state.clickCount + 1) });
    if (this.state.clickCount === 18) {
      this.setState({ clickCount: 1 });
    }
  }

  render() {
    let color = 'cold';
    const currntCount = this.state.clickCount;
    if (currntCount > 15) {
      color = 'whiteDwarf';
    } else if (currntCount > 12) {
      color = 'burning';
    } else if (currntCount > 9) {
      color = 'hot';
    } else if (currntCount > 6) {
      color = 'warm';
    } else if (currntCount > 3) {
      color = 'cool';
    }

    return <button className={color} onClick={this.handleClick}>Hot Button</button>;
  }
}
