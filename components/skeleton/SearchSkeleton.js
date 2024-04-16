import { Skeleton, Box, Stack } from "@mui/material"

const SkeletonStyle = {
  maxWidth: 1380,
  m: 'auto'
}

export default function SearchSkeleton() {
  return (
    <Box display='flex' sx={SkeletonStyle} gap={1}>
      <Stack gap={1}>
        <Skeleton variant="retangular" width={460} height={340} animation='wave' />
        <Skeleton variant="retangular" width={460} height={340} animation='wave' />
        <Skeleton variant="retangular" width={460} height={70} animation='wave' />
      </Stack>
      <Stack>
        <Skeleton variant="retangular" width={912} height={750} animation='wave' />
      </Stack>
    </Box>
  )
}
