import React from 'react'
// import AutoComplete from '../AutoComplete'
import AutoComplete from '@mui/material/Autocomplete'
import ProcessButton from '../search/ProcessButton'
import styles from "@/styles/pages/Home.module.scss";
import { TextField } from '@mui/material/';

export default function HomeSearch({keyword, onInputChange}) {

  const searchProps = {
    // TODO: the option list need data from API
    options: ['Software Engineer', 'Project Manager', 'UI Designer'],

  }

  return (
    <div className={styles.home_search}>
      {/* <AutoComplete
        keyword={keyword}
        onInputChange={onInputChange}
        data={[]}
        placeholder={'Search by Job Title or Company Name'}
      /> */}
      <AutoComplete
        {...searchProps}
        sx={{width: 0.5}}
        popupIcon={false}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Search by Job Title or Company Name'
            variant='standard'
          />
        )}
      />
      <ProcessButton keyword={keyword} ishome={true}/>
    </div>
  )
}
