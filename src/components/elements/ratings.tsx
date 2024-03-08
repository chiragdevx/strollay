import Image from "next/image";
import React from "react";

const Ratings = ({ rating, numReviews, className }) => {
  // Assuming rating is out of 5 stars
  const maxStars = 5;

  // Calculate the percentage of filled stars
  const filledPercentage = (rating / maxStars) * 100;

  // Round the rating to the nearest 0.5
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
            className=" h-6 w-6 gap-2 "
          />
        ))}
      </div>

      {/* Half-filled star for odd ratings */}
      {roundedRating % 1 !== 0 && (
        <div className="flex">
          <div
            className="bg-yellow h-5 w-5 "
            style={{ width: filledPercentage ? `${filledPercentage}%` : "50%" }}
          ></div>
        </div>
      )}

      {/* Empty stars */}
      <div className="flex">
        {[...Array(Math.floor(maxStars - roundedRating))].map((_, index) => (
          <div key={index} className=" h-5 w-5 "></div>
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
