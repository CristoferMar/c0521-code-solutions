import React from 'react';
import ReactDOM from 'react-dom';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondCount: 0, isPlaying: false };
  }

  // render() {
  //   return (<button className="round">5</button>;
  //   const playBtn = <div><i className="fas fa-play"></i></div>;);
  // }

}

const circle = <div className="watchContainer">
  <button className="round">5</button>
    {/* <div><i className="fas fa-play"></i></div> */}
</div>;

const $root = document.querySelector('#root');
ReactDOM.render(circle, $root);
