import React, { Component } from "react";

class data extends Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:4000/datos");
    const data = await response.json();
    //console.log(data);

    const empresa = element.empresa;

    console.log(empresa);
  }
  render() {
    return <></>;
  }
}

export default Inve;
