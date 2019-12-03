import React from 'react'

class Demo extends React.Component {
  render() {
    const { match } = this.props
    return <div className="home">Demo--ID:{match.params.id}</div>
  }
}

export default Demo
