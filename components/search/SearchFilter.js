import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from "@/styles/components/search/SearchFilter.module.scss";
import filterList from '@/sampleData/filterList.json'
import { MenuItem, FormControl, Select, Checkbox, ListItemText, InputLabel, Stack, OutlinedInput, Autocomplete, TextField } from "@mui/material";
import convertParams from '@/common/convertParams';

// TODO: restructure the options fetched from API in parent level, pass them as an obj props to this component
export default function SearchFilter() {
  const router = useRouter();
  const [isAutoComplete, isSelect]  = [filterList.slice(0, 2), filterList.slice(2)]
  const [filters, setFilters] = useState({
    industry: [],
    job_function: [],
    job_level: [],
    employment_type: [],
    education_level: [],
    work_experience: []
  })

  const autocompleteOnChange = (e, newValue, name) => {
    const newFilter = {...filters};
    newFilter[name] = newValue;
    setFilters(newFilter);
  };

  const selectOnChange = (e, key) => {
    const value = e.target.value
    const newFilter = {...filters};
    newFilter[key] = value;
    setFilters(newFilter);
  }

  const onSave = () => {
    router.push(`/search?${convertParams.parseToParams(filters)}`)
    // TODO: push to router and re-fetch the job data
  };

  useEffect(() => {
    setFilters({...filters, ...convertParams.parseFromParams(router.query)})
  },[router])

  return (
    <div className={styles.filter_container}>
      <Stack direction='row' useFlexGap flexWrap='wrap' gap={2}>
        {/* AutoComplete Filters */}
        {isAutoComplete.map(item =>
          <FormControl sx={{width: 300}} key={item.key}>
            <Autocomplete
              size='large'
              multiple
              options={item.choices}
              value={filters[item.key]}
              getOptionLabel={(option) => option?.name}
              renderOption={(props, option, { selected }) => <li {...props}><Checkbox checked={selected} />{option.name}</li>}
              renderInput={(params) => <TextField {...params} fullWidth placeholder={item.filter}/>}
              onChange={(e, newValue) => autocompleteOnChange(e, newValue, item.key)}
            />
          </FormControl>
        )}
        {/* Select Filters */}
        {isSelect.map(item =>
          <FormControl sx={{width: 300}} key={item.key}>
            <InputLabel id="filter-name-label">{item.filter}</InputLabel>
            <Select
              labelId="filter-name-label"
              multiple
              value={filters[item.key]}
              onChange={(e) => selectOnChange(e, item.key)}
              input={<OutlinedInput label={item.filter}/>}
              renderValue={(selected) => selected.map(filter => filter?.name).join(', ')}
              sx={{height: 55}}
            >
              {item.choices.map(choice =>
                <MenuItem key={choice.id} value={choice}>
                  <Checkbox checked={filters[item.key].map(filter => filter?.name).indexOf(choice.name) > -1} />
                  <ListItemText primary={choice.name} />
                </MenuItem>
              )}
            </Select>
          </FormControl>
        )}
      </Stack>
      <button type="submit" onClick={onSave} className={styles.filter_btn}>OK</button>
    </div>
  );
}
