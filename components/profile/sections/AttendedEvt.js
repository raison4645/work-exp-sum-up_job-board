import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';
import EvtDetail from '../EvtDetail';

export default function AttendedEvt() {
  return (
    <div className={styles.profile_section}>
      <div className={styles.atd_evt_head}>
        <span>Date</span>
        <span>Sector</span>
        <span>Event Name</span>
      </div>
      <EvtDetail />
      <EvtDetail />
      <EvtDetail />
      <EvtDetail />
      <EvtDetail />
    </div>
  )
}
