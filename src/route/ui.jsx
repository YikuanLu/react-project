import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import routes from './routes'

class RouterView extends Component {
  createRouteItem = (routeItem) => {
    const { userInfo } = this.props
    const { resources } = userInfo
    if (routeItem.isAuth) {
      const arr = resources.filter((item) => routeItem.key === item.code)
      if (arr.length === 0) {
        return (
          <Route
            path={routeItem.path}
            exact={!!routeItem.exact}
            key={routeItem.path}
            render={() => <Redirect to="/403" key={routeItem.key} />}
          />
        )
      }
    }
    return (
      <Route
        path={routeItem.path}
        exact={!!routeItem.exact}
        key={routeItem.path}
        render={(props) => <routeItem.component {...props} />}
      />
    )
  }

  createSwitchItem = (routeItem) => (
    <Route
      path={routeItem.path}
      exact={!!routeItem.exact}
      key={routeItem.path}
      render={(props) => {
        if (routeItem.component) {
          return (
            <routeItem.component {...props}>
              <Switch>
                {routeItem.routes.map((item) => {
                  return this.renderRoutes(item)
                })}
              </Switch>
            </routeItem.component>
          )
        }
        return (
          <Switch>
            {routeItem.routes.map((item) => {
              return this.renderRoutes(item)
            })}
          </Switch>
        )
      }}
    />
  )

  // 递归路由树 🌲
  renderRoutes(routeItem) {
    if (routeItem.routes) {
      return this.createSwitchItem(routeItem)
    }
    return this.createRouteItem(routeItem)
  }

  render() {
    return (
      <Switch>
        {routes.map((item) => {
          return this.renderRoutes(item)
        })}
      </Switch>
    )
  }
}

export default RouterView
