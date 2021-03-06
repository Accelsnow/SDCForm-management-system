import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import "./SDCResponseDashboard.scss";
import { Link } from "react-router-dom";
import { deleteResp, getAllResponseMetadata } from "../actions/Actions";

class ResponseDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProcedure: "",
      searchPatient: "",
      searchStartDate: "",
      searchEndDate: "",
      responses: [],
    };
  }

  componentDidMount() {
    getAllResponseMetadata(this, {
      patient: "",
      procedure: "",
      start: "",
      end: "",
    });
  }

  onSearch() {
    let start = "";
    let end = "";
    if (this.state.searchStartDate !== "") {
      start = new Date(this.state.searchStartDate).toISOString();
    }
    if (this.state.searchEndDate !== "") {
      end = new Date(this.state.searchEndDate).toISOString();
    }
    getAllResponseMetadata(this, {
      patient: this.state.searchPatient,
      procedure: this.state.searchProcedure,
      start: start,
      end: end,
    });
  }

  onInputProcedure(e) {
    this.setState({ searchProcedure: e.target.value });
  }

  onInputPatient(e) {
    this.setState({ searchPatient: e.target.value });
  }

  onInputStartDate(e) {
    this.setState({ searchStartDate: e.target.value });
  }

  onInputEndDate(e) {
    this.setState({ searchEndDate: e.target.value });
  }

  onDeleteResp(resp) {
    deleteResp(this, resp.id);
  }

  render() {
    return (
      <div id="filler-panel">
        <h2>Search Previous Responses</h2>
        <div id="filler-panel-head">
          <Form>
            <Form.Row>
              <Col xs="auto">
                <label>Procedure</label>
                <Form.Control
                  placeholder="Diagnostic Procedure ID"
                  onChange={this.onInputProcedure.bind(this)}
                />
              </Col>
              <Col xs="auto">
                <label>Patient</label>
                <Form.Control
                  placeholder="Patient ID"
                  onChange={this.onInputPatient.bind(this)}
                />
              </Col>
              <Col xs="auto">
                <label>Start Date</label>
                <Form.Control
                  type={"date"}
                  onChange={this.onInputStartDate.bind(this)}
                />
              </Col>
              <Col xs="auto">
                <label>End Date</label>
                <Form.Control
                  type={"date"}
                  onChange={this.onInputEndDate.bind(this)}
                />
              </Col>
            </Form.Row>
            <Button variant="primary" onClick={this.onSearch.bind(this)}>
              Search
            </Button>
          </Form>
        </div>
        <div id="filler-panel-body">
          <p>{this.state.responses.length} Result(s)</p>
          <Table striped bordered={false} hover>
            <thead>
              <tr>
                <th>Procedure ID</th>
                <th>Patient ID</th>
                <th>Last Edited</th>
                <th>Outdated</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.responses.map((resp) => {
                const date = new Date(resp.timestamp);
                const readableTime = `${date.toLocaleDateString(
                  "en-CA"
                )} ${date.toLocaleTimeString("en-CA")}`;

                return (
                  <tr key={resp.id}>
                    <td>{resp.diagnosticProcedureID}</td>
                    <td>{resp.patientID}</td>
                    <td>{readableTime}</td>
                    <td>{resp.outdated ? "outdated" : "up-to-date"}</td>
                    <td>
                      <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>Edit</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={this.onDeleteResp.bind(this, resp)}
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Link
                        id="update-button"
                        to={{
                          pathname: `/review/${resp.diagnosticProcedureID}`,
                          state: {
                            response: resp,
                          },
                        }}
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ResponseDashboard;
