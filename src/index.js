import ReactDOM from 'react-dom'
import { StrictMode } from 'react'

import './styles/styles.css'

const App = () => {
  return (
    <div className="App">
        <h2>Hello, World</h2>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>, rootElement
)