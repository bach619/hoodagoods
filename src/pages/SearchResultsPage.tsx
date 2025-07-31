import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import CategoryFilter, { FilterState, DEFAULT_FILTERS } from '../components/ui/CategoryFilter';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [newSearchQuery, setNewSearchQuery] = useState(searchQuery);

  // Get initial search results
  const getSearchResults = (query: string) => {
    if (!query.trim()) return [];
    
    return PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      (product.benefits && product.benefits.some(benefit => 
        benefit.toLowerCase().includes(query.toLowerCase())
      )) ||
      product.pros.some(pro => pro.toLowerCase().includes(query.toLowerCase())) ||
      product.cons.some(con => con.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const searchResults = getSearchResults(searchQuery);

  useEffect(() => {
    // Apply filters to search results
    let result = [...searchResults];
    
    // Price range filter
    result = result.filter(
      (product) => 
        product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1]
    );
    
    // Ratings filter
    if (filters.ratings.length > 0) {
      result = result.filter(
        (product) => filters.ratings.some(rating => product.rating >= rating)
      );
    }
    
    // Brands filter
    if (filters.brands.length > 0) {
      result = result.filter(
        (product) => filters.brands.includes(product.name.split(' ')[0])
      );
    }
    
    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // popularity - use review count as proxy
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    
    setFilteredProducts(result);
  }, [searchResults, filters]);

  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSearchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(newSearchQuery.trim())}`);
    }
  };

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleResetFilters = (resetFilters: FilterState) => {
    setFilters(resetFilters);
  };

  return (
    <div>
      {/* Search Header */}
      <div className="bg-gray-100 py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Search Products'}
          </h1>
          
          {/* New Search Form */}
          <form onSubmit={handleNewSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={newSearchQuery}
                onChange={(e) => setNewSearchQuery(e.target.value)}
                placeholder="Search for products, categories, brands..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-12">
        {searchQuery && (
          <div className="flex gap-8">
            {/* Sidebar Filter */}
            {searchResults.length > 0 && (
              <div className="w-[336px] flex-shrink-0 sticky top-24 self-start">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-primary-600" />
                    Filter
                  </h3>
                  <CategoryFilter 
                    onApplyFilters={handleApplyFilters}
                    onResetFilters={handleResetFilters}
                  />
                </div>
              </div>
            )}
            
            {/* Main Content Area */}
            <div className="flex-grow">
              {/* Results Summary */}
              {searchResults.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Search Results
                  </h2>
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} of {searchResults.length} results for "{searchQuery}"
                  </p>
                </div>
              )}
              
              {/* Search Results */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No results found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any products matching "{searchQuery}". Try adjusting your search terms or browse our categories.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Suggestions:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Check your spelling</li>
                        <li>• Try more general keywords</li>
                        <li>• Browse our product categories</li>
                        <li>• Use different search terms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Start your search</h3>
                  <p className="text-gray-600">Enter keywords to find products, reviews, and recommendations.</p>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* No search query state */}
        {!searchQuery && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">Start your search</h3>
            <p className="text-gray-600">Enter keywords to find products, reviews, and recommendations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;