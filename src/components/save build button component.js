import React from "react";

var saveBuild = props => {
  return (
    <button
      onClick={() => {
        var copyBuildLists = Object.assign([], this.state.buildLists);
        copyBuildLists.push(this.state.buildInput);
        this.setState({
          buildLists: copyBuildLists,
          buildInput: defaultBuildInput,
          notesInput: ""
        });
        console.log(copyBuildLists);
      }}
    >
      Save Build
    </button>
  );
};

export default saveBuild;
