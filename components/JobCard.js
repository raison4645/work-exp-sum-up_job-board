import Image from 'next/image';
import styles from "@/styles/components/JobCard.module.scss";
import timeFormater from '@/common/timeFormater';

export default function JobCard({ jobTitle, companyName, skills, workmode, publishAt }) {
  return (
    <div className={styles.jobCard_container}>
      <div className={styles.img_container}>
        <Image src="/sample_img/job_card.png" width={160} height={60} alt="Company Logo"/>
      </div>
      <span className={styles.bookmark}>
        <Image src="/sample_img/svgicon/icon-bookmark.svg" width={15} height={21} />
      </span>
      <h4 className={styles.job_title}>{jobTitle}</h4>
      <p className={styles.company_name}>{companyName}</p>
      <div className={styles.tag_container}>
        {workmode && <span className={styles.workmode}>{workmode}</span>}
        {skills && skills.map((item, index) => <span key={index} className={styles.skills}>{item.name}</span>)}
      </div>
      <span className={styles.days}>{timeFormater(publishAt)}</span>
    </div>
  )
}
