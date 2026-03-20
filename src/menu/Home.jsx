import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Specialmonth from '../components/Specialmonth'
import Trains from '../components/Trains'
import Destination from '../components/Destination'
import Legacy from '../components/Legacy'
import Stories from '../components/Stories'
import Form from '../components/Form'

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Specialmonth />
      <Trains />
      <Destination />
      <Legacy />
      <Stories />
      <Form />
    </div>
  )
}

export default Home
