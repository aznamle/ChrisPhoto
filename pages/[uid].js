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
  
    const page = await client.getByUID("portfolio", params.uid);
  
    return {
      props: {
        slices: page.data,
      },
    };
  }

export async function getStaticPaths() {
    const client = createClient();
  
    const pages = await client.getAllByType("portfolio");
  
    return {
      paths: pages.map((portfolio) => prismicH.asLink(portfolio, linkResolver)),
      fallback: false,
    };
  }