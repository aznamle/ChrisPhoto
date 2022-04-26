import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio"
import { components } from "../slices/index.js";

import Layout from "../components/Layout";

export default function Home({ menu, data, slices}) {

  return (
    <Layout menu={menu}>
      <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps({ previewData }) {

  const client = createClient({ previewData })

  const menu = await client.getSingle("menu");
  const data = await client.getSingle('homepage')

  return {
    props: { 
      menu: menu,
      data: data.data,
      slices: data.data.slices,
    }, 
    revalidate: 10,
  }
}