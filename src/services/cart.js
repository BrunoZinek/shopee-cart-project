async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\n💵 Total: ${result}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) userCart.splice(index, 1);
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex(
    (product) => product.name === item.name
  );
  if (indexFound == -1) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
    userCart[indexFound] = item;
    return;
  }

  userCart.splice(indexFound, 1);
}

async function displayCart(userCart) {
  console.log("\nItems list: ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal  R$${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
