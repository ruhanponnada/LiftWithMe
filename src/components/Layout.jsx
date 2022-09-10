import React from 'react'
import { Container } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import {Footer} from './Footer'

export function Layout(props) {
  return (
    <>
      <Navbar />
      <Container maxW='container.lg'>{props.children}</Container>
      <Footer />
    </>
  )
}
