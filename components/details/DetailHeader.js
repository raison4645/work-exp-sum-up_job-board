import { useState } from 'react'
import slugHandle from '@/common/slugHandle'
import styles from '@/styles/components/search/JobDetails.module.scss'
import ShareButtonGroup from './ShareButtonGroup'

export default function DetailHeader({ jobId, jobTitle }) {
  const slug = slugHandle(jobTitle)
  const jobLink = `/job/${jobId}/${slug}`

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin + jobLink)
  }

  const shareOnMedia = () => {

  }

  return (
    <div className={styles.detail_header}>
      <div>
        <span>Share</span>
        <ShareButtonGroup
          copyLink={copyLink}
        />
        {/* <span className={styles.copy_link} onClick={copyLink}>{copied}</span> */}
      </div>
      <a href={jobLink} target="_blank" >View in new Tab</a>
    </div>
  )
}
