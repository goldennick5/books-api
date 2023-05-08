import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseUrl = "http://localhost:8000/api/getAllBooks";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(baseUrl).then((res) => setData(res.data));
  }, []);

  if (!data) return null;

  return (
    <div>
      <h3>Book titles:</h3>
      <ul>
        {data.map((item) => {
          return <li key={item._id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
