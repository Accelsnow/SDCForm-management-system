import "./App.scss";
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavigationBar from "./NavigationBar";

import { Container } from "react-bootstrap";
import SDCSearchComponent from "./SDCSearchComponent";
import { SERVER_URL } from "../utils/constants";

class App extends React.Component {
  // Backend call
  componentDidMount() {
    fetch(`${SERVER_URL}/api/test/sdcform/covid19`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ isLoaded: true, sdcForm: data.sdcFormObject })
      )
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.log(error);
      });
  }

  // This is where we will pass the SDCForm json
  state = {
    curr_section: 0,
    newSDCResponse: {},
    sdcFormData: {},
  };

  // This function will change the current section to be displayed
  handleSelection = (index) => {
    this.setState({ curr_section: index });
  };

  sdcResponseHandler = (sdcResponse) => {
    this.setState({
      newSDCResponse: sdcResponse.responseObject,
      sdcFormData: sdcResponse.sdcFormData.sdcFormObject,
    });
  };

  render() {
    const {
      curr_section,
      isLoaded,
      errorMessage,
      newSDCResponse,
      sdcFormData,
    } = this.state;
    // If there i
    if (errorMessage) {
      return <div>Error Occured: {errorMessage}</div>;
    }
    // If the data hasn't loaded yet display this
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    // Once data has been loaded it is okay to then gather from the sdcForm object
    const { sections, name } = this.state.sdcForm;
    return (
      <BrowserRouter>
        <Container fluid className="App">
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <SDCSearchComponent
                sdcResponseHandler={this.sdcResponseHandler}
              />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
