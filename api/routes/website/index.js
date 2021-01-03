const router                              = require("express").Router();

const { errorHandler }                    = require("../../helpers/errorHandler.js");

const {
  addWebsite,
  getWebsites
}                                         = require("../../services/website/index.js");

router.get("/websites", async (req, res, next) => {
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
    const exists = await getWebsites({
      url: req.body.url
    });

    let message = "";

    if (exists.length === 0){
      await addWebsite(req.body.url);
      message = "added new website";
    }
    else {
      message = "already exists";
    }

    res.send(message);
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
