import { businessInvestingCategory } from './business-investing';
import { eBusinessEMarketingCategory } from './ebusiness-emarketing';
import { greenProductsCategory } from './green-products';
import { healthFitnessCategory } from './health-fitness';
import { mobileCategory } from './mobile';
import { parentingFamiliesCategory } from './parenting-families';
import { spiritualityAlternativeCategory } from './spirituality-alternative';
import { sportsCategory } from './sports';
import { PRODUCTS } from '../products';
import { Category } from '../../types';

// Function to calculate product count for a category
const calculateProductCount = (categoryName: string): number => {
  return PRODUCTS.filter(product => 
    product.category.toLowerCase() === categoryName.toLowerCase()
  ).length;
};

// Function to update category with dynamic product count
const updateCategoryWithProductCount = (category: Category): Category => {
  return {
    ...category,
    productCount: calculateProductCount(category.name)
  };
};

// Export categories with dynamic product counts
export const CATEGORIES = [
  updateCategoryWithProductCount(businessInvestingCategory),
  updateCategoryWithProductCount(eBusinessEMarketingCategory),
  updateCategoryWithProductCount(greenProductsCategory),
  updateCategoryWithProductCount(healthFitnessCategory),
  updateCategoryWithProductCount(mobileCategory),
  updateCategoryWithProductCount(parentingFamiliesCategory),
  updateCategoryWithProductCount(spiritualityAlternativeCategory),
  updateCategoryWithProductCount(sportsCategory)
];

// Export individual categories with updated counts for backward compatibility
export const BUSINESS_INVESTING = updateCategoryWithProductCount(businessInvestingCategory);
export const EBUSINESS_EMARKETING = updateCategoryWithProductCount(eBusinessEMarketingCategory);
export const GREEN_PRODUCTS = updateCategoryWithProductCount(greenProductsCategory);
export const HEALTH_FITNESS = updateCategoryWithProductCount(healthFitnessCategory);
export const MOBILE = updateCategoryWithProductCount(mobileCategory);
export const PARENTING_FAMILIES = updateCategoryWithProductCount(parentingFamiliesCategory);
export const SPIRITUALITY_ALTERNATIVE = updateCategoryWithProductCount(spiritualityAlternativeCategory);
export const SPORTS = updateCategoryWithProductCount(sportsCategory);