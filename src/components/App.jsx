import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        setMessage(response.data.response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">{message}</header>
    </div>
  );
}

export default App;
