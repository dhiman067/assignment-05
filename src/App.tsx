
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner-Section/Banner'
import Navbar from './Components/Banner-Section/Navbar'
import TechCards from './Components/TechCards/TechCards'
import type { Itech } from './Type'
import Footer from './Components/Footer/Footer'


let TechCardPromise = async (): Promise<Itech[]> => {
  let res = await fetch('/data.json')
  let data = await res.json()
  return data
}

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className="flex items-center justify-center">
        <span className="loading loading-spinner"></span>
        loading
      </div>}>
        <TechCards TechCardPromise={TechCardPromise()}></TechCards>
      </Suspense>
      <Footer></Footer>

    </>
  )
}

export default App
