import React from 'react';
import laptop from '../../Images/laptop.png'
import Shortreview from '../Shortreview/Shortreview';
import './Home.css'

const Home = () => {
    return (

        <div>
            <div className='home-section'>
                <div className='home-info m-4'>
                    <h1 className='font-bold text-5xl mb-5'>Order laptop from the best shop near you.</h1>
                    <p className='text-xl mb-5'>Order laptop from your favourite shop, delivered straight to your front door. Browse shop near you and pick from their menus. Get a better idea of what's on offer before you order by checking out full-screen photos of laptop. Wherever you are in the world, there's a shop for you.</p>
                    <button className='font-bold text-xl rounded-full bg-cyan-600 py-2 px-6 text-white	hover:bg-sky-700'>Explore</button>

                </div>
                <div className='home-img'>
                    <img src={laptop} alt="" srcset="" />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-5xl my-10'>What Our Happy Customers Say
                </h1>
                <Shortreview></Shortreview>
            </div>
        </div>
    );
};

export default Home;