import React, { useState } from 'react';
import { Search, Brain } from 'lucide-react';

const WolframSearch = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    // Using cors-anywhere as a proxy
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const WOLFRAM_API_URL = "https://api.wolframalpha.com/v2/query";
    const APP_ID = "RKK7X6-U96WVWGATY";
    
    try {
      const url = `${CORS_PROXY}${WOLFRAM_API_URL}?input=${encodeURIComponent(query)}&appid=${APP_ID}&output=json&format=plaintext`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Origin': window.location.origin
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.queryresult?.success === true && data.queryresult?.pods) {
        // Extract the result from the response
        const results = data.queryresult.pods.map(pod => ({
          title: pod.title,
          value: pod.subpods[0]?.plaintext || ''
        })).filter(item => item.value);

        setResult(results);
      } else {
        setError('No results found for this calculation. Please try a different query.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('To use the calculator, please first visit https://cors-anywhere.herokuapp.com/corsdemo and request temporary access');
    } finally {
      setLoading(false);
    }
  };

  const simpleCalculations = [
    { label: 'Value of volunteer hours', query: '100 * 15' },
    { label: 'Hours to days conversion', query: 'convert 48 hours to days' },
    { label: 'Weekly volunteer impact', query: '25 volunteers * 4 hours' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Brain className="w-8 h-8 text-emerald-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-800">Volunteer Impact Calculator</h1>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your Impact</h2>
          <p className="text-gray-600 mb-6">
            Start by visiting{' '}
            <a 
              href="https://cors-anywhere.herokuapp.com/corsdemo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 underline hover:text-emerald-700"
            >
              cors-anywhere.herokuapp.com/corsdemo
            </a>
            {' '}to enable calculations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a calculation (e.g., '100 * 15')"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? 'Calculating...' : 'Calculate Impact'}
              <Brain className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Example Calculations */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Example Calculations</h3>
          <div className="space-y-4">
            {simpleCalculations.map((calc, index) => (
              <button 
                key={index}
                onClick={() => setQuery(calc.query)}
                className="block w-full text-left p-4 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                {calc.label} ({calc.query})
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        {error && (
          <div className="mt-8 bg-red-50 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-red-800 mb-2">Error</h3>
            <p className="text-red-600">{error}</p>
          </div>
        )}
        
        {result && (
          <div className="mt-8 bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Results</h3>
            <div className="space-y-4">
              {result.map((item, index) => (
                <div key={index} className="bg-emerald-50 rounded-lg p-6">
                  <h4 className="font-semibold text-emerald-800 mb-2">{item.title}</h4>
                  <p className="text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WolframSearch;