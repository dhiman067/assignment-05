import { use, useState } from "react"
import type { Itech } from "../../Type"
import TechCard from "./TechCard"
import StackCards from "./StackCards"




export interface TechCardsProps {
    TechCardPromise: Promise<Itech[]>
}

export default function TechCards({ TechCardPromise }: TechCardsProps) {
    let techCards = use(TechCardPromise)
    let [selectedStack, setSelectedStack] = useState<Itech[]>([])
    let handleSelectedStack = (stacks: Itech) => {
        if (selectedStack.includes(stacks)) {
            return
            

        }
        else {
            let newSelectedStacks = [...selectedStack, stacks]
            setSelectedStack(newSelectedStacks)
        }
    }

    let handleRemoveStack = (id) => {
        setSelectedStack(selectedStack.filter(stack => stack.id !== id))
    }

    return (
        <div className="xl:w-[1500px] lg:w-full lg:flex lg:flex-col lg:ite mx-auto">
            <div className="flex flex-col items-center xl:items-start xl:ml-5">
                <h1 className="text-3xl font-bold">Explore The <span className="text-pink-500">Technologies</span></h1>
                <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>

            </div>
            {/* Cards*/}
            <div className="lg:flex lg:items-center ">
                <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-start lg:gap-4">
                    <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2  gap-4 py-4 flex flex-col items-center">
                        {
                            techCards.map(card => <TechCard selectedStack={selectedStack} handleSelectedStack={handleSelectedStack} key={card.id} card={card}></TechCard>)
                        }
                    </div>
                    {/* stack */}
                    <div className="lg:mt-5 ">
                        
                        <StackCards selectedStack={selectedStack} handleRemoveStack={handleRemoveStack}></StackCards>
                    </div>
                </div>
            </div>

        </div>
    )
}