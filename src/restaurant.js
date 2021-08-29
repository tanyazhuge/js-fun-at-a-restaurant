function createRestaurant(restaurantName) {
 var newRestaurant = {
   name: restaurantName,
   menus: {
     breakfast: [],
     lunch: [],
     dinner:[],
   }
 }
 return newRestaurant;
};

function addMenuItem (newRestaurant, foodItemInfo){

// if (newRestaurant.menus.include){

if (newRestaurant.menus.breakfast.includes(foodItemInfo)){
    return;

} else if (newRestaurant.menus.lunch.includes(foodItemInfo)){
    return;

} else if (newRestaurant.menus.dinner.includes(foodItemInfo)){
    return;

} else if ("breakfast" === foodItemInfo.type) {
    newRestaurant.menus.breakfast.push(foodItemInfo);

} else if ("lunch" === foodItemInfo.type) {
    newRestaurant.menus.lunch.push(foodItemInfo);

} else {
    newRestaurant.menus.dinner.push(foodItemInfo);
}
};


function removeMenuItem(newRestaurant, foodItem, type){

  if (type === "breakfast"){
    for (var i = 0; i < newRestaurant.menus.breakfast.length; i++){
      if(newRestaurant.menus.breakfast[i].name === foodItem){
        newRestaurant.menus.breakfast.splice(i);
      }
    }

  } else if (type === "lunch") {
    for (var i = 0; i < newRestaurant.menus.lunch.length; i++){
      if(newRestaurant.menus.lunch[i].name === foodItem){
        newRestaurant.menus.lunch.splice(i);
      }
    }
  } else if (type === "dinner"){
    for (var i = 0; i < newRestaurant.menus.dinner.length; i++){
      if(newRestaurant.menus.dinner[i].name === foodItem){
        newRestaurant.menus.dinner.splice(i);
      }
    }
}
  var errorItems = ["Mom's Spaghetti","Funfetti Cake",]

  if (foodItem === errorItems[0] || foodItem === errorItems[1]){
    return `Sorry, we don't sell ${foodItem}, try adding a new recipe!`;
  } else {
    return `No one is eating our ${foodItem} - it has been removed from the ${type} menu!`;
  }

};



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
