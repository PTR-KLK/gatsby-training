import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Cats are amazing</h1>
      <div>
        <img
          src="https://placekitten.com/600/400"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  )
}
