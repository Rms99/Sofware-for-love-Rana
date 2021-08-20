import * as React from "react"
import { Link } from "gatsby"
import styles from "../styles/home.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home Page" />
    <section className="bg">
          <Link className="btn" to="/page-2/">Go to Page-2 </Link> 
          <Link className="btn" to="/using-typescript/">Go to using-typescript </Link>
    </section>
  </Layout>
)

export default IndexPage