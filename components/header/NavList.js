import { useState } from 'react'
import Link from 'next/link';
import Login from './Login';
import styles from '@/styles/components/Header.module.scss'

const navList = [
  {
    name: "Employer",
    link: "/",
  },
  {
    name: "Articles",
    link: "/",
  },
  {
    name: "Events",
    link: "/",
  },
];

export default function NavList() {
  const [listToggle, setListToggle] = useState(false)
  return (
  <div className={styles.navlist}>
    <Login />
    {navList.map((item, index) => (
      <Link key={index} href={item.link} className={styles.navlist_item}>
        {item.name}
      </Link>
    ))}
  </div>
  )
}
