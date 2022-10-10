import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //   autoFocus
        //   ref={this.username}
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="aler alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
