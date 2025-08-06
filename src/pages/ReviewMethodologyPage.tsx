import React from 'react';
import { Search, TestTube2, BadgeDollarSign, MessageCircle, RefreshCw, Scale, Star } from 'lucide-react';

const ReviewMethodologyPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-primary-900 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Review Methodology</h1>
          <p className="text-xl max-w-2xl text-primary-100">
            Discover how we rigorously test and evaluate products to bring you honest, unbiased reviews you can trust.
          </p>
        </div>
      </div>
      
      {/* Review Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our 5-Step Review Process</h2>
            <p className="text-lg text-gray-700 mb-12">
              Every product we review goes through our comprehensive evaluation process to ensure we provide accurate, in-depth assessments.
            </p>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="bg-primary-100 h-20 w-20 rounded-full flex items-center justify-center">
                    <Search className="h-10 w-10 text-primary-600" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">1. Market Research & Selection</h3>
                  <p className="text-gray-600">
                    We identify top products in each category based on popularity, consumer interest, and market trends. 
                    Our selection focuses on items with significant consumer impact and those addressing common pain points.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="bg-primary-100 h-20 w-20 rounded-full flex items-center justify-center">
                    <TestTube2 className="h-10 w-10 text-primary-600" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">2. Hands-On Testing</h3>
                  <p className="text-gray-600">
                    Our experts spend 2-4 weeks using each product in real-world scenarios. We test all features, 
                    assess build quality, and evaluate performance under various conditions.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="bg-primary-100 h-20 w-20 rounded-full flex items-center justify-center">
                    <BadgeDollarSign className="h-10 w-10 text-primary-600" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">3. Value Assessment</h3>
                  <p className="text-gray-600">
                    We analyze price-to-performance ratio, compare against competitors, and consider long-term value. 
                    Products are evaluated based on what they deliver for their price point.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="bg-primary-100 h-20 w-20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-primary-600" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">4. User Feedback Analysis</h3>
                  <p className="text-gray-600">
                    We aggregate and analyze thousands of customer reviews from verified purchasers. 
                    This helps us identify common issues, satisfaction patterns, and long-term reliability.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="bg-primary-100 h-20 w-20 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-10 w-10 text-primary-600" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">5. Ongoing Evaluation</h3>
                  <p className="text-gray-600">
                    We regularly revisit our reviews to account for product updates, new models, 
                    and changing market conditions. Our ratings are updated quarterly to ensure accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rating Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Rating System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Criteria 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-300" />
                <h3 className="text-xl font-semibold ml-3">Effectiveness</h3>
              </div>
              <p className="text-gray-600">
                How well the product delivers on its core promises and intended purpose.
              </p>
            </div>
            
            {/* Criteria 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-300" />
                <h3 className="text-xl font-semibold ml-3">Value for Money</h3>
              </div>
              <p className="text-gray-600">
                Price relative to performance, features, and quality.
              </p>
            </div>
            
            {/* Criteria 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-300" />
                <h3 className="text-xl font-semibold ml-3">Ease of Use</h3>
              </div>
              <p className="text-gray-600">
                User-friendliness, learning curve, and accessibility.
              </p>
            </div>
            
            {/* Criteria 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-300" />
                <h3 className="text-xl font-semibold ml-3">Build Quality</h3>
              </div>
              <p className="text-gray-600">
                Materials, construction, and long-term durability.
              </p>
            </div>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-6">
              <Scale className="h-10 w-10 text-primary-600" />
              <h3 className="text-2xl font-bold ml-4">Our Rating Scale</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-300" />
                  ))}
                </div>
                <span className="ml-4 font-medium">Exceptional: 4.8 - 5.0</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-300" />
                  ))}
                  <Star className="h-6 w-6 text-gray-300" />
                </div>
                <span className="ml-4 font-medium">Excellent: 4.3 - 4.7</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-300" />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-gray-300" />
                  ))}
                </div>
                <span className="ml-4 font-medium">Good: 3.5 - 4.2</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-300" />
                  ))}
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-gray-300" />
                  ))}
                </div>
                <span className="ml-4 font-medium">Fair: 2.5 - 3.4</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-300" />
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-gray-300" />
                  ))}
                </div>
                <span className="ml-4 font-medium">Poor: Below 2.5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ethics & Transparency */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment to Integrity</h2>
            
            <div className="space-y-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Independence Guarantee</h3>
                <p className="text-gray-700">
                  We never accept payment for positive reviews. Our ratings are determined solely by our testing results and analysis.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Transparency in Partnerships</h3>
                <p className="text-gray-700">
                  If we participate in affiliate programs, we clearly disclose this on every page. These partnerships never influence our reviews or recommendations.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Reader-First Approach</h3>
                <p className="text-gray-700">
                  Our primary commitment is to our readers. We prioritize your needs and interests above all else.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Correction Policy</h3>
                <p className="text-gray-700">
                  We promptly correct errors and maintain detailed changelogs for all substantive updates to our reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewMethodologyPage;
