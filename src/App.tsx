
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner-Section/Banner'
import TechCards from './Components/TechCards/TechCards'
import type { Itech } from './Type'


let TechCardPromise = async():Promise<Itech[]>=>{
  let res = await fetch('/data.json')
  let data = await res.json()
  return data
}

function App() {
  

  return (
    <>
     <Banner></Banner>
     <Suspense fallback={<h1>Loadingg....</h1>}>
                <TechCards TechCardPromise={TechCardPromise()}></TechCards>
     </Suspense>
     

    </>
  )
}

export default App
