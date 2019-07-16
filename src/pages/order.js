import React from "react"
import Heading from '../components/heading'
import OrderForm from '../components/orderForm'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Order" />
    <Heading title="Happy Shopping" subtitle="Get your personalised books within 2 weeks of placing your order"/>
    <OrderForm />
  </Layout>
)

export default IndexPage
