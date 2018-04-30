import * as React from 'react'
import styled from 'styled-components'

const ArticleDiv = styled.div`    
  min-width: 340px;
  width: ${props => props.mini ? "50%" : "100%"};
  text-align: ${props => props.mini ? "center" : "left"};
  padding-right: 2rem;
  border-bottom: 1px solid #ccc;
  
  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;    
  }  
`;

const Article = ({ html, mini }: { html: string, mini?: boolean }) => (
  <ArticleDiv mini={mini}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default Article;