import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/ui/Hero';
import FeaturedProductSection from '../components/ui/FeaturedProductSection';
import ProductCard from '../components/ui/ProductCard';
import GoogleAdSense from '../components/ads/GoogleAdSense';
import { CATEGORIES } from '../data/categories';
import { FEATURED_PRODUCTS, TRENDING_PRODUCTS, LATEST_PRODUCTS } from '../data/products';
import SEO from '../components/utils/SEO';

const HomePage: React.FC = () => {
  return (
    <div>
      <SEO
        title="HoodaGoods - Honest Product Reviews & Comparisons | Find Best Products"
        description="Unbiased product reviews and comparisons. Discover top-rated products in business, health, technology, and more. Make informed purchasing decisions with HoodaGoods."
        keywords="product reviews, product comparisons, best products, unbiased reviews"
        ogTitle="HoodaGoods - Honest Product Reviews & Comparisons"
        ogDescription="Unbiased product reviews and comparisons. Discover top-rated products in business, health, technology, and more."
      />
      {/* Hero Section */}
      <Hero 
        title="Honest Reviews for Informed Decisions" 
        subtitle="We test and review the latest products so you don't have to guess what to buy."
      />
      
      {/* Featured Products */}
      <FeaturedProductSection 
        title="Editor's Choice" 
        subtitle="Our top-rated products across all categories"
        products={FEATURED_PRODUCTS}
      />
      
      {/* Google AdSense Banner - 728x90 Leaderboard */}
      <div className="py-5 bg-white">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="w-full max-w-[728px] min-h-[90px] flex items-center justify-center">
              <div className="text-xs text-gray-500 mb-2 text-center w-full">
                <div className="mb-2">Advertisement</div>
                <GoogleAdSense
                  client="ca-pub-6435811821902528" // Replace with your AdSense client ID
                  slot="7253518459" // Replace with your ad slot ID for 728x90 banner
                  format="auto"
                  responsive={true}
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '1080px',
                    height: '70px',
                    margin: '0 auto'
                  }}
                  className="border border-gray-200 rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.slug}`}
                className="group relative h-64 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-3">{category.productCount} products</p>
                  <span className="text-white text-sm flex items-center">
                    Browse Category
                    <ArrowRight className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Products */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            <Link to="/trending" className="text-primary-600 hover:text-primary-700 flex items-center">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRENDING_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Reviews</h2>
            <Link to="/latest" className="text-primary-600 hover:text-primary-700 flex items-center">
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LATEST_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-100 mb-8">
              Subscribe to our newsletter for the latest reviews, buying guides, and exclusive deals.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-primary-300 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
