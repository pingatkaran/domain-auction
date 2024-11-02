import { Mail, Timer, DollarSign, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Premium Domain Auction
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Secure your digital presence with this exceptional domain opportunity
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:karenmeh3@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Timer className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Limited Time Offer</h3>
            <p className="text-gray-400">
              Don't miss this exclusive opportunity to acquire a premium domain name
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <DollarSign className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Investment Opportunity</h3>
            <p className="text-gray-400">
              Secure a valuable digital asset with long-term growth potential
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Mail className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Direct Contact</h3>
            <p className="text-gray-400">
              Reach out directly to discuss terms and make your offer
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-900/50 to-emerald-900/50 p-12 rounded-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Offer?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us now to discuss this unique opportunity
          </p>
          <a
            href="mailto:karenmeh3@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            karenmeh3@gmail.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Domain Auction. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;