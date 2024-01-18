import React from 'react';
// import './RatingStars.css'; // Import your custom styles
import './css/RatingStars.css';

const RatingStars = ({ rating, totalStars = 5 }) => {
  const filledStars = Math.min(Math.max(0, rating), totalStars);
  // console.log(rating);
  const getStarIcons = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      const isFilled = i <= rating;
      stars.push(
        <span key={i} className={`star ${i<=rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return <div className="rating-stars">{getStarIcons()}</div>;
};

export default RatingStars;
