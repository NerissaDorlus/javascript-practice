/*given an array of shopping list "milk", "bread", "list" and an array of items called cart "beer", chips", "salsa", "milk"*/

const shoppingList = ["milk", "bread", "eggs"];
const cart = ["beer", "chips", "salsa", "milk"];

function filterShoppingList(list, cart) {
  let newList = [];
  //loop through my shoppinglist, "list"
  for (let i = 0; i < list.length; i++) {
    //check to see if each item from list is already in cart
    for (let j = 0; j < cart.length; j++) {
      //if I find a match ,break out of this inner forr loop and go on to next list item
      if (cart[j] === list[i]) {
        break;
      }
      //if i get to the END of the list and haven't found a match, then
      if (cart[j] === cart.length - 1) {
        newList.push(list[i]);
      }
    }
  }
  return newList;
}
