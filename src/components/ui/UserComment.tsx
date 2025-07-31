import React from 'react';
import { UserComment } from '../../types';
import RatingStars from './RatingStars';

interface UserCommentProps {
  comment: UserComment;
}

const UserCommentComponent: React.FC<UserCommentProps> = ({ comment }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex items-start">
        <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold flex-shrink-0">
          {comment.userName.charAt(0).toUpperCase()}
        </div>
        <div className="ml-3 flex-grow">
          <div className="flex flex-wrap justify-between items-center mb-2">
            <p className="font-medium">{comment.userName}</p>
            <p className="text-xs text-gray-500">
              {new Date(comment.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <RatingStars rating={comment.rating} size={4} />
          <div className="mt-3">
            <h4 className="font-medium mb-1">{comment.title}</h4>
            <p className="text-gray-700">{comment.content}</p>
          </div>
          {comment.verified && (
            <div className="mt-3 text-xs text-success-600 flex items-center">
              <span className="w-2 h-2 bg-success-600 rounded-full mr-1"></span>
              Verified Purchase
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCommentComponent;