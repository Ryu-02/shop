"use strict";

const app = require("../app");
const PORT = 3001;

app.listen(PORT, (req, res) => {
  console.log(`${PORT} 실행중`);
});
