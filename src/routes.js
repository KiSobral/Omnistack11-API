const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");

const routes = express.Router();

// Ongs routes
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Incidents routes
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
