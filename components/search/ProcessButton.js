import styles from '@/styles/components/search/ProcessButton.module.scss'

export default function ProcessButton({ keyword, jobId, slug }) {
  const href = jobId  ? `/apply/${jobId}/${slug}` : `/search?keyword=${keyword}`
  return (
    <a href={href}>
      {jobId
        ? <button className={styles.apply_button}>Apply Now</button>
        : <button className={styles.search_button}></button>}
    </a>
  )
}
