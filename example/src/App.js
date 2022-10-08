import React from 'react'

import { SidebarNav } from 'react-components'
import { SidebarNavItems } from './FakeData'

const App = () => {
  return <>
    <SidebarNav items={SidebarNavItems} />
  </>
}

export default App
