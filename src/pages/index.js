import * as React from "react"
import { Link } from "gatsby"
import Hero from "../components/Hero"

import '../styles/global.css'
import Customers from "../components/Customers"

// index page
const IndexPage = () => {
  return (
    <main>
      <Hero/>
      <Customers/>
    </main>
  )
}

export default IndexPage
