import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @description   Create new order
// @route         POST /api/orders
// @access        Private
const addOrderItems = asyncHandler(async (req, res) => {
  // Grab data from FE
  const {
    orderItems,
    deliverAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    ShippingPrice,
    totalPrice,
    isPaid,
    isDeliverRequired,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else {
    const order = new Order({
      orderItems: orderItems.map((orderItem) => ({
        ...orderItem,
        product: orderItem._id,
        _id: undefined, // can be ref by prod id
      })),
      user: req.user._id,
      deliverAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      ShippingPrice,
      totalPrice,
      isPaid,
      isDeliverRequired,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @description   Get logged in user orders
// @route         GET /api/orders/myorders
// @access        Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @description   Get order by ID
// @route         GET /api/orders/:id
// @access        Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @description   Update order to paid
// @route         GET /api/orders/:id/pay
// @access        Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("updateOrderToPaid");
});

// @description   Update order to delivered
// @route         GET /api/orders/:id/deliver
// @access        Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("updateOrderToDelivered");
});

// @description   Get all orders
// @route         GET /api/orders
// @access        Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders - admin");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
