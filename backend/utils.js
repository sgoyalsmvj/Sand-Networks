function filterFarmerData(data, farmerName, plotType) {
  return data
    .filter((farmer) => farmer.farmerName === farmerName)
    .map((farmer) => ({
      ...farmer,
      farmerData: farmer.farmerData.filter((entry) => {
        const derivedPlotType = entry.Week.startsWith("F") ? "F" : "M";
        return derivedPlotType === plotType;
      }),
    }))
    .filter((farmer) => farmer.farmerData.length > 0);
}

function comparePlots(data, farmer1, plotType1, farmer2, plotType2) {
  const farmer1Data = filterFarmerData(data, farmer1, plotType1);
  const farmer2Data = filterFarmerData(data, farmer2, plotType2);
  return {
    farmer1: farmer1Data,
    farmer2: farmer2Data,
  };
}

module.exports = {
  filterFarmerData,
  comparePlots,
};
