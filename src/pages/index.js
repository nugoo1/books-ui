import React from "react"
import BookGrid from '../components/bookGrid'
import Heading from '../components/heading'
import Carousel from '../components/carousel'
import Layout from "../components/layout"
import SEO from "../components/seo"

// Images
import image1 from "../assets/bg1.png"
import image2 from "../assets/bg2.png"
import image3 from "../assets/bg3.png"


const slides = [
  {
    image: image1,
    text: "Book Store"
  },
  {
    image: image2,
    text: "Let's read and learn, its fun!"
  },
  {
    image: image3,
    text: "Let's read and learn, its fun!"
  }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel images={slides} />
    <Heading title="Welcome to our Online Book Store" subtitle="There is more treasure in books than in all the pirate’s loot on Treasure Island."/>    
    <BookGrid />
  </Layout>
)

export default IndexPage
