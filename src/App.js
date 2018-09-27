import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>this.props.setName("Abeywardana")}>Change Name</button>
        <h1>{this.props.user.name}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(App);
