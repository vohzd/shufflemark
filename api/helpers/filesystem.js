const fs                                     = require('fs-extra');
const rootDir                                = path.resolve();

async function createFolders(folders){
  return await fs.ensureDir(`${rootDir}/${folders}`);
}


module.exports = {
  createFolders,
};
