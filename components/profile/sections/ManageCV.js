import { TextField } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '@/styles/components/profile/sections/ManageCV.module.scss'

export default function ManageCV({ setToggleModal, demoCVList }) {
  const handleSubmit = () => {
    setToggleModal(false)
    // TODO: Post updated data to API
  }

  return (
    <form className={styles.manage_cv_form}>
      <label>CV Name</label>
      <TextField size='large' sx={{borderRadius: 0}}/>
      <div className={styles.select_cv_container}>
        <button type="button" className={styles.select_cv}><h5>UPLOAD FILE</h5></button>
        <span className={styles.select_caution}>Max 2 MB in DOC, DOCX, and PDF only</span>
      </div>
      <ul>
        <li className={styles.cv_list_head}>
          <span>File Name</span>
          <span>CV Name</span>
        </li>
        {demoCVList?.map((cv, index) =>
          <li key={`${index}-${cv.fileName}`}>
            <span className={styles.filename}>{cv.fileName}</span>
            <span className={styles.cvname}>{cv.cvName}</span>
            <div>
              <DownloadIcon color='primary' />
              <DeleteIcon color='primary' />
            </div>
          </li>
        )}
      </ul>
      <button onClick={handleSubmit} className={styles.submit_btn}>Add</button>
    </form>
  )
}
