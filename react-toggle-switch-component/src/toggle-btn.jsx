import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.isOn
      ? this.setState({ isOn: false })
      : this.setState({ isOn: true });
  }

  render() {
    let color = 'oval grey';
    let text = 'OFF';
    let circPosition = 'circle';
    if (this.state.isOn === true) {
      color = 'oval green';
      text = 'ON';
      circPosition = 'circle right';
    }
    return (
      <div className="switchBox" onClick={this.handleClick}>
        <div className={color}>
          <div className={circPosition}></div>
        </div>
        <div className="word">{text}</div>
      </div>
    );
  }
}
