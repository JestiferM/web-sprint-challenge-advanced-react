
import axios from 'axios';
import React from 'react'


export default class AppClass extends React.Component {

  state={
    steps:0,
    message:"",
    email:"",
    index:4,
    x:2,
    y:2,
  };


  handleChange = (e) => {
    this.setState({...this.state, email: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/result', {email:"jessy@gmail.com", x:"2", y:"2", steps:"0"})
    .then(res => {
      console.log(res)
      this.setState({
        ...this.state,
        message:res.data.message,
        email:''
      })
    })
    .catch(err => console.log({err}))
  }

  handleLeft =  () => {
    if(this.state.index === 0 || this.state.index === 3 || this.state.index === 6) {
      this.setState({
        ...this.state,
        message:"You can't go left!"
      })
    }else {
    this.setState({
      ...this.state,
      steps:this.state.steps + 1,
      index:this.state.index - 1,
      message:'',
      y:this.state.y - 1
    })
    }
  }

  handleDown = () => {
    if(this.state.index < 6 ){
    this.setState({
      ...this.state,
      steps:this.state.steps + 1,
      index:this.state.index + 3,
      message:"",
      x:this.state.x + 1, 
    })
    }else {
      this.setState({
        ...this.state,
        message:"You cant go down!"
      })
    }
  }

  handleRight = () => {
    if(this.state.index === 2 || this.state.index === 5 || this.state.index === 8) {
      this.setState({
        ...this.state,
        message:"You can't go right!"
      })
    }else {
    this.setState({
      ...this.state,
      steps:this.state.steps + 1,
      index:this.state.index + 1 ,
      message:'',
      y:this.state.y + 1
    })
    }
  }

  handleUp = () => {
    if(this.state.index > 2 ){
  this.setState({
    ...this.state,
    steps:this.state.steps + 1,
    index:this.state.index - 3,
    x:this.state.x -1,
  })
    }else {
      this.setState({
        ...this.state,
        message:"You can't go up!"
      })
    }
  }
  reset = () => {
    this.setState({
    steps:0,
    message:"",
    email:"",
    index:4,
    x:2,
    y:2
  })
  }

  render() {
    console.log(this.state)
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
        <h3 id="coordinates">Coordinates ({this.state.y} , {this.state.x})</h3>
        <h3 id="steps">You moved {this.state.steps} times</h3>

      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
              {idx === this.state.index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{this.state.message}</h3>
      </div>
      <div id="keypad">
        <button onClick={this.handleLeft} id="left">LEFT</button>
        <button onClick={this.handleUp} id="up">UP</button>
        <button onClick={this.handleRight} id="right">RIGHT</button>
        <button onClick={this.handleDown} id="down">DOWN</button>
        <button onClick={this.reset} id="reset">reset</button>
      </div>
      <form>
        <input onChange={this.handleChange} value={this.state.email} id="email" type="email" placeholder="type email"></input>
        <input onClick={this.onSubmit} id="submit" type="submit"></input>
      </form>
      </div>
    )
  }
}
