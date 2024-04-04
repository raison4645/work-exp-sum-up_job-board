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
          <ListItem
            key={`${index}-${item}`}
            sx={() => item.query === currPage && {fontWeight: 'bold', color: 1}}
          >
            <Link
              key={index}
              href={`/profile?section=${item.query}`}
            >
              {item.name}
            </Link>
          </ListItem>
        )}
      </List>
    </div>
  );
}
