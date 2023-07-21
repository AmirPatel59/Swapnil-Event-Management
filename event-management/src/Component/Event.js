import React, { Component } from 'react'
import CakeIcon from '@mui/icons-material/Cake';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBirthdayCake ,faChampagneGlasses,faMartiniGlassCitrus,faBabyCarriage} from '@fortawesome/free-solid-svg-icons'
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
        "title": "Birthdays",
        "description": "Find birthday decorations, balloon decorations, customized cakes, gifts and more."
    },
    {
        "icon": "CakeIcon",
        "title": "Anniversaries",
        "description": "Find anniversary decorations, anniversary cakes, customized gift hampers and more.."
    },
    {
        "icon": "CakeIcon",
        "title": "Pre-Wedding Celebrations",
        "description": "FInd bachelorette decorations, haldi decoration, return gifts and more."
    },
    {
        "icon": "CakeIcon",
        "title": "Baby Showers",
        "description": "FInd decorations, artists, anchors, photography and more.."
    },
    {
        "icon": "",
        "title": "",
        "description": "Find birthday decorations, balloon decorations, customized cakes, gifts and more."
    }
]
export default class Event extends Component {
    render() {
        return (
            <div>
                <Typography
                    variant="h3"
                    sx={{color: "black", fontWeight:"bold",paddingTop:"20px",paddingBottom:"20px" }}
                >
                    Events
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 1, md: 4 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        <Grid item xs={1} sm={1} md={2} key={1}>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} key={2}>
                            <Item>
                                <FontAwesomeIcon icon={faBirthdayCake} style={{ color: "#61d674", width: "75px", height: "75px" }} />
                                <Typography
                                    variant="h5"
                                    sx={{  color: "black" }}
                                >
                                    {eventList[0].title}
                                </Typography>

                                {eventList[0].description}</Item>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} key={3}>
                            <Item>
                            <FontAwesomeIcon icon={faChampagneGlasses} style={{ color: "#61d674", width: "75px", height: "75px" }} />
                                <Typography
                                    variant="h5"
                                    sx={{  color: "black" }}
                                >
                                    {eventList[1].title}
                                </Typography>
                                
                                {eventList[1].description}</Item>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} key={4}>
                            <Item>
                            <FontAwesomeIcon icon={faMartiniGlassCitrus} style={{ color: "#61d674", width: "75px", height: "75px" }} />
                                <Typography
                                    variant="h5"
                                    sx={{  color: "black" }}
                                >
                                    {eventList[2].title}
                                </Typography>
                                {eventList[2].description}</Item>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} key={5}>
                            <Item>
                            <FontAwesomeIcon icon={faBabyCarriage} style={{ color: "#61d674", width: "75px", height: "75px" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "black" }}
                                >
                                    {eventList[3].title}
                                </Typography>
                                {eventList[3].description}</Item>
                        </Grid>
                        <Grid item xs={1} sm={1} md={2} key={6}>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        )
    }
}
