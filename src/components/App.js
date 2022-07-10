import React, {  useState, useEffect } from "react";
import "./App.css";
import Table from "./Table/Table";
import Table1 from "./Table1/Table1";

function App() {
  const [data, setData] = useState([]);

  // can add data dynamacillay if we want

  useEffect(() => {
    fetch("https://proapi.azurewebsites.net/github/issues")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Table1 data={data} />
      {/* can see other table by adding react router or commenting the other component */}
      {/* <Table /> */}
    </div>
  );
}

export default App;
