import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { cn } from '../../lib/utils';
import { CATEGORIES } from '../../data/categories';

const MainNavigation: React.FC = () => {
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home Link */}
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'text-gray-700 hover:text-primary-600 bg-transparent hover:bg-gray-100',
                isActive('/') && 'text-primary-600 bg-gray-100'
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Categories Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary-600 bg-transparent hover:bg-gray-100">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <ul className="grid w-[600px] gap-3 p-6 md:w-[700px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3">
                {CATEGORIES.map((category) => (
                  <CategoryItem
                    key={category.slug}
                    title={category.name}
                    href={`/category/${category.slug}`}
                    image={category.image}
                    alt={`${category.name} category`}
                    productCount={category.productCount}
                  >
                    {category.description}
                  </CategoryItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Compare Link */}
        <NavigationMenuItem>
          <Link to="/compare">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'text-gray-700 hover:text-primary-600 bg-transparent hover:bg-gray-100',
                isActive('/compare') && 'text-primary-600 bg-gray-100'
              )}
            >
              Compare
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* About Link */}
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'text-gray-700 hover:text-primary-600 bg-transparent hover:bg-gray-100',
                isActive('/about') && 'text-primary-600 bg-gray-100'
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Methodology Link */}
        <NavigationMenuItem>
          <Link to="/review-methodology">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'text-gray-700 hover:text-primary-600 bg-transparent hover:bg-gray-100',
                isActive('/review-methodology') && 'text-primary-600 bg-gray-100'
              )}
            >
              Methodology
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Contact Link */}
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'text-gray-700 hover:text-primary-600 bg-transparent hover:bg-gray-100',
                isActive('/contact') && 'text-primary-600 bg-gray-100'
              )}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const CategoryItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { 
    title: string;
    image: string;
    alt: string;
    productCount: number;
  }
>(({ className, title, children, href, image, alt, productCount, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href || '#'}
          ref={ref}
          className={cn(
            'group block select-none rounded-lg border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary-300 focus:border-primary-300 focus:shadow-lg focus:outline-none',
            className
          )}
          {...props}
        >
          {/* Category Image */}
          <div className="relative h-24 w-full overflow-hidden bg-gray-100">
            <img 
              src={image} 
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
          </div>
          
          {/* Category Content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium leading-none text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                {title}
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 border border-gray-200 px-2 py-1 rounded-full">
                {productCount}
              </span>
            </div>
            <p className="line-clamp-2 text-xs leading-snug text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
CategoryItem.displayName = 'CategoryItem';

export default MainNavigation;
