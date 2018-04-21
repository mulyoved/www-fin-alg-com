import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ArticleDiv = styled.div`    
  h1 { 
    font-size: 42px;
    font-weight: 300;
    line-height: 1.2381em;
    padding-top: .619em;
    padding-bottom: 0;
    margin-bottom: 1.45rem;  
  }
  
  p {
    @media (min-width: 800px) {
      margin-right: 25.9%;
    }    
  
    font-size: 20px;
    line-height: 1.3em;
    padding-bottom: 0;  
  }
  
  li {
    font-size: 20px;
    margin-bottom: 0;
    line-height: 1.65em;    
  }  
  
`;

const Article = ({ html }: { html: string }) => (
  <ArticleDiv
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default Article;