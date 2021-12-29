import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import StateComponent from './components/State'
import EffectComponent from './components/Effect'
import ContextComponent from './components/Context'
import RefComponent from './components/Ref'
import ReducerComponent from './components/Reducer'

import './styles/styles.css'

const App = () => {
  return (
    <div className="App">
        <StateComponent />
        <hr />
        <EffectComponent />
        <hr />
        <ContextComponent />
        <hr />
        <RefComponent />
        <hr />
        <ReducerComponent />
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