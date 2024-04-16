import { Stack } from '@mui/material'

const usefulLinksStyles = {
  py: 8,
  px: 2,
  width: 345,
  textDecaration: 'none'
}

const usefulLinkList = [
  {
    name: 'Contact us',
    link: '/',
  },
  {
    name: 'Governance',
    link: '/',
  },
  {
    name: 'Media Toolkit',
    link: '/',
  },
  {
    name: 'Public Notice',
    link: '/',
  },
  {
    name: 'Supplier Registration',
    link: '/',
  },
  {
    name: 'Partners Connect Portal',
    link: '/',
  },
  {
    name: 'HKSTP Portal',
    link: '/',
  },
  {
    name: 'Useful Links',
    link: '/',
  },
  {
    name: 'Publication',
    link: '/',
  },
]

export default function UsefulLinks() {
  return (
    <Stack
      sx={usefulLinksStyles}
      gap={1}
    >
      {usefulLinkList.map(item =>
        <a
          key={item.name}
          href={item.link}
        >
          <sapn>{item.name}</sapn>
        </a>
      )}
    </Stack>
  )
}
