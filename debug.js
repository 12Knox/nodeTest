// List component
class RList extends React.Component {
    render() {
    // item属性に指定した値から配列itemを利用
        const items = this.props.items.split(",");
        // アイテム一覧からli要素を作成
        const itemsObj = items.map(
            (e) => {
                return <li>{e}</li>
        });
        // タイトル
        let title = this.props.title;
        if (!title) title = "LIST"
            // 描画内容を返す
            return (<div>
                <h3>{title}</h3>
                <ul>{itemsObj}</ul>
                </div>);
        }
    }
    // componentを表示させる
    ReactDOM.render(
        <RList
        title = 'Colors'
        items = 'Red, Green, Blue, White' />,
        document.getElementById('root')
    )