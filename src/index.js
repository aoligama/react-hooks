import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import StateComponent from './components/State'

import './styles/styles.css'

const App = () => {
  return (
    <div className="App">
        <StateComponent />
        <hr />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>, rootElement
)