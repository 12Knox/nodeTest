import React from 'react';
import ValueInput from './ValueInput.js';

// インチとセンチの変換コンポーネント
export default class InchToCm extends React.Component {
  constructor(props) {
    super(props)
    // ValueInputに初期表示するやーつ
    this.state = {
      inch: 0,
      cm: 0,
    }
  }
  // インチが変更されたとき
  inchChanged(e) {
    const inchValue = e.value;
    const cmValue = inchValue * 2.54;
    this.setState({
      inch: inchValue,
      cm: cmValue,
    });
  }
  // センチが変更されたとき
  cmChanged(e) {
    const cmValue = e.value;
    const inchValue = cmValue * 2.54;
    this.setState({
      inch: inchValue;
      cm: cmValue;
    });
  }
  // 画面の描画
  render() {
    return(
      <div>
        <ValueInput title='inch' onChange={ e => this.inchChanged(e) } value={ this.state.inch } />
        <ValueInput title='cm' onChange={ e => this.cmChanged(e)} value={ this.state.inch } />
      </div>
    )
  }
}
