var GeneralPurposeButton = React.createClass({
  render: function(){
    return (<button type={this.props.type} id={this.props.id} className={this.props.className}>{this.props.label}</button>)
  }
});

ReactDOM.render(<GeneralPurposeButton label="Add Task" type="button" id="addTask" className="genButton"/>, document.querySelector('#main'));
