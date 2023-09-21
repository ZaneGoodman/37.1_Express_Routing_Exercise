const express = require("express");
const ExpressError = require("./expressError");
const {
  convertStringToIntegers,
  findMedian,
  findMean,
  findMode,
} = require("./helpers");

const app = express();

app.use(express.json());

app.get("/mean", (req, res, next) => {
  try {
    let { nums } = req.query;

    if (!nums) throw new ExpressError("Integers required to continue", 404);
    const integers = convertStringToIntegers(nums);
    const mean = findMean(integers);

    return res.send({ operation: "mean", value: mean });
  } catch (e) {
    next(e);
  }
});

app.get("/median", (req, res, next) => {
  try {
    let { nums } = req.query;

    if (!nums) throw new ExpressError("Integers required to continue", 404);
    const integers = convertStringToIntegers(nums);
    const median = findMedian(integers);

    return res.send({ operation: "median", value: median });
  } catch (e) {
    next(e);
  }
});

app.get("/mode", (req, res, next) => {
  try {
    let { nums } = req.query;

    if (!nums) throw new ExpressError("Integers required to continue", 404);
    const integers = convertStringToIntegers(nums);
    const mode = findMode(integers);

    return res.send({ operation: "mode", value: mode });
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.msg;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
