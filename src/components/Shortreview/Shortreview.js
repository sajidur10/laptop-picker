import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../customHooks/useProducts';
import Review from '../Review/Review';

const Shortreview = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className="reviews-container grid grid-cols-3 gap-10 m-10 ">
                {
                    reviews.slice(0, 3).map(cusReview => <Review
                        key={cusReview.id}
                        cusReview={cusReview}
                    ></Review>)
                }
            </div>
            <div>
                <Link to="/allreviews"><button className='font-bold text-xl rounded-full bg-cyan-600 text-white	 py-2 px-6 mb-10 hover:bg-sky-700'>See All Reviews</button></Link>
            </div>
        </div>
    );
};

export default Shortreview;