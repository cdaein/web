import React from "react"
// import Helmet from "gatsby-plugin-react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/reset.css"
import "../styles/global.scss"

const Layout = props => {
  return (
    <>
      <Header />

      {props.children}

      <Footer />
    </>
  )
}

export default Layout
