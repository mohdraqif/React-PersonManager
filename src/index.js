import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App appTitle='Welcome to Person Manager App' />, document.getElementById('root'))
registerServiceWorker()
