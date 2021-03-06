import "./App.scss";
import NavigationBar from "./NavBar";
import { Container } from "react-bootstrap";
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Form Manager</title>
        </Helmet>
        <Router>
          <Container fluid className="App">
            <NavigationBar />
          </Container>
        </Router>
      </>
    );
  }
}

export default App;
