import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>
      Ops não tem nada aqui! <span role="img" aria-label='Chorando'>😭</span>
    </p>
  </Layout>
)

export default NotFoundPage
