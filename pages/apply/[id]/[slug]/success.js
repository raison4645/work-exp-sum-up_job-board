import { getData } from '@/common/api'
import JobCard from '@/components/JobCard'
import styles from '@/styles/pages/Apply.module.scss'

export async function getServerSideProps(context) {
  const { id, slug } = context.query
  const position = await getData('position', id)
  const { data: recJob } = await getData('position') // now is fetching all job, get recommended job in real case
  return {props: { id: id, slug: slug, position: position.data, recJob: recJob}}
}

export default function success({ id, slug, position, recJob }) {
  return (
    <div className={styles.success_page}>
      <h1>Thank You!</h1>
      <p className={styles.success_message}>
        Your application of <strong>{position.job_title} </strong>
        @ <strong>{position.company?.company_name}</strong> was sent. You can check
        your application history in your Applied Jobs. Good luck!
      </p>
      <span className={styles.recjob_label}>You may also like</span>
      <div className={styles.recjob_container}>
        {recJob.map(job =>
          <JobCard
            jobTitle={job.job_title}
            companyName={job.company?.company_name}
            skills={job.skills}
            workmode={job.work_mode}
            publishAt={job.publish_at}
            key={`${job.job_title}-${job.company_name}`}
          />
        )}
      </div>
    </div>
  )
}
