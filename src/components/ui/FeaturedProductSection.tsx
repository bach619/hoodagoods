import React from 'react';
import { Award } from 'lucide-react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface FeaturedProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

const FeaturedProductSection: React.FC<FeaturedProductSectionProps> = ({
  title,
  subtitle,
  products,
}) => {
  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex items-center mb-2">
          <Award className="h-6 w-6 text-accent-500 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductSection;