import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { faBoxOpen, faHandshake, faClipboard, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';



export default function Process() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <FontAwesomeIcon icon={faBoxOpen} style={{ color: "#61d674", width: "45px", height: "45px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack spacing={2} sx={{ maxWidth: 200 }}>
            <SnackbarContent
              message={
                'STEP 1. Choose from our curated packages or individual services.'
              }
            />
          </Stack>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <FontAwesomeIcon icon={faHandshake} style={{ color: "#61d674", width: "45px", height: "45px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack spacing={2} sx={{ maxWidth: 200 }}>
            <SnackbarContent
              message={
                'STEP 2. Choose from our curated packages or individual services.'
              }
            />
          </Stack>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <FontAwesomeIcon icon={faClipboard} style={{ color: "#61d674", width: "45px", height: "45px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack spacing={2} sx={{ maxWidth: 200 }}>
            <SnackbarContent
              message={
                'STEP 3. \
          Choose from our curated packages or individual services.'
              }
            />
          </Stack>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#61d674", width: "45px", height: "45px" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Stack spacing={2} sx={{ maxWidth: 200 }}>
            <SnackbarContent
              message={
                'STEP 4. \
          Choose from our curated packages or individual services.'
              }
            />
          </Stack>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}