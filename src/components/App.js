import React, { useReducer } from 'react';
import reducer from '../reducers';
import { initialState } from '../reducers';
//import { addOne } from '../actions';
import { applyNumber } from '../actions';
import { changeOperation } from '../actions';
import { clearDisplay } from '../actions';
import { memoryPlusTotal, memoryTotal, clearMemory } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const eventHandler = (number) => {
    dispatch(applyNumber(number))
  }

  const eventChangeOperation = (operator) => {
    dispatch(changeOperation(operator))
  }

  const eventClearDisplay = () => {
    dispatch(clearDisplay())
  }

  const eventMemoryTotal = () => {
    dispatch(memoryTotal())
  }

  const eventMemoryPlusTotal = () => {
    dispatch(memoryPlusTotal(state.total))
  }

  const eventClearMemory = () => {
    dispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              {/* {console.log(state.operation)} */}
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = { () => eventMemoryTotal()}/>
              <CalcButton value={"MR"} onClick = { () => eventMemoryPlusTotal(total)}/>
              <CalcButton value={"MC"} onClick = { () => eventClearMemory()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick = { () => eventHandler(1) }/>
              <CalcButton value={2} onClick = { () => eventHandler(2) }/>
              <CalcButton value={3} onClick = { () => eventHandler(3) }/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = { () => eventHandler(4) }/>
              <CalcButton value={5} onClick = { () => eventHandler(5) }/>
              <CalcButton value={6} onClick = { () => eventHandler(6) }/> 
            </div>

            <div className="row">
              <CalcButton value={7} onClick = { () => eventHandler(7) }/>
              <CalcButton value={8} onClick = { () => eventHandler(8) }/>
              <CalcButton value={9} onClick = { () => eventHandler(9) }/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = { () => eventChangeOperation("+")}/>
              <CalcButton value={"*"} onClick = { () => eventChangeOperation("*")}/>
              <CalcButton value={"-"} onClick = { () => eventChangeOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick = { () => eventClearDisplay() }/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
