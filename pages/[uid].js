import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";

import Layout from '../components/Layout'

const Portfolio = ({ menu, slices }) => {

  return (
    <Layout menu={menu}>
        <SliceZone slices={slices} components={components} />
    </Layout>
  )
}

export default Portfolio

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    
    const menu = await client.getSingle("menu");
    const pages = await client.getByUID("portfolio", params.uid);
  
    return {
      props: {
        menu: menu,
        slices: pages.data.slices,
      },
      revalidate: 10,
    };
  }

export async function getStaticPaths() {
    const client = createClient();
  
    const pages = await client.getAllByType("portfolio");
  
    return {
      paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
      fallback: 'blocking',
    };
  }