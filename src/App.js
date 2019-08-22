import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Ahmed Maamoun";
    const loading = false;
    const showName = true;
    if (loading) {
      return <h4>loading...</h4>;
    }
    return (
      <Fragment>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
      </Fragment>
    );
  }
}

export default App;
