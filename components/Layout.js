import styled, { createGlobalStyle } from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  const router = useRouter()
  const rose = "https://res.cloudinary.com/abadfish/image/upload/v1623705742/penguinWedding/white-rose.jpg"
  const halfdome = "https://res.cloudinary.com/abadfish/image/upload/v1623705741/penguinWedding/yosemite.jpg"

  const bgImage = () => {
    switch (router.pathname) {
      case '/':
        return null
      case '/rsvp':
        return rose
      default:
        return null
    }
  }

  const displayContactUs = () => {
    switch (router.pathname) {
      case '/rsvp':
        return "hidden"
      default:
        return "visible"
    }
  }

    return (
      <App>
        <Head>
          <title>K + L 4EVER</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css" rel="stylesheet" type="text/css" media="screen"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300&family=Petit+Formal+Script&display=swap" rel="stylesheet"/>
        </Head>
        <AppContainer>
          <Link href="/rsvp">
            <ContactUs visibility={ displayContactUs() }>
              <div><span>RSVP</span></div>
            </ContactUs>
          </Link>
          <Header />
          <PageBg layoutImage={ bgImage() }>
            <BgOverlay >
              <Main>
              { children }
              </Main>
              <Footer />
            </BgOverlay>
          </PageBg>
        </AppContainer>
      </App>
    )

}

export default Layout

const App = styled.div `
  min-height: 100vh;
`
const AppContainer = styled.div `
  width: 100%;
  min-height: 100vh;
`
const PageBg = styled.div `
  height: 100%;
  width: 100%;
  background-image: url(${props => props.layoutImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`

const BgOverlay = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.8);

`
const Main = styled.main  `
  /* text-align: center; */
  /* padding-bottom: 2rem; */
`
const ContactUs = styled.div `
  visibility: ${props => props.visibility};
  position: fixed;
  z-index: 100;
  bottom: 30px;
  right: 15px;
  div {
    height: 45px;
    width: 140px;
    background: rgba(36,46,98,0.65);
    text-align: center;
    line-height: 45px;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background: rgba(36,46,98,1);
    }
    span {
      color: #f7f7f7;
      font-family: 'Jost', sans-serif;
      // font-family: 'Petit Formal Script', cursive;
      font-weight: 600;
    }
  }
`
