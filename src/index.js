import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import StateComponent from './components/State'
import EffectComponent from './components/Effect'
import ContextComponent from './components/Context'
import RefComponent from './components/Ref'
import ReducerComponent from './components/Reducer'
import MemoComponent from './components/Memo'
import CallbackComponent from './components/Callback'
import LayoutEffectComponent from './components/LayoutEffect'
import ImperativeHandleComponent from './components/ImperativeHandle'
import DebugValueComponent from './components/DebugValue'

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
        <MemoComponent />
        <hr />
        <CallbackComponent />
        <hr />
        <LayoutEffectComponent />
        <hr />
        <ImperativeHandleComponent />
        <hr />
        <DebugValueComponent />
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