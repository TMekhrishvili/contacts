import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/'//'https://young-tor-17286.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)