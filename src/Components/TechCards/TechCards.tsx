import { use, useState } from "react"
import type { Itech } from "../../Type"
import TechCard from "./TechCard"
import StackCards from "./StackCards"

export interface TechCardsProps {
    TechCardPromise: Promise<Itech[]>
}

export default function TechCards({ TechCardPromise }: TechCardsProps) {
    let techCards = use(TechCardPromise)
    
    return (
       <div className="xl:w-[1280px] lg:w-full lg:flex lg:flex-col lg:ite mx-auto">
        <div className="flex flex-col items-center xl:items-start xl:ml-5">
            <h1 className="text-3xl font-bold">Explore The <span className="text-pink-500">Technologies</span></h1>
        <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>

        </div>
        {/* Cards*/}
        <div className="lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-start lg:gap-4">
         <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2  gap-4 py-4 flex flex-col items-center">
            {
                techCards.map(card => <TechCard  key={card.id} card={card}></TechCard>)
            }
        </div>
        {/* stack */}
        <div className="lg:mt-5">
            <StackCards></StackCards>
        </div>
       </div>
        </div>
       
       </div>
    )
}