import React from 'react';
import Simplelinechart from '../Simplelinechart/Simplelinechart';
import Stackedareachart from '../Stackedareachart/Stackedareachart';
import Stackedbarchart from '../Stackedbarchart/Stackedbarchart';
import dashboard from '../../Images/dashboard.png'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='grid grid-cols-2 gap-10 m-10'>
            <Simplelinechart></Simplelinechart>
            <Stackedbarchart></Stackedbarchart>
            <img src={dashboard} alt=''></img>
            <Stackedareachart></Stackedareachart>
        </div>
    );
};

export default Dashboard;