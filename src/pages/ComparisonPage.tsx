import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ComparisonTable from '../components/ui/ComparisonTable';
import { Product } from '../types';

const ComparisonPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productIds = queryParams.get('ids')?.split(',') || [];
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(productIds);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);
  
  // Get common features across products to compare
  const getCommonFeatures = (products: Product[]): string[] => {
    if (products.length === 0) return [];
    
    // Get all feature keys from all products
    const allFeatures = products.flatMap(product => 
      Object.keys(product.features)
    );
    
    // Get unique feature keys
    const uniqueFeatures = [...new Set(allFeatures)];
    
    return uniqueFeatures;
  };
  
  const [features, setFeatures] = useState<string[]>([]);
  
  useEffect(() => {
    // Filter products by selected category
    if (selectedCategory) {
      const filteredProducts = PRODUCTS.filter(
        product => product.category === selectedCategory
      );
      setAvailableProducts(filteredProducts);
    } else {
      setAvailableProducts([]);
    }
  }, [selectedCategory]);
  
  useEffect(() => {
    // Get products to compare
    const productsToCompare = PRODUCTS.filter(
      product => selectedProducts.includes(product.id)
    );
    setComparisonProducts(productsToCompare);
    
    // Update common features
    setFeatures(getCommonFeatures(productsToCompare));
  }, [selectedProducts]);
  
  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedProducts([]);
  };
  
  // Handle product selection
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const productId = e.target.value;
    
    if (productId && !selectedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };
  
  // Remove product from comparison
  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(id => id !== productId));
  };
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">Compare Products</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Select Products to Compare</h2>
        
        {/* Category Selection */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Product Selection */}
        {selectedCategory && (
          <div className="mb-6">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
              Add Product
            </label>
            <select
              id="product"
              value=""
              onChange={handleProductChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select a product</option>
              {availableProducts.map(product => (
                <option 
                  key={product.id} 
                  value={product.id}
                  disabled={selectedProducts.includes(product.id)}
                >
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        )}
        
        {/* Selected Products */}
        {selectedProducts.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-3">Selected Products:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProducts.map(productId => {
                const product = PRODUCTS.find(p => p.id === productId);
                return product ? (
                  <div 
                    key={product.id}
                    className="flex items-center bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    <span>{product.name}</span>
                    <button 
                      onClick={() => handleRemoveProduct(product.id)}
                      className="ml-2 text-gray-500 hover:text-error-500"
                    >
                      &times;
                    </button>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
      
      {/* Comparison Table */}
      {comparisonProducts.length > 0 ? (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Product Comparison</h2>
          <ComparisonTable products={comparisonProducts} features={features} />
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-2">Select products to compare</p>
          <p className="text-sm text-gray-500">
            Choose a category and add at least two products to see a comparison.
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;