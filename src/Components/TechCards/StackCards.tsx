
const StackCards = () => {
    return (
        <div className="max-w-xs xl:w-[130%] w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
      {/* Header */}
      <div>
        <h3 className="text-lg font-bold text-slate-800">Your Stack</h3>
        <p className="text-sm text-slate-400 font-medium">
          No technologies selected yet.
        </p>
      </div>

      {/* Empty State Box */}
      <div className="border border-dashed border-slate-200 rounded-xl py-6 px-4 flex items-center justify-center">
        <span className="text-sm font-medium text-slate-400">
          Your stack is empty.
        </span>
      </div>
    </div>
    );
};

export default StackCards;