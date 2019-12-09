const { getViewer } = require("./viewer.query");
const { getAsset } = require('./asset.query')
module.exports = {
  Query: {
    viewer: getViewer,
    asset: getAsset
  }
};
