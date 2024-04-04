import Image from 'next/image'
import styles from '@/styles/components/search/JobDetails.module.scss'
import slugHandle from '@/common/slugHandle'
import DetailHeader from './DetailHeader'

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
        <div>
          <h4 className={styles.job_title}>{details.job_title}</h4>
          <p className={styles.company_name}>{details.company_info.company_name}</p>
        </div>
      </div>
      <section className={styles.job_details}>
        <h3>Job Details<hr/></h3>
        <p>{details.job_description}</p>
      </section>
      <section className={styles.additional_info}>
        <h3>Additional Information<hr/></h3>
        <div className={styles.add_items_container}>
          <div>
            <h5>Job Ref. No.</h5>
            <p>{details.reference_number}</p>
          </div>
          <div>
            <h5>Education Level</h5>
            <p>{details.education_level}</p>
          </div>
          <div>
            <h5>Employment Type</h5>
            <p>{details.employment_types?.map(item => item.name).join(', ')}</p>
          </div>
          <div>
            <h5>Work Exp.</h5>
            <p>{details.workexp_max}</p>
          </div>
          <div>
            <h5>Job Level</h5>
            <p>{details.job_level}</p>
          </div>
          <div>
            <h5>Work Mode</h5>
            <p>{details.work_mode}</p>
          </div>
          <div>
            <h5>Skills</h5>
            <p>{details.skills?.map(item => item.name).join(', ')}</p>
          </div>
          <div>
            <h5>Language</h5>
          {/* <p>{details.}</p> */}
          </div>
          <div>
            <h5>Professional Qualification</h5>
            {/* <p>{details.}</p> */}
          </div>
          <div>
            <h5>Publish Date</h5>
            <p>{details.publish_at}</p>
          </div>
        </div>
          <div className={styles.industry}>
            industry
          </div>
      </section>
      <section className={`mt-3 ${styles.company_overview}`}>
        <h3>Company Overview<hr/></h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </section>
      <button
        onClick={() => findCompany(details.company_info.company_name)}
        className={styles.more_job}
      >
        More jobs from this company
      </button>
    </div>
  )
}
