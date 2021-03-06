import "./NavigationBar.scss";

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import ResponseDashboard from "./SDCResponseDashboard";
import Form from "./Form";
import Review from "./Review";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sdcFormData, newSDCResponse } = this.props;

    return (
      <div>
        <Navbar bg="sdc">
          <Navbar.Brand>SDCFiller</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Start New Form</Nav.Link>
            <Nav.Link as={Link} to={"/responses"}>
              Edit Previous Response
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route
            exact
            path="/review/:procedureId"
            render={(props) => (
              <Review
                sdcForm={sdcFormData}
                sdcFormResponse={newSDCResponse}
                {...props}
              />
            )}
          />

          <Route
            exact
            path="/forms/:procedureId"
            render={(props) => (
              <Form
                sdcForm={sdcFormData}
                sdcFormResponse={newSDCResponse}
                {...props}
              />
            )}
          />
          <Route exact path="/responses" component={ResponseDashboard} />
        </Switch>
      </div>
    );
  }
}

export default NavigationBar;
