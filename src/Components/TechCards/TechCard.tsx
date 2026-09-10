import type { Itech } from "../../Type"

export interface TechCardProps {
    card: Itech
}

export default function TechCard({ card }: TechCardProps) {
    
    return (
        <div>
            <div className="card w-80 bg-base-100 border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      
      {/* Top Header Section: Icon & Optional Badge */}
      <div className="flex justify-between items-start mb-4 h-10">
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src={card.icon} 
            alt={`${card.name} icon`} 
            className="w-full h-full object-contain"
          />
        </div>
        
        {card.badge && (
          <span className="badge badge-lg bg-sky-50 text-sky-500 border-none font-medium px-4 py-3 rounded-full text-xs">
            {card.badge}
          </span>
        )}
      </div>

      {/* Content Section: Name & Description */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-2">{card.name}</h2>
        <p className="text-sm text-slate-500 leading-relaxed min-h-[4rem] line-clamp-3">
          {card.description}
        </p>
      </div>

      {/* Metadata Section: Category, Difficulty, Rating */}
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

      {/* Action Button */}
      <button className="btn bg-slate-950 hover:bg-slate-800 text-white rounded-xl border-none normal-case text-sm font-semibold w-full">
        Add to Stack
      </button>

    </div>

        </div>
    )
}