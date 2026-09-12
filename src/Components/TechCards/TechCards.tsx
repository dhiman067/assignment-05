import { use, useState } from "react"
import type { Itech } from "../../Type"
import TechCard from "./TechCard"
import StackCards from "./StackCards"
import { Bounce, toast } from "react-toastify"




export interface TechCardsProps {
    TechCardPromise: Promise<Itech[]>
}

export default function TechCards({ TechCardPromise }: TechCardsProps) {
    let techCards = use(TechCardPromise)
    let [selectedStack, setSelectedStack] = useState<Itech[]>([])
    let handleSelectedStack = (stacks: Itech) => {
        if (selectedStack.includes(stacks)) {
            alert("already added")
            

        }
        else {
            let newSelectedStacks = [...selectedStack, stacks]
            setSelectedStack(newSelectedStacks)
        }
    }

    let handleRemoveStack = (id:number,name:string) => {
        setSelectedStack(selectedStack.filter(stack => stack.id !== id))
        
       toast.info(`Removed ${name} Successfully`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    }

    let handleRemoveAll = ()=>{
        setSelectedStack([])
         toast.warning('Removed All Stack Successfully', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    }

    return (
        <div className="xl:w-[1280px] lg:w-full lg:flex lg:flex-col lg:ite mx-auto">
            <div className="flex flex-col items-center xl:items-start xl:ml-5 mb-4">
                <h1 className="text-3xl font-bold">Explore The <span className="text-pink-500">Technologies</span></h1>
                <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>

            </div>
            {/* Cards*/}
            <div className="lg:flex lg:items-center ">
                <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-start lg:gap-14">
                    <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2  gap-x-16 gap-y-6 py-4 flex flex-col items-center">
                        {
                            techCards.map(card => <TechCard  handleRemoveStack={ handleRemoveStack} selectedStack={selectedStack} handleSelectedStack={handleSelectedStack} key={card.id} card={card}></TechCard>)
                        }
                    </div>
                    {/* stack */}
                    <div className="lg:mt-5 lg:ml-3">
                        
                        <StackCards handleRemoveAll={handleRemoveAll} selectedStack={selectedStack} handleRemoveStack={handleRemoveStack}></StackCards>
                    </div>
                </div>
            </div>

        </div>
    )
}