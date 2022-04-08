import { createClient } from "../prismicio"

export default function Home({ page }) {

  console.log(page)

  return (
    <div>
    </div>
  )
}

export async function getServerSideProps({ previewData }) {

  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: { page }, 
  }
}