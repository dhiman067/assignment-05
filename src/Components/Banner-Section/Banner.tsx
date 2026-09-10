
const Banner = () => {
  return (
    <div>
      {/* navbar */}
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>Technologies</a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl"><img src="./src/assets/logo-text.png" alt="" /></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li className="text-pink-500"><a>Home</a></li>
              <li><a>Technologies</a></li>
              <li><a>Projects</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn rounded-4xl bg-white mr-1         ">Sign In</a>
            <a className="btn bg-pink-500 text-white rounded-4xl">Sign Up</a>
          </div>
        </div>
      </div>
      <hr className="text-amber-50" />


      {/* banner */}
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