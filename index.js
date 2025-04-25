const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Serve the resume PDF
app.get("/resume", (req, res) => {
  const filePath = path.join(__dirname, 'public', 'resume.pdf');
  res.sendFile(filePath);
});

// Optional: Root route
app.get("/", (req, res) => {
  res.send("Backend is live!");
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
