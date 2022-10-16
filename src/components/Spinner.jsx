import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Spinner1 = () => {
  return (
    <Spinner
      animation="border"
      variant="primary"
      role="status"
      className="mx-auto spinner"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Spinner1;
