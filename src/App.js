import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Выбери настроение</p>
      </header>
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-5" style={{ margin: "20px" }}>
            <Button class="btn btn-outline-info"
              style={{ width: "100%", height: "200px" }}
              onClick={() => setState('positive')}>cчастливо</Button>
          </div>
          <div class="col-lg-5" style={{ margin: "20px" }}>
            <Button class="btn btn-outline-info"
              style={{ width: "100%", height: "200px" }}
              onClick={() => setState('negative')}>грустно</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function setState(state) {
  axios('https://mood-state-api-manager.azure-api.net/state', {
    method: 'post',
    data: {
      state: state
    },
  });
}

export default App;