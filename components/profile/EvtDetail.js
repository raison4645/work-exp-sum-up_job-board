import styles from '@/styles/components/profile/EvtDetail.module.scss';

export default function EvtDetail() {
  return (
    <div className={styles.evt_detail}>
      <div className={styles.evt_date}>date</div>
      <div className={styles.evt_sector}>sector</div>
      <p className={styles.evt_name}>
        HKSTP PAVILION @ CIC GLOBAL CONSTRUCTION
        SUSTAINABILITY FORUM & EXHIBITION GCSFE 2023
      </p>
    </div>
  )
}
