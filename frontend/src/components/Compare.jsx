import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Compare() {
  const [farmer1, setFarmer1] = useState("");
  const [plotType1, setPlotType1] = useState("");
  const [farmer2, setFarmer2] = useState("");
  const [plotType2, setPlotType2] = useState("");
  const [comparisonData, setComparisonData] = useState(null);

  const handleCompare = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/compare`, {
        farmer1,
        plotType1,
        farmer2,
        plotType2,
      });
      setComparisonData(response.data);
    } catch (error) {
      console.error("Error fetching comparison data:", error);
    }
  };

  return (
    <div id="compare" className="App">
      <h1>Compare Farmers' Plots</h1>
      <div className="inputs">
        <div>
          <label>Farmer 1 Name:</label>
          <input
            type="text"
            value={farmer1}
            onChange={(e) => setFarmer1(e.target.value)}
          />
          <label>Plot Type 1 (F/M):</label>
          <input
            type="text"
            value={plotType1}
            onChange={(e) => setPlotType1(e.target.value)}
          />
        </div>
        <div>
          <label>Farmer 2 Name:</label>
          <input
            type="text"
            value={farmer2}
            onChange={(e) => setFarmer2(e.target.value)}
          />
          <label>Plot Type 2 (F/M):</label>
          <input
            type="text"
            value={plotType2}
            onChange={(e) => setPlotType2(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleCompare}>Compare</button>

      {comparisonData && (
        <div className="comparison-tables">
          <div className="table-container">
            <h2>
              {comparisonData.farmer1.length > 0
                ? comparisonData.farmer1[0].farmerName
                : "No Data"}
            </h2>
            <table>
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Parameters</th>
                  <th>Current Crop Stage</th>
                  <th>Current week activity in Model Plot</th>
                  <th>Next planned activity in Model Plot</th>
                  <th>Chemical Fertiliser used</th>
                  <th>Bio fertiliser used</th>
                  <th>Micronutrients used</th>
                  <th>Insecticides used</th>
                  <th>Fungicides used</th>
                  <th>Herbicides used</th>
                  <th>Others</th>
                  <th>Activity related Challenges</th>
                  <th>Seasonal related Challenges</th>
                  <th>Last Visit Date</th>
                  <th>Next Visit Date</th>
                  <th>Remark on crop stand</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.farmer1.length > 0 &&
                  comparisonData.farmer1[0].farmerData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.Week}</td>
                      <td>{data.Parameters}</td>
                      <td>{data["Current Crop Stage"]}</td>
                      <td>{data["Current week activity in Model Plot"]}</td>
                      <td>{data["Next planned activity in Model Plot"]}</td>
                      <td>{data["Chemical Fertiliser used"]}</td>
                      <td>{data["Bio fertiliser used"]}</td>
                      <td>{data["Micronutrients used"]}</td>
                      <td>{data["Insecticides used"]}</td>
                      <td>{data["Fungicides used"]}</td>
                      <td>{data["Herbicides used"]}</td>
                      <td>{data["Others (bio stimulant, etc.)"]}</td>
                      <td>{data["Activity related Challenges"]}</td>
                      <td>{data["Seasonal related Challenges"]}</td>
                      <td>{data["Last Visit Date"]}</td>
                      <td>{data["Next Visit Date"]}</td>
                      <td>{data["Remark on crop stand"]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <h2>
              {comparisonData.farmer2.length > 0
                ? comparisonData.farmer2[0].farmerName
                : "No Data"}
            </h2>
            <table>
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Parameters</th>
                  <th>Current Crop Stage</th>
                  <th>Current week activity in Model Plot</th>
                  <th>Next planned activity in Model Plot</th>
                  <th>Chemical Fertiliser used</th>
                  <th>Bio fertiliser used</th>
                  <th>Micronutrients used</th>
                  <th>Insecticides used</th>
                  <th>Fungicides used</th>
                  <th>Herbicides used</th>
                  <th>Others</th>
                  <th>Activity related Challenges</th>
                  <th>Seasonal related Challenges</th>
                  <th>Last Visit Date</th>
                  <th>Next Visit Date</th>
                  <th>Remark on crop stand</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.farmer2.length > 0 &&
                  comparisonData.farmer2[0].farmerData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.Week}</td>
                      <td>{data.Parameters}</td>
                      <td>{data["Current Crop Stage"]}</td>
                      <td>{data["Current week activity in Model Plot"]}</td>
                      <td>{data["Next planned activity in Model Plot"]}</td>
                      <td>{data["Chemical Fertiliser used"]}</td>
                      <td>{data["Bio fertiliser used"]}</td>
                      <td>{data["Micronutrients used"]}</td>
                      <td>{data["Insecticides used"]}</td>
                      <td>{data["Fungicides used"]}</td>
                      <td>{data["Herbicides used"]}</td>
                      <td>{data["Others (bio stimulant, etc.)"]}</td>
                      <td>{data["Activity related Challenges"]}</td>
                      <td>{data["Seasonal related Challenges"]}</td>
                      <td>{data["Last Visit Date"]}</td>
                      <td>{data["Next Visit Date"]}</td>
                      <td>{data["Remark on crop stand"]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Link to="/">
        <button>Back to Data</button>
      </Link>
    </div>
  );
}

export default Compare;
