import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { LandPage } from './components/LandPage'
import { ContactList } from './components/ContactList'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={LandPage} />
      <Route path='/contacts' exat component={ContactList} />
    </BrowserRouter>
  )
}

export { Routes }
