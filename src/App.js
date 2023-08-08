// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators } from './myRedux';
// import { bindActionCreators } from 'redux';


// const App = () => {
//   const valOne = useSelector(state => state.minAdd)
//   const dispatch =  useDispatch()

//   const {min, max} = bindActionCreators(actionCreators, dispatch)
//   // console.log("valOne-->>", valOne);
//   return (
//     <div>
//       {valOne}
//       <button onClick={() => max(10)}>add</button>
//       <button onClick={() => min(10)}>less</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const first = useSelector(state => state.first.count)
  const second = useSelector(state => state.second.val)
  const dispatch =  useDispatch()

  console.log({first}, {second});

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={() => dispatch({type: "increment", payload: 10})}>INC...</button>
      <button onClick={() => dispatch({type: "decrement", payload: 10})}>DEC...</button>

      <h2>{second}</h2>
      <button onClick={() => dispatch({type: "multiply", payload: 10})}>MUL...</button>
      <button onClick={() => dispatch({type: "divide", payload: 2})}>DIV...</button>

    </div>
  )
}

export default App
