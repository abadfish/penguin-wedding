import React from 'react'
import styled from 'styled-components'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Layout from '../components/Layout'
import { PageStyle, Headings } from './details'

const Registry = () => {
  return (
    <Layout>
      <PageStyle>
        <Headings>
          <h3>More important to us than any tangible item is the opportunity to share this day with you. In lieu of gifts please consider making a donation to one of the following charities:</h3>
        </Headings>
        <CharityList>

          <h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.gentlegiantsdrafthorserescue.org/">Gentle Giants Draft Horse Rescue <FaExternalLinkAlt style={{marginLeft: '10px'}}/></a>
            
          </h4>
          <h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.thetrevorproject.org/">The Trevor Project <FaExternalLinkAlt style={{marginLeft: '10px'}}/></a>
            
          </h4>
          <h4>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aprimallyplayfulfoundation.org/">A Primally Playful Foundation <FaExternalLinkAlt style={{marginLeft: '10px'}}/></a>
            
          </h4>
        </CharityList>

      </PageStyle>
    </Layout>
  )
}

export default Registry

const CharityList = styled.section `
  text-align: center;
  padding: 2rem;
  h4 {
    font-size: 1.25rem;
    padding: 1rem 0;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    h4 {
      font-size: 1.13rem;
      padding: 0.5rem 0;
    }
  }
`

const ListItem = styled.div `
  
`