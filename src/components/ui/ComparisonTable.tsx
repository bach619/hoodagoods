import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import RatingStars from './RatingStars';

interface ComparisonTableProps {
  products: Product[];
  features: string[];
}

// Helper function to format price with thousands separator
const formatPrice = (price: number): string => {
  return price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({ products, features }) => {
  if (products.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
              Product
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            {features.map((feature) => (
              <th
                key={feature}
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {feature}
              </th>
            ))}
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="ml-4">
                    <Link
                      to={`/review/${product.slug}`}
                      className="text-sm font-medium text-gray-900 hover:text-primary-600"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <RatingStars rating={product.rating} size={4} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                ${formatPrice(product.price)}
              </td>
              {features.map((feature) => (
                <td key={`${product.id}-${feature}`} className="px-6 py-4 whitespace-nowrap text-center">
                  {renderFeatureValue(product.features[feature])}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <Link
                    to={`/review/${product.slug}`}
                    className="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Review
                  </Link>
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-500 hover:text-accent-700 font-medium"
                  >
                    Buy
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function renderFeatureValue(value: any) {
  if (value === true) {
    return <Check className="h-5 w-5 text-success-500 mx-auto" />;
  } else if (value === false) {
    return <X className="h-5 w-5 text-error-500 mx-auto" />;
  } else if (value === null || value === undefined) {
    return <Minus className="h-5 w-5 text-gray-300 mx-auto" />;
  } else {
    return <span className="text-sm">{value}</span>;
  }
}

export default ComparisonTable;