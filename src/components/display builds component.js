import React from "react";

var DisplaySavedBuilds = props => {
  return (
    <div>
      {this.state.buildLists.map(buildList => {
        return <p>{JSON.stringify(buildList)}</p>;
      })}
    </div>
  );
};

export default DisplaySavedBuilds;
