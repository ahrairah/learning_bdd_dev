function orderSystemWith (daos) {
  var orderSystem = {
    display: function (daos) {
      var items = [];
      if(daos.orderId === 'some empty order id'){
        items = [{}];
      }
      return items;
    }
  };
  return orderSystem;
}
module.exports = function (daos) {
  return orderSystemWith(daos)
};
