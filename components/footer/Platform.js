import { Stack } from '@mui/material'

const platformFooterStyle = {
  py: 8,
  px: 2,
  width: 345,
  fontWeight: 'bold'
}

export default function Platform() {
  return (
    <Stack
      sx={platformFooterStyle}
      gap={3}
    >
      <a><span>Job Seeker</span></a>
      <a><span>Employer</span></a>
      <a><span>Events</span></a>
    </Stack>
  )
}
