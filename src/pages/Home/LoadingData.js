import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner} from "reactstrap";

function LoadingData() {
  return (
    <div className="loadingScreen">
      <Spinner color="warning" style={{width: "5rem", height: "5rem"}} />
    </div>
  );
}

export default LoadingData;