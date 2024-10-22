/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

interface CardProps {
  title: string;
  descriptions: string[];
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, descriptions, imageUrl }) => {
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const fallbackImage = "https://via.placeholder.com/300x200?text=Static+Image";

  const handleError = () => {
    console.log(
      `Image failed to load: ${imgSrc}. Switching to fallback image.`
    );
    setImgSrc(fallbackImage);
  };

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg my-4 flex">
      <img
        src={imgSrc}
        alt={title}
        className="h-72 w-50 object-cover rounded-md mr-4"
        onError={handleError}
      />
      <div className="flex-1">
        {" "}
        <h2 className="mt-4 text-xl font-bold">{title}</h2>
        {descriptions.map((desc, index) => (
          <p key={index} className="mt-2 text-gray-600">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
