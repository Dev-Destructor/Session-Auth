//environment variables
require("dotenv").config({ path: "./env/.env" });
const { PORT } = process.env;

//required modules
const http = require("http");
const app = require("./app");

//creating serer
const server = http.createServer(app);

//listening to port
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
