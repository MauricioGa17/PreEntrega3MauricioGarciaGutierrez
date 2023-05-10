import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <NavBar/>

        <Container>
          <Outlet/>
        </Container>
    </div>
  )
}

export default Layout