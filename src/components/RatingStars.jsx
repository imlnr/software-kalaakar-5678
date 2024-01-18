import React from 'react';
// import './RatingStars.css'; // Import your custom styles

const RatingStars = ({ rating, totalStars = 5 }) => {
  const filledStars = Math.min(Math.max(0, rating), totalStars);

  const getStarIcons = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      const isFilled = i <= filledStars;
      stars.push(
        <span key={i} className={`star ${isFilled ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return <div className="rating-stars">{getStarIcons()}</div>;
};

export default RatingStars;
