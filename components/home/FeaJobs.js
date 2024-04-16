import JobCard from "@/components/JobCard";
import styles from "@/styles/pages/Home.module.scss";
import Pagination from "@mui/material/Pagination";

export default function FeaJobs({ feaJob }) {
  // CAUTION: temporary filter top 3 jobs, remove it when pagination added
  return (
    <div className={styles.feajob_section}>
      <div className={styles.feajob_card_container}>
        {feaJob?.slice(0, 3).map((job) => (
          <JobCard
            key={job?.id}
            jobTitle={job?.job_title}
            companyName={job?.company?.company_name}
            skills={job?.skill}
            workmode={job?.work_mode}
            publishAt={job?.publish_at}
          />
        ))}
      </div>
      <div className={styles.pagination_container}>
        <Pagination count={4}/>
      </div>
    </div>
  )
}
