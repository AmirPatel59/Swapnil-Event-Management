import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { faBoxOpen, faHandshake, faClipboard, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CustomizedTimeline() {
  return (
    <div>
        <Typography variant='h3' sx={{"fontWeight":'bold',paddingTop:"4rem"}}>How Does it Works </Typography>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <FontAwesomeIcon icon={faBoxOpen} style={{  width: "45px", height: "45px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          STEP 1.
          </Typography>
          <Typography> Choose from our curated packages or individual services.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <FontAwesomeIcon icon={faHandshake} style={{ width: "45px", height: "45px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          STEP 2. 
          </Typography>
          <Typography>Choose from our curated packages or individual services.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <FontAwesomeIcon icon={faClipboard} style={{ width: "40px", height: "40px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          STEP 3.
          </Typography>
          <Typography>Choose from our curated packages or individual services</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <FontAwesomeIcon icon={faCalendarCheck} style={{ width: "45px", height: "45px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          STEP 4.
          </Typography>
          <Typography>Choose from our curated packages or individual services.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
