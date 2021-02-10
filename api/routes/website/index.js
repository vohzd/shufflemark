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

router.post("/website", async (req, res) => {
  console.log("route: POST /website");

  try {

    // e.g https://github.com/vohzd/somerpo
    const fullURL = req.body.url;

    // github.com/vohzd/somerepo
    const path = removeProtocol(fullURL);

    // static/websites/github.com/vohzd/somerepo/index.html
    const finalPath = `/static/websites/${path}/index.html`;

    // get puppeteer to download the file
    const html =  await getHTML(fullURL);

    // write it to disk
    await createFile(finalPath, html);

    const exists = await getWebsites({
      url: finalPath
    });

    console.log(exists);

    if (!exists) await addWebsite(finalPath);

    return res.json(finalPath);
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
