import React from "react"
import Heading from '../components/heading'
import OrderSummary from '../components/orderSummary'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Checkout = () => (
  <Layout>
    <SEO title="Order" />
    <Heading title="Checkout" subtitle="Please Confirm Order Summary"/>
    <OrderSummary />
  </Layout>
)

export default Checkout
