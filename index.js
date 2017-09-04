import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Test extends Component {
  render() {
    return (
      <div>CANVAS-RECORDING</div>
    )
  }
}

ReactDOM.render(
  <Test />,
  document.querySelector('#test')
)