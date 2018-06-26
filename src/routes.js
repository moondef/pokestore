import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage } from './features/home'

export const Routes = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </Fragment>
)
