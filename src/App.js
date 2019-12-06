import React, { Component } from "react";
import captura from "./images/captura.png";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import component1 from "./components/App2";
import secondPage from "./components/second";
class App extends Component {
  state = {
    loading: true,
    items: null
  };
  respuesta = document.getElementById("respuesta").value;
  input = document.getElementById("input").value;

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
    let addData = async () => {
      const response = await fetch("http://localhost:4000/add");
      console.log("se hizo");
    };

    return (
      <div className="index-page">
        <div></div>
        <a href="captura">
          <img className="img-captura" src={captura} alt="menu captura" />
        </a>
        <form>
          <select id="respuesta">
            <option value="Brangus">Brangus</option>
            <option value="Tigre">Tigre</option>
            <option value="Vaca">Vaca</option>
          </select>
          <input type="text" id="input"></input>
        </form>
        <button onClick={addData}>add</button>
        <div></div>
        <Router>
          <Switch>
            <Route exact path="/" component={component1} />
            <Route exact path="/captura" component={secondPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
