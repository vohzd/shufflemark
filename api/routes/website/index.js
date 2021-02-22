const router                              = require("express").Router();

const { errorHandler }                    = require("../../helpers/errorHandler.js");

const {
  addWebsite,
  deleteWebsite,
  getWebsites
}                                         = require("../../services/website/index.js");

const {
  getHTML,
}                                         = require("../../services/puppeteer/index.js");


const {
  createFile,
  createFolders
}                                         = require("../../helpers/filesystem.js");

const {
  removeProtocol
}                                         = require("../../helpers/regex.js");

router.get("/websites", async (req, res, next) => {
  let query = req.query ? req.query : {};
  try {
    console.log("route GET /websites");
    const websites = await getWebsites(query);
    console.log(websites);
    return res.send(websites);
  }
  catch (e){ return errorHandler(res, e); }
});


router.delete("/website/:id", async (req, res) => {
  console.log("route: DELETE /website/:id");
  console.log(req.params.id);
  try {
    await deleteWebsite(req.params.id);
    res.send("deleted");
  }
  catch (e){ return errorHandler(res, e); }
});


module.exports = router;
