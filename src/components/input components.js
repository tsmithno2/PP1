import React from "react";

var ListInput = props => {
  return (
    <li>
      {/*all inputs*/}
      <p>{props.title}</p>{" "}
      <input
        onChange={e => props.manageChange(e)}
        id={props.id}
        value={props.value}
        type="text"
      />
    </li>
  );
};

export default ListInput;
