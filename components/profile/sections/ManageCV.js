import { TextField } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '@/styles/components/profile/sections/ManageCV.module.scss'
import Image from 'next/image'

export default function ManageCV({ demoCVList, setToggleManageCV }) {
  const handleSubmit = () => {
    setToggleManageCV(false)
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
      <div className={styles.btns_container}>
        <button onClick={() => setToggleManageCV(false)} className={styles.back_btn}>
          <Image src='/sample_img/svgicon/btnIcon/ic-arrow-bk.svg' width={24} height={24} />
          <h5>Back</h5>
        </button>
        <button
          onClick={handleSubmit}
          className={styles.submit_btn}
        >
          <h5>Add</h5>
          <Image src='/sample_img/svgicon/btnIcon/ic-arrow-ok.svg' width={24} height={24} />
        </button>
      </div>
    </form>
  )
}
