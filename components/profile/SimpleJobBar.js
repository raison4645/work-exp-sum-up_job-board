import styles from '@/styles/components/profile/SimpleJobBar.module.scss'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import timeFormater from '@/common/timeFormater';
import slugHandle from '@/common/slugHandle';
import ProcessButton from '../search/ProcessButton';

export default function SimpleJobBar({ job }) {
  // add page property, render additional item
  return (
    <div className={styles.bar_container}>
      <div className={styles.details}>
        <h3>{job?.job_title}</h3>
        <p>{job?.company_info?.company_name}</p>
        <div className={styles.tag_container}>
          <span>{job?.work_mode}</span>
          {job?.skills?.map((skill, idx) => <span key={`${skill.name}-${idx}`}>{skill?.name}</span>)}
        </div>
        <span className={styles.posted_date}>{timeFormater(job?.updated_at)}</span>
      </div>
      <div className={styles.bookmark}>
        <BookmarkBorderIcon color="info"/>
        <ProcessButton jobId={job.id} slug={slugHandle(job.job_title)} />
      </div>
    </div>
  )
}
