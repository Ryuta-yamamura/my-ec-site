import Link from 'next/link'
import Image from 'next/image'
import css from '../css/navbar.module.scss'
import React, { useState } from "react"
import "../firebase/init"
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { useAuthContext } from "../firebase/auth/authContext"
import { Alert, Button, Snackbar } from '@mui/material'


const App = () => {
  const { user } = useAuthContext()
  const isLoggedIn = !!user
  const router = useRouter()
  const auth = getAuth()
  const handleLogout = async () => {
    await signOut(auth)
    console.log("logedout!")
    // await router.push("/")

  }
  
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  
  return (
    <header className={css.header}>
      <div className={css.headerInner}>
        <Link href="/">
          <div>
          <Image className={css.headerLogo} src="/homelogo.jpg" alt="logo" width={90} height={90}></Image>
          HOME
          </div>
          </Link>
        {/* <button className={css.toggleMenuButton}></button> */}
        <div className={css.toggleMenuButton} onClick={() => menuFunction()}>
          <span className={openMenu ? css.open : undefined}></span>
          <span className={openMenu ? css.open : undefined}></span>
          <p className={openMenu ? css.open : undefined}>Menu</p>
        </div>
        <div className={`${css.headerSiteMenu} ${openMenu ? css.open : undefined}`}>
          <nav className={css.siteMenu}>

            <ul>
              <div className={css.close} onClick={() => menuFunction()}>
                <span></span>
                <span></span>
                <p>Close</p>
              </div>
              <li><Button><Link href="/concept">CONCEPT</Link></Button></li>
              <li><Button><Link href="/menu">MENU</Link></Button></li>
              <li><Button><Link href="/shop">SHOP</Link></Button></li>
              <li><Button><Link href="/access">ACCESS</Link></Button></li>
              {isLoggedIn ?
              <li><Button onClick= {() => handleLogout()}>LOGOUT</Button></li> : 
              <li><Button><Link href="/login">LOGIN</Link></Button></li>
            }
            </ul>
          </nav>
        </div>

      </div>
    </header>

  )
}  

export default App