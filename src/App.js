import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import principal from "./pages/principal";
import captura from "./pages/captura";
import inventario from "./pages/inventario";
import historial from "./pages/historial";
import bajas from "./pages/bajas";
import App2 from "./components/App2";
class App extends Component {
  state = {
    loading: true,
    items: null
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();

    this.setState({
      items: data[0],
      loading: false
    });
    console.log(data);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={principal} />
            <Route exact path="/historial" component={historial} />
            <Route exact path="/bajas" component={bajas} />
            <Route exact path="/inventario" component={inventario} />
            <Route exact path="/captura" component={captura} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
