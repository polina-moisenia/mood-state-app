import axios from 'axios';
import { Button } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Выбери настроение</p>
      </header>
      <div className="App-body">
        <Button className="custom-button" onClick={() => setState('positive')}>cчастливо</Button>
        <Button className="custom-button" size="lg" onClick={() => setState('negative')}>грустно</Button>
      </div>
    </div>
  );
}

function setState(state) {
  axios('http://mood-state-api-manager.azure-api.net/state', {
    method: 'post',
    data: {
      state: state
    },
  });
}

export default App;
