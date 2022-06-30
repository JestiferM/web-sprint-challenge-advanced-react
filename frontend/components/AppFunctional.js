import React, {useState} from 'react'
import axios from 'axios'


export default function AppFunctional(props) {

  const [state, setState] = useState({
    steps:0,
    message:"",
    email:"",
    index:4,
    x:2,
    y:2,
  });

  const handleChange = (e) => {
    setState({...state, email: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/result', {email:"jessy@gmail.com", x:"2", y:"2", steps:"0"})
    .then(res => {
      console.log(res)
      setState({
        ...state,
        message:res.data.message,
        email:''
      })
    })
    .catch(err => console.log({err}))
  }

  const handleLeft =  () => {
    if(state.index === 0 || state.index === 3 || state.index === 6) {
      setState({
        ...state,
        message:"You can't go left!"
      })
    }else {
    setState({
      ...state,
      steps:state.steps + 1,
      index:state.index - 1,
      message:'',
      y:state.y - 1
    })
    }
  }

  const handleDown = () => {
    if(state.index < 6 ){
    setState({
      ...state,
      steps:state.steps + 1,
      index:state.index + 3,
      message:"",
      x:state.x + 1, 
    })
    }else {
      setState({
        ...state,
        message:"You cant go down!"
      })
    }
  }

  const handleRight = () => {
    if(state.index === 2 || state.index === 5 || state.index === 8) {
      setState({
        ...state,
        message:"You can't go right!"
      })
    }else {
    setState({
      ...state,
      steps:state.steps + 1,
      index:state.index + 1 ,
      message:'',
      y:state.y + 1
    })
    }
  }

  const handleUp = () => {
    if(state.index > 2 ){
  setState({
    ...state,
    steps:state.steps + 1,
    index:state.index - 3,
    x:state.x -1,
  })
    }else {
      setState({
        ...state,
        message:"You can't go up!"
      })
    }
  }
  const reset = () => {
    setState({
    steps:0,
    message:"",
    email:"",
    index:4,
    x:2,
    y:2
  })
  }
  
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x} , {state.y})</h3>
        <h3 id="steps">You moved {state.steps} times</h3>

      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === state.index ? ' active' : ''}`}>
              {idx === state.index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button onClick={handleLeft} id="left">LEFT</button>
        <button onClick={handleUp} id="up">UP</button>
        <button onClick={handleRight} id="right">RIGHT</button>
        <button onClick={handleDown} id="down">DOWN</button>
        <button onClick={reset} id="reset">reset</button>
      </div>
      <form>
        <input onChange={handleChange} value={state.email} id="email" type="email" placeholder="type email"></input>
        <input onClick={onSubmit} id="submit" type="submit"></input>
      </form>
    </div>
  )
}
