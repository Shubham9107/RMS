import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to ChefCentral</Typography>
      <Typography component='p'>At ChefCentral, we pride ourselves on being the heartbeat of culinary excellence. With a passion for exceptional food and unparalleled hospitality, we've crafted an environment where chefs, restaurant owners, and managers can thrive.</Typography>
    </Container>
  )
}

export default About