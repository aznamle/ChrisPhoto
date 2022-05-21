import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio"
import { components } from "../slices/index.js";

import Layout from "../components/Layout";

const about = ({ menu, data, slices}) => {
  return (
    <Layout menu={menu}>
      <SliceZone slices={slices} components={components} />
    </Layout>  )
}

export default about

export async function getStaticProps({ previewData }) {

    const client = createClient({ previewData })
  
    const menu = await client.getSingle("menu");
    const data = await client.getSingle('about')
  
    return {
      props: { 
        menu: menu,
        data: data.data,
        slices: data.data.slices,
      }, 
      revalidate: 10,
    }
  }