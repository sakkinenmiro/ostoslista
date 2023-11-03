import logo from './logo.svg';
import './App.css';

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to CORS server')
})
app.get('/cors', (req, res) => {
  res.send('This has CORS enabled')
})
app.listen(8080, () => {
  console.log('listening on port 8080')
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
