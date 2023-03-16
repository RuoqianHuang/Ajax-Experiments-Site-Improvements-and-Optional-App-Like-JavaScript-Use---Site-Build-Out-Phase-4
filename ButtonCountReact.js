class ButtonCountReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  
  buttonClicked(event) {
    this.setState({value: this.state.value+1});
  }
  
  render() {
    return (
    	<div>
        <button onClick={this.buttonClicked}>Times Clicked: {this.state.value}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ButtonCountReact />,
  document.getElementById('root')
);
