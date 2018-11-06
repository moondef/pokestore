import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage } from './features/home'
import { CartPage } from './features/cart'

export const Routes = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </Fragment>
)
