function orderSystemWith (daos) {
  var orderSystem = {
    display: function (orderId) {
      var result;
      if(orderId === 'some empty order id'){
        var result = {items: [], totalPrice: 0,
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
      return result;
    }
  };
  return orderSystem;
}
module.exports = function (daos) {
  return orderSystemWith(daos)
};
