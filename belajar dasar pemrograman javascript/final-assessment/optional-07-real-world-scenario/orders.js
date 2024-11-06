// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.map((i) => i.price).reduce((a, b) => a + b, 0);

  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items,
    totalPrice,
    status: 'menunggu',
  };
  orders.push({ ...newOrder });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const findIndexOrder = orders.findIndex((i) => i.id === orderId);
  orders[findIndexOrder].status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const getDoneOrders = orders
    .filter((i) => i.status === 'Selesai')
    .map((i) => i.totalPrice);
  return getDoneOrders.reduce((a, b) => a + b, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const findOrder = orders.find((i) => i.id === id);
  const findIndexOrder = orders.indexOf(findOrder);
  if (findIndexOrder !== -1) {
    orders.splice(findIndexOrder, 1);
  }
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
