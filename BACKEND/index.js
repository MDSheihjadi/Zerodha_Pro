// // require('dotenv').config();

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const { HoldingsModel } = require('./model/HoldingsModel');
// // const { PositionsModel } = require('./model/PositionsModel');

// // const PORT = process.env.PORT || 3004;
// // const uri = process.env.MONGODB_URL;

// // const app = express();

// // /* ================================
// //    ROUTE TO INSERT HOLDINGS DATA
// // ================================ */

// // // app.get('/addHoldings', async (req, res) => {
// // //   try {
// // //     const tempHoldings = [
// // //       {
// // //         name: "BHARTIARTL",
// // //         qty: 2,
// // //         avg: 538.05,
// // //         price: 541.15,
// // //         net: "+0.58%",
// // //         day: "+2.99%",
// // //       },
// // //       {
// // //         name: "HDFCBANK",
// // //         qty: 2,
// // //         avg: 1383.4,
// // //         price: 1522.35,
// // //         net: "+10.04%",
// // //         day: "+0.11%",
// // //       },
// // //       {
// // //         name: "HINDUNILVR",
// // //         qty: 1,
// // //         avg: 2335.85,
// // //         price: 2417.4,
// // //         net: "+3.49%",
// // //         day: "+0.21%",
// // //       },
// // //       {
// // //         name: "INFY",
// // //         qty: 1,
// // //         avg: 1350.5,
// // //         price: 1555.45,
// // //         net: "+15.18%",
// // //         day: "-1.60%",
// // //       },
// // //       {
// // //         name: "ITC",
// // //         qty: 5,
// // //         avg: 202.0,
// // //         price: 207.9,
// // //         net: "+2.92%",
// // //         day: "+0.80%",
// // //       },
// // //       {
// // //         name: "KPITTECH",
// // //         qty: 5,
// // //         avg: 250.3,
// // //         price: 266.45,
// // //         net: "+6.45%",
// // //         day: "+3.54%",
// // //       },
// // //       {
// // //         name: "M&M",
// // //         qty: 2,
// // //         avg: 809.9,
// // //         price: 779.8,
// // //         net: "-3.72%",
// // //         day: "-0.01%",
// // //       },
// // //       {
// // //         name: "RELIANCE",
// // //         qty: 1,
// // //         avg: 2193.7,
// // //         price: 2112.4,
// // //         net: "-3.71%",
// // //         day: "+1.44%",
// // //       },
// // //       {
// // //         name: "SBIN",
// // //         qty: 4,
// // //         avg: 324.35,
// // //         price: 430.2,
// // //         net: "+32.63%",
// // //         day: "-0.34%",
// // //       },
// // //       {
// // //         name: "SGBMAY29",
// // //         qty: 2,
// // //         avg: 4727.0,
// // //         price: 4719.0,
// // //         net: "-0.17%",
// // //         day: "+0.15%",
// // //       },
// // //       {
// // //         name: "TATAPOWER",
// // //         qty: 5,
// // //         avg: 104.2,
// // //         price: 124.15,
// // //         net: "+19.15%",
// // //         day: "-0.24%",
// // //       },
// // //       {
// // //         name: "TCS",
// // //         qty: 1,
// // //         avg: 3041.7,
// // //         price: 3194.8,
// // //         net: "+5.03%",
// // //         day: "-0.25%",
// // //       },
// // //       {
// // //         name: "WIPRO",
// // //         qty: 4,
// // //         avg: 489.3,
// // //         price: 577.75,
// // //         net: "+18.08%",
// // //         day: "+0.32%",
// // //       }
// // //     ];

// // //     await HoldingsModel.insertMany(tempHoldings);
// // //     console.log("✅ Holdings inserted successfully");

// // //     res.send("✅ Holdings added successfully");
// // //   } catch (err) {
// // //     console.error("❌ Error inserting holdings:", err.message);
// // //     res.status(500).send("Error inserting holdings");
// // //   }
// // // });

// // app.get('/addPositions', async (req, res) => {
// //   let tempPositions = [
// //     {
// //       product: "CNC",
// //       name: "EVEREADY",
// //       qty: 2,
// //       avg: 316.27,
// //       price: 312.35,
// //       net: "+0.58%",
// //       day: "-1.24%",
// //       isLoss: true,
// //     },
// //     {
// //       product: "CNC",
// //       name: "JUBLFOOD",
// //       qty: 1,
// //       avg: 3124.75,
// //       price: 3082.65,
// //       net: "+10.04%",
// //       day: "-1.35%",
// //       isLoss: true,
// //     },
// //   ];

// //   res.send("Positions route hit");
// //   tempPositions.forEach((item)=> {
// //     let newPosition = new PositionsModel({
// //         product: item.product,
// //         name: item.name,
// //         qty: item.qty,
// //         avg: item.avg,
// //         price: item.price,
// //         net: item.net,
// //         day: item.day,
// //         isLoss: item.isLoss,
// //     });

// //     newPosition.save();
// //     });
// //     res.send("Positions added successfully");

// // });

// // /* ================================
// //       CONNECT TO DB + START APP
// // ================================ */

// // async function startServer() {
// //   try {
// //     await mongoose.connect(uri);
// //     console.log(" Connected to MongoDB Atlas");

// //     app.listen(PORT, () => {
// //       console.log(` Sheihjadi's Zerodha started on port ${PORT}`);
// //       console.log(` Open: http://localhost:${PORT}/addHoldings`);
// //     });
// //   } catch (error) {
// //     console.error(" MongoDB connection error:", error.message);
// //   }
// // }

// // startServer();

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const PORT = process.env.PORT || 3004;
// const uri = process.env.MONGODB_URL;


// const app = express();

// app.use(cors());
// app.use(bodyParser.json());


// /* ================================
//    ROUTE TO INSERT HOLDINGS DATA
//    (still here but commented)
// ================================ */

// // app.get('/addHoldings', async (req, res) => {
// //   try {
// //     const tempHoldings = [
// //       {
// //         name: "BHARTIARTL",
// //         qty: 2,
// //         avg: 538.05,
// //         price: 541.15,
// //         net: "+0.58%",
// //         day: "+2.99%",
// //       },
// //       {
// //         name: "HDFCBANK",
// //         qty: 2,
// //         avg: 1383.4,
// //         price: 1522.35,
// //         net: "+10.04%",
// //         day: "+0.11%",
// //       },
// //       {
// //         name: "HINDUNILVR",
// //         qty: 1,
// //         avg: 2335.85,
// //         price: 2417.4,
// //         net: "+3.49%",
// //         day: "+0.21%",
// //       },
// //       {
// //         name: "INFY",
// //         qty: 1,
// //         avg: 1350.5,
// //         price: 1555.45,
// //         net: "+15.18%",
// //         day: "-1.60%",
// //       },
// //       {
// //         name: "ITC",
// //         qty: 5,
// //         avg: 202.0,
// //         price: 207.9,
// //         net: "+2.92%",
// //         day: "+0.80%",
// //       },
// //       {
// //         name: "KPITTECH",
// //         qty: 5,
// //         avg: 250.3,
// //         price: 266.45,
// //         net: "+6.45%",
// //         day: "+3.54%",
// //       },
// //       {
// //         name: "M&M",
// //         qty: 2,
// //         avg: 809.9,
// //         price: 779.8,
// //         net: "-3.72%",
// //         day: "-0.01%",
// //       },
// //       {
// //         name: "RELIANCE",
// //         qty: 1,
// //         avg: 2193.7,
// //         price: 2112.4,
// //         net: "-3.71%",
// //         day: "+1.44%",
// //       },
// //       {
// //         name: "SBIN",
// //         qty: 4,
// //         avg: 324.35,
// //         price: 430.2,
// //         net: "+32.63%",
// //         day: "-0.34%",
// //       },
// //       {
// //         name: "SGBMAY29",
// //         qty: 2,
// //         avg: 4727.0,
// //         price: 4719.0,
// //         net: "-0.17%",
// //         day: "+0.15%",
// //       },
// //       {
// //         name: "TATAPOWER",
// //         qty: 5,
// //         avg: 104.2,
// //         price: 124.15,
// //         net: "+19.15%",
// //         day: "-0.24%",
// //       },
// //       {
// //         name: "TCS",
// //         qty: 1,
// //         avg: 3041.7,
// //         price: 3194.8,
// //         net: "+5.03%",
// //         day: "-0.25%",
// //       },
// //       {
// //         name: "WIPRO",
// //         qty: 4,
// //         avg: 489.3,
// //         price: 577.75,
// //         net: "+18.08%",
// //         day: "+0.32%",
// //       }
// //     ];

// //     await HoldingsModel.insertMany(tempHoldings);
// //     console.log(" Holdings inserted successfully");

// //     res.send(" Holdings added successfully");
// //   } catch (err) {
// //     console.error("Error inserting holdings:", err.message);
// //     res.status(500).send("Error inserting holdings");
// //   }
// // });

// /* ================================
//    ROUTE TO INSERT POSITIONS DATA
// ================================ */
// //commented out route to avoid accidental multiple inserts
// // app.get('/addPositions', async (req, res) => {
// //   try {
// //     const tempPositions = [
// //       {
// //         product: "CNC",
// //         name: "EVEREADY",
// //         qty: 2,
// //         avg: 316.27,
// //         price: 312.35,
// //         net: "+0.58%",
// //         day: "-1.24%",
// //         isLoss: true,
// //       },
// //       {
// //         product: "CNC",
// //         name: "JUBLFOOD",
// //         qty: 1,
// //         avg: 3124.75,
// //         price: 3082.65,
// //         net: "+10.04%",
// //         day: "-1.35%",
// //         isLoss: true,
// //       },
// //     ];

// //     await PositionsModel.insertMany(tempPositions);
// //     console.log("✅ Positions inserted successfully");

// //     res.send("✅ Positions added successfully");
// //   } catch (err) {
// //     console.error("❌ Error inserting positions:", err.message);
// //     res.status(500).send("Error inserting positions");
// //   }
// // });

// /* ================================
//       CONNECT TO DB + START APP
// ================================ */
// app.get("/allHoldings", async (req, res) => {
//   let allholdings = await HoldingsModel.find({});
//   res.json(allholdings);
// });
// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

// //additional endpoint to receive new orders
// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name:req.body.name,
//   qty:req.body.qty,
//   price:req.body.price,
//   mode:req.body.mode,
// });
     
//   newOrder.save();
// });

// async function startServer() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB Atlas");

//     app.listen(PORT, () => {
//       console.log(`Sheihjadi's Zerodha started on port ${PORT}`);
//       console.log(`Open: http://localhost:${PORT}/addPositions`);
//     });
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//   }
// }

// startServer();



//--------------------------------------------------------------------------------------------------//
// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const PORT = process.env.PORT || 3004;
// const uri = process.env.MONGODB_URL;

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// /* ================================
//    ROUTE TO INSERT HOLDINGS DATA
//    (still here but commented)
// ================================ */

// // app.get('/addHoldings', async (req, res) => {
// //   try {
// //     const tempHoldings = [
// //       {
// //         name: "BHARTIARTL",
// //         qty: 2,
// //         avg: 538.05,
// //         price: 541.15,
// //         net: "+0.58%",
// //         day: "+2.99%",
// //       },
// //       {
// //         name: "HDFCBANK",
// //         qty: 2,
// //         avg: 1383.4,
// //         price: 1522.35,
// //         net: "+10.04%",
// //         day: "+0.11%",
// //       },
// //       {
// //         name: "HINDUNILVR",
// //         qty: 1,
// //         avg: 2335.85,
// //         price: 2417.4,
// //         net: "+3.49%",
// //         day: "+0.21%",
// //       },
// //       {
// //         name: "INFY",
// //         qty: 1,
// //         avg: 1350.5,
// //         price: 1555.45,
// //         net: "+15.18%",
// //         day: "-1.60%",
// //       },
// //       {
// //         name: "ITC",
// //         qty: 5,
// //         avg: 202.0,
// //         price: 207.9,
// //         net: "+2.92%",
// //         day: "+0.80%",
// //       },
// //       {
// //         name: "KPITTECH",
// //         qty: 5,
// //         avg: 250.3,
// //         price: 266.45,
// //         net: "+6.45%",
// //         day: "+3.54%",
// //       },
// //       {
// //         name: "M&M",
// //         qty: 2,
// //         avg: 809.9,
// //         price: 779.8,
// //         net: "-3.72%",
// //         day: "-0.01%",
// //       },
// //       {
// //         name: "RELIANCE",
// //         qty: 1,
// //         avg: 2193.7,
// //         price: 2112.4,
// //         net: "-3.71%",
// //         day: "+1.44%",
// //       },
// //       {
// //         name: "SBIN",
// //         qty: 4,
// //         avg: 324.35,
// //         price: 430.2,
// //         net: "+32.63%",
// //         day: "-0.34%",
// //       },
// //       {
// //         name: "SGBMAY29",
// //         qty: 2,
// //         avg: 4727.0,
// //         price: 4719.0,
// //         net: "-0.17%",
// //         day: "+0.15%",
// //       },
// //       {
// //         name: "TATAPOWER",
// //         qty: 5,
// //         avg: 104.2,
// //         price: 124.15,
// //         net: "+19.15%",
// //         day: "-0.24%",
// //       },
// //       {
// //         name: "TCS",
// //         qty: 1,
// //         avg: 3041.7,
// //         price: 3194.8,
// //         net: "+5.03%",
// //         day: "-0.25%",
// //       },
// //       {
// //         name: "WIPRO",
// //         qty: 4,
// //         avg: 489.3,
// //         price: 577.75,
// //         net: "+18.08%",
// //         day: "+0.32%",
// //       }
// //     ];

// //     await HoldingsModel.insertMany(tempHoldings);
// //     console.log("Holdings inserted successfully");

// //     res.send("Holdings added successfully");
// //   } catch (err) {
// //     console.error("Error inserting holdings:", err.message);
// //     res.status(500).send("Error inserting holdings");
// //   }
// // });

// /* ================================
//    ROUTE TO INSERT POSITIONS DATA
// ================================ */

// // app.get('/addPositions', async (req, res) => {
// //   try {
// //     const tempPositions = [
// //       {
// //         product: "CNC",
// //         name: "EVEREADY",
// //         qty: 2,
// //         avg: 316.27,
// //         price: 312.35,
// //         net: "+0.58%",
// //         day: "-1.24%",
// //         isLoss: true,
// //       },
// //       {
// //         product: "CNC",
// //         name: "JUBLFOOD",
// //         qty: 1,
// //         avg: 3124.75,
// //         price: 3082.65,
// //         net: "+10.04%",
// //         day: "-1.35%",
// //         isLoss: true,
// //       },
// //     ];

// //     await PositionsModel.insertMany(tempPositions);
// //     console.log("Positions inserted successfully");

// //     res.send(" Positions added successfully");
// //   } catch (err) {
// //     console.error(" Error inserting positions:", err.message);
// //     res.status(500).send("Error inserting positions");
// //   }
// // });

// /* ================================
//       READ HOLDINGS & POSITIONS
// ================================ */

// app.get("/allHoldings", async (req, res) => {
//   try {
//     const allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
//   } catch (err) {
//     console.error("Error fetching holdings:", err.message);
//     res.status(500).json({ message: "Error fetching holdings" });
//   }
// });

// app.get("/allPositions", async (req, res) => {
//   try {
//     const allPositions = await PositionsModel.find({});
//     res.json(allPositions);
//   } catch (err) {
//     console.error("Error fetching positions:", err.message);
//     res.status(500).json({ message: "Error fetching positions" });
//   }
// });

// /* ================================
//       ORDERS: CREATE + READ
// ================================ */

// // create new order
// app.post("/newOrder", async (req, res) => {
//   try {
//     const { name, qty, price, mode } = req.body;

//     if (!name || !qty || !price || !mode) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     const newOrder = await OrdersModel.create({
//       name,
//       qty,
//       price,
//       mode,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Order created successfully",
//       data: newOrder,
//     });
//   } catch (err) {
//     console.error("Error creating order:", err.message);
//     return res
//       .status(500)
//       .json({ success: false, message: "Internal server error" });
//   }
// });

// // get all orders
// app.get("/allOrders", async (req, res) => {
//   try {
//     const allOrders = await OrdersModel.find({});
//     return res.json(allOrders);
//   } catch (err) {
//     console.error("Error fetching orders:", err.message);
//     return res.status(500).json({ message: "Error fetching orders" });
//   }
// });

// /* ================================
//       CONNECT TO DB + START APP
// ================================ */

// async function startServer() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB Atlas");

//     app.listen(PORT, () => {
//       console.log(`Sheihjadi's Zerodha started on port ${PORT}`);
//       console.log(`Holdings:  http://localhost:${PORT}/allHoldings`);
//       console.log(`Positions: http://localhost:${PORT}/allPositions`);
//       console.log(`Orders:    http://localhost:${PORT}/allOrders`);
//     });
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//   }
// }

// startServer();


//----------------------------------------------------------------------------//
// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");
// const authRoute = require("./Routes/AuthRoute");

// const PORT = process.env.PORT || 3004;
// const uri = process.env.MONGODB_URL;

// const app = express();

// // middlewares
// app.use(
//   cors({
//     origin: "http://localhost:3000", //  React app
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());
// app.use(bodyParser.json()); // parses JSON body from axios/fetch
// app.use("/", authRoute);   // auth routes

// /* ================================
//    ROUTE TO INSERT HOLDINGS DATA
//    (still here but commented)
// ================================ */

// // app.get("/addHoldings", async (req, res) => {
// //   try {
// //     const tempHoldings = [/* ...your seed data... */];

// //     await HoldingsModel.insertMany(tempHoldings);
// //     console.log("Holdings inserted successfully");

// //     res.send("Holdings added successfully");
// //   } catch (err) {
// //     console.error("Error inserting holdings:", err.message);
// //     res.status(500).send("Error inserting holdings");
// //   }
// // });

// /* ================================
//    ROUTE TO INSERT POSITIONS DATA
// ================================ */

// // app.get("/addPositions", async (req, res) => {
// //   try {
// //     const tempPositions = [/* ...your seed data... */];

// //     await PositionsModel.insertMany(tempPositions);
// //     console.log("Positions inserted successfully");

// //     res.send("Positions added successfully");
// //   } catch (err) {
// //     console.error("Error inserting positions:", err.message);
// //     res.status(500).send("Error inserting positions");
// //   }
// // });

// /* ================================
//       READ HOLDINGS & POSITIONS
// ================================ */

// app.get("/allHoldings", async (req, res) => {
//   try {
//     const allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
//   } catch (err) {
//     console.error("Error fetching holdings:", err.message);
//     res.status(500).json({ message: "Error fetching holdings" });
//   }
// });

// app.get("/allPositions", async (req, res) => {
//   try {
//     const allPositions = await PositionsModel.find({});
//     res.json(allPositions);
//   } catch (err) {
//     console.error("Error fetching positions:", err.message);
//     res.status(500).json({ message: "Error fetching positions" });
//   }
// });

// /* ================================
//       ORDERS: CREATE + READ
// ================================ */

// // create new order
// app.post("/newOrder", async (req, res) => {
//   try {
//     console.log(" /newOrder hit");
//     console.log(" req.body =", req.body);

//     // avoid crashing if req.body is undefined
//     const body = req.body || {};
//     const { name, qty, price, mode } = body;

//     // use == null so 0 is allowed but null/undefined are rejected
//     if (name == null || qty == null || price == null || mode == null) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     const newOrder = new OrdersModel({
//       name,
//       qty,
//       price,
//       mode,
//     });

//     await newOrder.save();

//     console.log("✅ Order saved:", newOrder);

//     return res.status(201).json({
//       success: true,
//       message: "Order created successfully",
//       data: newOrder,
//     });
//   } catch (err) {
//     console.error("💥 Error creating order:", err);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: err.message,
//       name: err.name,
//     });
//   }
// });

// // get all orders
// app.get("/allOrders", async (req, res) => {
//   try {
//     const allOrders = await OrdersModel.find({});
//     return res.json(allOrders);
//   } catch (err) {
//     console.error("Error fetching orders:", err.message);
//     return res.status(500).json({ message: "Error fetching orders" });
//   }
// });

// /* ================================
//       CONNECT TO DB + START APP
// ================================ */

// async function startServer() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB Atlas");

//     app.listen(PORT, () => {
//       console.log(`Sheihjadi's Zerodha started on port ${PORT}`);
//       console.log(`Holdings:  http://localhost:${PORT}/allHoldings`);
//       console.log(`Positions: http://localhost:${PORT}/allPositions`);
//       console.log(`Orders:    http://localhost:${PORT}/allOrders`);
//     });
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//   }
// }

// startServer();

//--------------------------------------------------------------------------------------------------//  
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3004;
const uri = process.env.MONGODB_URL;

const app = express();

/* ================================
   MIDDLEWARES
================================ */

app.use(
  cors({
    origin: "http://localhost:3000", // your React app
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json()); // parses JSON body

/* ================================
   AUTH ROUTES
================================ */

app.use("/", authRoute);//mount /signup and /login routes 

/* ================================
   READ HOLDINGS & POSITIONS
================================ */

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err.message);
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err.message);
    res.status(500).json({ message: "Error fetching positions" });
  }
});

/* ================================
      ORDERS: CREATE + READ
================================ */

app.post("/newOrder", async (req, res) => {
  try {
    console.log("🔥 /newOrder hit");
    console.log("📦 req.body =", req.body);

    const body = req.body || {};
    const { name, qty, price, mode } = body;

    if (name == null || qty == null || price == null || mode == null) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    console.log("✅ Order saved:", newOrder);

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (err) {
    console.error("💥 Error creating order:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
      name: err.name,
    });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    return res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err.message);
    return res.status(500).json({ message: "Error fetching orders" });
  }
});

/* ================================
      CONNECT TO DB + START APP
================================ */

async function startServer() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`Sheihjadi's Zerodha started on port ${PORT}`);
      console.log(`Holdings:  http://localhost:${PORT}/allHoldings`);
      console.log(`Positions: http://localhost:${PORT}/allPositions`);
      console.log(`Orders:    http://localhost:${PORT}/allOrders`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
}

startServer();


