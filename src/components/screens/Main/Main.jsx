import React from 'react'
import { Services } from './Services/Services'
import { Portfolio } from './Portfolio/Portfolio'
import { Contact } from './Contact/Contact'
import { Testimonials } from './Testimonials/Testimonials'

export const Main = () => {
  return (
    <main>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Testimonials></Testimonials>
    </main>
  )
}
