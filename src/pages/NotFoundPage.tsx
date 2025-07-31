import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom py-20">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="btn-primary flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;