const router                              = require("express").Router();

const { errorHandler }                    = require("../../helpers/errorHandler.js");

const {
  addWebsite,
  deleteWebsite,
  getWebsites
}                                         = require("../../services/website/index.js");

const {
  createFolders
}                                         = require("../../helpers/filesystem.js");

const {
  removeProtocol
}                                         = require("../../helpers/regex.js");

router.get("/websites", async (req, res, next) => {
  let query = req.query ? req.query : {};
  try {
    const websites = await getWebsites(query);
    return res.send(websites);
  }
  catch (e){ return errorHandler(res, e); }
});

router.post("/website", async (req, res) => {
  console.log("route: POST /website");

  // e.g https://github.com/vohzd/somerpo
  const fullURL = req.body.url;

  // github.com/vohzd/somerepo
  const folders = removeProtocol(fullURL);



  // make a nested directory structure on disk



  console.log(fullURL);
  console.log(noProtocol);
  console.log(folders);

  try {

    /*
    const exists = await getWebsites({
      url: req.body.url
    });

    console.log(exists);

    if (!exists){
      await addWebsite(req.body.url);
    }*/

    return res.json({
      message: "yes"
    });
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
