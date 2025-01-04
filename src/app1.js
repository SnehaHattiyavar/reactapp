import React from "react";
import "./app1.css";
function App() {
    const netflixSeries = [
      "Stranger Things",
      "The Witcher",
      "The Crown",
      "Bridgerton",
      "Money Heist",
    ];
  
    return (
      <div className="App">
        <h1>Top 5 Netflix Series</h1>
        <ul>
          {netflixSeries.map((series, index) => (
            <li key={index}>{series}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;