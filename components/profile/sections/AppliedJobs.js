import AppliedJobBar from "../AppliedJobBar"
import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';
import { getData } from "@/common/api";
import { useEffect, useState } from "react";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [selectedApply, setSelectedApply] = useState([]);

  const getAppliedJob = async () => {
    const { data: application } = await getData('position')
    setAppliedJobs(application)
  }

  const withDrawApplication = () => {
    // TODO: using put/delete method to send withdraw application request
    // TBC: ask UX designer how to display the withdrawl process
    console.log('withdrawn')
  }
  useEffect (() => {
    getAppliedJob();
  }, [])

  return (
    <div className={styles.profile_section}>
      {selectedApply?.length > 0 && <button className={styles.withdraw_btn} onClick={withDrawApplication}>WITHDRAW</button> }
      {appliedJobs.map(job => <AppliedJobBar key={job.id} job={job} setSelectedApply={setSelectedApply} selectedApply={selectedApply}/>)}
    </div>
  )
}
