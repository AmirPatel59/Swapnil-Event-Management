import React, { Component } from 'react'
import CakeIcon from '@mui/icons-material/Cake';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHollyBerry,faMasksTheater,faCameraRetro } from '@fortawesome/free-solid-svg-icons'
//import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'
import Birthday from './../Asset/happy-birthday-icon.png'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const eventList = [
    {
        "icon": "CakeIcon",
        "title": "Decorations",
        "description": "Find balloon decorations, flower decorations, car decorations, and much more for your special occasion."
    },
    {
        "icon": "CakeIcon",
        "title": "Artists",
        "description": "Find magicians, anchors, mascots, tattoo artists and more for birthdays and other celebrations."
    },
    {
        "icon": "CakeIcon",
        "title": "Photography",
        "description": "Find baby photography, newborn photography, maternity photography and other packages for your celebrations."
    }
]

export default class Services extends Component {
    render() {
        return (
            <div>
                <Typography
                    variant="h3"
                    sx={{ color: "black", fontWeight: "bold", paddingTop: "20px", paddingBottom: "20px" }}
                >
                    Services
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={{ xs: 1, md: 4 }} columns={{ xs: 1, sm: 9, md: 9 }}>
                        <Grid item xs={1} sm={1} md={2} key={2}>
                            <Item>
                                <FontAwesomeIcon icon={faHollyBerry} style={{ color: "#61d674", width: "75px", height: "75px" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "black" }}
                                >
                                    {eventList[0].title}
                                </Typography>

                                {eventList[0].description}</Item>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} key={3}>
                            <Item>
                                <FontAwesomeIcon icon={faMasksTheater} style={{ color: "#61d674", width: "75px", height: "75px" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "black" }}
                                >
                                    {eventList[1].title}
                                </Typography>

                                {eventList[1].description}</Item>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} key={4}>
                            <Item>
                                <FontAwesomeIcon icon={faCameraRetro} style={{ color: "#61d674", width: "75px", height: "75px" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "black" }}
                                >
                                    {eventList[2].title}
                                </Typography>
                                {eventList[2].description}</Item>
                        </Grid>

                    </Grid>
                </Box>
            </div>
        )
    }
}
