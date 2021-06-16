import React from 'react'
import styled from 'styled-components'
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

          <h4><a target="_blank" rel="noopener noreferrer" href="https://www.gentlegiantsdrafthorserescue.org/">Gentle Giants Draft Horse Rescue</a></h4>
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
  }
`

const ListItem = styled.div `
  
`