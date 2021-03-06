import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Form.scss";
import {
  deleteResp,
  getSDCForm,
  getLegacySDCForm,
  getSDCFormResponse,
} from "../actions/Actions";
import { Link } from "react-router-dom";
import ReviewSection from "./ReviewSection";
import ReviewMetaData from "./ReviewMetaData";
import "./Review.scss";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_section: 0,
      procedureID: this.props.location.state.response.diagnosticProcedureID,
      sdcResponse: null,
      sdcForm: null,
    };
  }

  componentDidMount() {
    if (this.props.location) {
      if (!this.props.location.state.response.outdated) {
        getSDCForm(this, this.state.procedureID);
      } else {
        getLegacySDCForm(this, this.props.location.state.response.sdcFormID);
      }
      getSDCFormResponse(this, this.props.location.state.response.id);
    }
  }

  handleDelete = () => {
    deleteResp(this, this.state.sdcResponse.id);
  };

  render() {
    return this.state.sdcForm && this.state.sdcResponse ? (
      <Container fluid className="App">
        <Col>
          <Row>
            <Col md={8}>
              <ReviewSection
                sdcResponse={this.state.sdcResponse}
                sdcForm={this.state.sdcForm}
                submit={false}
              />
            </Col>
            <Col md={4}>
              <ReviewMetaData sdcResponse={this.state.sdcResponse} />
              <div className="actions">Actions</div>
              <Link to={"/responses"}>
                <div className="padding">
                  <button className="buttons">RETURN TO SEARCH</button>
                </div>
              </Link>
              {!this.state.sdcResponse.outdated && (
                <Link
                  to={{
                    pathname: `/forms/${this.state.procedureID}`,
                    state: {
                      response: this.state.sdcResponse,
                    },
                  }}
                >
                  <div className="padding">
                    <button className="buttons">EDIT RESPONSE</button>
                  </div>
                </Link>
              )}
              <Link to={"/"}>
                <div className="padding">
                  <button className="buttons" onClick={this.handleDelete}>
                    DELETE RESPONSE
                  </button>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Container>
    ) : null;
  }
}

export default Review;
