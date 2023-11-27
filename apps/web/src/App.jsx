import { useEffect, useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/sample`,
      );
      setSampleData(data);
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h3>Test Data</h3>
      {sampleData.map((data, idx) => (
        <div key={idx.toString()}>{data.name}</div>
      ))}
    </>
  );
}

export default App;
