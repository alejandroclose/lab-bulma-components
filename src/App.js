import React, { Component } from "react";
import "./App.css";
import "bulma-start/css/main.css";
import Button from "./components/Buttons";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Signup to our Newsletter!</p>
        <FormField />
        {/* <Button>1</Button>
        <Button primary>2</Button>
        <Button>3</Button> */}
        <Button primary>Signup</Button>
        <Container title="Title for the message">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Container>
      </div>
    );
  }
}

export default App;
