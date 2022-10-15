const express = require("express");
const cors = require("cors");
const { usersRoute } = require("./routes/user_route");
const { db } = require("./db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/users", usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
