import Link from 'next/link'
import Image from 'next/image'
import css from '../css/navbar.module.css'

export default function App() {
    return (
        <header className="header">
        <div className={css.headerInner}>
          <Link href="/">
            <Image className={css.headerLogo} src="/homelogo.jpg" alt="logo" width={90} height={70}></Image>
          </Link>
          <button className={css.toggleMenuButton}></button>
          <div className="header-site-menu">
            <nav className={css.siteMenu}>
              <ul>
              {/* <li><Link href="/CONCEPT"><a>CONCEPT</a></Link></li> */}
              <li><a href="/CONCEPT">CONCEPT</a></li>
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