var React = require("react");
var ReactDOM = require("react-dom");

//Create component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ["wash up", "eat some cheese", "take a nap"]
    };
  }, // getInitialState method

  render: function() {
    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
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
