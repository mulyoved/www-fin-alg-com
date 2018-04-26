import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { ContactIcon, ResurcesIcon, ServiceIcon, HomeIcon, ProductsIcon } from "../assets/icons/icons";

const Container = styled.div`
  background-color: #212c43;
  margin-bottom: 0;
  font-family: Roboto Condensed, Helvetica, Arial, sans-serif;
  font-weight: 300;
  color: #fff;
`

const MiddleContainer = styled.div`
  margin: 0 auto;
  max-width: 864px;
  padding: 16px;
  font-size: 80%;
  
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;      
    }    
  }
`


const Footer = () => (
  <Container>
    <MiddleContainer>
      Futures, foreign currency and options trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones financial security or lifestyle. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results.
      <a href="/risk-disclosure/">View Full Risk Disclosure</a>
    </MiddleContainer>
  </Container>
)



export default Footer
