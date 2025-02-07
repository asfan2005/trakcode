import React from 'react'
import { Compliance, Featurs, Header, Integrations, Main, SmartDashboart } from './components/index'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Main />
      <Featurs/>
      <Compliance/>
      <SmartDashboart/>
      <Integrations/>
    </div>
  )
}

export default App
