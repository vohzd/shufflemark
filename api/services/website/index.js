const WebsiteModel                           = require("../../models/website.js");
const puppeteer                              = require("puppeteer");
const filenamify                             = require("filenamify");
const path                                   = require("path");
const rootDir                                = path.resolve();


const {
  getHTML
}                                            = require("../puppeteer/index.js");

/* unneedec ?
async function archiveWebsite(url){
  // uses a combo of puppeteer & wget
  console.log("service: archiveWebsite");
  console.log(url);

  const html = await getHTML(url);

  // save to disk
  console.log("DONE");
  console.log(html);

}
*/


async function addWebsite(url){
  console.log("service: addWebsite");
  console.log(url);
  return await website.save();


  //const
  /*
  const screenshotFilename = `${filenamify(url.replace(/(^\w+:|^)\/\//, ""))}.png`;
  let website = new WebsiteModel({ url, screenshotFilename });
  getWebsiteScreenshot(url, screenshotFilename);
  updateWebsite(website._id, { screenshotFilename } );*/
}

async function deleteWebsite(id){
  const Website = await WebsiteModel.findByIdAndRemove({
    "_id": id
  });
  return await Website.remove();
}

async function getWebsites(query){
  console.log("service: getWebsites");
  return await WebsiteModel.find(query);
}

async function getWebsiteScreenshot(url, screenshotFilename){
  console.log("service: getWebsiteScreenshot")

  /*
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
*/
  console.log(`saving to: ${screenshotFilename}`);

  /*
  const path = `${rootDir}/static/websites/screenshots/${screenshotFilename}`;
  console.log(`screenshot path is: ${ screenshotPath }`);

  await page.screenshot({ path });
  await page.close();
  await browser.close();
*/
  return true;

}

async function updateWebsite(id, body){
  console.log("YO");
  console.log(body);
  return await WebsiteModel.findOneAndUpdate({ "_id": id }, { ...body }, { upsert: true });
}

module.exports = {
  addWebsite,
  deleteWebsite,
  getWebsites,
  getWebsiteScreenshot,
  updateWebsite
};
