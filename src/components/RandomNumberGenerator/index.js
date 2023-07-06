import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="main-bg-container">
        <div className="content-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="caption">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="result">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
