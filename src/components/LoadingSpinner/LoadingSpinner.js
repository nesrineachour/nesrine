import React from "react";
// import { Spin } from "antd";
import { Spinner } from "react-bootstrap";
// import "antd/dist/antd.css";

const LoadingSpinner = props => {
  /* I could also use this...<Spin /> */
  return <Spinner animation="border" variant="dark" />;
};

export default LoadingSpinner;
