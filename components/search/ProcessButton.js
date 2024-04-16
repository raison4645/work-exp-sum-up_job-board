import styles from '@/styles/components/search/ProcessButton.module.scss'
import Image from 'next/image'

export default function ProcessButton({ keyword, jobId, slug, ishome }) {
  const href = jobId ? `/apply/${jobId}/${slug}` : `/search?keyword=${keyword}`
  return (
    <a href={href}>
      {jobId
        ?
          <button className={styles.apply_button}>
            <h5>APPLY NOW</h5>
            <Image src='/sample_img/svgicon/btnIcon/applybtn-arrow.svg' height={13} width={15} />
          </button>
        :
          <button
            className={ishome ? styles.home_search_button : styles.search_button}>
          </button>
        }
    </a>
  )
}
