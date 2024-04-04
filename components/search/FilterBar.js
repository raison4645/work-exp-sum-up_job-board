import { useEffect, useState } from 'react'
import { Chip } from "@mui/material";
import styles from "@/styles/pages/Search.module.scss";

export default function FilterBar({ filters, router }) {
  const [tagList, setTagList] = useState([])
  const excludeKeyword = Object.keys(filters).filter(item => item !== 'keyword')
  const filtersTag = excludeKeyword.map(item => filters[item]).flat()

  const mutatedParams = (tagToDel) => {
    const queries = Object.entries(router.query)
    const updatedQueries = [];
    for (let i = 0; i < queries.length; i++) {
      let splitted = queries[i][1].split(',')
      if (queries[i][1].includes(tagToDel?.id)) {
        splitted = splitted.filter(idx => idx != tagToDel.id)
      }
      splitted = splitted.join()
      updatedQueries.push([queries[i][0], splitted])
    }
    return Object.fromEntries(updatedQueries);
  }

  const omitNullParams = () => {
    const allParams = Object.keys(router.query)
    const newQuery = router.query
    for (let i = 0; i < allParams.length; i++) {
      if(router.query[allParams[i]] === '') {
        delete newQuery[allParams[i]]
      }
    }
    router.replace({ query: newQuery })
  }

  const handleDelete = async (tagToDel) => {
    setTagList((prev) => prev.filter(item => item !== tagToDel))
    await router.replace({ query: mutatedParams(tagToDel) })
    router.reload();
  };

  useEffect(() => {
    setTagList(filtersTag)
  }, [filters])

  useEffect(() => {
    omitNullParams();
  }, [])

  return (
    <div className={styles.filter_bar} style={{display: 'flex'}}>
      {tagList?.map(tag =>
      tag ?
        <Chip
          key={`key-${tag?.id}`}
          className={styles.bar_tag}
          onDelete={() => handleDelete(tag)}
          label={tag?.name}
        />
        :
        null
      )}
    </div>
  )
}
