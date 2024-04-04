import styles from '@/styles/components/search/JobSort.module.scss'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

export default function JobSort() {
  return (
    <div className={styles.job_sort}>
      <span className={styles.sort_by}>Sort by: </span>
      <span className={styles.sort_relevance}>Relevance</span>
      <CustomSwitch />
      <span className={styles.sort_date}>Date</span>
    </div>
  )
}
