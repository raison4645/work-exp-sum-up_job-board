import { useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import STPAvatar from '../profile/STPAvatar'
import { IconButton, Menu, MenuItem } from '@mui/material'
import styles from '@/styles/components/profile/Login.module.scss'

export default function login() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleLogin = () => {
    signIn('google')
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toProfile = () => {
    window.location.href = '/profile?section='
  }

  const { data: session, status } = useSession()
  return (
    <div className={styles.login_container}>
      {status === 'authenticated'
        ?
        <div className={styles.user_general}>
          <div className={styles.avatar_container}>
            <IconButton
              onClick={handleClick}
              aria-controls={open ? 'account_menu' : undefined}
              aria-haspopup={true}
              aria-expanded={open ? 'true' : undefined}
            >
              <STPAvatar imageURL={session.user.image} />
            </IconButton>
          </div>
          <Menu
            anchorEl={anchorEl}
            id='account_menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem onClick={toProfile}>My Profile</MenuItem>
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
          <div className={styles.username_logout}>
            <span className={styles.username}>Hi. {session.user.name}</span>
          </div>
        </div>
        :
        <button onClick={handleLogin}>Login</button>}
    </div>
  )
}

/*  Useback this when login in head is completed
    <div className={styles.pretend_login}>
      <STPAvatar />
      <span onClick={() => setListToggle(!listToggle)} style={{cursor: 'pointer'}}>Hi Raison</span>
      <div className={styles.pretend_list} style={{display: listToggle ? 'block' : 'none'}}>
        <List sx={{width: 130}}>
          <ListItem>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    </div>
*/