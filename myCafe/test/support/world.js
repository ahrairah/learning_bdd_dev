var newStorage = require('../support/storageDouble'),
orderSystemWith = require('../../lib/orders');

module.exports = function (cb) {
  var world = {};
  world.orderStorage = newStorage();
  world.messageStorage = newStorage();
  world.orderSystem = orderSystemWith({
    order: world.orderStorage.dao(),
    message: world.messageStorage.dao()
  });
  cb(world);
};
