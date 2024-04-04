import { useState, useEffect } from 'react';
import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';
import SimpleJobBar from '../SimpleJobBar';
import { getData } from '@/common/api';

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([])

  const getSavedJobs = async () => {
    // TODO: when API is ready for this feature, correct route.
    const { data: jobs } = await getData('position');
    setSavedJobs(jobs)
  }

  useEffect(() => {
    getSavedJobs();
  }, [])

  return (
    <div className={styles.profile_section}>
      {/*
          TODO: loop all the positions with apply button (button / a).
          ii. The button included thelink (apply/id/slug) which redirect
          to the appropriate apply page.
      */}
      {savedJobs.map(job => <SimpleJobBar job={job} onPage='saved job' />)}
    </div>
  )
}
