import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/database.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // reset
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // create users
    const createdUsers = await User.insertMany(users);

    // get admin
    const adminUser = createdUsers[0]._id;

    // create all product variables with admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // insert all products into db
    await Product.insertMany(sampleProducts);

    // exit
    console.log("Data imported finished!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Deleted...".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// use: node seeder to import in console & add -d to delete
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
