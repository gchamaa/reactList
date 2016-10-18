// TO DO
// Use ES6 class, use ES6 function syntax
var AddTaskModal = React.createClass({
  render: function(){
    return (<div id={this.props.id} className={this.props.className}>
              <label htmlFor="addTaskControl">Add Task</label>
              <input type="text" id="addTaskControl"/>
              <div>
                <button type="button" id="closeModal" className="closeModal" name="closeModal">Close</button>
                <button type="button" id="saveModal" className="saveModal" name="saveModal">Save</button>
              </div>
            </div>)
  }
});

function openModal (){
  ReactDOM.render(<AddTaskModal id="addTaskModal" className="addTaskModal"></AddTaskModal>, document.querySelector('#modal'))
}

document.querySelector('#addTaskButton').addEventListener('click', openModal);
