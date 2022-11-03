import React from "react";

const PlaceHolder = (props) => {

    const {title , body} = props.content;

  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "18rem",margin:"1rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolder;
