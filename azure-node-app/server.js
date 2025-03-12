const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static("public"));

app.get("/hello", (req, res) => {
  res.send("Hello from Azure!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
