class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hovered: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryListItems = (props) => (
  <ul>
    {props.groceries.map(item =>
    <GroceryListItem item={item} />
  )}
  </ul>
);


ReactDOM.render(<GroceryListItems groceries={['Milk', 'Eggs', 'Bread', 'Soda', 'Beer']} />, document.getElementById("app"));