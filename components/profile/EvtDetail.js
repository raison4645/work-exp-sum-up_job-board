import styles from '@/styles/components/profile/EvtDetail.module.scss';
import { Grid } from '@mui/material';

export default function EvtDetail() {
  return (
    <>
      <Grid
        container
        sx={{p: 2, borderBottom: "solid 1px "}}
        alignItems='center'
      >
        <Grid lg={3} sm={1}>
          <p>6-7Nov. 2023</p>
        </Grid>
        <Grid lg={3} sm={1}>
          <p>Finance</p>
        </Grid>
        <Grid lg={6} sm={1}>
          <p>MARKET DISCOVERY PROGRAMME: EXPAND IN CHINA WITH CONFIDENCE</p>
        </Grid>
      </Grid>
    </>
  )
}
