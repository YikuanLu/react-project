import React from 'react'
import { Link } from 'react-router-dom'

const TestPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/demo">demo</Link>
        </li>
        <li>
          <Link to="/demo/id/1">demo-1</Link>
        </li>
        <li>
          <Link to="/demo/id/2">demo-2</Link>
        </li>
        <li>
          <Link to="/demo/count">count</Link>
        </li>
        <li>
          <Link to="/demo/axios">axios</Link>
        </li>
      </ul>
    </div>
  )
}

export default TestPage
