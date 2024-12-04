const express = require("express");
const router = express.Router();
const RessourceControl = require("../Controller/RessourceController");

router.get("/ressource", RessourceControl.getAllRessource);
router.get("/ressource/:id", RessourceControl.getOneRessource);
router.post("/ressource", RessourceControl.createRessource);
router.put("/ressource/:id", RessourceControl.updateRessource);
router.delete("/ressource/:id", RessourceControl.deleteRessource);

module.exports = router;
