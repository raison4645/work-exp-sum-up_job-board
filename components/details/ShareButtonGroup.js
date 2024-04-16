import { IconButton, ButtonGroup } from '@mui/material'

const btnGroupStyle = {
  height: 35,
  mx: 1,
  px: 1,
  borderRadius: 50,
  backgroundColor: '#333',
}

export default function ShareButtonGroup({ copyLink }) {
  return (
    <ButtonGroup sx={btnGroupStyle}>
      <IconButton onClick={copyLink}><img src='/sample_img/svgicon/icon-share-link.svg' /></IconButton>
      <IconButton><img src='/sample_img/svgicon/icon-share-fb.svg' /></IconButton>
      <IconButton><img src='/sample_img/svgicon/icon-share-whatsapp.svg' /></IconButton>
      <IconButton><img src='/sample_img/svgicon/icon-share-linkedin.svg' /></IconButton>
    </ButtonGroup>
  )
}
