import React, { Component } from 'react'
import { Button } from 'antd'

class Count extends Component {
  render() {
    const { count, changeCount } = this.props
    return (
      <div>
        <p>Count:{count}</p>
        <Button onClick={() => changeCount('+')}>+</Button>
        <Button onClick={() => changeCount('-')}>-</Button>
      </div>
    )
  }
}

export default Count
