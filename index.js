import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  click = () => {
    console.log('hii')
    this.setState(previous => ({count: previous.count + 1}))
  }

  render() {
    let {count} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1>The Button has been clicked {count} times</h1>
          <p>Click the button to increase the count</p>
          <div>
            <button onClick={this.click}>Click Me</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
