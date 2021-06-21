import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'


const Details = () => {
    return (
        <Layout>
          <PageStyle>
            <Headings>
              <h2>September 25th, 2021</h2>
              <h3>288 Rocky Rapids Road, Stamford, CT 06902</h3>
            </Headings>
            <hr />
            <LogisticsCard>
              <DetailDiv><p>4:00 PM</p></DetailDiv>
              <DetailDiv><span>Ceremony</span></DetailDiv>
            </LogisticsCard>
            <LogisticsCard>
              <DetailDiv><p>5:00 PM</p></DetailDiv>
              <DetailDiv><span>Cocktail Hour</span></DetailDiv>
            </LogisticsCard>
            <LogisticsCard>
              <DetailDiv><p>6:00 PM</p></DetailDiv>
              <DetailDiv><span>Reception</span></DetailDiv>
            </LogisticsCard>
          </PageStyle>
        </Layout>
    )
}

export default Details

export const PageStyle = styled.section `
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  color: rgba(36,46,98,1);
  h2 {
    font-family: 'Petit Formal Script', cursive;
    font-size: 230%;
  }
  h3 {
    font-family: 'Jost', sans-serif;
    font-size: 1.563rem;
    line-height: 1.953rem;
    font-weight: 200;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    h3 {
      font-size: 1.25rem
    }
  }

`
export const Headings = styled.div `
  text-align: center;
  p {
    font-family: 'Jost', sans-serif;
    font-size: 1.25rem;
  }
`
const LogisticsCard = styled.article `
  width: 50%;
  height: 80px;
  display: inline-grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }

  
`
const DetailDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-family: 'Petit Formal Script', cursive;
    font-size: 150%;
    align-self: flex-start;
    margin-bottom: 10px;
    padding-left: 1rem;
  }
  p {
    font-family: 'Jost', sans-serif;
    font-size: 150%;
    align-self: flex-end;
    padding-right: 1rem;
    font-weight: bold;
    border-right: 1px solid #000;
  }

`