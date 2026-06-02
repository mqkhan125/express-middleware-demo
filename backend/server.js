const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const route = require("./routes/route");

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

// routes
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
