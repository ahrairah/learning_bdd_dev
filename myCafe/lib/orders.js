function orderSystemWith (daos) {
  var orderSystem = {
    display: function (daos) {
      var result;
      if(daos.orderId === 'some empty order id'){
        var result = {items: []}
      }
      return result;
    }
  };
  return orderSystem;
}
module.exports = function (daos) {
  return orderSystemWith(daos)
};
