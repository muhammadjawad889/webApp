import React from "react";

const Request = ({ request }) => {
  return (
    <p>
      <b>
        {request.request ? (
          "Accepted"
        ) : (
          <React.Fragment>
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                // let name = seller;
                let data = request;
                data.request = true;
                data.available = true;
              }}
            >
              Accepted
            </button>{" "}
            / <button className="btn btn-danger btn-sm">Reject</button>
          </React.Fragment>
        )}
      </b>
    </p>
  );
};

export default Request;
