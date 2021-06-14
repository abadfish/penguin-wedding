import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'


const Home = () => {

  return (
    <Layout>
      <Content>
        <PageMessage>
          
        </PageMessage>
        
      </Content>
    </Layout>
  )
}

export default Home

export const Content = styled.section `
  width: 100%;
`
export const More = styled.span `
  width: 250px;
  font-size: 150%;
  font-weight: 600;
  padding-top: .7rem;
  /* color: #739ac5; */
  /* background-image: linear-gradient(to left, #242e62, red); */
  background-image: linear-gradient(to left, red, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-image 500ms cubic-bezier(0, 0, 0.53, 0.54);
  -webkit-transition: background-image 500ms cubic-bezier(0, 0, 0.53, 0.54);
  &:hover {
    background-image: linear-gradient(to left, #a50000, #a50000);
    /* background-image: linear-gradient(to left, red, #242e62); */
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 140%;
  }


`
export const PageMessage = styled.div `
  width: 100%;
  min-height: 300px;
  background: #f3f3f3;
  color: #242e62;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  p {
    font-size: 140%;
  }
  a {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 1.45rem;
    p {
      font-size: 120%;
    }
  }
`
export const SectionHeading = styled.header `
  font-family: 'Sorts Mill Goudy', serif;
  color: #242e62;
  text-align: left;
  font-size: 200%;
  font-weight: 600;
  padding-bottom: 1.25rem;
  @media (max-width: 768px) {
    font-size: 170%;
  }
`
