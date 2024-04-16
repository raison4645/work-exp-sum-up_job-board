import styles from "@/styles/components/ArticleCard.module.scss"

export default function ArticleCard({
  title,
  date,
  url
}) {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        {/* <Image src="" /> */}
      </div>
      <div className={styles.card_text}>
        <span className={styles.post_date}>23 Mar 2023{date}</span>
        <h5 className={styles.card_title}>{title}
          HSBC AND HKSTP JOIN FORCES TO DRIVE FINTECH DEVELOPMENT
        </h5>
      </div>
    </div>
  )
}
