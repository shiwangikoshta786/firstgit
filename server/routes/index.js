const express = require("express") ;
const router = express.Router();
const {App,Api} = require("../controllers/jobController") ;


router.post("/jobs", App)

router.get("/view", Api)


module.exports = router
