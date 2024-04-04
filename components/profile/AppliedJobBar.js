import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Grid, Checkbox } from '@mui/material'
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

const checkboxStyle = {
  position: 'absolute',
  top: -40,
  left: -44,
}

export default function AppliedJobBar({ job, setSelectedApply, selectedApply }) {
  const [expand, setExpand] = useState(false)

  const onCheckboxChange = () => {
    if (selectedApply.includes(job.id)) {
      setSelectedApply(selectedApply.filter(idx => idx !== job.id))
    } else {
      setSelectedApply([...selectedApply, job.id])
    }
  }

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
            <Checkbox
              disableRipple={true}
              sx={checkboxStyle}
              onChange={onCheckboxChange}
            />
            <label className={styles.apply_status}>Applied</label>
            <h4 className={styles.job_title}>{job?.job_title}</h4>
            <p className={styles.company_name}>{job?.company_info?.company_name}</p>
            <Box display='flex' gap={1}>
              <span className={styles.workmode_tag}>{job?.work_mode}</span>
              {job?.skills?.map((skill, idx) => <span className={styles.job_tag} key={`${skill.name}-${idx}`}>{skill?.name} </span>)}
            </Box>
            <p className={styles.updated_at}>{timeFormater(job.updated_At)}</p>
          </Stack>
          <Stack
            justifyContent='space-between'
            alignItems='flex-end'
          >
            <Bookmark color="info" sx={{margin: 0}} />
            <Box
              display='flex'
              sx={{width: 140}}
              alignItems='center'
              justifyContent='space-between'
              onClick={() => setExpand(!expand)}
            >
              <p className={styles.toggle_label}>Application Details</p>
              <ExpandMoreIcon
                sx={expand ? {transform: 'rotate(180deg)', ...iconStyle} : iconStyle}
              />
            </Box>
          </Stack>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{pt: 3, pb: 0}}>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <h5>Contact No.</h5>
            <p>+852 98765432</p>
          </Grid>
          <Grid item lg={4}>
            <h5>CV</h5>
            <p>CV for Admin Job (file: CV4all.doc)</p>
          </Grid>
          <Grid item lg={4}>
            <h5>Availability</h5>
            <p>Immediate</p>
          </Grid>
          <Grid item lg={4}>
            <h5>Expected Annual Package</h5>
            <p>HKD 240K</p>
          </Grid>
          <Grid item lg={4}>
            <h5>Working Permit Required</h5>
            <p>Not Required</p>
          </Grid>
        </Grid>

        <Stack sx={{p: 2, backgroundColor: "#EFEFEF", mt: 2}} gap={3}>
          <Grid lg={12}>
            <h5>Skills</h5>
            <p>PHP, Python, AI Learning</p>
          </Grid>
          <Grid lg={12}>
            <h5>languages</h5>
            <p>Cantonese, English, Mandarian</p>
          </Grid>
        </Stack>

      </AccordionDetails>
    </Accordion>
  )
}
