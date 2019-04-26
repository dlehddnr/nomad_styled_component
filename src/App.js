import React, { Component, Fragment } from "react";
import styled from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Hi</Button>
        <Button danger />
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: green;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: black;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default App;
