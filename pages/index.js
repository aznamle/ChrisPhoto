import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio"
import { components } from "../slices/index.js";

export default function Home({ homePage, slices}) {

  console.log(slices)

  return (
    <div>
      <SliceZone slices={slices} components={components} />
    </div>
  )
}

export async function getServerSideProps({ previewData }) {

  const client = createClient({ previewData })

  const homePage = await client.getSingle('homepage')

  return {
    props: { 
      homePage: homePage.data,
      slices: homePage.data.slices,
    }, 
  }
}