import { RxCross2 } from "react-icons/rx";
import type { Itech } from "../../Type";

interface StackCardsProps {
  selectedStack: Itech[];
  handleRemoveStack: (id: number) => void;
}

const StackCards = ({ selectedStack,handleRemoveStack}: StackCardsProps) => {
  return (
    
    <div>
      <div className="max-w-xs w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-slate-800">Your Stack</h3>
        </div>

        {/* Empty State Box */}
        {selectedStack.length === 0 ? <div>
          <div className="mb-3.5"><p className="text-sm text-slate-400 font-medium">
            No technologies selected yet.
          </p></div>
          <div className="border border-dashed border-slate-200 rounded-xl py-6 px-4 flex items-center justify-center">

            <span className="text-sm font-medium text-slate-400">
              Your stack is empty.
            </span>
          </div>
        </div>
          : <div>
            <p className="text-sm text-slate-400 font-medium">
          {selectedStack.length} Technology selected.
        </p>
          </div> }
          <div>
            {
             selectedStack.map(stack=>(
              <div key={stack.id}>
                <div className="py-2 px-2 flex items-center justify-center">
        <span className="text-sm font-medium text-slate-400">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-sm w-full">
      {/* Left side: Icon + Text */}
      <div className="flex items-center gap-3">
        <img 
          src={stack.icon} 
           
          className="w-8 h-8 object-contain" 
        />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-800 leading-tight">
            {stack.name}
          </span>
          <span className="text-xs text-slate-400 capitalize">
            {stack.category}
          </span>
        </div>
      </div>

      {/* Right side: Delete button */}
      <button onClick={()=>handleRemoveStack(stack.id)}
      
        className=" text-slate-400 hover:text-slate-600 transition-colors pl-40"
      >
        <RxCross2 />
      </button>
    </div>
        </span>
      </div>
              </div>
             ))
            }
          </div>

      </div>
    </div>
  );
};

export default StackCards;