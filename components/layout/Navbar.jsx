import Link from 'next/link'
import Image from 'next/image'
import css from '../css/navbar.module.scss'
import React, { useState } from "react"

export default function App() {

  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    console.log('openMenu is' && openMenu)
    setOpenMenu(!openMenu);
    console.log('openMenu is' && openMenu)
    console.log('clicked!')
  }
  return (
    <header className={css.header}>
      <div className={css.headerInner}>
        <Link href="/">
          <Image className={css.headerLogo} src="/homelogo.jpg" alt="logo" width={90} height={70}></Image>
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
              <li><Link href="/CONCEPT">CONCEPT</Link></li>
              <li><Link href="/MENU">MENU</Link></li>
              <li><Link href="/SHOP">SHOP</Link></li>
              <li><Link href="/ACCESS">ACCESS</Link></li>
            </ul>
          </nav>
        </div>

      </div>
    </header>

  )
}  