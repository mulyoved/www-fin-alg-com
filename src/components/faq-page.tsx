import * as React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  padding-top: 1rem;
`

interface IProp {
  data: any
  title: string;
}

const FAQPage = ({ data, title }: IProp) => {
  const { allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { edges } = allMarkdownRemark

  const articles = edges.map((edge: any, idx: number) => (
    <AccordionItem key={idx}>
      <AccordionItemTitle>
        <p>{edge.node.frontmatter.title}</p>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
      </AccordionItemBody>
    </AccordionItem>
  ))

  return (
    <Container>
      <h1>{title}</h1>
      <Accordion>
        {articles}
      </Accordion>
    </Container>
  )
}

export default FAQPage
