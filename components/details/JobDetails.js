import Image from 'next/image'
import styles from '@/styles/components/search/JobDetails.module.scss'
import slugHandle from '@/common/slugHandle'
import DetailHeader from './DetailHeader'
import { Grid, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProcessButton from '../search/ProcessButton'

export default function JobDetails({ details }) {
  const findCompany = (company) => {
    const companyID = details.company.id
    const slug = slugHandle(company)
    window.location.href = `/company/${companyID}/${slug}`
  }

  return (
    <div className={styles.details_container}>
      <DetailHeader
        jobId={details.id}
        jobTitle={details.job_title}
      />
      <div className={styles.job_info}>
        <Image
          src={'/sample_img/job_card.png'}
          width={160}
          height={60}
          alt='Company logo'
        />
        <h4 className={styles.job_title}>{details.job_title}</h4>
        <p className={styles.company_name}>{details.company?.company_name}</p>
        <p>Hong Kong Centre for Cerebro-Cardiovascular Health Engineering Limited</p>
        <p>Within Hong Kong</p>
        <div className={styles.tag_container}>
          <span className={styles.workmode}>Remote Work</span>
          <span className={styles.workmode}>Full-Time</span>
          <span className={styles.workmode}>5 Years</span>
        </div>
        <Box display='flex' alignItems='center' gap={2}>
          <h5>Skills:</h5>
          <p>JAVA Script, PHP, Python +5 more</p>
        </Box>
      </div>
      <section className={styles.job_details}>
        <h3>Job Details</h3>
        <p>{details.job_description}</p>
      </section>
      <Grid
        container
        rowGap={2}
        sx={{my: 3, p: 4}}
      >
        <Grid lg={12}>
          <h3>Additional Information</h3>
        </Grid>
        <Grid lg={4}>
          <h5>Job Level</h5>
          <p>{details.job_level}</p>
        </Grid>
        <Grid lg={4}>
          <h5>Publish Date</h5>
          <p>{details.publish_at}</p>
        </Grid>
        <Grid lg={4}>
          <h5>Job Ref. No.</h5>
          <p>{details.reference_number}</p>
        </Grid>
        <Grid lg={4}>
          <h5>Education Level</h5>
          <p>{details.education_level}</p>
        </Grid>
        <Grid lg={4}>
          <h5>Language</h5>
          {/* <p>{details.}</p> */}
        </Grid>
        <Grid lg={4}>
          <h5>Professional Qualification</h5>
          {/* <p>{details.}</p> */}
        </Grid>
        <Grid lg={6}>
          <h5>industry</h5>
        </Grid>
        <Grid lg={6}>
          <h5>Job Functions</h5>
        </Grid>
      </Grid>
      <section className={styles.company_overview}>
        <h3>Company Overview</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </section>
      <div className={styles.more_jobs}>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => findCompany(details.company.company_name)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <p>More jobs from this company</p>
      </div>
    </div>
  )
}
