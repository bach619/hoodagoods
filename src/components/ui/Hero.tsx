import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1600'
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div 
      className="relative py-20 md:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in">
          {subtitle}
        </p>
        
        {/* Search Form */}
        <div className="max-w-xl mx-auto mb-8 animate-fade-in">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, reviews, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-r-lg transition-colors"
            >
              Search
            </button>
          </form>
        </div>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
          {CATEGORIES.slice(0, 6).map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;