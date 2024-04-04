import styles from "@/styles/components/ArticleCard.module.scss"
import Image from "next/image"

export default function ArticleCard({
  cardText,
  title,
  date,
  url
}) {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        {/* <Image src="" /> */}
      </div>
      <p className={styles.card_title}>{title}</p>
      <span>{date}</span>
      <p>{cardText}</p>
      <a href={url}><button>Read More</button></a>
    </div>
  )
}
