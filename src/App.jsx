import React, { Component, Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Spin } from 'antd'
import RouterSwitch from '@/route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<Spin className="global-spin" />}>
          <Router>
            <RouterSwitch />
          </Router>
        </Suspense>
      </div>
    )
  }
}

export default App
