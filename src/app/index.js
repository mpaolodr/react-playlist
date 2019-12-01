var React = require("react");
var ReactDOM = require("react-dom");

//Create component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ["wash up", "eat some cheese", "take a nap", "study"],
      age: 30
    };
  }, // getInitialState method

  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item) {
      return <li>{item}</li>;
    });
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
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
      </div>
    );
  } //render method
});

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
