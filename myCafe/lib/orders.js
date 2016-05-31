function orderSystemWith (daos) {
  var orderSystem = {
    display: function (orderId) {
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
      return null, res;
    }
  };
  return orderSystem;
}
module.exports = function (daos) {
  return orderSystemWith(daos);
};
