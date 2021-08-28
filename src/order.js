
function takeOrder(orderName, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(orderName);
  }
  return
};

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length ;i++){
    if(deliveryOrders[i].orderNumber === orderNumber){
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
};

function listItems(deliveryOrders){
  var foodItems = ''
  for (var i = 0; i < deliveryOrders.length; i++){
    foodItems += deliveryOrders[i].item
    if (i !== deliveryOrders.length-1){
      foodItems += ", ";
    }
  }
  return foodItems;
};

// do not want list of true or false, want to return only one
function searchOrder(deliveryOrders, itemName) {
  var itemsIsPresent = []
  for (var i = 0; i < deliveryOrders.length; i++){
    itemsIsPresent.push(deliveryOrders[i].item.includes(itemName));
  }
  return itemsIsPresent.includes(true);
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
