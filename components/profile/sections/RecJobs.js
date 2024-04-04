import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { getData } from '@/common/api';
import SimpleJobBar from '../SimpleJobBar';

export default function RecJobs() {
  const [recJobs, setRecJobs] = useState([])
  const getRecJobs = async () => {
    const { data: allRecJobs } = await getData('position');
    setRecJobs(allRecJobs);
  }

  useEffect(() => {
    getRecJobs();
  }, [])

  return (
    <div className={styles.profile_section}>
        <Stack>
          {recJobs.map(job => <SimpleJobBar job={job} />)}
        </Stack>
    </div>
  )
}

