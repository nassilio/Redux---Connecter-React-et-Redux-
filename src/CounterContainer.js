import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const CounterContainer = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => dispatch({ type: "ADD" })}>+ 1</button>
    <button onClick={() => dispatch({ type: "ADD10" })}>+ 10</button>
    <button onClick={() => dispatch({ type: "REMOVE" })}>- 1</button>
    <button onClick={() => dispatch({ type: "REMOVE10" })}>- 10</button>
    <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
  </div>
);

export default connect(mapStateToProps)(CounterContainer);
