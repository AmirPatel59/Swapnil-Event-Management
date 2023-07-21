import React, { Component } from 'react'
import Navbarr from './Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from './Slide'
import Event from './Event'
import Services from './Services';
import Process from './Process';
import CustomizedTimeline from './Timeline';

export default class Home extends Component {
  render() {
    return (
        <Container maxWidth="xxl" disableGutters>
          <Box sx={{marginTop:'40px'}}>
          <Slide></Slide>
          <Event></Event>
          <Services></Services>
          <CustomizedTimeline></CustomizedTimeline>
          </Box>         
      </Container>
    )
  }
}
