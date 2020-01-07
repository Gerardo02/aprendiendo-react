import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Principal from "./pages/principal";
import captura from "./pages/captura";
import inventario from "./pages/inventario";
import historial from "./pages/historial";
import bajas from "./pages/bajas";
import add from "./pages/addSel";
import actualizar from "./pages/actualizar";
import reportes from "./pages/reportes";
import eliminar from "./pages/eliminar";
import App2 from "./components/App2";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/historial" component={historial} />
            <Route exact path="/bajas" component={bajas} />
            <Route exact path="/inventario1" component={inventario} />
            <Route exact path="/captura" component={captura} />
            <Route exact path="/add" component={add} />
            <Route exact path="/actualizar" component={actualizar} />
            <Route exact path="/reportes" component={reportes} />
            <Route exact path="/eliminar" component={eliminar} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
