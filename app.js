const express = require("express");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieRoutes");
const logger = require("./middleware/logger");
const authHandler = require("./middleware/authHandler");

const app = express();

// Connect to MongoDB
connectDB();

// Body parsers & static folder middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// View Engine setup
app.set("view engine", "ejs");

// Global Middlewares
app.use(logger);   
app.use(authHandler); 

// Use Movie Routes instead of student routes
app.use("/", movieRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});