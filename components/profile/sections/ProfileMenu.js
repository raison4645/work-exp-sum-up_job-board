import { useEffect, useState } from 'react'
import { List, ListItem } from '@mui/material'
import styles from "@/styles/components/profile/ProfileMenu.module.scss";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProfileMenu({ sectionQueries }) {
  const { query } = useRouter();
  const [currPage, setCurrPage] = useState('')

  useEffect(() => {
    setCurrPage(query.section)
  }, [query]);

  return (
    <div className={styles.profile_menu}>
      <List>
        { sectionQueries.map((item, index) =>
          item.query === 'your_jobs'
            ?
            <ListItem key={`${index}-${item}`}>{item.name}</ListItem>
            :
            <ListItem key={`${index}-${item}`}>
              <Link
                key={index}
                href={`/profile?section=${item.query}`}
                style={item.query === currPage ? {color: 'black'} : {color: '#036EE1'}}
              >
                {item.name}
              </Link>
            </ListItem>
        )}
      </List>
    </div>
  );
}
