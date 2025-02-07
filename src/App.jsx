import React from 'react'
import { Compliance, Contact, DownloadAndPricePage, Featurs, Footer, Header, Integrations, Main, Slides, SmartDashboart } from './components/index'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Main />
      <Featurs/>
      <Compliance/>
      <SmartDashboart/>
      <Integrations/>
      <Slides/>
      <DownloadAndPricePage/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
