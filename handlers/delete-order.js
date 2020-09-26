function deleteOrder(pizzaId) {
  if (!pizzaId) throw new Error("Order ID is required for deleting order");
  return {};
}

module.exports = deleteOrder;
