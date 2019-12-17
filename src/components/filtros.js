import React, { Component } from "react";
import "../inve.css";
//import toro from "../images/captura.png";

class Filtros extends Component {
  filterupdate() {
    const val = this.myvalue.value;
    this.props.filterupdate(val);
  }

  render() {
    //console.log("filtertext value", this.props.filtertext);
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            ref={value => (this.myvalue = value)}
            placeholder="type to filter..."
            onChange={this.filterupdate.bind(this)}
          />
          <p>filtertext value is: {this.props.filtertext} </p>
        </form>
      </React.Fragment>
    );
  }
}

export default Filtros;

/*import React, { Component } from "react";
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
*/
