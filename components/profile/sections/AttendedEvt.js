import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';
import EvtDetail from '../EvtDetail';
import { Grid } from '@mui/material';

export default function AttendedEvt() {
  return (
    <div className={styles.profile_section}>
      <Grid
        container
        sx={{color: '#fff', backgroundColor:'#1f1f1f', p: 2}}
      >
        <Grid lg={3}>
          <h5>Date</h5>
        </Grid>
        <Grid lg={3}>
          <h5>Sector</h5>
        </Grid>
        <Grid lg={6}>
          <h5>Event Name</h5>
        </Grid>
      </Grid>
      <EvtDetail />
      <EvtDetail />
      <EvtDetail />
      <EvtDetail />
      <EvtDetail />
    </div>
  )
}
