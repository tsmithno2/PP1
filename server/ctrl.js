let buildsArray = [];
let id = 0;

module.exports = {
  addNewBuild: (req, res) => {
    var {
      Notes,
      SubClassElement,
      Kinetic,
      Energy,
      Heavy,
      Ghost,
      Helmet,
      Gauntlets,
      Chest,
      Legs,
      ClassItem
    } = req.body.buildSend;
    var body = req.body.buildSend;
    var newObj = {
      Notes: Notes,
      SubClassElement: SubClassElement,
      Kinetic: Kinetic,
      Energy: Energy,
      Heavy: Heavy,
      Ghost: Ghost,
      Helmet: Helmet,
      Gauntlets: Gauntlets,
      Chest: Chest,
      Legs: Legs,
      ClassItem: ClassItem,
      id: id
    };
    buildsArray.push(newObj);

    id++;

    res.status(200).send(buildsArray);
  },

  displaySaved: (req, res) => {
    res.status(200).send(buildsArray);
  },

  editBuild: (req, res) => {
    console.log("we got here");
    buildsArray = req.body;
    res.status(200).send(buildsArray);
  },
  deleteSavedBuild: (req, res) => {
    for (let i = 0; i < buildsArray.length; i++) {
      if (buildsArray[i].id === +req.params.id) {
        buildsArray.splice(i, 1);
        return res.status(200).send(buildsArray);
      }
    }
  }
};
