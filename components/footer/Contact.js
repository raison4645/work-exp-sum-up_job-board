import { Stack } from '@mui/material'

const ContactFooterStyle = {
  py: 8,
  px: 2,
  width: 345,
  fontWeight: 'bold'
}

export default function Contact() {
  return (
    <Stack sx={ContactFooterStyle} gap={3}>
      <span>Contact Us</span>
      <span>5/F, Building 5E, 5 Science Park East Avenue, Hong Kong Science Park</span>
      <span>enquiry.marketing@hkstp.org</span>
      <span>+852 2629 1818</span>
    </Stack>
  )
}
