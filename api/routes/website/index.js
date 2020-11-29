const router                              = require("express").Router();

const { errorHandler }                    = require("../../helpers/errorHandler.js");

const {
  createWebsite,
  getWebsites
}                                         = require("../../services/website/index.js");

router.get("/websites", async (req, res, next) => {
  console.log("HALLO");
  let query = req.query ? req.query : {};
  try {
    const websites = await getWebsites(query);
    return res.send(websites);
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/website", async (req, res) => {
  console.log("creating the website!!!!");
  console.log(req.body);
  try {
    await createWebsite(req.body.url);
    res.send({
      "success": true
    });
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
