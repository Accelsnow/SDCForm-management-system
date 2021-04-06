import axios from "axios";

const SERVER_URL =
  "http://dababysdcbackendapi-env-2.eba-ybqn7as3.ca-central-1.elasticbeanstalk.com";

/* GET SDC form */
export const getSDCForm = (page, id) => {
  axios
    .get(`${SERVER_URL}/api/sdcform/${id}/`)
    .then((res) => {
      if (res.data) {
        page.setState({ sdcForm: res.data.sdcFormObject });
      } else {
        alert("Failed to get the sdc form!");
      }
    })
    .catch((err) => {
      alert(err.response ? err.response.data : "");
    });
};

/* GET legacy SDC form */
export const getLegacySDCForm = (page, id) => {
  axios
    .get(`${SERVER_URL}/api/sdcform?historyID=${id}`)
    .then((res) => {
      if (res.data) {
        page.setState({ sdcForm: res.data.sdcFormObjects[0] });
      } else {
        alert("GET LEGACY SDC FORM FAILED");
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

/* GET SDC form response */
export const getSDCFormResponse = (page, id) => {
  axios
    .get(`${SERVER_URL}/api/sdcformresponse/${id}/`)
    .then((res) => {
      if (res.data) {
        page.setState({ sdcResponse: res.data.responseObject });
      } else {
        alert("GET SDC FORM RESPONSE FAILED");
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

/* GET all resps */
export const getAllResponseMetadata = (page, data) => {
  console.log(data);
  axios
    .get(
      `${SERVER_URL}/api/sdcformresponse?metadata=true&patientID=${data.patient}&diagnosticProcedureID=${data.procedure}&starttime=${data.start}&endtime=${data.end}`
    )
    .then((res) => {
      if (res.data) {
        page.setState({ responses: res.data.sdcFormResponses });
      } else {
        alert("GET ALL RESPS FAILED");
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

/* DELETE resp */
export const deleteResp = (page, id) => {
  axios
    .delete(`${SERVER_URL}/api/sdcformresponse/${id}/`)
    .then((res) => {
      if (res.data) {
        getAllResponseMetadata(page, {
          patient: "",
          procedure: "",
          start: "",
          end: "",
        });
      } else {
        alert("DELETE RESP FAILED");
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
};
