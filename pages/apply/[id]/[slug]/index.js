import { useState } from "react"
import { getData } from "@/common/api"
import Image from 'next/image'
import { Stack } from '@mui/material'
import ApplyForm from "@/components/apply/ApplyForm"
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies"
import ApplyPreview from "@/components/apply/ApplyPreview"
import styles from "@/styles/pages/Apply.module.scss"
import ManageCV from "@/components/profile/sections/ManageCV"
// import json from "@/dummy/position.json" // fake json format data for demo only

export async function getServerSideProps(context) {
  const { id, slug } = context.query
  const parsedCookie = parseCookie(context.req.headers.cookie).get('form_data')
  const formCookie = parsedCookie ? JSON.parse(parsedCookie) : false
  const position = await getData('position', id)
  return {props: { id: id, slug: slug, position: position, formCookie }}
}

export default function Page({ id, slug, position, formCookie }) {
  const [isPreview, setIsPreview] = useState(false);
  const [previewForm, setPreviewForm] = useState({});
  const [toggleManageCV, setToggleManageCV] = useState(false);

  return (
    <div className={styles.apply_page}>
      <Stack gap={3} className={styles.job_info}>
        <h3>You are now applying for</h3>
        <Image src="/sample_img/job_card.png" height={57} width={139} />
        <h3>{position.data.job_title}</h3>
        <p>{position.data.company.company_name}</p>
      </Stack>
      {isPreview
        ?
        <ApplyPreview
          previewForm={previewForm}
          setPreviewForm={setPreviewForm}
          setIsPreview={setIsPreview}
          isPreview={isPreview}
          id={id}
          slug={slug}
        />
        :
        toggleManageCV
        ?
        <ManageCV setToggleManageCV={setToggleManageCV} />
        :
        <ApplyForm
          position={position}
          formCookie={formCookie}
          setIsPreview={setIsPreview}
          setToggleManageCV={setToggleManageCV}
          previewForm={previewForm}
        />
      }
    </div>
  )
}
