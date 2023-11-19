import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send(`Hello, this is my API`);
});

router.get("/greetings", (req, res, next) => {
  res.status(200).json({
    message: "Hello, Student !",
  });
});

// =========

const sampleRouter = Router();

sampleRouter.use((req, res, next) => {
  console.log("Sample Router Middleware");
  next();
});

sampleRouter.get("/", (req, res) => {
  res.send("Sample Data");
});

sampleRouter.post("/", (req, res) => {
  res.send("Create Sample Data");
});

// =========

router.use("/sample", sampleRouter);

export default router;
