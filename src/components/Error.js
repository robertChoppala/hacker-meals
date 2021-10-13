import React from "react";

const Error = ({ errors }) => {
  console.log(errors, "errorserr ors", [1, 2, 3]);
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
      <div id="list">
        {errors.map((err) => (
          <div className="error-msg" key={err}>
            <i className="fa fa-times-circle"></i>
            <p>Error! No menu generated for {err}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Error;
