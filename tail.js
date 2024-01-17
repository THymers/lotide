const assertEqual = require('./assertEqual');

const tail = function(notHead) {
  return notHead.slice(1);
};
module.exports = tail;