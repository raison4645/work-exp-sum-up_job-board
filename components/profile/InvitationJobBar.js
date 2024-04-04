import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import styles from '@/styles/components/profile/DetailedJobBar.module.scss'
import Image from 'next/image'
import { Bookmark } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionStyle = {
  width: 1,
  p: 2,
  position: 'relative'
}

const accordionSumStyle = {
  p: 0,
}

const iconStyle = {
  color: 'white',
  background: "#0288d1",
  borderRadius: '50%',
  fontSize: '1.25rem'
}


export default function InvitationJobBar() {
  const [expand, setExpand] = useState(false)

  return (
    <div className={styles.bar_container}>
      <Accordion
        sx={accordionStyle}
        expanded={expand}
        onClick={() => setExpand(!expand)}
      >
        <AccordionSummary sx={accordionSumStyle}>
          <div className={styles.bar_summary}>
            <Image src="/sample_img/job_card.png" width={160} height={60} />
            <div className={styles.bar_title}>
              <h5>System Developer</h5>
              <p>Blockchain Solution Limited</p>
              {!expand &&
              <Box>
                <button>ACCEPT</button>
                <button>REJECT</button>
              </Box>
            }
            </div>
            <div className={styles.bookmark_expand}>
              <Bookmark color="info" sx={{margin: 0}} />
              <ExpandMoreIcon
                sx={expand ? {transform: 'rotate(180deg)', ...iconStyle} : iconStyle}
              />
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{width: 1}}>
          <div className={styles.bar_details}>
            <h5>Details</h5>
            <span>Date & Time: </span>
            <br/>
            <span>Interview Link: </span><a>meet.google.com</a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
