var React = require("react");
require("../css/additem.css");

var AddItem = React.createClass({
  render: function() {
    return (
      <form action="" id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Hit me" />
      </form>
    );
  }, //render method ends here

  //CUSTOM FUNCTIONS
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
});

module.exports = AddItem;
