function orderSystemWith (daos) {
  var orderSystem = {
    display: function (daos) {
      if(daos.orderId === 'some empty order id'){
        return this.result.items = [];
      }
    }
  };
  return orderSystem;
}
module.exports = function (daos) {
  return orderSystemWith(daos)
};
