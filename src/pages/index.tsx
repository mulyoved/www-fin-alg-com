import * as React from 'react'
import Link from 'gatsby-link'
import Article from '../components/article'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0;    
`;

const IndexPage = ({data}) => {
  console.log(data);

  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Container>

      <Article html={html} />

      <h1>Hi people v5</h1>

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  );
}

export default IndexPage

export const query = graphql`  
    query BlogPostByPath {
        markdownRemark(fileAbsolutePath: {regex:"/.*src\\/articles\\/about-us.md/"}) {
            html
        }
    }
`;