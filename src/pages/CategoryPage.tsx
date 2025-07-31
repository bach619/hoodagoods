import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter as FilterIcon } from 'lucide-react';

import ProductCard from '../components/ui/ProductCard';
import CategoryFilter, {
  FilterState,
  DEFAULT_FILTERS
} from '../components/ui/CategoryFilter';

import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [filtersActive, setFiltersActive] = useState<boolean>(false);

  // Cari kategori berdasarkan slug dari URL
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  // Ambil produk sesuai kategori
  const categoryProducts = category
    ? PRODUCTS.filter(
        (product) =>
          product.category.toLowerCase() === category.name.toLowerCase()
      )
    : [];

  useEffect(() => {
    if (!category) return;

    // Jika filter tidak aktif, tampilkan semua produk dalam kategori
    if (!filtersActive) {
      setFilteredProducts(categoryProducts);
      return;
    }

    // Jika filter aktif, terapkan logika pemfilteran
    let result = [...categoryProducts];

    // Filter berdasarkan rentang harga
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Filter berdasarkan rating
    if (filters.ratings.length > 0) {
      result = result.filter((product) =>
        filters.ratings.some((rating) => product.rating >= rating)
      );
    }

    // Filter berdasarkan brand (pakai kata pertama dari nama produk)
    if (filters.brands.length > 0) {
      result = result.filter((product) =>
        filters.brands.includes(product.name.split(' ')[0])
      );
    }

    // Urutkan produk
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
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    setFilteredProducts(result);
  }, [category, categoryProducts, filters, filtersActive]);

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    setFiltersActive(true); // Aktifkan filter ketika user menerapkan filter
  };

  const handleResetFilters = (resetFilters: FilterState) => {
    setFilters(resetFilters);
    setFiltersActive(false); // Nonaktifkan filter ketika user mereset
  };

  if (!category) {
    return (
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p>Sorry, the category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header Kategori */}
      <div
        className="bg-cover bg-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${category.image})`
        }}
      >
        <div className="container-custom text-white">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg max-w-2xl">{category.description}</p>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="container-custom py-12">
        <div className="flex gap-8">
          {/* Sidebar Filter */}
          <div className="w-[336px] flex-shrink-0 sticky top-24 self-start">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                <FilterIcon className="h-5 w-5 mr-2 text-primary-600" />
                Filter
              </h3>
              <CategoryFilter
                onApplyFilters={handleApplyFilters}
                onResetFilters={handleResetFilters}
                activeCategory={categorySlug}
              />
            </div>
          </div>

          {/* Area Produk */}
          <div className="flex-grow">
            {/* Ringkasan */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.name} Products
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {categoryProducts.length}{' '}
                  products
                  {filtersActive && (
                    <span className="ml-2 text-primary-600 font-medium">
                      (filtered)
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Grid Produk */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">
                  {filtersActive 
                    ? "Try adjusting your filters to find what you're looking for."
                    : "No products available in this category."
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;