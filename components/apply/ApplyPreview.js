import { useEffect } from 'react'
import { getCookie } from "cookies-next"
import styles from "@/styles/components/apply/ApplyPreview.module.scss"

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
    {label: 'Language', value: previewForm.languages}
  ]

  const handleClick = (action) => {
    action === 'back' && window.location.reload()
    action === 'submit' && (window.location.href = `/apply/${id}/${slug}/success`)
    // *** TODO ***
    //1. once submit button is clicked, send the data to the server,
    //2. redirect to success page when api req done
    //3. once submitted, delete the form_data cookie
  }

  return (
    <div className={styles.preview_container}>
        <div>
            <strong>Resumé</strong>
            <p>CV for all positions</p>
          </div>
      {previewFields.map((field, index) =>
          <div key={`${field.label}-${index}`}>
            <strong>{field.label}</strong>
            <p>{field.value}</p>
          </div>
        )}
      <div className={styles.btn_box}>
        <button className={styles.back} onClick={() => handleClick('back')}>Go Back</button>
        <button className={styles.submit} onClick={() => handleClick('submit')}>Submit</button>
      </div>
    </div>
  )
}
