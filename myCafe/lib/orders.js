function orderSystemWith (daos) {
  var result;
  var orderSystem = {
    display: function (orderId, err, res) {
      if(typeof orderId !== 'number'){
        result = {items: [], totalPrice: 0,
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
      return null, result;
    }
  };
  return orderSystem;
}
module.exports = function (daos) {
  return orderSystemWith(daos);
};
