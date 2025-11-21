import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error)
        },
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="name" id="name"/>
      <label>Email</label>
      <input type="email" name="email" id="email"/>
      <label>Sujet</label>
      <input type="text" name="subject" id="subject"></input>
      <label>Message</label>
      <textarea name="message" id="message"/>
      <input type="submit" value="Send" />
    </form>
  )
}

export default ContactUs