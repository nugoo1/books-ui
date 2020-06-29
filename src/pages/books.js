import React from "react"
import CategoryGrid from '../components/categoryGrid'
import Player from '../components/audioPlayer'
import Heading from '../components/heading'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Books" />
    <Heading title="Books for every occasion" subtitle="The more that you read, the more things you will know. The more you learn, the more places you’ll go."/>    
    <CategoryGrid />
    <Heading title="Don't you just love reading?" subtitle="Every book purchase will receive a free gift!"/>
    <Player />
  </Layout>
)

export default IndexPage
