import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio"
import { components } from "../slices/index.js";

export default function Home({ data, slices}) {

  return (
    <div>
      <SliceZone slices={slices} components={components} />
    </div>
  )
}

export async function getServerSideProps({ previewData }) {

  const client = createClient({ previewData })

  const data = await client.getSingle('homepage')

  return {
    props: { 
      data: data.data,
      slices: data.data.slices,
    }, 
  }
}