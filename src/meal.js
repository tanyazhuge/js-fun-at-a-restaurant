function nameMenuItem(foodName) {
  var descriptiveName = `Delicious ${foodName}`;
  return descriptiveName;
};


function createMenuItem(itemName, itemPrice, itemType) {
  menuItem = {
    name: itemName,
    price: itemPrice,
    type: itemType,
  }
  return menuItem
};


function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping) === false) {
    ingredients.push(topping);
  }
  return ingredients
};


function formatPrice(price) {
  return `$${price}`;
};


function decreasePrice(price) {
  var discountPrice = price * 0.9;
  return discountPrice;
};


function createRecipe(title, toppings, itemType) {
  var recipe = {
    title: title,
    ingredients: toppings,
    type: itemType,
  }
  return recipe;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
