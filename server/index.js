const express = require("express");
const bodyParser = require("body-parser");
const ctrl = require("./ctrl");
const app = express();
app.use(bodyParser.json());
const port = 3005;

app.post("/api/savebuild", ctrl.addNewBuild);
app.get("/api/savebuild", ctrl.displaySaved);
app.put("/api/editbuild", ctrl.editBuild);
app.delete("/api/deletebuild/:id", ctrl.deleteSavedBuild);

app.listen(port, () => console.log("Server is Listening " + port));
