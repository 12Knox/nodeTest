import React, { Component } from 'react';
import './Stopwatch.css';

// Stopwatchコンポーネントを定義
class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  //初期値を設定
      isLive: false,
      curTime: 0,
      startTime: 0,
    }
    this.timerId = 0;
  }
  // マウントしたとき
  componentWillMount() {
    this.timerId = setInterval(e => {
      this.tick();
    }, 1000)
  }
  // アンマウントしたとき
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
}
