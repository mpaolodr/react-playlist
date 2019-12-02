var React = require("react");
var ReactDOM = require("react-dom");
require("../css/index.css");

// import { Router, Route, browserHistory } from "react-router";
import {
  browserHistory,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//MODULE REQUIRES

var TodoItem = require("./todoitem");
var AddItem = require("./additem");
var About = require("./about");

var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <div>
          <Route path={"/"} component={TodoComponent}></Route>

          <Route path={"/about"} component={About}></Route>
        </div>
      </Router>
    );
  }
});

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
        <Link to={"/about"}>About</Link>
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
  },

  //LIFECYCLE FUNCTIONS
  componentWillMount: function() {
    console.log("componentWillMount");
  },

  componentDidMount: function() {
    console.log("componentDidMount");

    //good place for any grabbing of external data
  },

  componentWillUpdate: function() {
    console.log("componentWillUpdate");
  }
}); //TodoComponent ends here

//put into html doc
ReactDOM.render(<App />, document.getElementById("todo-wrapper"));

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
