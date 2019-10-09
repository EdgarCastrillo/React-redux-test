import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Results from './components/results'
import Results from './components/details'

const Root = (
  <BrowserRouter>
    <Switch>
      <Route path="/results" components={Results} />
      <Route path="/details/:itemId" components={Details} />
      <Redirect from="/" to="/results" />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(Root, document.getElementById('root'))