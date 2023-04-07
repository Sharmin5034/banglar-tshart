import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const tsharts = useLoaderData()

    return (
        <div>
             Tshart :{tsharts.length}     
        </div>
    );
};

export default Home;