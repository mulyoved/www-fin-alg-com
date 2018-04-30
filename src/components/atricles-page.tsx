import * as React from 'react'
import Article from '../components/article'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
`

interface IProp {
  data: any
}

const ArticlesPage = ({ data }: IProp) => {
  const { allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { edges } = allMarkdownRemark

  const articles = edges.map((edge: any, idx: number) => (
    <Article key={idx} html={edge.node.html} />
  ))

  return <Container>{articles}</Container>
}

export default ArticlesPage
