const BusinessFooter = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              FUTEURCRED™
            </div>
            <div className="text-sm text-purple-400 mb-4">Powered by LUMIQ™</div>
            <p className="text-gray-400 text-sm">
              Your Business Credit Operating System. AI-powered insights, <span className="inline-flex items-center gap-1"><img src="/Dark-Experian.png" alt="Experian" className="h-3 opacity-80" /> FSR tracking</span>, and PG-free tradelines.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <div className="space-y-2">
              <a href="https://futeurcredx.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="https://futeurcredx.com/app" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Mobile App
              </a>
              <a href="https://futeurcredx.com/business" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Business Credit App
              </a>
              <a href="https://futeurcredx.com/enterprise" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                For Banks
              </a>
              <a href="https://futeurcredx.com/fintech" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                For Fintechs
              </a>
              <a href="https://futeurcredx.com/api-docs" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                API Documentation
              </a>
              <a href="https://futeurcredx.com/lumiq-ai" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                LumiqAI
              </a>
              <a href="https://futeurcredx.com/credit-journey" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Credit Journey Demo
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>LUMIQ™ Journey Engine</div>
              <div>Vendor Universe</div>
              <div>PG-Free Builder</div>
              <div className="inline-flex items-center gap-1">
                <img src="/Dark-Experian.png" alt="Experian" className="h-3 opacity-80" />
                <span>FSR Score Tracking</span>
              </div>
              <div>Trade Payment Health</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="https://futeurcredx.com/about" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">About FUTEUR AI</a>
              <a href="https://futeurcredx.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://futeurcredx.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Terms of Service</a>
              <a href="https://futeurcredx.com/contact-us" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 FUTEURCRED by FUTEUR AI. Your Business Credit Operating System. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BusinessFooter;
