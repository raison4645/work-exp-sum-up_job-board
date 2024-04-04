import { FormControl, MenuItem, Select } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Header.module.scss'

const LangSwitcher = () => {
  const currLocale = useRouter().locale
  const localeMap = new Map([
    ['en', 'Eng'],
    ['zh-HK', '繁'],
    ['zh-CN', '简'],
  ]);

	return (
    <div className={styles.lang_switcher}>
      <FormControl>
        <Select
          value={localeMap.get(currLocale)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{height: 30, width: 60, borderStyle: "none"}}
          variant='standard'
          disableUnderline={true}
        >
        {Array.from(localeMap).map(([key, locale]) => (
          <MenuItem key={key} value={locale}>
            <Link href="" locale={key} style={{textDecoration: 'none', color: '#000'}}>{locale}</Link>
          </MenuItem>
        ))}
        </Select>
      </FormControl>
    </div>
	)
}

export default LangSwitcher;
