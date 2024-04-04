import { useEffect, useState } from 'react';
import { getData } from '@/common/api';
import { Tabs, Tab, Button, Box, Stack } from '@mui/material';
import styles from '@/styles/components/profile/sections/ProfileSection.module.scss';
import BaseModal from '@/components/BaseModal';
import SimpleJobBar from '../SimpleJobBar';

export default function JobAlert() {
  // TODO: Fetch subscribed alert list from the user, now it is statically inputed
  const [alertList, setAlertList] = useState([
    {
      name: 'IT',
      id: '1',
    },
    {
      name: 'CS',
      id: '2',
    },
    {
      name: 'HR',
      id: '3',
    },
  ])
  const [currAlert, setCurrAlert] = useState('1');
  // also need candidate's alert list as State which is from api and mutable.
  const [jobs, setJobs] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleNew, setToggleNew] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleChange = (e, changedAlert) => {
    setCurrAlert(changedAlert)
  }

  const saveCurrAlert = async () => {
    // TODO:putData ('jobalert route'), await status response
    // if success => settoogleState(false)
    setToggleEdit(false) // temporary
  }

  const saveNewAlert = async () => {
    // TODO:postData ('jobalert route'), await status response
    // if success => settoogleState(false)
    setToggleNew(false) // temporary
  }

  const getRelatedJob = async () => {
    // FIXME: Need update the final route of JobAlert when API ready, now just get all jobs
    const { data: relatedJob } = await getData('position')
    setJobs(relatedJob);
  }
  useEffect(() => {
    // TODO: fetch new job when another alert is picked
    getRelatedJob();
  }, [currAlert])

  const AlertSetting = ({ onCancel, onSave, keyword, setKeyword }) => {
    return (
      <div>
        <input
          value={keyword}
          type='text'
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    )
  }

  return (
    <div className={styles.profile_section}>
      {/* <Box display='flex' alignItems='center' justifyContent='space-between'> */}
      <Tabs
        sx={{bgcolor: 'black', position: 'relative'}}
        value={currAlert}
        onChange={handleChange}
        exclusive
        aria-label='Platform'
      >
        {/* TODO:map the button from the alertList, now is hard typed */}
        {alertList.map(alert => <Tab sx={{color: "#EFEFEF"}} label={alert.name} />)}
      </Tabs>
      <div className={styles.alert_btn_group}>
        <Button onClick={() => setToggleEdit(true)}>edit Alert</Button>
        <BaseModal
          toggleModal={toggleEdit}
          setToggleModal={setToggleEdit}
          height={600}
          width={400}
          content={<AlertSetting
              onCancel={() => setToggleEdit(false)}
              onSave={saveCurrAlert}
              keyword={keyword}
              setKeyword={setKeyword}
            />}
          />
        <Button onClick={() => setToggleNew(true)}>Add Alert</Button>
        <BaseModal
          toggleModal={toggleNew}
          setToggleModal={setToggleNew}
          height={600}
          width={400}
          content={<AlertSetting
              onCancel={() => setToggleNew(false)}
              onSave={saveNewAlert}
              keyword={keyword}
              setKeyword={setKeyword}
            />}
          />
      </div>
      <Stack>
        {jobs.map((item, idx) => <SimpleJobBar key={`${item}-${idx}`} job={item} />)}
      </Stack>
    </div>
  )
}
