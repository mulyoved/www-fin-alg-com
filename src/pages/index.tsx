import * as React from 'react'
import Article from '../components/article'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0;    
`;

const TwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IndexPage = ({data}) => {
  console.log(data);

  const { allMarkdownRemark } = data; // data.markdownRemark holds our post data
  const { edges } = allMarkdownRemark;

  return (
    <Container>
      <Article html={edges[0].node.html} />
      <TwoColumn>
        <Article html={edges[1].node.html} mini={true}/>
        <Article html={edges[2].node.html} mini={true}/>
      </TwoColumn>
    </Container>
  );
}

export default IndexPage

export const query = graphql`
    query BlogPostByPath {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date] },
            filter: {fileAbsolutePath: {regex: "/.*src/articles/home/.*.md/"}}
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;