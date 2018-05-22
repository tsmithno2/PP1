import React, { Component } from "react";
import ListInput from "./components/input components";
import "./App.css";
import axios from "axios";

const defaultBuildInput = {
  Notes: "",
  SubClassElement: "",
  Kinetic: "",
  Energy: "",
  Heavy: "",
  Ghost: "",
  Helmet: "",
  Gauntlets: "",
  Chest: "",
  Legs: "",
  ClassItem: "",
  Edit: false
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesInput: "",
      buildInput: defaultBuildInput,
      buildLists: [],
      buildListsEdited: []
    };
    this.usesId = this.usesId.bind(this);
  }

  changeNotes(notesEvent) {
    this.setState({
      notesInput: notesEvent.target.value
    });
  }

  usesId(e) {
    const newObj = Object.assign({}, this.state.buildInput);
    newObj[e.target.id] = e.target.value;
    this.setState({
      buildInput: newObj
    });
  }

  createBuild() {
    let buildArray = this.state.buildLists;

    buildArray.push(this.build.newState);
    this.setState({
      buildlists: buildArray,
      userInput: "",
      buildListsEdited: buildArray
    });
  }

  saveBuild() {
    var buildSend = this.state.buildInput;

    axios /*first argument is where the call is going, second argument is body. body is always an object*/
      .post("/api/savebuild", {
        buildSend
      })
      .then(res =>
        this.setState({
          buildLists: res.data,
          buildListsEdited: res.data
        })
      );
  }

  editOnClick(i) {
    let buildListsCopy = [...this.state.buildLists];
    buildListsCopy[i].Edit = !buildListsCopy[i].Edit;
    this.setState({
      buildLists: [...buildListsCopy],
      buildListsEdited: [...buildListsCopy]
    });
  }

  editBuild(i) {
    axios.put("/api/editbuild", this.state.buildListsEdited).then(res => {
      this.setState({
        buildLists: res.data
      });
      this.editOnClick(i);
    });
  }

  saveObject(buildId) {
    axios.put("/api/editbuild/" + buildId, {}).then(res => {
      this.setState({
        buildLists: res.data,
        buildListsEdited: res.data
      });
    });
  }

  deleteBuild(buildId) {
    axios.delete("/api/deletebuild/" + buildId).then(res => {
      this.setState({
        buildLists: res.data,
        buildListsEdited: res.data
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="background">
        <div className="buildInput">
          <ul className="LeftSide">
            {/*Notes*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Notes}
              id="Notes"
              title="Notes"
            />

            {/*SubClass Element*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.SubClassElement}
              id="SubClassElement"
              title="Subclass Element"
            />

            {/*Kinetic*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Kinetic}
              id="Kinetic"
              title="Kintetic Weapon"
            />

            {/*Energy*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Energy}
              id="Energy"
              title="Energy Weapon"
            />

            {/*Heavy*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Heavy}
              id="Heavy"
              title="Heavy Weapon"
            />

            {/*Ghost*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Ghost}
              id="Ghost"
              title="Ghost Shell"
            />
          </ul>
          <ul className="RightSide">
            {/*Helmet*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Helmet}
              id="Helmet"
              title="Helmet"
            />

            {/*Gauntlets*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Gauntlets}
              id="Gauntlets"
              title="Gauntlets"
            />

            {/*Chest*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Chest}
              id="Chest"
              title="Chest"
            />

            {/*Legs*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.Legs}
              id="Legs"
              title="Legs"
            />

            {/*Class Item*/}
            <ListInput
              manageChange={this.usesId}
              value={this.state.buildInput.ClassItem}
              id="ClassItem"
              title="Class Item"
            />

            <button
              onClick={() => {
                this.saveBuild();
              }}
            >
              Save Build
            </button>
          </ul>
        </div>

        <div className="BuildLists">
          {this.state.buildLists.map((buildList, i) => {
            return (
              <div key={i}>
                <span>
                  <p>{buildList.Notes}</p>
                </span>
                <span>
                  <input
                    style={buildList.Edit ? null : { display: "none" }}
                    value={this.state.buildListsEdited[i].Notes}
                    onChange={e => {
                      let copyCopy = [...this.state.buildListsEdited];
                      copyCopy[i].Notes = e.target.value;
                      this.setState({
                        buildlistsEdited: copyCopy
                      });
                    }}
                  />
                </span>
                <p>{buildList.SubClassElement}</p>
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].SubClassElement}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].SubClassElement = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Kinetic}</p> {/*kinetic*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Kinetic}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Kinetic = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Energy}</p> {/*Energy*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Energy}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Energy = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Heavy}</p> {/*Heavy*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Heavy}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Heavy = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Ghost}</p> {/*Ghost*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Ghost}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Ghost = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Helmet}</p> {/*Helmet*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Helmet}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Helmet = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Gauntlets}</p> {/*Gauntlets*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Gauntlets}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Gauntlets = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Chest}</p> {/*Chest*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Chest}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Chest = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.Legs}</p> {/*Legs*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].Legs}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].Legs = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <p>{buildList.ClassItem}</p> {/*ClassItem*/}
                <input
                  style={buildList.Edit ? null : { display: "none" }}
                  value={this.state.buildListsEdited[i].ClassItem}
                  onChange={e => {
                    let copyCopy = [...this.state.buildListsEdited];
                    copyCopy[i].ClassItem = e.target.value;
                    this.setState({
                      buildlistsEdited: copyCopy
                    });
                  }}
                />
                <button
                  onClick={() => {
                    this.editOnClick(i);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    this.editBuild(buildList.id);
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    this.deleteBuild(buildList.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
