const { clone } = require("lodash");

function cloneArray(array) {
  return [...array];
}

module.exports = cloneArray;
