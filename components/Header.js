import Nav from './Nav'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter()
  const rose = "https://res.cloudinary.com/abadfish/image/upload/v1623705742/penguinWedding/white-rose.jpg"
  const halfdome = "https://res.cloudinary.com/abadfish/image/upload/v1623705741/penguinWedding/yosemite.jpg"
  const farm1 = "https://res.cloudinary.com/abadfish/image/upload/v1623854144/penguinWedding/Leslie-Kirsten-14.png"
  const lights = "https://res.cloudinary.com/abadfish/image/upload/v1623868991/penguinWedding/party-lights.jpg"
  const heart = "https://res.cloudinary.com/abadfish/image/upload/v1623874900/penguinWedding/heart-hands.jpg"

  const headerContent = () => {
    switch (router.pathname) {
      case '/':
        return {
          image: farm1,
          heading1: "Leslie Burton-Lopez",
          heading2: "Kirsten O'Farrell",
          subHeading: "September 25, 2021",
          tagLine: "- & -",
        }
      case '/rsvp':
        return {
          image: rose,
          heading2: "RSVP",
          subHeading: null,
          tagLine: null,
        }
      case '/details':
        return {
          image: lights,
          heading2: "When & Where",
          subHeading: null,
          tagLine: null,
        }
      case '/registry':
        return {
          image: heart,
          heading2: "Registry",
          subHeading: null,
          tagLine: null,
        }
      default:
        return {
          image: null,
        }
    }
  }

  const headerStyle = () => {
    switch (router.pathname) {
      case '/':
        return {
          textColor: "rgba(255,255,255,1)",
          bgColor: "rgba(36,46,98,0.3)",
          headerHeight: "100vh",
          imagePosition: "73%"
        }
      case '/rsvp':
        return {
          textColor: "rgba(36,46,98,1)",
          bgColor: "rgba(255,255,255,0.6)",
          headerHeight: "30vh",
          imagePosition: "center"
        }
      case '/details': 
        return {
          textColor: "rgba(255,255,255,1)",
          bgColor: "rgba(0,0,0,0.3)",
          headerHeight: "30vh",
          imagePosition: "center"
        }
      case '/registry': 
        return {
          textColor: "rgba(36,46,98,1)",
          bgColor: "rgba(255,255,255,0.5)",
          headerHeight: "30vh",
          imagePosition: "center"
        }
      default:
        return {
          textColor: "#fff",
          bgColor: "rgba(255,255,255,0.5)",
          headerHeight: "100vh",
          imagePosition: "center"
        }
    }
  }
  return (
    <HeaderComponent>
      <HeaderWrapper 
        headerImage={headerContent().image} 
        imagePos={ headerStyle().imagePosition}
      >
        <HeaderOverlay bgColor={ headerStyle().bgColor }>
          <Nav textColor={ headerStyle().textColor }/>
          { router.pathname === '/' ?
            <HeaderGrid
              textColor={ headerStyle().textColor }
              height={ headerStyle().headerHeight }  
            >
              <DateMobile>
                <h3>{ headerContent().subHeading }</h3>
              </DateMobile>
              <Filler />
              <Filler />
              <HeaderContainer >
                <Intro>
                  <h1>{ headerContent().heading1 }</h1>
                  <h2>{ headerContent().tagLine }</h2>
                  <h1>{ headerContent().heading2 }</h1>
                  <DateFull>
                    <h3>{ headerContent().subHeading }</h3>
                  </DateFull>
                </Intro>
                
              </HeaderContainer>
              <Filler />
            </HeaderGrid>
            :
            <HeaderCentered
              textColor={ headerStyle().textColor }
              height={ headerStyle().headerHeight } 
            >
              <HeaderContainer>
                <Intro>
                  <h1>{ headerContent().heading1 }</h1>
                  <h2>{ headerContent().tagLine }</h2>
                  <h1>{ headerContent().heading2 }</h1>
                  <h3>{ headerContent().subHeading }</h3>
                </Intro>
              </HeaderContainer>
            </HeaderCentered>
          }
        </HeaderOverlay>
      </HeaderWrapper>
    </HeaderComponent >
  )
}

export default Header

const Filler = styled.div `
  @media (max-width: 767px) {
    display: none;
  }
`
const DateFull = styled.div `
  display: initial;
  @media (max-width: 767px) {
    display: none;
  }

`
const DateMobile = styled.div `
  display: initial;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
  h3 {
    font-family: 'Petit Formal Script', cursive;
    font-size: 150%;
    font-weight: 200;
    color: ${props => props.textColor};
    padding-top: 1rem;
  }

`

const HeaderComponent = styled.section `
  width: 100%;
  clear: both;
  position: relative;
`
const HeaderWrapper = styled.div`
  background-image: url(${props => props.headerImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  @media (max-width: 767px) {
    background-size: auto 950px;
    background-position: ${props => props.imagePos};
  }
`
const HeaderOverlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: ${props => props.bgColor};
`
const HeaderGrid = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  height: ${props => props.height};
  color: ${props => props.textColor};
  width: 100%;
  display: inline-grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 45% 65%;
  @media (max-width: 1025px) {
    padding: 0 1.0875rem
  }
  @media (max-width: 767px) {
    display: inline-grid;
    grid-template-columns: 100%;
    grid-template-rows: 45% 65%;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: space-around;
    padding-bottom: 5%;
  }

`
const HeaderCentered = styled.div `
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  height: ${props => props.height};
  color: ${props => props.textColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
const HeaderContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 450%;
    font-weight: 100;
    font-family: 'Jost', sans-serif;
    color: ${props => props.textColor};
  }
  h2 {
    font-family: 'Petit Formal Script', cursive;
    font-size: 200%;
    font-weight: 200;
    color: ${props => props.textColor};
  }
  h3 {
    font-family: 'Petit Formal Script', cursive;
    font-size: 200%;
    font-weight: 200;
    color: ${props => props.textColor};
    padding-top: 2rem;
  }
  @media (max-width: 767px) {
    margin-top: 3rem;
    h1 {
      font-size: 300%;
      font-weight: 200;
      margin: 0;
    }
    h2 {
      font-size: 200%;
    }
    h3 {
      font-size: 150%;
    }
  }

`
const Intro = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const HeaderSubComponent = styled.div `
  
`
// const HeaderRight = styled.div `
//   padding: 1rem 3rem;
//   @media (max-width: 768px) {
//     display: none;
//     /* padding: 1rem 0.3rem; */
//   }
// `
