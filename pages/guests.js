import styled from 'styled-components'
import Layout from '../components/Layout'
const { server } = require('../config')

export async function getGuestData() {
  const res = await fetch(`${ server }/guests`)
  const guests = await res.json()
  return { guests }
}

export async function getStaticProps() {
  const guestData = await getGuestData()
  return {
    props: {
      guestData
    },
    revalidate: 2,
  }
}

const Guests = ({ guestData }) => {

  const guestList = guestData?.guests.map(g => (
    <GuestRow key={ g.id }>
      <div>{ g.full_name }</div>
      <div>{ g.email }</div>
      <div>{ g.attending === true ? 'Yes' : 'No' }</div>
      <div>{ g.notes }</div>
    </GuestRow>
  ))
  return (
    <GuestPage>
      { guestList }
    </GuestPage>
  )
}

export default Guests

const GuestRow = styled.article `
  width: 100%;
  display: inline-grid;
  grid-template-columns: 2fr 2fr 1fr 3fr;
  padding: 0.5rem 0;
`

const GuestPage = styled.main `
  padding: 2rem 3rem;
`