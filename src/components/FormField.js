import React, { Component } from "react";

console.log('FormField' + this.props);

class FormField extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="e.g Alex Smith"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">e-mail</label>
          <div className="control">
            <input
              className="input is-primary"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input is-primary"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
