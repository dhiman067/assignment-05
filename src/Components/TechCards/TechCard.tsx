import { useEffect, useState } from "react"
import type { Itech } from "../../Type"
import { TiTick } from "react-icons/ti"
import { Bounce, toast } from "react-toastify"

export interface TechCardProps {
  card: Itech
  handleSelectedStack: (stack: Itech) => void
  selectedStack: []
}

export default function TechCard({ card, handleSelectedStack, selectedStack }: TechCardProps) {
  let [addBtn, setAddBtn] = useState("Add to Stack")


  // did this part with ai
  useEffect(() => {
    let isSelected = selectedStack.some(stack => stack.id === card.id)
    setAddBtn(isSelected ? "Added to Stack" : "Add to Stack")
  }, [selectedStack, card.id])

  let handleAddBtn = () => {
    setAddBtn("Added to Stack")
    toast.success(`Added ${card.name} Successfully`, {
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
    <div>
      <div className="card w-80 bg-base-100 border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">


        <div className="flex justify-between items-start mb-4 h-10">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src={card.icon}
              alt={`${card.name} icon`}
              className="w-full h-full object-contain"
            />
          </div>

          {card.badge && (
            <span style={{
              backgroundColor: `#${card.badgeColor}`,
              color: `#${card.badgeTextColor}`,
            }} className={`badge badge-lg  border-none font-medium px-4 py-3 rounded-full text-xs`}>
              {card.badge}
            </span>
          )}
        </div>


        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2">{card.name}</h2>
          <p className="text-sm text-slate-500 leading-relaxed min-h-[4rem] line-clamp-3">
            {card.description}
          </p>
        </div>


        <div className="flex items-center justify-between text-xs pt-4 border-t border-gray-100 mb-5">
          <span className="bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-md">
            {card.category}
          </span>

          <span className="text-slate-500 font-medium">
            {card.difficulty}
          </span>

          <div className="flex items-center gap-1 font-bold text-slate-800">
            <span className="text-amber-400 text-sm">★</span>
            <span>{card.rating}</span>
          </div>
        </div>


        <button onClick={() => { handleAddBtn(); handleSelectedStack(card); }} className={`btn ${addBtn === "Add to Stack" ? "bg-slate-950 text-white font-semibold" : "bg-pink-100 text-pink-500 font-bold"}  rounded-xl border-none normal-case text-sm  w-full`}
          disabled={addBtn === "Added to Stack" ? true : false}


        >
          {addBtn === "Added to Stack" ? (

            <div className="flex">
              <TiTick className="text-lg" />
              {addBtn}
            </div>) : `${addBtn}`}
        </button>

      </div>

    </div>
  )
}