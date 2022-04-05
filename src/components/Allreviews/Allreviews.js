import React from 'react';
import useReviews from '../../customHooks/useProducts';
import Review from '../Review/Review';

const Allreviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className="reviews-container grid grid-cols-3 gap-10 m-10 ">
                {
                    reviews.map(cusReview => <Review
                        key={cusReview.id}
                        cusReview={cusReview}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Allreviews;