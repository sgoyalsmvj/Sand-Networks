const express = require("express");
const dataRouter = express.Router();
const farmerData = require("./data.json");
const { comparePlots } = require("./utils");

dataRouter.get("/data", (req, res) => {
  let filteredData = farmerData;
  res.json(filteredData);
});

dataRouter.post("/data", (req, res) => {
  const { farmerName, week, plotType } = req.body;
  let filteredData = farmerData;

  if (farmerName) {
    filteredData = filteredData.filter(
      (farmer) => farmer.farmerName === farmerName
    );
  }

  if (week || plotType) {
    filteredData = filteredData.map((farmer) => {
      let filteredFarmerData = farmer.farmerData;
      if (week) {
        filteredFarmerData = filteredFarmerData.filter((data) =>
          data.Week.includes(week)
        );
      }
      if (plotType) {
        filteredFarmerData = filteredFarmerData.filter((data) => {
          const derivedPlotType = data.Week.startsWith("F") ? "F" : "M";
          return derivedPlotType === plotType;
        });
      }
      return {
        ...farmer,
        farmerData: filteredFarmerData,
      };
    }); 
  }

  filteredData = filteredData.filter((farmer) => farmer.farmerData.length > 0);
  res.json(filteredData);
});

dataRouter.post("/compare", (req, res) => {
  const { farmer1, plotType1, farmer2, plotType2 } = req.body;

  const comparisonResult = comparePlots(
    farmerData,
    farmer1,
    plotType1,
    farmer2,
    plotType2
  );
  res.json(comparisonResult);
});

module.exports = dataRouter;
