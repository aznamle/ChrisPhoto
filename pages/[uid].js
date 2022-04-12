import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";


const Portfolio = ({ slices }) => {

  return (
    <div>
        <SliceZone slices={slices} components={components} />
    </div>
  )
}

export default Portfolio

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
  
    const pages = await client.getByUID("portfolio", params.uid);
  
    return {
      props: {
        slices: pages.data.slices,
      },
    };
  }

export async function getStaticPaths() {
    const client = createClient();
  
    const pages = await client.getAllByType("portfolio");
  
    return {
      paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
      fallback: false,
    };
  }