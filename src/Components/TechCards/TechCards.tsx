import { use } from "react"
import type { Itech } from "../../Type"
import TechCard from "./TechCard"

export interface TechCardsProps {
    TechCardPromise: Promise<Itech[]>
}

export default function TechCards({ TechCardPromise }: TechCardsProps) {
    let techCards = use(TechCardPromise)
    return (
       <div className="xl:w-[1500px] mx-auto">
        <div className="flex flex-col items-center xl:items-start">
            <h1 className="text-3xl font-bold">Explore The <span className="text-pink-500">Technologies</span></h1>
        <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>

        </div>
        {/* Cards*/}
        <div className="xl:grid xl:grid-cols-3 gap-4 py-4 flex flex-col items-center">
            {
                techCards.map(card => <TechCard key={card.id} card={card}></TechCard>)
            }
        </div>
       </div>
    )
}