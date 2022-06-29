
import React from 'react'


export default class AppClass extends React.Component {

  state={
    steps:0,
    message:"Hello World",
    email:"",
    index:4,
  };

  // onSubmit = () => {
  //   axios.post('http://localhost:9000/api/result', {email:this.state.email})
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => console.log({err}))
  // }


  handleLeft =  () => {
    console.log('move');
    this.setState({
      ...this.state,
      steps:this.state.steps + 1,
      index:this.state.index - 1 
    })
  }

  handleDown = () => {
    console.log('move');
    this.setState({
      ...this.state,
      steps:this.state.steps + 1,
      index:this.state.index + 3 
    })
  }

  handleRight = () => {
    console.log('move');
    this.setState({
      ...this.state,
      steps:this.state.steps + 1,
      index:this.state.index + 1 
    })
  }
  handleUp = () => {
    console.log('move');
    this.setState({
      ...this.state,
      steps:this.state.steps + 1,
      index:this.state.index - 3
    })

  }
  reset = () => {
    console.log(this.state.message)
    this.setState({
    steps:0,
    message:"Hello World",
    email:"",
    index:4,
  })
  }

  render() {
    // console.log(this.state)
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
        <h3 id="coordinates">Coordinates {this.state.index}</h3>
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
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button onClick={this.handleLeft} id="left">LEFT</button>
        <button onClick={this.handleUp} id="up">UP</button>
        <button onClick={this.handleRight} id="right">RIGHT</button>
        <button onClick={this.handleDown} id="down">DOWN</button>
        <button onClick={this.reset} id="reset">reset</button>
      </div>
      <form>
        <input onChange={this.onSubmit} value={this.state.input} id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
      </div>
    )
  }
}
