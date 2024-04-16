import { useState } from 'react'
import Articles from '@/components/home/Articles'
import { Tabs, Tab } from '@mui/material'
import { getData } from '@/common/api'
import styles from "@/styles/pages/Events.module.scss";

export async function getServerSideProps() {
  const { data: allEvents } = await getData('event')
  return { props: { allEvents: allEvents } };
}

export default function index({ allEvents }) {
  const [selectedTab, setSelectedTab] = useState(1);
  const onTabChange = (e, newValue) => {
    setSelectedTab(newValue)
  }
  return (
    <div className={styles.events_page}>
      <div className={styles.events_banner}>
        <h2>Events</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <Tabs
        value={selectedTab}
        onChange={onTabChange}
        indicatorColor='success'
        textColor='white'
        sx={{background: '#1f1f1f', color: '#fff', px: 2}}
      >
        <Tab label="Upcoming Events" value={1} />
        <Tab label="Past Events" value={2} />
      </Tabs>
      <Articles homeArticles={allEvents} section={'events'} />
    </div>
  )
}
