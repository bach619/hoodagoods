import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Share2, Bookmark, Award, ExternalLink, Clock, User, TrendingUp, CheckCircle } from 'lucide-react';
import AffiliateDisclosure from '../components/ui/AffiliateDisclosure';
import ProsCons from '../components/ui/ProsCons';
import UserCommentComponent from '../components/ui/UserComment';
import AdSidebar from '../components/ads/AdSidebar';
import { PRODUCTS } from '../data/products';
import { COMMENTS } from '../data/comments';

// Helper function to format price with thousands separator
const formatPrice = (price: number): string => {
  return price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const ReviewPage: React.FC = () => {
  const { reviewSlug } = useParams<{ reviewSlug: string }>();
  
  // Find product
  const product = PRODUCTS.find((p) => p.slug === reviewSlug);
  
  // Get comments
  const comments = COMMENTS[reviewSlug as string] || [];
  
  // Related products (same category)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  ).slice(0, 6);

  if (!product) {
    return (
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-4">Review Not Found</h1>
        <p>Sorry, the review you're looking for doesn't exist.</p>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      {/* Article Header */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 pt-12 pb-8">
        <div className="container-custom">
          <div className="max-w-full mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link to="/" className="text-primary-600 hover:text-primary-700">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link to={`/category/${product.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} className="text-primary-600 hover:text-primary-700">
                {product.category}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{product.name} Review</span>
            </nav>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name} Review: Complete Analysis & Buying Guide
            </h1>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>By Hoodagoods Editorial Team</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Updated {formatDate(new Date())}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span>{product.reviewCount.toLocaleString()} user reviews analyzed</span>
              </div>
            </div>

            {/* Rating Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="text-center mr-6">
                    <div className="text-4xl font-bold text-primary-600 mb-1">{product.rating.toFixed(1)}</div>
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) 
                              ? 'text-accent-500 fill-accent-500' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">Overall Rating</div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-3">{product.description}</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">${formatPrice(product.price)}</span>
                      <span className="ml-2 text-sm text-gray-500">Best Price Found</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <a 
                    href={product.affiliateUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="affiliate-link"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy Now
                  </a>
                  <div className="flex gap-2">
                    <button className="btn-outline px-3 py-2">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="btn-outline px-3 py-2">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            {/* Left Sidebar - Related Reviews & Quick Buy */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="sticky top-8 space-y-6 max-h-[calc(100vh-4rem)] overflow-y-auto pr-2">
                {/* Quick Buy */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="text-center mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-40 object-contain rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2 text-sm">{product.name}</h3>
                    <div className="flex items-center justify-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating) 
                                ? 'text-accent-500 fill-accent-500' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-600">{product.rating.toFixed(1)}</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 mb-4">${formatPrice(product.price)}</div>
                  </div>
                  
                  <a 
                    href={product.affiliateUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300 focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 mb-4 text-sm"
                  >
                    <ShoppingCart className="inline-block mr-2 h-4 w-4" />
                    Buy Now
                  </a>
                  
                  <div className="text-xs text-gray-500 text-center">
                    <AffiliateDisclosure />
                  </div>
                </div>
                
                {/* Related Reviews */}
                {relatedProducts.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary-600" />
                      Related Reviews
                    </h3>
                    <div className="space-y-4">
                      {relatedProducts.map((relatedProduct) => (
                        <Link 
                          key={relatedProduct.id}
                          to={`/review/${relatedProduct.slug}`}
                          className="flex items-start p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all duration-300 group"
                        >
                          <img 
                            src={relatedProduct.image} 
                            alt={relatedProduct.name} 
                            loading="lazy"
                            className="w-12 h-12 object-contain rounded flex-shrink-0"
                          />
                          <div className="ml-3 min-w-0 flex-1">
                            <h4 className="font-medium text-gray-900 text-xs leading-tight mb-1 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {relatedProduct.name}
                            </h4>
                            <div className="flex items-center mb-1">
                              <Star className="h-3 w-3 text-accent-500 fill-accent-500" />
                              <span className="ml-1 text-xs text-gray-600">
                                {relatedProduct.rating.toFixed(1)}
                              </span>
                            </div>
                            <div className="text-xs font-medium text-gray-900">
                              ${formatPrice(relatedProduct.price)}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">In This Review</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#introduction" className="text-primary-600 hover:text-primary-700">Introduction & First Impressions</a></li>
                  <li><a href="#key-features" className="text-primary-600 hover:text-primary-700">Key Features Analysis</a></li>
                  <li><a href="#performance" className="text-primary-600 hover:text-primary-700">Performance Testing</a></li>
                  <li><a href="#pros-cons" className="text-primary-600 hover:text-primary-700">Pros & Cons</a></li>
                  <li><a href="#value" className="text-primary-600 hover:text-primary-700">Value for Money</a></li>
                  <li><a href="#who-should-buy" className="text-primary-600 hover:text-primary-700">Who Should Buy This</a></li>
                  <li><a href="#specifications" className="text-primary-600 hover:text-primary-700">Technical Specifications</a></li>
                  <li><a href="#conclusion" className="text-primary-600 hover:text-primary-700">Final Verdict</a></li>
                </ul>
              </div>

              {/* Benefits Overview */}
              {product.benefits && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start p-4 bg-success-50 rounded-lg border border-success-200">
                        <CheckCircle className="h-5 w-5 text-success-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-success-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Detailed Review Sections */}
              {product.detailedReview && (
                <>
                  <section id="introduction" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Introduction & First Impressions</h2>
                    <div className="prose max-w-none text-justify">
                      <p className="text-lg leading-relaxed text-gray-700">
                        {product.detailedReview.introduction}
                      </p>
                    </div>
                  </section>

                  <section id="key-features" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Key Features Analysis</h2>
                    <div className="prose max-w-none text-justify">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        {product.detailedReview.keyFeatures}
                      </p>
                    </div>
                  </section>

                  <section id="performance" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Performance Testing</h2>
                    <div className="prose max-w-none text-justify">
                      <p className="text-lg leading-relaxed text-gray-700">
                        {product.detailedReview.performance}
                      </p>
                    </div>
                  </section>
                </>
              )}
              
              {/* Pros & Cons */}
              <section id="pros-cons" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
                <ProsCons pros={product.pros} cons={product.cons} />
              </section>

              {/* Value Analysis */}
              {product.detailedReview && (
                <>
                  <section id="value" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Value for Money Analysis</h2>
                    <div className="prose max-w-none text-justify">
                      <p className="text-lg leading-relaxed text-gray-700">
                        {product.detailedReview.valueForMoney}
                      </p>
                    </div>
                  </section>

                  <section id="who-should-buy" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Who Should Buy This Product</h2>
                    <div className="prose max-w-none text-justify">
                      <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                        {product.detailedReview.whoShouldBuy}
                      </div>
                    </div>
                  </section>
                </>
              )}
              
              {/* Specifications */}
              <section id="specifications" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-50 w-1/3">
                            {key}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Final Verdict */}
              {product.detailedReview && (
                <section id="conclusion" className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Final Verdict</h2>
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                    <div className="prose max-w-none text-justify">
                      <p className="text-lg leading-relaxed text-gray-700 mb-0">
                        {product.detailedReview.conclusion}
                      </p>
                    </div>
                  </div>
                </section>
              )}
              
              {/* User Reviews */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">User Reviews & Experiences</h2>
                
                {comments.length > 0 ? (
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <UserCommentComponent key={comment.id} comment={comment} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-4">No user reviews yet. Be the first to review this product!</p>
                    <button className="btn-primary">Write a Review</button>
                  </div>
                )}
              </section>

              {/* Affiliate Disclosure */}
              <div className="bg-gray-50 rounded-lg p-6">
                <AffiliateDisclosure />
              </div>
            </div>

            {/* Right Sidebar - AdSense Ads */}
            <div className="lg:col-span-2 order-3">
              <AdSidebar className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;