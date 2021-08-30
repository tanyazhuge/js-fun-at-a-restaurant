class Chef {
  constructor(chefName, restaurant) {
    this.name = chefName;
    this.restaurant = restaurant;

  }
  greetCustomer(customerName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    }
  }
  checkForFood(foodItemInfo) {
        return `Yes, we're serving ${foodItemInfo.name} today!`;
  }
};

module.exports = Chef;
