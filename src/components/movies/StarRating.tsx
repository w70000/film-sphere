import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
}

export function StarRating({
  rating,
  totalStars = 5,
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = (rating - fullStars) * 100;

  return (
    <div className={cn('flex items-center', className)}>
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        if (starNumber <= fullStars) {
          return (
            <Star
              key={index}
              className="h-5 w-5 fill-current text-yellow-400"
            />
          );
        }
        if (starNumber === fullStars + 1 && partialStarPercentage > 0) {
          return (
            <div key={index} className="relative">
              <Star className="h-5 w-5 text-yellow-400" />
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${partialStarPercentage}%` }}
              >
                <Star className="h-5 w-5 fill-current text-yellow-400" />
              </div>
            </div>
          );
        }
        return <Star key={index} className="h-5 w-5 text-gray-500" />;
      })}
    </div>
  );
}
