import { useEffect } from 'react'
import { getCookie } from "cookies-next"
import { Stack, Box } from '@mui/material'
import styles from "@/styles/components/apply/ApplyPreview.module.scss"
import Image from 'next/image'

export default function ApplyPreview({ isPreview, previewForm, setPreviewForm, id, slug }) {
  useEffect(() => {
    setPreviewForm(JSON.parse(getCookie('form_data')))
  }, [isPreview])

  const previewFields = [
    {label: 'Name', value: `${previewForm.firstname} ${previewForm.surname}`},
    {label: 'Email', value: previewForm.email},
    {label: 'Contact number', value: previewForm.contact_no},
    {label: 'Expected Annual Package', value: `${previewForm.currency} ${previewForm.expected_salary}`},
    {label: 'Skills', value: previewForm.skills},
    {label: 'Languages', value: previewForm.languages}
  ]

  const handleClick = (action) => {
    action === 'back' && window.location.reload()
    action === 'submit' && (window.location.href = `/apply/${id}/${slug}/success`)
    // *** TODO: ***
    //1. once submit button is clicked, send the data to the server,
    //2. redirect to success page when api req done
    //3. once submitted, delete the form_data cookie
  }

  return (
    <Stack className={styles.preview_container}>
      <div className={styles.selected_cv}>
        <h5>CV</h5>
        <p>CV for all positions</p>
      </div>
      {previewFields.map((field, index) =>
        <div key={`${field.label}-${index}`} className={styles.filled_field}>
          <h5>{field.label}</h5>
          <p>{typeof field.value === 'object' ? field.value.join(', ') : field.value}</p>
        </div>
        )}
      <Box className={styles.btn_box}>
        <button className={styles.back} onClick={() => handleClick('back')}>
          <Image src='/sample_img/svgicon/btnIcon/ic-arrow-bk.svg' width={24} height={24} />
          <h5>Back</h5>
        </button>
        <button className={styles.submit} onClick={() => handleClick('submit')}>
          <h5>Submit</h5>
          <Image src='/sample_img/svgicon/btnIcon/ic-arrow-ok.svg' width={24} height={24} />
        </button>
      </Box>
    </Stack>
  )
}
