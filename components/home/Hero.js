import styles from "@/styles/pages/Home.module.scss";
import Image from "next/image"
import HomeSearch from "@/components/home/HomeSearch";

export default function Hero({ onInputChange, keyword, setKeyword }) {
  return (
    <section className={styles.job_section}>
      <Image
        src='/sample_img/homebgd.jpg'
        height={610}
        width={1440}
        alt='HKSTP Talent Pool home background photo'
        className={styles.banner_img}
      />
      <HomeSearch
        keyword={keyword}
        onInputChange={onInputChange}
        data={[]}
      />
      <h2 className={styles.head_title}>HKSTP<br/>Talent Pool</h2>
    </section>
  )
}
