import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { PageStyle } from './details'


const Home = () => {

  const yosemite3 = "https://res.cloudinary.com/abadfish/image/upload/v1623705741/penguinWedding/yosemite-3.jpg"
  const gala = "https://res.cloudinary.com/abadfish/image/upload/v1623860913/penguinWedding/gala-1.png"
  const ollie = "https://res.cloudinary.com/abadfish/image/upload/v1623860915/penguinWedding/Leslie-Kirsten-1.png"
  const tahoe = "https://res.cloudinary.com/abadfish/image/upload/v1623863015/penguinWedding/tahoe-1.png"

  return (
    <Layout>
      {/* <PageStyle>
        <StorySection>
          <StoryCard>
            <h3>Lake Tahoe 2018</h3>
          </StoryCard>
          <StoryImageCard>
            <Image src={ tahoe } alt="Picture of the author"  layout="responsive" width={500} height={700}/>
          </StoryImageCard>
        </StorySection>
        <StorySection>
            <StoryImageCard>
              <Image src={ yosemite3 } alt="Picture of the author"  layout="responsive" width={500} height={700}/>
            </StoryImageCard>
            
          <StoryCard>
             <h3>Yosemite 2019</h3>
          </StoryCard>
        </StorySection>
        <StorySection>
          <StoryCard>
            <h3>2019 TCC Gala</h3>
          </StoryCard>
          <StoryImageCard>
            <Image src={ gala } alt="Picture of the author"  layout="responsive" width={500} height={700}/>
          </StoryImageCard>
        </StorySection>
        <StorySection>
          <StoryImageCard>
            <Image src={ ollie } alt="Picture of the author"  layout="responsive" width={500} height={700}/>
          </StoryImageCard>
          <StoryCard>
            <h3>Engaged May 27th, 2021</h3>
          </StoryCard>
        </StorySection>
        
      </PageStyle> */}
        
    </Layout>
  )
}

export default Home

const StoryContainer = styled.div `
  width: 100%;
  clear: both;
  position: relative;
`

const StoryImageCard = styled.article `
  margin: 2rem;
  width: 300px;
  height: auto;
  -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2); box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2);
  transition: all 2s;
  &:hover {
    webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    background-color: rgba(36,46,98,1);
    z-index: 1000;
  }
`
const ImageOverlay = styled.div `
  width: 100%;
  height: 100%;
  background-color: rgba(36,46,98,1);
`
const StoryCard = styled.article `
  margin: 2rem;
  width: 300px;
  height: auto;

`
export const StorySection = styled.section `
  width: 100%;
  min-height: 300px;
  color: #242e62;
  display: flex;
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
