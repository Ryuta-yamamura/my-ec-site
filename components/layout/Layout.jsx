// components/layout.js
import Seo from "./Seo"
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Seo
        pageTitle={'official website'}
        pageDescription={'ページの概要文を記載します。'}
        pageImg={'https://demo.com'}
        pageImgWidth={1280}
        pageImgHeight={960}
        fontPath = {'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}