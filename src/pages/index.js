import React from "react"
import { Link } from "gatsby"
import { Router, Link } from "@reach/router"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Router>
    <Home path="/" />
    <Dash path="dashboard" />
  </Router>
  </Layout>
)

export default IndexPage
