const WebsiteModel                           = require("../../models/website.js");
const puppeteer                              = require("puppeteer");
const filenamify                             = require("filenamify");
const path                                   = require("path");
const rootDir                                = path.resolve();


async function addWebsite(url){
  console.log("adding!");
  const screenshotFilename = `${filenamify(url.replace(/(^\w+:|^)\/\//, ""))}.png`;
  let website = new WebsiteModel({ url });
  await website.save();
  getWebsiteScreenshot(url, screenshotFilename);
  updateWebsite(website._id, { screenshotFilename } );
  return true;
}

async function deleteWebsite(id){
  const Website = await WebsiteModel.findByIdAndRemove({
    "_id": id
  });
  return await Website.remove();
}

async function getWebsites(query){
  return await WebsiteModel.find(query);
}

async function getWebsiteScreenshot(url, screenshotFilename){
  console.log("********************");
  console.log("LAUNCHING PUPPETEER");
  console.log(`received url: ${ url }`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  console.log(`using filename: ${screenshotFilename}`);

  const screenshotPath = `${rootDir}/static/screenshots/${screenshotFilename}`;
  console.log(`screenshot path is: ${ screenshotPath }`);

  await page.screenshot({ path: screenshotPath });
  await page.close();
  await browser.close();

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
