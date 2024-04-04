import DetailedJobBar from "../InvitationJobBar"
import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';

export default function JobInvitation() {
  return (
    <div className={styles.profile_section}>
      <DetailedJobBar />
    </div>
  )
}
