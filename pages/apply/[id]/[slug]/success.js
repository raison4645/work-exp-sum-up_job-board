import { getData } from '@/common/api'
import JobCard from '@/components/JobCard'
import styles from '@/styles/pages/Apply.module.scss'


// ***ORIGINAL CODE***

export async function getServerSideProps(context) {
  const { id, slug } = context.query
  const position = await getData('position', id)
  const { data: recJob } = await getData('position') // now is fetching all job, get recommended job in real case
  return {props: { id: id, slug: slug, position: position.data, recJob: recJob}}
}

export default function success({ id, slug, position, recJob }) {
  return (
    <div className={styles.success_page}>
      <h5>Thank You!</h5>
      <p>
        Your application of <strong>{position.job_title} </strong>
        @ <strong>{position.company_info.company_name}</strong> was sent
      </p>
      <p>You can check your application history in your Applied Jobs. Good luck!</p>
      <p className={styles.recjob_label}>You may also like</p>
      <div className={styles.recjob_container}>
        {recJob.map(job =>
          <JobCard
            jobTitle={job.job_title}
            companyName={job.company_name}
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

// ***FOR DEMO ONLY***

// export async function getServerSideProps(context) {
//   const { id, slug } = context.query
//   const intId = parseInt(id);
//   const position = json.data.find(post => post.id === intId)
//   // console.log(position)
//   // const { data: recJob } = await getData('position') // now is fetching all job, get recommended job in real case
//   const recJob = json.data
//   return {props: { id: id, slug: slug, position: position, recJob: recJob}}
// }

// export default function success({ id, slug, position, recJob }) {
//   // console.log(recJob)
//   return (
//     <div className={styles.success_page}>
//       <h5>Thank You!</h5>
//       <p>
//         Your application of <strong>{position.job_title} </strong>
//         @ <strong>{position.company_info.company_name}</strong> was sent
//       </p>
//       <p>You can check your application history in your Applied Jobs. Good luck!</p>
//       <p className={styles.recjob_label}>You may also like</p>
//       <div className={styles.recjob_container}>
//         {recJob.map(job =>
//           <JobCard
//             jobTitle={job.job_title}
//             companyName={job.company_name}
//             skills={job.skills}
//             workmode={job.work_mode}
//             publishAt={job.publish_at}
//             key={`${job.job_title}-${job.company_name}`}
//           />
//         )}
//       </div>
//     </div>
//   )
// }
