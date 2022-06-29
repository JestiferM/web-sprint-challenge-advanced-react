
import React from 'react'


export default class AppClass extends React.Component {

  state={
    steps:0,
    message:"Hello World",
    email:"",
    index:4,
    x:2,
    y:2,
  };

  handleLeft =  () => {
    if(this.state.index === 0 || this.state.index === 3 || this.state.index === 6) {
      this.setState({
        ...this.state,
        message:"You can't go left!"
      })
    }else {
       console.log('move');
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
      console.log('move');
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
       console.log('move');
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
      console.log('move');
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
        <h3 id="coordinates">Coordinates ({this.state.x} , {this.state.y})</h3>
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
        <input value={this.state.input} id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
      </div>
    )
  }
}
