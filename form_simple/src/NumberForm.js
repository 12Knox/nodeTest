import React from 'react';
export default class NumberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  doChange(e) {
    const curValue = e.target.value;
    // 数字以外は削除
    const newValue = curValue.replace(/[0~9]/g, '');
    this.setState({ values: newValue });
  }
  // 送信ボタンが押された
  doSubmit(e) {
    window.alert('値を送信：' + this.state.value);
    console.log('hogehoge');
    e.preventDefault();
  }
  // 画面の描画
  render() {
    // イベントをメソッドにバインド
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={ doSubmit }>
        <input type='text' value = {this.state.value} onChange = { doChange } />
        <input type='submit' value='送信' />
      </form>
    );
  }
}
