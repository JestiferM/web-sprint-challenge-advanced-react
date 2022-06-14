import axios from 'axios';
import React from 'react'


export default class AppClass extends React.Component {

  state={
    steps:0,
    message:"Hello World",
    email:"",
    index:1,
  };

  componentDidMount(){
    axios
    .get("http://localhost:9000/api/result")
    .then((res) => {
      this.setState({
        ...this.state,
        grid: res.data,
      });
    })
    .catch((err) => console.log({ err }));
  }


  handleChange = e => {
    e.preventDefault();
    console.log('move')
    this.setState({
      ...this.state,
      steps:this.state.steps + 1
    })
  }



  reset = () => {
    this.setState({
    steps:0,
    message:"Hello World",
    email:"",
    index:1,
  })
  }

  render() {
    console.log(this.state)
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
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
        <button onClick={this.handleChange} id="left">LEFT</button>
        <button onClick={this.handleChange} id="up">UP</button>
        <button onClick={this.handleChange} id="right">RIGHT</button>
        <button onClick={this.handleChange} id="down">DOWN</button>
        <button  onClick={this.reset} id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
      </div>
    )
  }
}
