import { getData } from '@/common/api'

export async function getServerSideProps(context) {
  const { id } = context.query
  const response = await getData('company', id)
  return {props: { response }}
}

export default function Page ({ response }) {
  const companyInfo = response.data;

  return (
    <div>
      <p>Company</p>
      <h1>{companyInfo.company_name}</h1>
    </div>
  )
}
