const clientsController = require("../controller/clientsController");
const express = require("express");
const verifyJWT = require("../middlewares/verifyJWT")

const router = express.Router();
router.use(verifyJWT)
// שליפת לקוח לפי phone או phone2
router.get("/:phone", clientsController.getOne);

// הוספת לקוח חדש
router.post("/", clientsController.AddClient);

// עדכון לקוח לפי phone או phone2
router.put("/:phone", clientsController.updateClient);
router.post("/:phone/document", clientsController.addDocumentToClient);

module.exports = router;
