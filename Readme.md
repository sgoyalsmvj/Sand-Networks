# Farmer Plot Comparison Project

This project is designed to compare the plot data of different farmers based on various parameters such as farmer name, week, and plot type. It consists of both backend and frontend components to handle data processing, filtering, and visualization.

## Features

- **Filtering:** Users can filter the data based on farmer name, week, and plot type.
- **Comparison:** Users can compare the plot data of two farmers side by side.
- **Scrollable Tables:** The comparison data is displayed in scrollable tables for better visualization.

## Technologies Used

- **Backend:** Node.js with Express.js for handling API requests and data processing.
- **Frontend:** React.js, HTML, CSS, and JavaScript for creating the user interface and handling user interactions.
- **Data Storage:** JSON file (`data.json`) for storing the farmer plot data.
- **Additional Libraries:** CORS for cross-origin resource sharing.

## API Endpoints

- **GET `/data`:** Retrieve filtered plot data based on user input.
- **POST `/data`:** Filter plot data based on farmer name, week, and plot type.
- **POST `/compare`:** Compare the plot data of two farmers.
