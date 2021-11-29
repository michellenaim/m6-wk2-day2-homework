import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
  //   state = { count: 0 };

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div className="p-4 bg-info">
          <span className="border border-white text-white p-2">
            {this.props.count}
          </span>
          <button onClick={this.decrement} className="ms-3">
            -
          </button>
          <button onClick={this.increment} className="ms-3">
            +
          </button>
          <button onClick={this.reset} className="ms-3">
            reset
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
