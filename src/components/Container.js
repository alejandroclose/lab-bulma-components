import React, { Component } from "react";

class Container extends Component {
  render() {
    const { title } = this.props;
    return (
      <article className="message">
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">
          <p>{this.props.children}</p>
        </div>
      </article>
    );
  }
}

export default Container;
