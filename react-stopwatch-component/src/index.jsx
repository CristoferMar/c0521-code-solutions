import React from 'react';
import ReactDOM from 'react-dom';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondCount: 0,
      isPlaying: "fas fa-play"
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  count() {
    this.setState({secondCount: this.state.secondCount++})
  }

  handleToggle() {
    if (this.state.isPlaying === "fas fa-play") {
      const time = setInterval(count, 1000)
      this.setState({ isPlaying: "fas fa-pause" })
    } else {
      this.setState({ isPlaying: "fas fa-play" })
      clearInterval(time);
    }
  }

  render() {


    return (
      <div className="watchContainer">
        <button className="round">
          {this.state.secondCount}
        </button>
      </div>
    );
  }

}

const circle = <div className="watchContainer">

</div>;

ReactDOM.render(<Stopwatch />, document.querySelector('#root'));
