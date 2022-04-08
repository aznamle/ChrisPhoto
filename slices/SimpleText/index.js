import React from 'react'
import { PrismicText, PrismicRichText } from '@prismicio/react'

const SimpleText = ({ slice }) => (
  <section>
    <h1>
      <PrismicText field={slice.primary.title} />
    </h1>
    <PrismicRichText field={slice.primary.description} />
  </section>
)

export default SimpleText