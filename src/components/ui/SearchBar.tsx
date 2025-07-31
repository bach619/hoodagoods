import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof PRODUCTS>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();
    
    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    // Handle click outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        inputRef.current && 
        !inputRef.current.contains(e.target as Node) && 
        !target.closest('.search-results') &&
        !target.closest('.search-container')
      ) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate search delay for better UX
    const searchTimeout = setTimeout(() => {
      // Filter products based on query
      const filteredResults = PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        (product.benefits && product.benefits.some(benefit => 
          benefit.toLowerCase().includes(query.toLowerCase())
        ))
      );
      
      setResults(filteredResults.slice(0, 8)); // Limit to 8 results
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(searchTimeout);
  }, [query]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === '') return;
    
    // Navigate to search results page (we'll create this)
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    onClose();
  };
  
  const handleResultClick = (slug: string) => {
    navigate(`/review/${slug}`);
    onClose();
  };
  
  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };
  
  return (
    <div className="search-container relative">
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products, categories, brands..."
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Close search"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </form>
      
      {/* Search Results Dropdown */}
      {(query.trim() !== '' && (results.length > 0 || isLoading)) && (
        <div className="search-results absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          <div className="p-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
                <span className="ml-2 text-gray-600">Searching...</span>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-500">
                    {results.length} {results.length === 1 ? 'result' : 'results'} found
                  </h3>
                  {results.length > 0 && (
                    <button
                      onClick={handleSearchSubmit}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View all results
                    </button>
                  )}
                </div>
                
                {results.length > 0 ? (
                  <ul className="space-y-2">
                    {results.map(product => (
                      <li key={product.id}>
                        <button
                          onClick={() => handleResultClick(product.slug)}
                          className="flex items-start w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                        >
                          <div className="h-12 w-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-3 flex-grow min-w-0">
                            <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors truncate">
                              {product.name}
                            </h4>
                            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</span>
                              <span className="mx-2 text-gray-300">•</span>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                                <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-2">No products found</p>
                    <p className="text-sm text-gray-500">Try different keywords or check spelling</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
      
      {/* No results message */}
      {query.trim() !== '' && !isLoading && results.length === 0 && (
        <div className="search-results absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-4 text-center py-8">
            <p className="text-gray-600 mb-2">No products found for "{query}"</p>
            <p className="text-sm text-gray-500">Try different keywords or browse our categories</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;