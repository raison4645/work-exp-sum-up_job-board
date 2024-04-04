import JobDetails from '@/components/details/JobDetails'
import { getData } from '@/common/api'

export async function getServerSideProps(context) {
  const { id } = context.query
  const response = await getData('position', id)
  return {props: { response }}
}

export default function Page({ response }) {
  const details = response.data
  return (
    <div>
      <JobDetails details={details}/>
    </div>
  )
}
