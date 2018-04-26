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
  
  h1 { 
    font-size: 42px;
    font-weight: 300;
    line-height: 1.2381em;
    padding-top: .619em;
    padding-bottom: 0;
    margin-bottom: 1.45rem;  
  }
  
  p {
    max-width: 600px;
    font-size: 20px;
    line-height: 1.3em;
    padding-bottom: 0;  
  }
  
  li {
    max-width: 600px;
    font-size: 20px;
    margin-bottom: 0;
    line-height: 1.65em;    
  }  
  
  a {
    font-weight: 400;
    line-height: 1;
    text-decoration: none;    
    color: #389bd5;
    list-style-type: none;  
    /*
    :before {
      content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23389bd5' viewBox='0 0 300 80' width='20' height='20'><g transform='translate(180.88621,-18.938653)'><path d='m -5.9083024,63.916643 -44.9790296,-44.97799 -9.78972,9.81781 -9.78972,9.81782 35.36597,35.17633 c 19.45129,19.34699 35.36596964,35.327757 35.36596964,35.512817 0,0.18506 -15.79600964,16.13308 -35.10225964,35.44005 l -35.10226,35.10357 9.66769,9.66289 9.66768,9.6629 44.8373496,-44.7332 C 18.893918,129.79638 39.070717,109.49279 39.070717,109.28053 c 0,-0.21225 -20.240559,-20.626001 -44.9790194,-45.363887 z m -110.4194376,0 -44.97903,-44.97799 -9.78971,9.81781 -9.78973,9.81782 35.36597,35.17633 c 19.45129,19.34699 35.36597,35.327757 35.36597,35.512817 0,0.18506 -15.79601,16.13308 -35.10226,35.44005 l -35.10226,35.10357 9.66769,9.66289 9.66769,9.6629 44.83735,-44.7332 c 24.660538,-24.60326 44.837348,-44.90685 44.837348,-45.11911 0,-0.21225 -20.24056,-20.626001 -44.979028,-45.363887 z'></path></g></svg>");
    } 
    */ 
       
    &:hover {
      text-decoration: underline;      
    }    
    
  }
`;

const Article = ({ html, mini }: { html: string, mini?: boolean }) => (
  <ArticleDiv mini={mini}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default Article;