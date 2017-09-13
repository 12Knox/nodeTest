// 状態を持ったコンポーネントを定義
class CBox extends React.Component {
  constructor(props) {
    super(props)
    // 状態の初期化
    this.state = { checked: false };
  }
  render() {
    // 未チェックの状態
    let mark = '□';
    let bstyle = { fontWeight: 'normal' };
    // チェックされているか？
    if (this.state.checked) {
      mark = '■';
      bstyle = { fontWeight: 'bold' };
    }
    // クリックしたときのイベントを指定
    const clickHandler = (e) => {
      const newValue = !this.state.checked;
      this.setState({ checked: newValue });
    }
    return (
      <div onClick={clickHandler} style={bstyle}>
        {mark} {this.props.label}
      </div>
    );
  }
}
// ReactでDOMを書き換える
const dom = <div>
  <CBox label='Apple' />
  <CBox label='Banana' />
  <CBox label='Orange' />
  <CBox label='Mango' />
</div>
ReactDOM.render(
  document.getElementById('root'));