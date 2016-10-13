var GeneralPurposeButton = React.createClass({
  render: function(){
    return (<button type={this.props.type} id={this.props.id} className={this.props.className} onClick={this.props.onClick}>{this.props.label}</button>)
  }
});

ReactDOM.render(<GeneralPurposeButton label="Add Task" type="button" id="addTask" className="genButton" onClick={function(){alert('hi')}}/>, document.querySelector('#main'));
