import { useState, useEffect } from "react";
import { getData } from "@/common/api";
import InvitationJobBar from "../InvitationJobBar"
import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';

export default function JobInvitation() {
  const [invitations, setInvitations] = useState([]);

  const getInvitation = async () => {
    const { data: fetchIvt } = await getData('position')
    setInvitations(fetchIvt)
  }
  useEffect(() => {
    getInvitation();
  }, [])

  return (
    <div className={styles.profile_section}>
      {invitations.map(ivt => <InvitationJobBar ivt={ivt} />)}
    </div>
  )
}

