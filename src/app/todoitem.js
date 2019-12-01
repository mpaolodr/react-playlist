var React = require("react");

//create todoitem component
var TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}>
            {" "}
            x{" "}
          </span>
        </div>
      </li>
    );
  }, //render method ends here

  //CUSTOM FUNCTIONS
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
}); // TodoItem component ends here

//MODULE EXPORT
module.exports = TodoItem;
