import { useState } from 'react'
import ProcessButton from '../search/ProcessButton'
import slugHandle from '@/common/slugHandle'
import styles from '@/styles/components/search/JobDetails.module.scss'

export default function DetailHeader({ jobId, jobTitle }) {
  const [copied, setCopied] = useState('Copy Link')
  const slug = slugHandle(jobTitle)
  const jobLink = `/job/${jobId}/${slug}`

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin + jobLink)
    setCopied('Copied!')
  }

  return (
    <div className={styles.detail_header}>
      <div>
        <span>Share | </span>
        <span className={styles.copy_link} onClick={copyLink}>{copied}</span>
      </div>
      <ProcessButton jobId={jobId} slug={slug}/>
      <a href={jobLink} target="_blank" >View in new Tab</a>
    </div>
  )
}
