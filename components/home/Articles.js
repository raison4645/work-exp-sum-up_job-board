import styles from "@/styles/components/home/Articles.module.scss";
import ArticleCard from "../ArticleCard";

export default function Articles({ homeArticles, section }) {
  //TODO: content are statically input, insert the appropriate variable when api is ready
  return (
    <div className={styles.articles_container}>
      <div className={styles.main_articles}>
        <div className={styles.main_img}>article img</div>
        <div className={styles.main_desc}>
          <h2>HKSTP OFFICIALLY LAUNCHED “HKSTP X AWS DEEPRACER</h2>
          <span>24 Nov 2023</span>
        </div>
      </div>
      <div className={styles.article_cards_container}>
      {homeArticles?.map((article, idx) => (
        <ArticleCard
          key={`${idx}-${article?.id}`}
          cardText={article?.excerpt_text}
          title={article?.title}
          date={article?.publish_at}
          url={article?.external_url}
        />
      ))}
      </div>
      <a href={`/${section.toLowerCase()}`}>
        <h5 className={styles.more_articles}>More {section}</h5>
      </a>
    </div>
  )
}
