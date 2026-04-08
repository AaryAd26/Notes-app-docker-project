const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage (simple for demo)
let notes = [];

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API: Get notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// API: Add note
app.post("/api/notes", (req, res) => {
  const { text } = req.body;
  if (text) {
    notes.push({ id: Date.now(), text });
  }
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
