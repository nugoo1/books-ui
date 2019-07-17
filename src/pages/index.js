import React from "react"
import BookGrid from '../components/bookGrid'
import Heading from '../components/heading'
import Landing from '../components/landing'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Heading title="Welcome to our Online Book Store" subtitle="There is more treasure in books than in all the pirate’s loot on Treasure Island."/>    
    <BookGrid />
  </Layout>
)

export default IndexPage
