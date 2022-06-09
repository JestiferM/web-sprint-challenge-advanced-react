import axios from 'axios';
import React from 'react'

class Form extends React.Component{
render(){
return(
  <form>
  <input id="email" type="email" placeholder="type email"></input>
  <input id="submit" type="submit"></input>
  </form>
)}
}

export default class AppClass extends React.Component {

  state={
    grid:[],
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


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }

  handleClear = () => {
    console.log('click')
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
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button onClick={this.handleSubmit} id="left">LEFT</button>
          <button onClick={this.handleSubmit} id="up">UP</button>
          <button onClick={this.handleSubmit} id="right">RIGHT</button>
          <button onClick={this.handleSubmit} id="down">DOWN</button>
          <button onClick={this.handleClear} id="reset">reset</button>
        </div>

        <Form/>
      </div>
    )
  }
}
