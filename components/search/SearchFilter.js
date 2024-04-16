import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from "@/styles/components/search/SearchFilter.module.scss";
import filterList from '@/sampleData/filterList.json'
import { MenuItem, FormControl, Select, Checkbox, ListItemText, Stack, OutlinedInput, Autocomplete, TextField } from "@mui/material";
import convertParams from '@/common/convertParams';
import Image from 'next/image';

const filterSelectStyle = {
  height: 80,
  borderRadius: 0,
  borderRight: "solid 1px #737373",
  backgroundColor: '#1f1f1f',
  ".MuiSelect-select": {
    paddingRight: 20
  },
  ".MuiSelect-outlined" : {
    color: 'white',
    paddingLeft: '2rem'
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: '0 !important'
  }
}

const selectMenuStyle = {
  background: '#363636',
  color: 'white',
  "&:hover" : {
    background: '#474747'
  },
  "& .Mui-selected" : {
    background: '#474747'
  }
}

const selectIconStyle = {
  position: 'absolute',
  right: 20,
  zIndex: 0
}

const AutoCompleteStyle = {
  backgroundColor: '#1f1f1f',
  "& .MuiAutocomplete-input": {
    color: 'white',
  },
  ".MuiOutlinedInput-root": {
    height: 80,
    borderRadius: 0,
    borderRight: 'solid 1px #767676',
    paddingLeft: '2rem'
  },
  "& .MuiAutocomplete-popupIndicator": {
    transform: "none"
  },
  "& .MuiAutocomplete-tag": {
    backgroundColor: '#036EE1',
    color: "#FFF",
    height: '1.5rem'
  },
  ".MuiChip-deleteIcon": {
    color: "#FFF !important",
    marginRight: '0.25rem'
  }
}

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
      <Stack direction='row' flexWrap='wrap' sx={{pb: '1px', background: '#767676'}}>
        {/* AutoComplete Filters */}
        {isAutoComplete.map(item =>
          <FormControl sx={{width: 460}} key={item.key}>
            <label className={styles.select_label}>{item.filter}</label>
            <Autocomplete
              size='large'
              multiple
              options={item.choices}
              value={filters[item.key]}
              getOptionLabel={(option) => option?.name}
              renderOption={
                (props, option, { selected }) =>
                  <li {...props}>
                    <Checkbox checked={selected}
                      icon={
                        <Image
                          src='sample_img/svgicon/filterIcon/ic-checkbox-normal.svg'
                          height={20}
                          width={20}
                        />
                      }
                      checkedIcon={
                        <Image
                          src='sample_img/svgicon/filterIcon/ic-checkbox-toggle.svg'
                          height={20}
                          width={20}
                        />
                      }
                    />
                    {option.name}
                  </li>}
              renderInput={(params) => <TextField {...params} fullWidth />}
              onChange={(e, newValue) => autocompleteOnChange(e, newValue, item.key)}
              sx={AutoCompleteStyle}
              popupIcon={<Image
                src='sample_img/svgicon/filterIcon/ic-filter-arrow-down.svg'
                height={36}
                width={36}
                style={{...selectIconStyle, right: 13}}
              />}
            />
          </FormControl>
        )}
        {/* Select Filters */}
        {isSelect.map(item =>
          <FormControl sx={{width: 460}} key={item.key}>
            <label className={styles.select_label}>{item.filter}</label>
            {/* <InputLabel id="filter-name-label">{item.filter}</InputLabel> */}
            <Select
              multiple
              value={filters[item.key]}
              onChange={(e) => selectOnChange(e, item.key)}
              input={<OutlinedInput label={item.filter} />}
              renderValue={(selected) => selected.map(filter => filter?.name).join(', ')}
              sx={filterSelectStyle}
              IconComponent={() => <Image
                src='sample_img/svgicon/filterIcon/ic-filter-arrow-down.svg'
                height={36}
                width={36}
                style={selectIconStyle}
              />}
            >
              {item.choices.map(choice =>
                <MenuItem key={choice.id} value={choice} sx={selectMenuStyle}>
                  <Checkbox
                    checked={filters[item.key].map(filter => filter?.name).indexOf(choice.name) > -1}
                    icon={
                      <Image
                        src='sample_img/svgicon/filterIcon/ic-checkbox-normal.svg'
                        height={20}
                        width={20}
                      />
                    }
                    checkedIcon={
                      <Image
                        src='sample_img/svgicon/filterIcon/ic-checkbox-toggle.svg'
                        height={20}
                        width={20}
                      />
                    }
                  />
                  <ListItemText primary={choice.name} />
                </MenuItem>
              )}
            </Select>
          </FormControl>
        )}
      </Stack>
      <button type="submit" onClick={onSave} className={styles.filter_btn}>
        <h5>OK</h5>
        <Image src="sample_img/svgicon/btnIcon/ic-arrow-ok.svg" width={20} height={20} />
      </button>
    </div>
  );
}
