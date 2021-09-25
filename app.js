const express = require("express"),
  cors = require("cors");
(adminRoutes = require("./routes/admin")),
  (branchRoutes = require("./routes/branch")),
  (choiceRoutes = require("./routes/choice")),
  // set up express
  (app = express());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// app
// Set Route
app.use("/admin", adminRoutes);
app.use("/branch", branchRoutes);
app.use("/choice", choiceRoutes);
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log("server start on port 7000");
});
