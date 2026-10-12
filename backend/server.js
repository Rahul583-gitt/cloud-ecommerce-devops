
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "appuser",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "ecommerce",
  waitForConnections: true,
  connectionLimit: 10
});

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "E-Commerce API is running"
  });
});

// Database health endpoint
app.get("/health/db", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({ status: "healthy", database: "connected" });
  } catch (error) {
    console.error("Database health check failed:", error.message);
    res.status(503).json({ status: "unhealthy", database: "disconnected" });
  }
});

// Get products from MySQL
app.get("/products", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, price FROM products ORDER BY id"
    );
    res.json(rows);
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`E-Commerce API running on port ${PORT}`);
});

async function shutdown() {
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
