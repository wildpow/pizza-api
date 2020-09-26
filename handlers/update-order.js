function updateOrder(id, updates) {
  if (!id || !updates)
    throw new Error(
      "Order ID and uipdates object are requires for updating the order"
    );
  return {
    message: `Order ${id} was successfully updated`,
  };
}

module.exports = updateOrder;
