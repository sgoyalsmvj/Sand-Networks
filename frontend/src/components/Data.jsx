import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [data, setData] = useState([]);
  const [farmerName, setFarmerName] = useState("");
  const [week, setWeek] = useState("");
  const [plotType, setPlotType] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/data`);
    setData(response.data);
    console.log(response.data);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/data`, {
      farmerName,
      week,
      plotType,
    });
    setData(response.data);
    console.log(response.data);
  };

  return (
    <div className="App">
      <h1>Farm Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Farmer Name: </label>
        <input
          type="text"
          value={farmerName}
          onChange={(e) => setFarmerName(e.target.value)}
        />
        <label>Week: </label>
        <input
          type="text"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
        />
        <label>Plot Type: </label>
        <select value={plotType} onChange={(e) => setPlotType(e.target.value)}>
          <option value="">All</option>
          <option value="M">Model Plot</option>
          <option value="F">Farmer Plot</option>
        </select>
        <button>Filter</button>
      </form>
      <Link to={"/compare"}>
        <button>Go to Compare Data</button>
      </Link>
      {data.map((farmerData, index) => {
        const farmerName = farmerData.farmerName;
        const farmerDetails = farmerData.farmerData;

        return (
          <div key={index}>
            <h2>{farmerName}</h2>
            <table border="1">
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
                  <th>Others (bio stimulant, etc.)</th>
                  <th>Activity related Challenges</th>
                  <th>Seasonal related Challenges</th>
                  <th>Last Visit Date</th>
                  <th>Next Visit Date</th>
                  <th>Remark on crop stand</th>
                </tr>
              </thead>
              <tbody>
                {farmerDetails.map((details, idx) => (
                  <tr key={idx}>
                    <td>{details["Week"]}</td>
                    <td>{details["Parameters"]}</td>
                    <td>{details["Current Crop Stage"]}</td>
                    <td>{details["Current week activity in Model Plot"]}</td>
                    <td>{details["Next planned activity in Model Plot"]}</td>
                    <td>{details["Chemical Fertiliser used"]}</td>
                    <td>{details["Bio fertiliser used"]}</td>
                    <td>{details["Micronutrients used"]}</td>
                    <td>{details["Insecticides used"]}</td>
                    <td>{details["Fungicides used"]}</td>
                    <td>{details["Herbicides used"]}</td>
                    <td>{details["Others (bio stimulant, etc.)"]}</td>
                    <td>{details["Activity related Challenges"]}</td>
                    <td>{details["Seasonal related Challenges"]}</td>
                    <td>{details["Last Visit Date"]}</td>
                    <td>{details["Next Visit Date"]}</td>
                    <td>{details["Remark on crop stand"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
