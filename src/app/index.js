var React = require("react");
var ReactDOM = require("react-dom");
require("../css/index.css");

//MODULE REQUIRES

var TodoItem = require("./todoitem");
var AddItem = require("./additem");

//Create component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ["wash up", "eat some cheese", "take a nap", "study"]
    };
  }, // getInitialState method

  render: function() {
    var todos = this.state.todos;
    todos = todos.map(
      function(item, index) {
        return <TodoItem item={item} key={index} onDelete={this.onDelete} />;
      }.bind(this) // because TodItem has no idea what "this" is
    );
    // var ager = setTimeout(
    //   function() {
    //     this.setState({
    //       age: 35
    //     });
    //   }.bind(this),
    //   5000
    // );
    //data used for showing how to change state

    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }, //render method ends here

  //Custom functions
  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });

    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }
}); //TodoComponent ends here

//put into html doc
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));

//DATA FOR PROPS

//    {/* <div>
//     <p>
//       <strong>Cheese name:</strong> {this.props.cheese.name}{" "}
//     </p>
//     <p>
//       <strong>Cheese smell factor:</strong> {this.props.cheese.smellFactor}{" "}
//     </p>
//     <p>
//       <strong>Cheese price:</strong> {this.props.cheese.price}{" "}
//     </p>
//   </div> */}

// var myCheese = {
//   name: "Camembert",
//   smellFactor: "Extreme pong",
//   price: "3.50"
// };

//put component into html page

// ReactDOM.render(
//   <TodoComponent msg="this is the property" cheese={myCheese} />,
//   document.getElementById("todo-wrapper")
// );
