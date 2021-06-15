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
          image: halfdome,
          heading1: "Leslie Burton-Lopez",
          heading2: "Kirsten O'Farrell",
          subHeading: "September 25, 2021",
          tagLine: "- & -",
        }
      case '/rsvp':
        return {
          image: rose,
          heading1: "RSVP",
          subHeading: "",
          tagLine: "",
          subComponent: null
        }
    }
  }

  const headerStyle = () => {
    console.log(router.pathname)
    switch (router.pathname) {
      case '/rsvp':
        return {
          textColor: "rgba(36,46,98,1)",
          bgColor: "rgba(255,255,255,0.6)",
          headerHeight: "30vh"
        }
      case '/':
        return {
          textColor: "rgba(255,255,255,1)",
          bgColor: "rgba(36,46,98,0.3)",
          headerHeight: "100vh"
        }
      default:
        return {
          textColor: "#fff",
          bgColor: "rgba(255,255,255,0.5)",
          headerHeight: "100vh"
        }
    }
  }
  return (
    <HeaderComponent>
      <HeaderWrapper headerImage={headerContent().image}>
        <HeaderOverlay bgColor={ headerStyle().bgColor }>
          <Nav textColor={ headerStyle().textColor }/>
          <HeaderContainer 
            textColor={ headerStyle().textColor }
            height={ headerStyle().headerHeight }  
          >
            <Intro>
              <h1 >{ headerContent().heading1 }</h1>
              <h3>{ headerContent().tagLine }</h3>
              <h1>{ headerContent().heading2 }</h1>
            </Intro>
            <h3>{ headerContent().subHeading }</h3>
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
`
const HeaderWrapper = styled.div`
  background-image: url(${props => props.headerImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`
const HeaderOverlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: ${props => props.bgColor};
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  height: ${props => props.height};
  color: ${props => props.textColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1025px) {
    // min-height: 500px;
    padding: 0 1.0875rem
  }
  h1 {
    font-size: 550%;
    font-weight: 100;
    // font-family: 'Petit Formal Script', cursive;
    font-family: 'Jost', sans-serif;
    color: ${props => props.textColor};
  }
  h2 {
    font-family: 'Petit Formal Script', cursive;
    font-size: 300%;
    font-weight: 200;
    color: ${props => props.textColor};
    // text-transform: uppercase;
  }
  h3 {
    color: #d3d3d3;
    font-family: 'Petit Formal Script', cursive;
    font-size: 200%;
    font-weight: 200;
    color: ${props => props.textColor};
    
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
