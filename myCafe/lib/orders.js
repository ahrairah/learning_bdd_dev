function orderSystemWith (daos) {
  var orderSystem = {
    display: function (orderId, func(err, res)) {
      if(typeof orderId !== 'number'){
        res = {items: [], totalPrice: 0,
        actions: [
          {
            action: 'append-beverage',
            target: orderId,
            parameters: {
              beverageRef: null,
              quantity: 0
            }
          }
        ]};
      }
      var done = true;
      return res, done;
    }
  };
  return orderSystem;
}
module.exports = function (daos) {
  return orderSystemWith(daos);
};
