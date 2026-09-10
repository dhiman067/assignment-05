
const Banner = () => {
  return (
    <div>
      <hr className="text-amber-50" />
      <div className=" xl:px-[10rem]  flex flex-col items-center py-[3rem] xl:flex xl:flex-row xl:justify-around">
        <div className="flex flex-col items-center gap-[2rem] ">
          <h1 className="text-4xl font-bold text-center xl:text-start xl:mr-auto">Build Your Ideal <br /><span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
          <p className="text-center text-[#4B5563] font-medium xl:text-start">Explore frontend, backend, database, and tooling <br />options,
            compare them side by side, and put together <br />the stack that fits your
            next project.</p>
             <div className="mt-[3rem] flex gap-1.5 xl:mr-auto">
              <a className="btn bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-xl">Explore Technologies</a>
             <a className="btn rounded-xl bg-white mr-1 px-[3rem]">Learn More</a>
            </div>
        </div>
           
        <div>
          <img src="./src/assets/banner-stack.png"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;