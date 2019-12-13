import React, { Component } from "react";
import Inve from "./inve";
import "../inve.css";
//import toro from "../images/captura.png";

class Filtros extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }
  render() {
    let filtered = this.props;
    return (
      <React.Fragment>
        <div>
          <br />
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          ></input>
          <br />
          <div></div>
          <button>sobres</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Filtros;
