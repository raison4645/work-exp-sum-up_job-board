import { useState } from "react"
import { getData } from "@/common/api"
import ApplyForm from "@/components/apply/ApplyForm"
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies"
import ApplyPreview from "@/components/apply/ApplyPreview"
import styles from "@/styles/pages/Apply.module.scss"
import json from "@/dummy/position.json"

// ***ORIGINAL CODE***

export async function getServerSideProps(context) {
  const { id, slug } = context.query
  const parsedCookie = parseCookie(context.req.headers.cookie).get('form_data')
  const formCookie = parsedCookie ? JSON.parse(parsedCookie) : false
  const position = await getData('position', id)
  return {props: { id: id, slug: slug, position: position, formCookie }}
}

export default function Page({ id, slug, position, formCookie }) {
  const [isPreview, setIsPreview] = useState(false);
  const [previewForm, setPreviewForm] = useState({})

  return (
    <div className={styles.apply_page}>
      <h5>You are now applying for</h5>
      <h3>{position.data.job_title}</h3>
      <p>{position.data.company_info.company_name}</p>
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
        <ApplyForm
          position={position}
          formCookie={formCookie}
          setIsPreview={setIsPreview}
          previewForm={previewForm}
        />
      }
    </div>
  )
}


// ***FOR DEMO ONLY***

// export async function getServerSideProps(context) {
//   const { id, slug } = context.query
//   const intId = parseInt(id)
//   const position = json.data.find(post => post.id === intId)
//   // const parsedCookie = parseCookie(context.req.headers.cookie).get('form_data')
//   // const formCookie = parsedCookie ? JSON.parse(parsedCookie) : false
//   const formCookie = null
//   return {props: { id: id, slug: slug, formCookie, position }}
// }

// export default function Page({ id, slug, formCookie, position }) {
//   const [isPreview, setIsPreview] = useState(false);
//   const [previewForm, setPreviewForm] = useState({})

//   return (
//     <div className={styles.apply_page}>
//       <h5>You are now applying for</h5>
//       <h3>{position.job_title}</h3>
//       <p>{position.company_info.company_name}</p>
//       {isPreview
//         ?
//         <ApplyPreview
//           previewForm={previewForm}
//           setPreviewForm={setPreviewForm}
//           setIsPreview={setIsPreview}
//           isPreview={isPreview}
//           id={id}
//           slug={slug}
//         />
//         :
//         <ApplyForm
//           position={position}
//           formCookie={formCookie}
//           setIsPreview={setIsPreview}
//           previewForm={previewForm}
//         />
//       }
//     </div>
//   )
// }