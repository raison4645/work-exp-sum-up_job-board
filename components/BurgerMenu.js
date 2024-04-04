import { Button, List } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/components/Header.module.scss'

export default function BurgerMenu() {
  return (
    <div className={styles.burger_menu}>
      <MenuIcon />
    </div>
  )
}
