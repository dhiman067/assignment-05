import { use } from "react"
import type { Itech } from "../../Type"
import TechCard from "./TechCard"

export interface TechCardsProps {
    TechCardPromise: Promise<Itech[]>
}

export default function TechCards({ TechCardPromise }: TechCardsProps) {
    let techCards = use(TechCardPromise)
    return (
       <div className="w-[1500px] border-2 mx-auto">
        <h1>Explore the <span>Technologies</span></h1>
        <p>Pick one technology per category to build your ideal stack.</p>

        {/* Cards*/}
        <div className="xl:grid xl:grid-cols-3 gap-4 py-4">
            {
                techCards.map(card => <TechCard key={card.id} card={card}></TechCard>)
            }
        </div>
       </div>
    )
}