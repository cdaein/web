import React from "react"
import { Link } from "gatsby"
import Seo from '../components/seo'
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
    <Seo title="Page Not Found" />
      <main>
        <div className="container post-page">
          <div className="left">
           <p>Page Not Found - return to <Link to="/">Index page</Link></p>
          </div>
          <div className="right">
            
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
