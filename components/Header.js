import Nav from './Nav'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";

const Header = (props) => {

  const router = useRouter()
  const rose = "https://res.cloudinary.com/abadfish/image/upload/v1623705742/penguinWedding/white-rose.jpg"
  const halfdome = "https://res.cloudinary.com/abadfish/image/upload/v1623705741/penguinWedding/yosemite.jpg"

  const headerContent = () => {
    switch (router.pathname) {
      case '/':
        return {
          image: rose,
          heading1: "Leslie Burton-Lopez",
          heading2: "Kirsten O'Farrell",
          subHeading: "September 25, 2021",
          tagLine: "- & -",
        }
      case '/rsvp':
        return {
          image: halfdome,
          heading1: "RSVP",
          subHeading: "",
          tagLine: "",
          subComponent: null
        }
    }
  }

  const headerText = () => {

  }
  return (
    <HeaderComponent>
      <HeaderWrapper headerImage={headerContent().image}>
        <HeaderOverlay>
          <Nav />
          <HeaderContainer>
            <Intro>
              <h1>{headerContent().heading1}</h1>
              <h3>{headerContent().tagLine}</h3>
              <h1>{headerContent().heading2}</h1>
            </Intro>
            <h3>{headerContent().subHeading}</h3>
            
          </HeaderContainer>

        </HeaderOverlay>
      </HeaderWrapper>
      </HeaderComponent >

  )
}

export default Header

const HeaderComponent = styled.section `
  width: 100%;
  clear: both;
  position: relative;
  // webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  // box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
`

const HeaderWrapper = styled.div`
  background-image: url(${props => props.headerImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  h1 {
    font-size: 550%;
    font-weight: 100;
    // font-family: 'Petit Formal Script', cursive;
    font-family: 'Jost', sans-serif;
    color: rgba(36,46,98,1);
  }
  h2 {
    font-family: 'Petit Formal Script', cursive;
    font-size: 300%;
    font-weight: 200;
    color: rgba(36,46,98,1);
    // text-transform: uppercase;
  }
  h3 {
    color: #d3d3d3;
    font-family: 'Petit Formal Script', cursive;
    font-size: 200%;
    font-weight: 200;
    color: rgba(36,46,98,1);
    
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 300%;
    }
    h2 {
      font-size: 200%;
    }
    h3 {
      font-size: 150%;
    }
  }
`

const HeaderOverlay = styled.div `
  height: 100%;
  width: 100%;
  // background-color: rgba(3,3,3, 0.5);
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  min-height: 560px;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1025px) {
    // display: block;
    min-height: 500px;
    padding: 0 1.0875rem
  }
`
const Intro = styled.div `
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`

// const HeaderRight = styled.div `
//   padding: 1rem 3rem;
//   @media (max-width: 768px) {
//     display: none;
//     /* padding: 1rem 0.3rem; */
//   }
// `
