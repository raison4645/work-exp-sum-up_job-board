import { Skeleton } from "@mui/material"

export default function SearchSkeleton() {
  return (
    <div>
      <Skeleton variant="retangular" width={210} height={118} animation='wave' />
    </div>
  )
}
