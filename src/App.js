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
        <Button className="custom-button" onClick={() => setState('happy')}>cчастливо</Button>
        <Button className="custom-button" size="lg" onClick={() => setState('sad')}>грустно</Button>
      </div>
    </div>
  );
}

function setState(state) {
  axios('https://moodstateapi20210301143406.azurewebsites.net/state', {
    method: 'post',
    data: {
      state: state
    },
  });
}

export default App;
