

const Footer = () => {
    return (
        <div  className="w-full bg-white text-slate-600 border-t border-slate-100 mt-4">
            
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand / Left Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
             <img src="./src/assets/logo-text.png" alt="" />
            </div>

            {/* Subtext */}
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 text-sm font-semibold text-slate-700 pt-2">
              <a href="#github" className="hover:text-pink-500 transition-colors">
                GitHub
              </a>
              <a href="#twitter" className="hover:text-pink-500 transition-colors">
                Twitter
              </a>
              <a href="#linkedin" className="hover:text-pink-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Links Column 1: PRODUCT */}
          <div>
            <h6 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              PRODUCT
            </h6>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#home" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column 2: COMPANY */}
          <div>
            <h6 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              COMPANY
            </h6>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#about" className="text-slate-500 hover:text-slate-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column 3: LEGAL */}
          <div>
            <h6 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              LEGAL
            </h6>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#privacy" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-100 my-8" />

        {/* Bottom Bar / Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    
        </div>
    );
};

export default Footer;