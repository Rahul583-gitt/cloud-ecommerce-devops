
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "E-Commerce API is running"
  });
});

app.get("/products", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Keyboard", price: 1500 }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`E-Commerce API running on port ${PORT}`);
});
