import React, { Component } from "react";

class Button extends Component {
  render() {
    console.log(this.props);
    const { primary } = this.props;
    const className = `button ${primary ? "is-primary" : ""}`;
    return <button className={className}>{this.props.children}</button>;
  }
}

export default Button;
