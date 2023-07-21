import React, { Component } from 'react'
import styles from './CSS/Slide.css'
import background from './../Asset/event1.jpg'
import Button from '@mui/material/Button';
export default class Slide extends Component {
    render() {
        return (
                <article
                    className={styles.article}
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <h1 className={styles.header} style={{color:"white",paddingTop:"30px"}}>PLAN YOUR NEXT EVENT WITH CELEBRATED</h1>
                    <h3 style={{color:"white",paddingTop:"10px"}}>Get Decorations, Cakes, Photographers and More</h3>
                    <Button variant="contained" style={{margin:"20px",backgroundColor:"#fde962",color:"black"}}>Book Now</Button>
                </article>
        )
    }
}
