const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to access this server

// Serve the resume file
app.get("/resume", (req, res) => {
  const filePath = path.join(__dirname,'public', "resume.pdf");
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});


app.get("")