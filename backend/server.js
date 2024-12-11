import { app } from "./app.js";
import http from "http";
import { connectDb } from "./db/db.js";
const port = process.env.PORT || 3000;

connectDb();
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
