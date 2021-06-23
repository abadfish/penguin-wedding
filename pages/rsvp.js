import { useState, useRef } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import Radio from 'muicss/lib/react/radio'
import Button from 'muicss/lib/react/button'
const { server } = require('../config')


const Success = ({rsvp}) => {
  return (
    <SuccessMsg>
      <div>
        <p>Thank you for your RSVP</p>
        { rsvp.attending ?
          <p>We're so glad you're able to make it!</p>
          :
          null
        }
      </div>
    </SuccessMsg>
  )
}

const Rsvp = () => {

  const [msgSuccess, setMsgSuccess] = useState(false)
  const [result, setResult] = useState('')
  const [rsvpRecorded, setRsvpRecorded] = useState(false)

  async function sendRsvp(guest){
    const res = await fetch(`${ server }/guests`, {
      body: JSON.stringify(guest),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    })
    const result = await res.json()
    setResult(result)
    processResult(result)
  }

  const processResult = (result) => {
    if (result.message === 'rsvp successfully recorded') {
      setMsgSuccess(true)
    }
  }

  const [ guest, setGuest ] = useState({
    full_name: '',
    email: '',
    notes: '',
    rsvp: true,
    attending: ''
  })

  const messageRef = useRef()

  const handleOnChange = e => {
    const { name, value } = e.target
    setGuest({...guest, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    setRsvpRecorded(true)
    sendRsvp(guest)
    messageRef.current.reset()
  }

  return (
    <Layout>
      { msgSuccess ?
        <Modal onClose={ () => setMsgSuccess(false) }>
          <Success rsvp={ result?.guest }/>
          <Button
            onClick={ () => setMsgSuccess(false) }
            size='small'
            variant='raised'>Close</Button>
        </Modal>
        :
        null
      }
      <ContactPage>
        <ContactForm>
          { rsvpRecorded ? 
            <h3 style={{ color: 'blue' }}>Thank you for your RSVP!</h3>
            :
            <h3>Will you be joining us?</h3>
          }
          <form ref={ messageRef } onSubmit={ handleSubmit }>
            <Checks>
              <Radio 
                name="attending" 
                label="Yup, be there with bells!"
                value={ true }
                onChange={ handleOnChange } />
              <Radio 
                name="attending" 
                label="Nope, but I'll be there in spririt :)" 
                value={ false }
                onChange={ handleOnChange } />
            </Checks>
            <Input
              label='Name'
              name='full_name'
              type="text"
              onChange={ handleOnChange }
            />
            <Input
              label='Email'
              name='email'
              type="text"
              onChange={ handleOnChange }
            />
            <p>If you are RSVP-ing for another guest in addition to yourself, or you have a plus one indicated on your invitation, please specify guest names here.</p>
            <Textarea
              label=''
              name='notes'
              onChange={ handleOnChange }
            />
            <Button type='submit' variant='raised'>Submit</Button>
          </form>
        </ContactForm>
      </ContactPage>
    </Layout>
  )
}

export default Rsvp

const ContactForm = styled.section `
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  // z-index: 1000;
  form {
    margin: 3rem 0;
    div {
      position: static;
      label {
        position: static;
        z-index: -1;
      }
    }
    button {
      position: static;
    }
    Input {
      text-align: center;
    }
    p {
      color: #242e62;
      font-family: 'Jost', sans-serif;
      font-size: 120%;    
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`

const SuccessMsg = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  p {
    color: #242e62;
    font-size: 120%;
  }
`

const ContactPage = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  h3 {
    font-family: 'Jost', sans-serif;
    font-size: 200%;
    font-weight: 200;
    color: #242e62;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Checks = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #242e62;
  font-family: 'Jost', sans-serif;
  font-size: 120%;
`