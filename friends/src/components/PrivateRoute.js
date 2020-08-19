import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={() => {
      if (localStorage.getItem('token')) {
        // render the component that is passed in via props.component
        return <Component />
      } else {
        return <Redirect to='/login' />
      }
    }} />
  }
  
  export default PrivateRoute