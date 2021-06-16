import React, { useState } from 'react'
import styled from 'styled-components'
import { HamburgerThreeDYReverse } from 'react-animated-burgers'
import Link from 'next/link'

const Nav = (props) => {
  const [isActive, setActive] = useState(false)
  const toggle = () => {
    setActive(prevState => setActive(!prevState))
  }
  const mobile = () => {
    if (window.innerWidth <= 768) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <MobileNav>
        <HamburgerThreeDYReverse
          isActive={ isActive }
          toggleButton={ toggle }
          barColor="white"
        />
      </MobileNav>
      { mobile && isActive ?
        <Menu>
          <Link href="/">Our Story</Link>
          <Link href="/details">When & Where</Link>
          <Link href="/rsvp">RSVP</Link>
          <Link href="/registry">Registry</Link>
        </Menu>
        :
        null
      }
      <NavBar textColor={props.textColor}>
        <LinkCell><Link href="/">Our Story</Link></LinkCell>
        <LinkCell><Link href="/details">When & Where</Link></LinkCell>
        <LinkCell><Link href="/rsvp">RSVP</Link></LinkCell>
        <LinkCell><Link href="/registry">Registry</Link></LinkCell>

      </NavBar>
    </>
  )
}

export default Nav

const NavBar = styled.nav `
  height: 100px;
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(4, 25%);
  padding: 0 2rem;
  background: transparent;
  // color: #fff;
  color: ${props => props.textColor};
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`
const MobileNav = styled.nav `
  @media (min-width: 769px) {
    display: none;
  }
`

const LinkCell = styled.div `
  line-height: 90px;
  letter-spacing: 3px;
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  // color: rgba(36,46,98,1);
  
`

// const LogoLink = styled.img `
//   width: 150px;
//   height: auto;
//   margin-left: auto;
//   margin-right: auto;
// `
const Menu = styled.div `
  width: 50vw;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  background: #f7f7f7;
  a {
    padding: 1rem 0;
    font-family: 'Jost', sans-serif;
    color: #242e62;
    font-weight: bold;
    font-size: 110%;
  }
`
