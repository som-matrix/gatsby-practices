import * as React from "react"
import {Link} from 'gatsby'
import {container,navLinks,navLinkItem,navLinkText,heading} from '../components/Layout.module.css'
const Layout = ({pageTitle,children}) =>{
  return(
      <main className={container}>
         <title>{pageTitle}</title>
         <nav className={navLinks}>
             <ul className={navLinkItem}>
                 <li><Link className={navLinkText} to="/">Home</Link></li>
                 <li><Link className={navLinkText} to="/about">About</Link></li>
             </ul>
         </nav>
         <h1 className={heading}>{pageTitle}</h1>
         {children}
      </main>
  )
}

export default Layout