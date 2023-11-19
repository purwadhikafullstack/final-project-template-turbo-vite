import { join } from "path";
import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import router from "./router";

config({ path: join(__dirname, "../.env") });

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(json());

app.use("/api", router);

// ===========================

// not found
app.use((req, res, next) => {
  if (req.path.includes("/api/")) {
    res.status(404).send("Not found !");
  } else {
    next();
  }
});

// error
app.use((err, req, res, next) => {
  if (req.path.includes("/api/")) {
    console.error("Error : ", err.stack);
    res.status(500).send("Error !");
  } else {
    next();
  }
});

//#endregion

//#region CLIENT
const clientPath = "../../web/dist";
app.use(express.static(join(__dirname, clientPath)));

// Serve the HTML page
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, clientPath, "index.html"));
});

//#endregion

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
  }
});
