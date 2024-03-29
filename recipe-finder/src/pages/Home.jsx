import React from 'react'
import { Button } from 'semantic-ui-react'
import Header from '../components/common/Header'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <Header title="Our Recipes" bgClass="bg-image">
      <Button
      content="Search Recipes" 
      color="primary"
      as={Link}
      to="/recipes"
      size="big"/>
      </Header>
   
  )
}

export default Home
