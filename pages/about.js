import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio"
import { components } from "../slices/index.js";
import Image from "next/image";
import Section from "../components/Section";

import Layout from "../components/Layout";

const about = ({ menu, data, slices }) => {
    return (
        <Layout menu={menu}>
            <div className="md:flex mx-auto max-w-7xl py-12">
                <Section>
                    <div className="px-12 md:px-0 md:w-1/3 ">
                        <Image src={data.image.url} width={data.image.dimensions.width} height={data.image.dimensions.height} />
                    </div>
                </Section>
                
                <div className="px-12 md:px-0 flex mx-auto md:ml-10 max-w-xl">
                    <SliceZone slices={slices} components={components} />
                </div>
            </div>

        </Layout>  
    )
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