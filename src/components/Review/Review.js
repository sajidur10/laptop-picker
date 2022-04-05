import React from 'react';
import './Review.css'

const Review = ({ cusReview }) => {

    const { ratings, review, time, name, picture } = cusReview;
    return (
        <div className='review-container'>
            <div className='review  flex items-center flex-col border p-5 drop-shadow-lg'>
                <img className='w-20' src={picture} alt=""></img>
                <div className='review-info'>
                    <p className='font-bold'>{name}</p>
                    <p><small>{time}</small></p>
                    <p className='font-bold'><small>Ratings: {ratings} out of 5</small></p>
                    <p>{review}</p>


                </div>
            </div>
        </div>
    );
};

export default Review;