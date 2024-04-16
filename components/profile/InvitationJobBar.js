import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Grid } from '@mui/material'
import styles from '@/styles/components/profile/DetailedJobBar.module.scss'
import timeFormater from '@/common/timeFormater';
import { Bookmark } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionStyle = {
  width: 1,
  p: 2,
  borderRadius: '0',
}

const iconStyle = {
  color: '#1f1f1f',
  borderRadius: '50%',
}

export default function InvitationJobBar({ ivt }) {
  const [expand, setExpand] = useState(false)

  return (
    <Accordion
      sx={accordionStyle}
      expanded={expand}
      elevation={0}
      square
    >
      <AccordionSummary sx={{position: 'relative'}}>
        <Box display='flex' justifyContent='space-between' sx={{width: 1}}>
          <Stack gap={2} sx={{position: 'relative'}}>
            <h4 className={styles.job_title}>{ivt?.job_title}</h4>
            <p className={styles.company_name}>{ivt?.company?.company_name}</p>
            <Box display='flex' gap={1}>
              <span className={styles.workmode_tag}>{ivt?.work_mode}</span>
              {ivt?.skills?.map((skill, idx) => <span className={styles.job_tag} key={`${skill.name}-${idx}`}>{skill?.name} </span>)}
            </Box>
            <p className={styles.updated_at}>{timeFormater(ivt?.updated_At)}</p>
          </Stack>
          <Stack
            justifyContent='space-between'
            alignItems='flex-end'
          >
            <Bookmark color="info" sx={{margin: 0}} />
            <Box
              display='flex'
              sx={{width: 'fit-content'}}
              gap={1}
              alignItems='center'
              justifyContent='space-between'
              onClick={() => setExpand(!expand)}
            >
              <p className={styles.toggle_label}>Details</p>
              <ExpandMoreIcon
                sx={expand ? {transform: 'rotate(180deg)', ...iconStyle} : iconStyle}
              />
            </Box>
          </Stack>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{pt: 3, pb: 0}}>
        <Grid container gap={2} sx={{width: 1}}>
          <Grid lg={12}>
            <p>Hi. We would like to invite you to join the interview, details below</p>
          </Grid>
          <Grid lg={4}>
            <h5>Date and Time</h5>
            <p></p>
          </Grid>
          <Grid lg={4}>
            <h5>Interview Link</h5>
            <p>http://localhost:3000</p>
          </Grid>
          <Grid lg={12}>
            <button>ACCEPT</button>
            <button>REJECT</button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

