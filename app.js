const express = require("express"),
  cors = require("cors");
  (branchRoutes = require("./routes/branch")),
  (choiceRoutes = require("./routes/choice")),
  // set up express
  (app = express());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// app
// Set Route
app.use("/branch", branchRoutes);
app.use("/choice", choiceRoutes);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("server start on port " + port);
});
