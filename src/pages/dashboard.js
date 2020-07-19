import React, {useEffect, useState} from 'react'
import {Router} from '@reach/router'
import {IdentityModal} from 'react-netlify-identity-widget'
import {navigate} from 'gatsby'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import RouteBase from '../components/Route-base'
import RouteSecret from '../components/Route-secret'
import RouteLogin from '../components/Route-login'
import 'react-netlify-identity-widget/styles.css'
import '@reach/dialog/styles.css'
import '@reach/tabs/styles.css'

const Dashboard = ({location}) => {
  const [isVisible, setVisibility] = useState(true)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', {replace: true})
    }
  }, [])

  const showModal = () => setVisibility(true)

  return (
    <Layout>
      <Profile />
      <p>TODO: Create a dashboard</p>
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        aria-labelledby="login"
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  )
}

export default Dashboard
