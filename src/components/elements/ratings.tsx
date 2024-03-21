import Image from "next/image";
import React from "react";

// Define the types for the props
interface RatingsProps {
  rating: number; // Assuming rating is a number
  numReviews: number; // Assuming numReviews is a number
  className?: string; // Optional prop, assuming className is a string
}

const Ratings: React.FC<RatingsProps> = ({ rating, numReviews, className }) => {
  const maxStars = 5;
  const filledPercentage = (rating / maxStars) * 100;
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="flex items-center">
      {/* Filled stars */}
      <div className="flex gap-1">
        {[...Array(Math.floor(roundedRating))].map((_, index) => (
          <Image
            src={"/icons/star.svg"}
            key={index}
            alt="⭐"
            width={24}
            height={24}
            className="h-6 w-6 gap-2"
          />
        ))}
      </div>

      {/* Half-filled star for odd ratings */}
      {roundedRating % 1 !== 0 && (
        <div className="flex">
          <div
            className="bg-yellow h-5 w-5"
            style={{ width: filledPercentage ? `${filledPercentage}%` : "50%" }}
          ></div>
        </div>
      )}

      {/* Empty stars */}
      <div className="flex">
        {[...Array(Math.floor(maxStars - roundedRating))].map((_, index) => (
          <div key={index} className="h-5 w-5"></div>
        ))}
      </div>

      {/* Number of reviews */}
      {numReviews && (
        <span className={`ml-2 text-[15px] ${className}`}>({numReviews})</span>
      )}
    </div>
  );
};

export default Ratings;
