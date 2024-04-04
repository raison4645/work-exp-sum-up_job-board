import styles from "@/styles/components/profile/sections/BasicInfo.module.scss"
import STPAvatar from "../STPAvatar"
import { Button } from '@mui/material'

export default function BasicInfo({ profile, user, setIsEditing }) {
  return (
    <div className={styles.basic_info_container}>
      <div className={styles.basic_info}>
        <h3>Basic Information</h3>
        <STPAvatar imageURL={user?.image} />
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </div>
      <div className={styles.contact_info}>
        <h5>Name </h5>
        <span>{profile.firstname} {profile.lastname}</span>
        <h5>Email </h5>
        <span>{profile.email}</span>
        <h5>Contact No. </h5>
        <span>{profile.phone}</span>
        <h5>LinkedIn </h5>
        <span>{profile.linkedin_url}</span>
        <h5>Website </h5>
        <span>{profile.website_url}</span>
        <h5>Availability </h5>
        <span>{profile.availability}</span>
        <h5>Expected Annual Package </h5>
        <span>{profile.expected_salary}</span>
      </div>

      <h3 className={styles.skills_header}>Skills, Languages and Interests</h3>
      <div className={styles.skills_languages}>
        <h5>Skills</h5>
        <span>{profile.skill?.join(', ')}</span>
        <h5>Languages</h5>
        <span>{profile.language?.join(', ')}</span>
        <h5>Sector Interest</h5>
        <span>{profile.interested_sector?.join(', ')}</span>
        <h5>Job Interests</h5>
        <span>{profile.interested_job_title?.join(', ')}</span>
      </div>
    </div>
  )
}
